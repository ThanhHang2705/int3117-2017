function sum_of_digits(n) {
    var sum = 0;

    while (n > 0) {
        sum = sum + n % 10;
        n = n / 10;
    }

    return sum;
}

function max(a, b, c) {
    var max = a;

    if (b > max) {
        max = b;
    }

    if (c > max)
        max = c;

    return max;
}