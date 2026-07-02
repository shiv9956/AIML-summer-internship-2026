#include<stdio.h>

int main(void)

{

    int n, rev,sum=0;
    printf("Enter a number: ");
    if (scanf("%d", &n) != 1) {
        printf("Invalid input.\n");
        return 1;
    }
    else if (n < 0) {
        printf("Please enter a non-negative integer.\n");
        return 1;
    }
    else {
        rev = 0;
        while (n > 0) {
            sum+=n%10;
            rev = rev * 10 + n % 10;
            n /= 10;
        }
        printf("Reversed number: %d\n", rev);
        printf("Sum of digits: %d\n", sum);
    }
    return 0;
}
