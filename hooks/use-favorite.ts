import { queryKeys } from '@/constants';
import { FavoriteType } from '@/types/favorites-type';
import commonQueryClient from '@/utils/get-query-client';
import { useQuery } from '@tanstack/react-query';

 const useFavorite = () => {
  const { data: favorites, isFetching } = useQuery<FavoriteType[]>({
    queryKey: [queryKeys.favorite],
    initialData: [],
  });

  const toggleFavorite = (id: number) => {
    commonQueryClient.setQueryData(
      [queryKeys.favorite],
      (oldData: FavoriteType[]) => {
        if (oldData.find((item) => item.productId === id)) {
          return oldData.filter((item) => item.productId !== id);
        }
        return [...oldData, { productId: id }];
      }
    );
  };
  const isFavorite = (id: number): boolean => {
    if(isFetching) return false;
    const result = favorites && favorites.find((item) => item.productId === id);
    return !!result;
  };
  return { favorites, isFetching,  toggleFavorite, isFavorite };
};
export default useFavorite;
