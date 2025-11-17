import { z } from 'zod'

// Mock users (hardcoded credentials)
export const VALID_USERS = [
  { email: 'test@example.com', password: 'Test1234!' },
  { email: 'admin@example.com', password: 'Admin123@' },
  { email: 'user@demo.com', password: 'User5678#' },
]

// Zod validation schema
export const loginSchema = z.object({
  email: z.email('Invalid email format or not be empty'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(16, 'Password must be at most 16 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number')
    .regex(/[^A-Za-z0-9]/, 'Password must contain at least one symbol'),
})

export type LoginFormData = z.infer<typeof loginSchema>
