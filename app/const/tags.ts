export const tag: { [key: string]: string } = {
  FRUIT: 'fruta',
  BAKERY: 'padaria',
  VEGETABLE: 'legume',
  DRINK: 'bebida',
  MEAT: 'carne',
} as const;

export const tagOptions = Object.entries(tag).map(([key, value]) => ({
  value: key.toLowerCase(),
  label: value,
}));
