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
        if(oldData && Array.isArray(oldData)){
          if (oldData.findIndex((item) => item.productId === id)!==-1) {
            return oldData.filter((item) => item.productId !== id);
          }
          return [...oldData, { productId: id }];
        }
        return [{ productId: id }];        
      }
    );
  };
  const isFavorite = (id: number): boolean => {
    if (!Array.isArray(favorites)) {return false;}
    const result = favorites.find((item) => item.productId === id);
    return !!result;
  };
  return { favorites, isFetching,  toggleFavorite, isFavorite };
};
export default useFavorite;
