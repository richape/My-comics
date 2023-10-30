// server-side routing
import { Router } from 'express'
import * as db from '../db/comicDb.ts'
import multer from 'multer'
import path from 'path'
import { addComic } from '../db/comicDb.ts'

const router = Router()

// GET route to retrieve all comic
router.get('/', async (req, res) => {
  try {
    const comics = await db.getAllComics()
    res.json({ comics })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'error' })
  }
})

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../public/images'))
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname)
  },
})

const upload = multer({ storage })

router.post('/add-comic', upload.single('coverArt'), async (req, res) => {
  try {
    const comicData = {
      id: req.body.id,
      title: req.body.title,
      name: req.body.name,
      issue: req.body.issue,
      datePublished: req.body.datePublished,
      publisher: req.body.publisher,
      credits: req.body.credits,
      coverArtist: req.body.coverArtist,
      coverArt: req.file ? req.file.path : '',
    }

    // Save coverArt path to database
    const result = await addComic(comicData)
    console.log(result)

    res.json({ message: 'Comic added successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error adding comic' })
  }
})

export default router

// router.get('/:comicId', async (req, res) => {
//   try {
//     const comicId = Number(req.params.comicId)
//     if (isNaN(comicId)) {
//       res.sendStatus(400)
//       return
//     }
//     const comic = await db.getComicById(comicId)
//     res.json({ comic })
//   } catch (error) {
//     res.sendStatus(500)
//     console.error(error)
//   }
// })
