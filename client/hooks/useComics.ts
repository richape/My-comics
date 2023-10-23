import { useQuery } from '@tanstack/react-query'
import { getComics } from '../apis/comics.ts'
import { Comic } from '../../models/comics.ts'

export function useComics() {
  const { data, isLoading, error } = useQuery<Comic[]>(['comics'], getComics)
  return {
    data,
    isLoading,
    error,
  }
}
