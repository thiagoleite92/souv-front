import { Item } from '@/app/types/ItemsType';
import { Tag } from '../Tag';

interface ItemsProps {
  items: Item[];
}

export function Items({ items }: ItemsProps) {
  const renderUnity = (unity: string, quantity: number) => {
    const unitys: { [key: string]: string } = {
      unity: 'unidade',
      liter: 'litro',
      kg: 'kg',
    };

    return quantity > 1 && unity !== 'kg'
      ? `${quantity} ${unitys[unity]}s`
      : `${quantity} ${unitys[unity]}`;
  };

  return (
    <ul className="w-full justify-between items-center space-y-2">
      {items.map((item) => (
        <li
          className="bg-gray-400 w-full rounded-md flex justify-between items-center p-4"
          key={item.id}
        >
          <div className="flex flex-col heading2 space-y-1">
            <span className="">{item.item}</span>
            <span className="tag tracking-wider">
              {renderUnity(item.unity, item.quantity)}
            </span>
          </div>
          <Tag tag={item.category} />
        </li>
      ))}
    </ul>
  );
}
