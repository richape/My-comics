import request from 'superagent'
import { Comic, ComicData } from '../../models/comics.ts'

const rootUrl = '/api/v1/comics/'

export async function getComics(): Promise<Comic[]> {
  const response = await request.get(`${rootUrl}`)
  return response.body.comics as Comic[]
}

export async function addComic(comic: ComicData): Promise<unknown> {
  return request.post(`${rootUrl}add-comics`).send(comic)
}

export async function deleteComic(id: number): Promise<unknown> {
  console.log(`someone wants to delete ${id}`)
  return request.delete(`${rootUrl}${id}`)
}
