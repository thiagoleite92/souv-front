import React from 'react';
import { Item } from '@/app/types/ItemsType';
import { Tag } from '../Tag';
import { Checkbox } from '@/components/ui/checkbox';
import { useWindowSize } from '@/app/hooks/useWindowSize';
import { api } from '@/app/lib/axios';

interface ItemsProps {
  items: Item[];
  handleUpdateItems: (itemId: string) => void;
}

export function Items({ items, handleUpdateItems }: ItemsProps) {
  const { width } = useWindowSize();
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

  const formatRender = () => {
    if (width && width <= 1023) {
      return '';
    }
    return 'data-[state=unchecked]:hover:bg-purpleDark data-[state=checked]:hover:bg-successLight';
  };

  const handleCheckItem = async (itemId: string) => {
    try {
      await api.patch(`/items/${itemId}`);

      handleUpdateItems(itemId);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ul className="w-full justify-between items-center space-y-2">
      {items.map((item) => (
        <li
          className={`bg-gray-400 w-full rounded-md flex justify-between items-center p-4 ${
            item.isChecked && 'brightness-75'
          }`}
          key={item.id}
        >
          <div className="flex items-center heading2 gap-4">
            <Checkbox
              onClick={() => handleCheckItem(item.id)}
              checked={item.isChecked}
              className={`w-5 h-5
            data-[state=checked]:text-gray-100 border border-purple 
            data-[state=checked]:bg-successDark
            data-[state=checked]:border-successDark
            ${formatRender()}`}
            />
            <div className="flex flex-col gap-2">
              <span className={`${item.isChecked && 'line-through'}`}>
                {item.item}
              </span>
              <span className="tag tracking-wider">
                {renderUnity(item.unity, item.quantity)}
              </span>
            </div>
          </div>
          <Tag tag={item.category} />
        </li>
      ))}
    </ul>
  );
}
