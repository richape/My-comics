import {
  MutationFunction,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'
import { addComic, deleteComic, getComics } from '../apis/comics.ts'
import { Comic } from '../../models/comics.ts'

export function useComics() {
  const { data, isLoading, error } = useQuery<Comic[]>(['comics'], getComics)
  return {
    data,
    isLoading,
    error,
    add: useAddComic(),
    delete: useDeleteComic(),
  }
}

export function useComicMutation<TData = unknown, TVariables = unknown>(
  mutationFn: MutationFunction<TData, TVariables>
) {
  const queryClient = useQueryClient()
  const mutation = useMutation(mutationFn, {
    onSuccess: () => {
      queryClient.invalidateQueries(['comics'])
    },
  })
  return mutation
}

export function useAddComic() {
  return useComicMutation(addComic)
}

export function useDeleteComic() {
  return useComicMutation(deleteComic)
}
