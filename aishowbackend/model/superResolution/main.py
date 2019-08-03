#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time : 2019/8/2 21:38
# @Author : LiFH
# @Site : 
# @File : main.py
# @Software: PyCharm Community Edition
from __future__ import print_function
import argparse
import torch
import torch.backends.cudnn as cudnn
from PIL import Image
from torchvision.transforms import ToTensor

import numpy as np

def SR(input):
    print("123")
    # ===========================================================
    # input image setting
    # ===========================================================
    GPU_IN_USE = torch.cuda.is_available()
    img = Image.open(input).convert('YCbCr')
    print(img.split())
    y, cb, cr = img.split()

    # ===========================================================
    # model import & setting
    # ===========================================================
    device = torch.device('cuda' if GPU_IN_USE else 'cpu')
    model = 'model/superResolution/SRGAN_Generator_model_path.pth'
    model = torch.load(model, map_location=lambda storage, loc: storage)
    # model = model.to(device)
    data = (ToTensor()(y)).view(1, -1, y.size[1], y.size[0])

    data = data.to(device)
    print(data.shape)
    if GPU_IN_USE:
        cudnn.benchmark = True

    # ===========================================================
    # output and save image
    # ===========================================================
    out = model(data)
    out = out.cpu()
    print(out.shape)
    out_img_y = out.data[0].numpy()
    print(out_img_y)
    out_img_y *= 255.0
    print(out_img_y)
    out_img_y = out_img_y.clip(0, 255)
    print(out_img_y[0])
    out_img_y = Image.fromarray(np.uint8(out_img_y[0]), mode='L')

    out_img_cb = cb.resize(out_img_y.size, Image.BICUBIC)
    out_img_cr = cr.resize(out_img_y.size, Image.BICUBIC)
    out_img = Image.merge('YCbCr', [out_img_y, out_img_cb, out_img_cr]).convert('RGB')

    out_img.save(input)
    print('output image saved to ', input)
    return  input