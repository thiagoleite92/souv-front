import { HTMLAttributes } from 'react';

type FieldProps = HTMLAttributes<HTMLDivElement>;

export function Field(props: FieldProps) {
  return <div className="w-full flex flex-col gap-2" {...props} />;
}
