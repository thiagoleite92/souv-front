import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '..';
import { unityOptions } from '@/app/const/unitys';
import { RenderIcons } from '../../RenderIcons';
import { useWindowSize } from '@/app/hooks/useWindowSize';
import { tagOptions } from '@/app/const/tags';
import { api } from '@/app/lib/axios';
import { Item } from '@/app/types/ItemsType';
import { useToast } from '@/hooks/use-toast';
interface AddItemFormProps {
  handleAddItem: (item: Item) => void;
}

type AddItemSchemaType = z.infer<typeof addItemSchema>;

const addItemSchema = z.object({
  item: z.string().min(1),
  quantity: z.coerce.number().max(99).min(1),
  tag: z.string(),
  unity: z.string(),
});
export function AddItemForm({ handleAddItem }: AddItemFormProps) {
  const { width } = useWindowSize();
  const { toast } = useToast();

  const addItemForm = useForm<AddItemSchemaType>({
    resolver: zodResolver(addItemSchema),
  });

  const { handleSubmit } = addItemForm;

  const onSubmit = async (formData: AddItemSchemaType) => {
    const { item, quantity, tag, unity } = formData;

    const body = { item, quantity, category: tag, unity };

    try {
      const { data } = await api.post('/items', body);
      handleAddItem({
        id: data?.itemId,
        category: formData.tag,
        unity: formData?.unity,
        isChecked: false,
        item: formData?.item,
        quantity: formData?.quantity,
      });

      toast({
        title: 'Ótimo!',
        description: formData?.item + ' foi adicionado na lista',
        variant: 'default',
      });
    } catch (error) {
      console.log(error);
      toast({
        title: 'Confira sua lista',
        description: 'Item já cadastrado',
        variant: 'default',
      });
    }
  };

  return (
    <FormProvider {...addItemForm}>
      <form
        className="tag gap-3 lg:flex lg:items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Form.Field>
          <div className="w-full flex flex-col gap-2 input-focused-styles">
            <Form.Label htmlFor="item">Item</Form.Label>
            <Form.Input name="item" type="text" autoComplete="off" />
          </div>
        </Form.Field>
        {width && width > 1023 && (
          <>
            <div className={`flex items-end lg:w-[670px] input-focused-styles`}>
              <Form.Field>
                <Form.Label htmlFor="quantity">Quantidade</Form.Label>
                <Form.Input
                  name="quantity"
                  type="number"
                  autoComplete="off"
                  min={1}
                  max={99}
                />
              </Form.Field>
              <Form.Field>
                <Form.SelectInput
                  name="unity"
                  options={unityOptions}
                  className=""
                  placeholder="UN."
                  type="text"
                />
              </Form.Field>
            </div>
            <div className="flex flex-col gap-2  w-full input-focused-styles">
              <Form.Field>
                <Form.Label htmlFor="tag">Categoria</Form.Label>
                <Form.SelectInput
                  name="tag"
                  options={tagOptions}
                  placeholder="Selecione"
                  type="text"
                  hasEmoji
                />
              </Form.Field>
            </div>
            <button className="self-end">
              <RenderIcons icon="plusCircle" size={40} />
            </button>
          </>
        )}
        {width && width <= 1023 && (
          <div className="flex gap-3 mt-2">
            <div
              className={`flex items-end max-w-[150px] input-focused-styles`}
            >
              <Form.Field>
                <Form.Label htmlFor="quantity">Quantidade</Form.Label>
                <Form.Input
                  name="quantity"
                  type="number"
                  autoComplete="off"
                  min={1}
                />
              </Form.Field>
              <div className="flex min-w-[85px]">
                <Form.Field>
                  <Form.SelectInput
                    name="unity"
                    options={unityOptions}
                    className=""
                    placeholder="UN."
                    type="text"
                  />
                </Form.Field>
              </div>
            </div>
            <div className="flex flex-col gap-2 flex-1 input-focused-styles">
              <Form.Field>
                <Form.Label htmlFor="tag">Categoria</Form.Label>
                <Form.SelectInput
                  name="tag"
                  options={tagOptions}
                  placeholder="Selecione"
                  type="text"
                  hasEmoji
                />
              </Form.Field>
            </div>
            <button className="self-end pr-1 w-fit">
              <RenderIcons icon="plusCircle" size={0} />
            </button>
          </div>
        )}
      </form>
    </FormProvider>
  );
}
