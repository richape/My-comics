// server-side routing
import { Router } from 'express'
import * as db from '../db/comicDb.ts'
import upload from '../upload.js'
import { addComic } from '../db/comicDb.ts'
import { ComicData } from '../../models/comics.ts'

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

router.post('/add-comics', upload.single('coverArt'), async (req, res) => {
  try {
    console.log(req.file)

    const comicData: ComicData = {
      title: req.body.title,
      name: req.body.name,
      issue: req.body.issue,
      datePublished: req.body.datePublished,
      publisher: req.body.publisher,
      credits: req.body.credits,
      coverArtist: req.body.coverArtist,
      coverArt: req.file?.filename as string,
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
