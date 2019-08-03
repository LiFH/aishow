const formatApi = (template, options) => {
  return template.replace(
    /\$\{(.*?)\}/g,
    (match, key) => (options[key.trim()] ? options[key.trim()] : '')
  )
}

const APIS = {
  sexRecogniiton : 'http://lifh.xin:8080/sexRecognition',
  faceRecognition : 'http://lifh.xin:8080/faceRecognition',
  superResolution : 'http://lifh.xin:8080/superResolution',
  sceneRecognition : 'http://lifh.xin:8080/sceneRecognition'
}

export { APIS, formatApi }
