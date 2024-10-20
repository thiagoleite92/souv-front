import React, { InputHTMLAttributes, useCallback } from 'react';
import { useFormContext, useController } from 'react-hook-form';
import Select from 'react-select';
import classNames from 'classnames';
import { RenderIcons } from '../RenderIcons';
import { tagStyle } from '@/app/const/tags';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  options: { label: string; value: string }[];
  hasEmoji?: boolean;
}

export function SelectInput(props: InputProps) {
  const { control } = useFormContext();
  const { field } = useController({
    name: props.name,
    control,
  });
  const { value, onChange, ...restLangField } = field;

  let formatIcons: { label: React.ReactNode; value: string }[] = [];

  const handleChange = useCallback(
    (option: { label: string; value: string }) => {
      onChange(option.value);
    },

    [onChange]
  );

  if (props.hasEmoji) {
    formatIcons = props.options.map((option) => ({
      value: option.value,
      label: (
        <div className={`flex gap-2`}>
          <RenderIcons icon={option.value} size={20} />
          {option.label}
        </div>
      ),
    }));
  }

  return (
    <Select
      unstyled
      classNames={{
        control: ({ isFocused }) =>
          classNames(
            'bg-gray-400',
            'text-gray-100',
            'rounded-lg',
            'border',
            isFocused ? 'border-purpleLight' : 'border-gray-800',
            isFocused && 'shadow-[0_0_0_1px] shadow-purple-800',
            isFocused ? 'hover:border-purpleLight' : 'hover:border-purpleLight'
          ),
        dropdownIndicator: ({ isFocused }) =>
          classNames(isFocused ? 'text-purpleLight' : 'text-gray-200', 'p-2'),
        indicatorSeparator: () => classNames('hidden'),
        input: () =>
          classNames('m-0.5', 'py-0.5', 'text-gray-100', 'outline-none'),
        menu: () =>
          classNames(
            'bg-gray-400',
            'rounded',
            'shadow-[0_0_0_1px_rgba(0,0,0,0.1)]',
            'my-1',
            'border',
            'border-purpleLight',
            'rounded-lg'
          ),
        menuList: () => classNames('py-1'),
        option: ({ isFocused, isSelected, data }) => {
          return classNames(
            'py-2',
            'px-3',
            data.value === 'meat'
              ? 'text-pink'
              : data.value === 'fruit'
              ? 'text-orange'
              : data.value === 'drink'
              ? 'text-[#7B94CB]'
              : data.value === 'bakery'
              ? 'text-yellow'
              : data.value === 'vegetable'
              ? 'text-green'
              : 'text-gray-100',
            isFocused && data.value === 'meat'
              ? 'bg-[#251622]'
              : isFocused && data.value === 'fruit'
              ? 'bg-[#261A17]'
              : isFocused && data.value === 'drink'
              ? 'bg-[#1A1D23]'
              : isFocused && data.value === 'bakery'
              ? 'bg-[#211E12]'
              : isFocused && data.value === 'vegetable'
              ? 'bg-[#1C2015]'
              : 'bg-gray-400'
          );
        },
        placeholder: () => classNames('text-gray-200', 'mx-0.5'),
        singleValue: ({ data }) =>
          classNames(
            data.value === 'meat'
              ? 'text-pink'
              : data.value === 'fruit'
              ? 'text-orange'
              : data.value === 'drink'
              ? 'text-[#7B94CB]'
              : data.value === 'bakery'
              ? 'text-yellow'
              : data.value === 'vegetable'
              ? 'text-green'
              : '',
            'mx-0.5'
          ),
        valueContainer: () => classNames('py-0.5', 'px-2'),
      }}
      placeholder={props.placeholder}
      options={props.hasEmoji ? formatIcons : props.options}
      value={value?.label}
      onChange={(option) => handleChange(option)}
      {...restLangField}
    />
  );
}
