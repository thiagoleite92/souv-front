export type Item = {
  id: string;
  item: string;
  quantity: number;
  unity: 'unity' | 'liter' | 'kg';
  category: 'fruit' | 'bakery' | 'vegetable' | 'drink' | 'meat';
};
