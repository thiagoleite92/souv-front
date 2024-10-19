import { InputHTMLAttributes, useCallback, useRef } from 'react';
import { useFormContext, useController } from 'react-hook-form';
import Select from 'react-select';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export function SelectInput(props: InputProps) {
  const refSelect = useRef<HTMLSelectElement | null>(null);

  const { control } = useFormContext();
  const { field } = useController({
    name: props.name,
    control,
  });
  const { value, onChange, ...restLangField } = field;

  const handleChange = useCallback(
    (option: { label: string; value: string }) => {
      onChange(option ? option.label : '');
    },

    [onChange]
  );

  return (
    <Select
      className="select-input"
      placeholder={props.placeholder}
      isClearable
      options={[]}
      value={value?.label}
      onChange={(option) => handleChange(option)}
      {...restLangField}
      ref={refSelect}
    />
  );
}
