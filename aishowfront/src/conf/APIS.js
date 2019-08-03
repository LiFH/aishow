const formatApi = (template, options) => {
  return template.replace(
    /\$\{(.*?)\}/g,
    (match, key) => (options[key.trim()] ? options[key.trim()] : '')
  )
}

const APIS = {
  sexRecogniiton : 'http://127.0.0.1:8080/sexRecognition',
  faceRecognition : 'http://127.0.0.1:8080/faceRecognition',
  superResolution : 'http://127.0.0.1:8080/superResolution',
  sceneRecognition : 'http://127.0.0.1:8080/sceneRecognition'
}

export { APIS, formatApi }
