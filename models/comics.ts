export interface Comic {
  id: number
  title: string
  name: string
  issue: string
  datePublished: string
  publisher: string
  credits: string
  coverArt: string
  coverArtist: string
}

export interface comicData {
  title: string
  name: string
  issue: string
  datePublished: string
  publisher: string
  credits: string
  coverArt: File | null
  coverArtist: string
}
