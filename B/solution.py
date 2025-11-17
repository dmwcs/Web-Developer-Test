"""
Task B - CargoCraft Fleet
Solution template
"""

def find_min_max_crafts(n):
    """
    Find minimum and maximum number of crafts for n propulsion units
    Type A: 4 units, Type B: 6 units

    Args:
        n: total propulsion units

    Returns:
        tuple (min_crafts, max_crafts) or (-1, -1) if impossible
    """
    # Check if n is achievable
    # GCD(4, 6) = 2, so n must be even and >= 4 (except n=2)
    if n % 2 != 0 or n == 2:
        return -1, -1

    # Minimum crafts: use as many Type B (6 units) as possible
    # Maximum crafts: use as many Type A (4 units) as possible

    # For minimum: try to maximize Type B usage
    # n = 6*b + 4*a, minimize (a + b)
    # If n % 6 == 0: use all Type B
    # If n % 6 == 2: impossible with just Type B, need adjustment
    # If n % 6 == 4: use one Type A, rest Type B

    min_crafts = -1
    if n % 6 == 0:
        min_crafts = n // 6
    elif n % 6 == 4:
        min_crafts = n // 6 + 1
    elif n % 6 == 2:
        # n = 6*b + 2, need to use Type A
        # Try: n = 6*(b-1) + 8 = 6*b + 2 where 8 = 2*4
        if n >= 8:
            min_crafts = (n - 8) // 6 + 2
        else:
            return -1, -1

    # For maximum: use all Type A if possible
    max_crafts = n // 4

    return min_crafts, max_crafts


def main():
    """Main function to handle test cases"""
    t = int(input())
    for _ in range(t):
        n = int(input())
        min_c, max_c = find_min_max_crafts(n)
        if min_c == -1:
            print(-1)
        else:
            print(min_c, max_c)


if __name__ == "__main__":
    main()
