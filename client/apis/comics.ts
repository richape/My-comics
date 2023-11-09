import request from 'superagent'
import { Comic, ComicData } from '../../models/comics.ts'

const rootUrl = '/api/v1'

export async function getComics(): Promise<Comic[]> {
  const response = await request.get(`${rootUrl}/comics`)
  return response.body.comics as Comic[]
}

export async function addComic(comic: ComicData): Promise<unknown> {
  return request.post(`${rootUrl}/add-comics`).send(comic)
}

export async function deleteComic(comic: Comic): Promise<unknown> {
  return request.delete(`${rootUrl}/comics/${comic.id}`)
}
