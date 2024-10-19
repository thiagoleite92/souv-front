import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '..';
import { unityOptions } from '@/app/const/unitys';
import { tagOptions } from '@/app/const/tags';
import plusButton from '@/app/assets/svgs/plus-purple.svg';
import Image from 'next/image';

type AddItemSchemaType = z.infer<typeof addItemSchema>;

const addItemSchema = z.object({
  item: z.string({ message: 'Digite o item' }).min(3, 'Mínimo 3 items'),
  quantity: z.number().positive(),
  tag: z.string(),
});
export function AddItemForm() {
  const addItemForm = useForm<AddItemSchemaType>({
    resolver: zodResolver(addItemSchema),
  });

  const { handleSubmit } = addItemForm;

  const onSubmit = (data: AddItemSchemaType) => {
    console.log('Form submitted:', data);
  };

  return (
    <FormProvider {...addItemForm}>
      <form
        className="tag gap-3 sm:flex sm:items-end sm:justify-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Form.Field className="w-80 flex flex-col">
          <div className="flex gap-8 justify-start ">
            <Form.Label htmlFor="item">Item</Form.Label>
            <Form.ErrorMessage field="item" />
          </div>
          <Form.Input
            name="item"
            type="text"
            placeholder="Insira um novo item"
          />
        </Form.Field>
        <div className="flex w-fit items-end h-fit">
          <div className="w-fit">
            <Form.Field className="gap-2 flex flex-col">
              <Form.Label htmlFor="quantity">Quantidade</Form.Label>
              <Form.Input
                name="quantity"
                type="number"
                placeholder="Qte."
                min={1}
                max={999}
              />
            </Form.Field>
          </div>
          <div className="w-36">
            <Form.Field>
              <Form.SelectInput
                name="unity"
                type="text"
                placeholder="UN"
                options={unityOptions}
              />
            </Form.Field>
          </div>
        </div>
        <Form.Field className="w-80 gap-2 flex flex-col">
          <Form.Label htmlFor="tag">Categoria</Form.Label>
          <Form.SelectInput
            name="tag"
            type="text"
            placeholder="Selecione"
            options={tagOptions}
          />
        </Form.Field>
        <button>
          <Image src={plusButton} alt="Adicionar Item" />
        </button>
      </form>
    </FormProvider>
  );
}
