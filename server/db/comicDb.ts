import connection from './connection.ts'
import { Comic, ComicData } from '../../models/comics.ts'

const db = connection

//Get all comics
export async function getAllComics(): Promise<Comic[]> {
  return db('comics').select()
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
}
