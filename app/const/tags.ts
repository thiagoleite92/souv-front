export const tags: { [key: string]: string } = {
  FRUIT: 'fruta',
  BAKERY: 'padaria',
  VEGETABLE: 'legume',
  DRINK: 'bebida',
  MEAT: 'carne',
} as const;

export const tagOptions = Object.entries(tags).map(([key, value]) => ({
  value: key.toLowerCase(),
  label:
    value.charAt(0).toLocaleUpperCase() + value.slice(1).toLocaleLowerCase(),
}));

export const tagStyle: { [key: string]: string } = {
  fruit: 'text-orange bg-orangeDark',
  bakery: 'text-yellow bg-yellowDark',
  vegetable: 'text-green bg-greenDark',
  drink: 'text-blue bg-blueDark',
  meat: 'text-pink bg-pinkDark',
};
