#include <stdio.h>

int main(void)
{
	int n, key, i, found = 0;
	int arr[100];

	printf("Enter number of elements: ");
	if (scanf("%d", &n) != 1 || n < 1 || n > 100) {
		printf("Invalid number of elements.\n");
		return 1;
	}

	printf("Enter %d elements: ", n);
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

	for (i = 0; i < n; i++) {
		if (arr[i] == key) {
			printf("Element found at position %d\n", i + 1);
			found = 1;
			break;
		}
	}

	if (!found) {
		printf("Element not found\n");
	}

	return 0;
}
