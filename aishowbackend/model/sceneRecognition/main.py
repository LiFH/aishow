#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time : 2019/8/1 20:57
# @Author : LiFH
# @Site : 
# @File : main.py
# @Software: PyCharm Community Edition

import torch
from torch.autograd import Variable as V
import torchvision.models as models
from torchvision import transforms as trn
from torch.nn import functional as F
import os
from PIL import Image

def run_placesCNN(img_name):
    print("1")
    # th architecture to use
    arch = 'resnet18'

    # load the pre-trained weights
    model_file = 'model/sceneRecognition/%s_places365.pth.tar' % arch

    model = models.__dict__[arch](num_classes=365)
    checkpoint = torch.load(model_file, map_location=lambda storage, loc: storage)
    state_dict = {str.replace(k,'module.',''): v for k,v in checkpoint['state_dict'].items()}
    model.load_state_dict(state_dict)
    model.eval()


    # load the image transformer
    centre_crop = trn.Compose([
            trn.Resize((256,256)),
            trn.CenterCrop(224),
            trn.ToTensor(),
            trn.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
    ])

    # load the class label
    file_name = 'model/sceneRecognition/categories_places365_ch.txt'
    # if not os.access(file_name, os.W_OK):
    #     synset_url = 'https://raw.githubusercontent.com/csailvision/places365/master/categories_places365.txt'
    #     os.system('wget ' + synset_url)
    classes = list()
    with open(file_name,'r', encoding='UTF-8') as class_file:
        print(class_file)
        for line in class_file:
            #classes.append(line.strip().split(' ')[0][3:])
            classes.append(line.strip())
    classes = tuple(classes)
    print(classes)

    # load the test image

    img = Image.open(img_name)
    input_img = V(centre_crop(img).unsqueeze(0))

    # forward pass
    logit = model.forward(input_img)
    h_x = F.softmax(logit, 1).data.squeeze()
    probs, idx = h_x.sort(0, True)

    result ={}
    result['model'] = arch
    result["prediction"] = []
    # output the prediction
    prediction = []
    for i in range(0, 5):
         tmp ={}
         tmp["classes"] = classes[idx[i]]
         tmp["probs"] = '{:.3f}'.format(probs[i])
         prediction.append(tmp)

    result['prediction'] = prediction
    return result
