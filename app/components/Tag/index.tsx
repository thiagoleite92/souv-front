import { tags, tagStyle } from '@/app/const/tags';
import { RenderIcons } from '../RenderIcons';
import { useWindowSize } from '@/app/hooks/useWindowSize';

interface TagProps {
  tag: string;
}

export function Tag({ tag }: TagProps) {
  const { width } = useWindowSize();

  return (
    <div className="flex gap-4 justify-center items-center">
      <span
        className={`${tagStyle[tag]} flex gap-2 justify-center items-center px-4 rounded-full py-2 `}
      >
        <RenderIcons size={16} icon={tag} />{' '}
        {width && width >= 640 && tags[tag.toUpperCase()]}
      </span>
      <span className="text-purpleLight">
        <RenderIcons size={16} icon="ellipsisVertical" />
      </span>
    </div>
  );
}
