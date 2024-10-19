import { AddItemForm } from '../Form/AddItemForm';

export function Header() {
  return (
    <header className="w-full -mt-20 flex flex-col gap-8">
      <h1 className="heading1 self-start flex justify-start items-start w-full">
        Lista de Compras
      </h1>
      <AddItemForm />
    </header>
  );
}
