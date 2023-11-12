import connection from './connection.ts'
import { Comic, ComicData } from '../../models/comics.ts'

const db = connection

//Get all comics
export async function getAllComics(): Promise<Comic[]> {
  try {
    return db('comics').select()
  } catch (error) {
    console.error('Error while fetching all comics:', error)
  }
  throw Error
}

// export async function getComicById(id: number): Promise<Comic[]> {
//   return db('comics').where({ id }).select()
// }

// Select comics by type
// export async function getComicByType(type: string): Promise<Comic[]> {
//   return db('comics').where({ type }).select()
// }

// Add new comic

export async function addComic(comic: ComicData): Promise<Comic[]> {
  try {
    return connection('comics')
      .insert({ ...comic })
      .returning([
        'id',
        'title',
        'name',
        'issue',
        'datePublished',
        'publisher',
        'credits',
        'coverArt',
        'coverArtist',
      ])
  } catch (Error) {
    console.error('Error while adding comic:', Error)
  }
  throw Error
}
