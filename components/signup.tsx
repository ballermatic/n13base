// This is needed for the form implementation in Next 13
'use client';

import { z } from 'zod';
import { Form, useForm } from '../components/form/form';
import { Input } from '../components/form/input';

// Declare validation and shape of form
// Zod takes care of email validation, it also supports custom regex
const signUpFormSchema = z.object({
  firstName: z.string().min(3, 'First Name must be atleast 3 characters long.'),
  username: z
    .string()
    .min(3, 'Username must be atleast 3 characters long.')
    .max(20, 'Username should be under 20 characters.'),
  email: z.string().email('Please enter a valid email address.'),
});

let renderCount = 0;

export function SignUpForm() {
  // this is hook is required to use form
  const form = useForm({
    schema: signUpFormSchema,
  });

  renderCount++;

  return (
    <div>
      {/* provide the form and onSubmit handler to form component */}
      <Form form={form} onSubmit={(values) => console.log(values)}>
        <Input label='Your first name' type='text' {...form.register('firstName')} />
        <Input label='Choose username' type='text' {...form.register('username')} />
        <Input label='Email' type='email' {...form.register('email')} />
        <button type='submit'>Submit</button>
      </Form>
    </div>
  );
}
