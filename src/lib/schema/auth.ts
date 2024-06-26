import { z } from 'zod';

// Login Schema for validation
export const loginSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .min(1, 'Email is required')
    .email('Invalid email'),
  password: z
    .string({ required_error: 'Password is required' })
    .min(1, 'Password is required'),
});

export const forgotPasswordSchema = z.object({
  email: z.string().email('Invalid email address'),
});


// Registration Schema for validation
export const registrationSchema = z.object({
  first_name: z
    .string()
    .trim()
    .min(1, 'First Name is required')
    .max(25, 'First Name Should not be more than 25 Characters')
    .refine(
      (value) => /^[a-zA-Z]+$/.test(value ?? ''),
      'First Name should contain only alphabets'
    ),
  last_name: z
    .string()
    .trim()
    .max(25, 'Last Name Should not be more than 25 Characters')
    .min(1, 'Last Name is required')
    .refine(
      (value) => /^[a-zA-Z]+$/.test(value ?? ''),
      'Last Name should contain only alphabets'
    ),
  email: z
    .string()
    .email('Invalid email address')
    .min(1, 'Email is required')
    .max(40, 'Email should not be more than 40 characters'),
  password: z
    .string({ required_error: 'Password is required' })
    .min(1, 'Password is required')
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
});
