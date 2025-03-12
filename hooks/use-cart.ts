import { CartType } from '@/types/cart-type';
import commonQueryClient from '@/utils/get-query-client';
import { queryKeys } from '@/constants';
import { useQuery } from '@tanstack/react-query';

export const useCart = () => {
  const { data:carts } = useQuery<CartType>({
    queryKey: [queryKeys.cart],
    initialData: { products: {}, totalCount: 0 },
  });

  const changeProduct = async (productid: number, value: number) => {
    const currentKey = productid.toString();
    commonQueryClient.setQueryData<CartType>(
      [queryKeys.cart],
      (oldData?: CartType) => {
        if (oldData) {
          const products = { ...oldData.products, [currentKey]: value };

          const sum = Object.entries(products).reduce(
            (accumulator, currentValue) => accumulator + currentValue[1],
            0
          );

          return {
            products: Object.fromEntries(
              Object.entries(products).filter(([, value]) => value !== 0)
            ),
            totalCount: sum,
          };
        }
        return {
          products: { [currentKey]: value },
          totalCount: 1,
        };
      }
    );
  };
  const getProductCount = (productid: number): number => {
    if (carts && carts.products) {
      const result = Object.entries(carts.products).filter(
        (key) => key[0].toString() === productid.toString()
      );
      return result && result.length > 0 ? (result[0][1] as number) : 0;
    } else return 0;
  };

  return { carts, changeProduct, getProductCount };
};
