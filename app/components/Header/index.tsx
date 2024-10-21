import React from 'react';
import { AddItemForm } from '../Form/AddItemForm';
import { Item } from '@/app/types/ItemsType';

interface HeaderProps {
  handleAddItem: (item: Item) => void;
}
export function Header({ handleAddItem }: HeaderProps) {
  return (
    <header className="w-full sm:-mt-24 flex flex-col gap-8 -mt-24">
      <h1 className="heading1 self-start flex justify-start items-start w-full">
        Lista de Compras
      </h1>
      <AddItemForm handleAddItem={handleAddItem} />
    </header>
  );
}
