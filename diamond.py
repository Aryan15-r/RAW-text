def print_hollow_diamond(n):
    """
    Prints a hollow diamond pattern given n rows for the top half (including middle row).
    Total rows printed = 2 * n - 1.
    """
    # Top half including middle line
    for i in range(n):
        leading_spaces = " " * (n - 1 - i)
        if i == 0:
            print(leading_spaces + "*")
        else:
            inner_spaces = " " * (2 * i - 1)
            print(leading_spaces + "*" + inner_spaces + "*")

    # Bottom half
    for i in range(n - 2, -1, -1):
        leading_spaces = " " * (n - 1 - i)
        if i == 0:
            print(leading_spaces + "*")
        else:
            inner_spaces = " " * (2 * i - 1)
            print(leading_spaces + "*" + inner_spaces + "*")


if __name__ == "__main__":
    import sys

    # Get n from command line args if provided, default to 5
    n = int(input())
    if len(sys.argv) > 1:
        try:
            n = int(sys.argv[1])
        except ValueError:
            print("Please provide a valid integer for n.")
            sys.exit(1)

    print(f"Hollow Diamond (n = {n}):\n")
    print_hollow_diamond(n)