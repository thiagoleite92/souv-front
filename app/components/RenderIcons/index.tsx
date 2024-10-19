import {
  Apple,
  Beef,
  Carrot,
  EllipsisVertical,
  Milk,
  Sandwich,
} from 'lucide-react';

interface RenderIconsProps {
  icon: string;
  size: number;
}

export function RenderIcons({ icon, size }: RenderIconsProps) {
  const icons = {
    drink: <Milk size={size} />,
    fruit: <Apple size={size} />,
    bakery: <Sandwich size={size} />,
    vegetable: <Carrot size={size} />,
    meat: <Beef size={size} />,
    ellipsisVertical: <EllipsisVertical size={size} />,
  };

  return icons[icon as keyof typeof icons];
}
