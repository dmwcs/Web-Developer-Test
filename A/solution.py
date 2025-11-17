def solve(x, n):
    """
    Calculate total energy after n waves alternating between x and -x

    Args:
        x: energy value
        n: number of waves

    Returns:
        total energy
    """
    if n % 2 == 0:
        return 0
    else:
        return x


def main():
    """Main function to handle test cases"""
    t = int(input())
    for _ in range(t):
        x, n = map(int, input().split())
        result = solve(x, n)
        print(result)


if __name__ == "__main__":
    main()
