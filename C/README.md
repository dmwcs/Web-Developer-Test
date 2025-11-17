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

## Implementation

Framework: **React + TypeScript + Vite**

## Setup

Install dependencies:

```bash
npm install
```

## How to Run

```bash
npm run dev
```

## File Structure

```
C/
├── src/
│   ├── main.ts           # Entry point
│   ├── counter.ts        # Example code (to be replaced)
│   ├── style.css         # Global styles
│   └── typescript.svg    # Assets
├── public/
│   └── vite.svg
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.js
└── README.md
```

## Sample Credentials

Will be hardcoded in the application (example):
- Email: test@example.com
- Password: Test1234!
