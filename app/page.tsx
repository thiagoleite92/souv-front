'use client';

import { useEffect, useState } from 'react';
import { api } from './lib/axios';
import { Header } from './components/Header';
import { Items } from './components/Items';
import { Item } from './types/ItemsType';
import { Cover } from './components/Cover';

export default function Home() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      const { data } = await api.get('/items');

      setItems(data);
    };
    fetchItems();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <Cover />
      <div className="flex flex-col items-center justify-center md:w-1/2 m-auto px-6 w-full pb-6 space-y-12">
        <Header />
        {items.length === 0 && <p>Carregando Lista</p>}
        {items.length > 0 && <Items items={items} />}
      </div>
    </div>
  );
}
