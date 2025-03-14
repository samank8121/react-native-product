import { ProductType } from '@/types/product-type';

export const Products: ProductType[] = [
  {
    id: 1,
    caption: 'Butter',
    slug: 'butter',
    rate: 5,
    price: 100,
    weight: '100 gr',
    description:
      'Butter description.',
    imageSrc: require('@/assets/images/products/butter.jpg'),
  },
  {
    id: 2,
    caption: 'Milk',
    slug: 'milk',
    rate: 3,
    price: 150,
    weight: '100 ml',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar lorem massa, quis commodo dui volutpat id. Nullam accumsan sodales nibh eu porttitor. Pellentesque lorem sem, faucibus gravida tempus sed, hendrerit ut tellus. Integer tincidunt sem vel volutpat dictum. Duis enim nulla, vulputate id sem ac, volutpat bibendum justo. Vivamus augue felis, viverra sed vestibulum in, accumsan vitae lectus. Ut quis neque a nunc faucibus dictum. Pellentesque sit amet interdum lectus. Nullam vulputate tincidunt est at semper. Vestibulum non pellentesque tortor, nec sollicitudin lectus. Proin gravida turpis a justo feugiat, a venenatis metus hendrerit.',
    imageSrc:  require('@/assets//images/products/milk.jpg'),
  },
  {
    id: 3,
    caption: 'Cola',
    slug: 'cola',
    rate: 4,
    price: 200,
    weight: '1.5 l',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar lorem massa, quis commodo dui volutpat id. Nullam accumsan sodales nibh eu porttitor. Pellentesque lorem sem, faucibus gravida tempus sed, hendrerit ut tellus. Integer tincidunt sem vel volutpat dictum. Duis enim nulla, vulputate id sem ac, volutpat bibendum justo. Vivamus augue felis, viverra sed vestibulum in, accumsan vitae lectus. Ut quis neque a nunc faucibus dictum. Pellentesque sit amet interdum lectus. Nullam vulputate tincidunt est at semper. Vestibulum non pellentesque tortor, nec sollicitudin lectus. Proin gravida turpis a justo feugiat, a venenatis metus hendrerit.',
    imageSrc:  require('@/assets/images/products/cola.jpg'),
  },
  {
    id: 4,
    caption: 'Cheese',
    slug: 'cheese',
    rate: 2,
    weight: '250 gr',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar lorem massa, quis commodo dui volutpat id. Nullam accumsan sodales nibh eu porttitor. Pellentesque lorem sem, faucibus gravida tempus sed, hendrerit ut tellus. Integer tincidunt sem vel volutpat dictum. Duis enim nulla, vulputate id sem ac, volutpat bibendum justo. Vivamus augue felis, viverra sed vestibulum in, accumsan vitae lectus. Ut quis neque a nunc faucibus dictum. Pellentesque sit amet interdum lectus. Nullam vulputate tincidunt est at semper. Vestibulum non pellentesque tortor, nec sollicitudin lectus. Proin gravida turpis a justo feugiat, a venenatis metus hendrerit.',
    price: 50,
    imageSrc:  require('@/assets/images/products/cheese.jpg'),
  },
  {
    id: 5,
    caption: 'Chips',
    slug: 'chips',
    rate: 4,
    weight: '275 gr',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar lorem massa, quis commodo dui volutpat id. Nullam accumsan sodales nibh eu porttitor. Pellentesque lorem sem, faucibus gravida tempus sed, hendrerit ut tellus. Integer tincidunt sem vel volutpat dictum. Duis enim nulla, vulputate id sem ac, volutpat bibendum justo. Vivamus augue felis, viverra sed vestibulum in, accumsan vitae lectus. Ut quis neque a nunc faucibus dictum. Pellentesque sit amet interdum lectus. Nullam vulputate tincidunt est at semper. Vestibulum non pellentesque tortor, nec sollicitudin lectus. Proin gravida turpis a justo feugiat, a venenatis metus hendrerit.',
    price: 0,
    imageSrc:  require('@/assets/images/products/chips.jpg'),
  },
];
