# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a Web Developer Technical Test repository containing three independent coding challenges. Each folder (A, B, C) is completely self-contained and can be run independently.

## Repository Structure

- **A/**: Algorithm problem (Mystic Waves) - Python implementation
- **B/**: Algorithm problem (CargoCraft Fleet) - Python implementation
- **C/**: Frontend challenge (Login Page) - React + TypeScript + Vite

Each task is isolated with its own README.md containing problem description, requirements, and run instructions.

## Running the Solutions

### Task A - Mystic Waves (Python)
```bash
cd A
python solution.py
```
- Input/output based problem with alternating wave sequences
- Constraints: t ≤ 100, x,n ≤ 10

### Task B - CargoCraft Fleet (Python)
```bash
cd B
python solution.py
```
- Optimization problem for fleet combinations (Type A: 4 units, Type B: 6 units)
- Constraints: t ≤ 1000, n ≤ 10¹⁸ (handle large numbers)
- Time limit: 1 second, Memory: 256 MB

### Task C - Login Page (React + TypeScript)
```bash
cd C
npm install  # First time only
npm run dev
```

Build for production:
```bash
npm run build
```

## Task C Requirements

Frontend-only login page with:
- **Email validation**: Must exist in hardcoded list
- **Password validation**: 8-16 chars, must include uppercase, lowercase, number, symbol
- **Post-login**: Show welcome message with logout functionality
- **Responsive design**: Desktop and mobile
- Sample credentials: test@example.com / Test1234!

## Development Notes

- Python tasks (A, B) require Python 3.8+
- Task C uses Vite dev server (default: http://localhost:5173)
- All credentials in Task C should be hardcoded (no backend/API calls)
- Each folder must remain independently runnable
