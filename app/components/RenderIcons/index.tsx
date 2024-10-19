import {
  Apple,
  Beef,
  Carrot,
  EllipsisVertical,
  Milk,
  PlusIcon,
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
    plusPurple: (
      <PlusIcon size={size} className="bg-purple rounded-full text-gray-100 " />
    ),
  };

  return icons[icon as keyof typeof icons];
}
