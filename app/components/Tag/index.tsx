import { categories } from '@/app/const/categories';
import { RenderIcons } from '../RenderIcons';
import { useWindowSize } from '@/app/hooks/useWindowSize';

interface TagProps {
  tag: string;
}

export function Tag({ tag }: TagProps) {
  const { width } = useWindowSize();

  const categoryStyle: { [key: string]: string } = {
    fruit: 'text-orange bg-orangeDark',
    bakery: 'text-yellow bg-yellowDark',
    vegetable: 'text-green bg-greenDark',
    drink: 'text-blue bg-blueDark',
    meat: 'text-pink bg-pinkDark',
  };

  return (
    <div className="flex gap-4 justify-center items-center">
      <span
        className={`${categoryStyle[tag]} flex gap-2 justify-center items-center px-4 rounded-full py-2 `}
      >
        <RenderIcons size={16} icon={tag} />{' '}
        {width && width >= 640 && categories[tag.toUpperCase()]}
      </span>
      <span className="text-purpleLight">
        <RenderIcons size={16} icon="ellipsisVertical" />
      </span>
    </div>
  );
}
