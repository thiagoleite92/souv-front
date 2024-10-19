import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '..';

type AddItemSchemaType = z.infer<typeof addItemSchema>;

const addItemSchema = z.object({
  item: z.string(),
  quantity: z.number().positive(),
  category: z.string(),
});
export function AddItemForm() {
  const addItemForm = useForm<AddItemSchemaType>({
    resolver: zodResolver(addItemSchema),
  });

  return (
    <FormProvider {...addItemForm}>
      <form className="tag">
        <Form.Field>
          <Form.Label htmlFor="item">Item</Form.Label>
          <Form.Input
            name="item"
            type="text"
            placeholder="Insira um novo item"
          />
          <Form.ErrorMessage field="item" />
        </Form.Field>
      </form>
    </FormProvider>
  );
}
