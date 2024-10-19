import { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export function Input(props: InputProps) {
  const { register } = useFormContext();

  return (
    <input
      id={props.name}
      className="w-full p-2 placeholder:tracking-wider rounded-md bg-gray-500 h-10"
      {...register(props.name)}
      {...props}
    />
  );
}
