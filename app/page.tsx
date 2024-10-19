'use client';

import Image from 'next/image';
import cover from './assets/images/cover.png';
import { useEffect, useState } from 'react';
import { api } from './lib/axios';
import { AddItem } from './components/AddItem';
import { Items } from './components/Items';
import { Item } from './types/ItemsType';

export default function Home() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      const { data } = await api.get('/items');

      console.log(data);

      setItems(data);
    };
    fetchItems();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <Image src={cover} alt="cover" objectFit="" />
      <h1 className="heading1 self-start">Lista de Compras</h1>
      <AddItem />
      <div className="flex items-center justify-center sm:w-1/2 m-auto px-6 w-full pb-6">
        {items.length === 0 && <p>Carregando Lista</p>}
        {items.length > 0 && <Items items={items} />}
      </div>
    </div>
  );
}
