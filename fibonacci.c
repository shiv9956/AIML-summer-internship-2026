#include<stdio.h>

int main(void)

{

    int n, i;

    int arr[100];
    printf("Enter the number of terms: ");
    if (scanf("%d", &n) != 1) {
        printf("Invalid input.\n");
        return 1;
    }
    arr[0] = 0;
    arr[1] = 1;
    for (i = 2; i < n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    printf("Fibonacci sequence: ");
    for (i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
    return 0;
}