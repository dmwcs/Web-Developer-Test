# Task C - Login Page

## Problem Description

Build a simple login page with validation (frontend only, no backend required).

## Requirements

### Page Layout
- Centered login form on plain background
- Form includes:
  - Email input
  - Password input
  - Login button
  - Optional "Forgot password?" link
- Responsive design (desktop & mobile)

### Validation Rules

**Email field:**
- Must not be empty
- Show error if email doesn't exist (use hardcoded valid emails)

**Password field:**
- Must be 8-16 characters
- Must contain at least:
  - One uppercase letter
  - One lowercase letter
  - One number
  - One symbol
- Show error if doesn't meet criteria
- Show error if email exists but password is incorrect

### Successful Login

When credentials are valid:
- Hide login form
- Display welcome message: "Welcome, [user email]!"
- Include Logout button that returns to login page

## Technical Notes

- All functionality must be frontend only (no backend calls)
- Hardcode sample valid credentials in code
- Use clean, readable code with comments
- Neat and consistent styling

## Tech Stack

- **React 19** - Modern UI library with hooks
- **TypeScript** - Type safety and better developer experience
- **Vite** - Fast build tool and dev server
- **React Hook Form** - Efficient form state management with minimal re-renders
- **Zod** - TypeScript-first schema validation
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Vitest** - Fast unit testing framework

### Why This Stack?

- **React Hook Form + Zod**: Best practice for form validation in React, provides type-safe validation with great performance
- **TypeScript**: Catches errors at compile time, improves code quality
- **Tailwind CSS**: Clean, maintainable styling without writing custom CSS
- **Vitest**: Fast tests with React Testing Library integration

## Setup

```bash
cd C
npm install
```

## How to Run

Development mode:
```bash
npm run dev
```

Run tests:
```bash
npm test
```

Build for production:
```bash
npm run build
```

## Sample Credentials

Hardcoded valid users:
- Email: `test@example.com` / Password: `Test1234!`
- Email: `admin@example.com` / Password: `Admin123@`
- Email: `user@demo.com` / Password: `User5678#`
