export type GetProductsType = { products: ProductType[] };
export type ProductType = {
  id: number;
  slug: string;
  caption: string;
  imageSrc: any;
  rate: number;
  price: number;
  discount?: number;
  weight?: string;
  description?: string;
};
