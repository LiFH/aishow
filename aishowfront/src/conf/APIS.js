const formatApi = (template, options) => {
  return template.replace(
    /\$\{(.*?)\}/g,
    (match, key) => (options[key.trim()] ? options[key.trim()] : '')
  )
}

const host = 'http://lifh.xin:8080'
// const host = 'http://127.0.0.1:8080'
const APIS = {
  sexRecogniiton : `${host}/sexRecognition`,
  faceRecognition : `${host}/faceRecognition`,
  superResolution : `${host}/superResolution`,
  sceneRecognition : `${host}/sceneRecognition`
}

export { APIS, formatApi }
