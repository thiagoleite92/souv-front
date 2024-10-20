export const tags: { [key: string]: string } = {
  FRUIT: 'fruta',
  BAKERY: 'padaria',
  VEGETABLE: 'legume',
  DRINK: 'bebida',
  MEAT: 'carne',
} as const;

export const tagOptions = Object.entries(tags).map(([key, value]) => ({
  value: key.toLowerCase(),
  label: value,
}));
