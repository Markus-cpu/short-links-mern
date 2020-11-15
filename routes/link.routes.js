const Router = require('express')
const Link = require('../models/Link')
const auth = require('../middleware/auth.middleware')
const config = require('config')
const shortid = require('shortid')
const router = Router()

// Запрос на сгинерировать ссылку и отправить ее на сервер
router.post('/generate', async (req, res) => {
  try {
    const baseUrl = config.get('baseUrl')
    const { from } = req.body

    const code = shortid.generate()

    const exiting = await Link.findOne({ from })

    if (exiting) {
      return res.status(200).json({ link: exiting })
    }
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

// Запрос на получение всех ссылок
router.get('/', auth, async (req, res) => {
  try {
    const links = await Link.find({ owner: req.user.userId })
    res.json(links)
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

// Запрос на получение ссылки по идинтификатору
router.get('/:id', async (req, res) => {
  try {
    const link = await Link.findById(req.params.id)
    res.json(link)
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

module.exports = router
