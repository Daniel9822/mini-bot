const router = require('express').Router()
const fs = require('fs')

const path = __dirname
const removeExtension = (file) => {
  return file.split('.').shift()
}

fs.readdirSync(path).filter(filename => {
  const name = removeExtension(filename)
  
  if(name !== 'index') {
    router.use(`/${name}`, require(`./${filename}`))
  }
})

module.exports = router