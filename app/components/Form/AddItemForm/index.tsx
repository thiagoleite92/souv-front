import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '..';
import { unityOptions } from '@/app/const/unitys';
import { tagOptions } from '@/app/const/tags';
import { RenderIcons } from '../../RenderIcons';
import { useWindowSize } from '@/app/hooks/useWindowSize';

type AddItemSchemaType = z.infer<typeof addItemSchema>;

const addItemSchema = z.object({
  item: z.string().min(1),
  quantity: z.number().positive(),
  tag: z.string(),
  unity: z.string(),
});
export function AddItemForm() {
  const { width } = useWindowSize();

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
        className="tag gap-3 lg:flex lg:items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Form.Field>
          <div className="w-full">
            <Form.Label htmlFor="item">Item</Form.Label>
            <Form.Input name="item" type="text" autoComplete="off" />
          </div>
        </Form.Field>
        {width && width > 1023 && (
          <>
            <div className={`flex items-end lg:w-[670px]`}>
              <Form.Field>
                <Form.Label htmlFor="quantity">Quantidade</Form.Label>
                <Form.Input
                  name="quantity"
                  type="number"
                  autoComplete="off"
                  min={1}
                />
              </Form.Field>
              <Form.Field>
                <Form.SelectInput
                  name="unity"
                  options={unityOptions}
                  className=""
                  placeholder="UN."
                />
              </Form.Field>
            </div>
            <div className="flex flex-col gap-2  w-full">
              <Form.Field>
                <Form.Label htmlFor="tag">Categoria</Form.Label>
                <Form.SelectInput
                  name="tag"
                  options={tagOptions}
                  placeholder="Selecione"
                />
              </Form.Field>
            </div>
            <button className="self-end">
              <RenderIcons icon="plusCircle" size={40} />
            </button>
          </>
        )}
        {width && width <= 1023 && (
          <div className="flex gap-3">
            <div className={`flex items-end max-w-[150px]`}>
              <Form.Field>
                <Form.Label htmlFor="quantity">Quantidade</Form.Label>
                <Form.Input
                  name="quantity"
                  type="number"
                  autoComplete="off"
                  min={1}
                />
              </Form.Field>
              <Form.Field>
                <Form.SelectInput
                  name="unity"
                  options={unityOptions}
                  className=""
                  placeholder="UN."
                />
              </Form.Field>
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <Form.Field>
                <Form.Label htmlFor="tag">Categoria</Form.Label>
                <Form.SelectInput
                  name="tag"
                  options={tagOptions}
                  placeholder="Selecione"
                />
              </Form.Field>
            </div>
            <button className="self-end pr-1">
              <RenderIcons icon="plusCircle" size={20} />
            </button>
          </div>
        )}
      </form>
    </FormProvider>
  );
}
