'use client';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  name: z.string().min(2),
  age: z.number().min(10),
});

export const SimpleForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit((d) => console.log(d))}>
      <label htmlFor='name'>Name</label>
      <input {...register('name')} />
      {errors.name?.message && <span>Name needs to be more than 2 characters.</span>}
      <br />
      <label htmlFor='age'>Your age</label>
      <input type='number' {...register('age', { valueAsNumber: true })} />
      {errors.age?.message && <span>You must be at least 10.</span>}
      <button type='submit'>Submit</button>
    </form>
  );
};
