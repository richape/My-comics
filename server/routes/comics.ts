// server-side routing
import { Router } from 'express'
import * as db from '../db/comicDb.ts'

const router = Router()

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
    cb(null, '../../public/images')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname)
  },
})

const upload = multer({ storage })

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
