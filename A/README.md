# Task A - Mystic Waves

## Problem Description

In the land of Elaria, a young mage named Nia experiments with a magical energy value `x`. She casts a spell that produces a sequence of `n` waves of energy — alternating between `x` and `-x`, starting with `x`.

Calculate the total magical energy after all `n` waves.

## Input Format

- First line: integer `t` (1 ≤ t ≤ 100) — number of test cases
- Next `t` lines: two integers `x` and `n` (1 ≤ x, n ≤ 10)

## Output Format

For each test case, output the total energy after all `n` waves.

## Example

```
Input:
4
1 4
2 5
3 6
4 7

Output:
0
2
0
4
```

### Explanation

- Test 1: x=1, n=4 → sequence: 1, -1, 1, -1 → total = 0
- Test 2: x=2, n=5 → sequence: 2, -2, 2, -2, 2 → total = 2
- Test 3: x=3, n=6 → sequence: 3, -3, 3, -3, 3, -3 → total = 0
- Test 4: x=4, n=7 → sequence: 4, -4, 4, -4, 4, -4, 4 → total = 4

## Solution

The sequence alternates between x and -x. If n is even, they cancel out (result = 0). If n is odd, one x remains (result = x).

## How to Run

```bash
python3 solution.py < test_input.txt
```

Expected output:
```
0
2
0
4
```
