import { useFormContext } from 'react-hook-form';

interface ErrorMessageProps {
  field: string;
}

export function ErrorMessage({}: ErrorMessageProps) {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <span className={`mt-1 text-sm ${errors?.field ? '' : 'text-red-400'} `}>
      {errors.message?.toString()}
    </span>
  );
}
