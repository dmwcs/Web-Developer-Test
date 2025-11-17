# Task B - CargoCraft Fleet

## Problem Description

CargoCraft operates a fleet with two types of transport vehicles:
- **Type A**: 4 propulsion units
- **Type B**: 6 propulsion units

Given `n` total propulsion units, determine the **minimum** and **maximum** number of crafts possible. If impossible, return -1.

## Input Format

- First line: integer `t` (1 ≤ t ≤ 1000) — number of test cases
- Next `t` lines: one integer `n` (1 ≤ n ≤ 10¹⁸) — total propulsion units

## Output Format

For each test case, print two integers: minimum and maximum number of crafts, or -1 if impossible.

## Example

```
Input:
4
4
7
24
998244353998244352

Output:
1 1
-1
4 6
166374058999707392 249561088499561088
```

### Explanation

- **n=4**: Exactly 1 Type A craft (1×4=4)
- **n=7**: Cannot be made from 4s and 6s → impossible
- **n=24**:
  - Maximum crafts: 6 Type A (6×4=24)
  - Minimum crafts: 4 Type B (4×6=24)
- **n=998244353998244352**: Large number case

## Constraints

- Time limit: 1 second
- Memory limit: 256 MB

## Implementation

Language: **Python**

## How to Run

```bash
python solution.py
```

## File Structure

```
B/
├── solution.py   # Main solution
└── README.md     # This file
```
