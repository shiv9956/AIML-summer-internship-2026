#include <stdio.h>

int main(void)
{
	int n, key, left, right, mid, i;
	int arr[100];

	printf("Enter number of elements: ");
	if (scanf("%d", &n) != 1 || n < 1 || n > 100) {
		printf("Invalid number of elements.\n");
		return 1;
	}

	printf("Enter %d sorted elements: ", n);
	for (i = 0; i < n; i++) {
		if (scanf("%d", &arr[i]) != 1) {
			printf("Invalid input.\n");
			return 1;
		}
	}

	printf("Enter element to search: ");
	if (scanf("%d", &key) != 1) {
		printf("Invalid input.\n");
		return 1;
	}

	left = 0;
	right = n - 1;

	while (left <= right) {
		mid = left + (right - left) / 2;

		if (arr[mid] == key) {
			printf("Element found at position %d\n", mid + 1);
			return 0;
		}

		if (arr[mid] < key) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}

	printf("Element not found\n");
	return 0;
}
