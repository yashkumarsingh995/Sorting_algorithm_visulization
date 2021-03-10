var content=document.getElementById('info2');
var time=document.getElementById('info1');
function j_algorithm()
{
  content.innerText=". void merge(int arr[], int l, int m, int r)\n\n{\n\nint i, j, k;\n\nint n1 = m - l + 1;\n\nint n2 = r - m;\n\nint L[n1], R[n2];\n\nfor (i = 0; i < n1; i++)\n\nL[i] = arr[l + i];\n\nfor (j = 0; j < n2; j++)\n\nR[j] = arr[m + 1 + j];\n\n\n /* Merge the temp arrays back into arr[l..r]*/\n\ni = 0; // Initial index of first subarray\n\nj = 0; // Initial index of second subarray\n\nk = l; // Initial index of merged subarray\n\nwhile (i < n1 && j < n2) {\n\nif (L[i] <= R[j]) {\n\narr[k] = L[i];\n\ni++;\n\n}\n\nelse {\n\narr[k] = R[j];\n\nj++;\n\n}\n\nk++;\n\n}\n\n/* Copy the remaining elements of L[], if there are any */\n\nwhile (i < n1) {\n\narr[k] = L[i];\n\ni++;\n\nk++;\n\n}\n\n/* Copy the remaining elements of R[], if there are any */\n\nwhile (j < n2) {\n\narr[k] = R[j];\n\nj++;\n\nk++;\n\n}\n\n}\n\n/* l is for left index and r is for right index*/\n\nvoid mergeSort(int arr[], int l, int r;\n\n{\n\nif (l < r) {\n\n// Same as (l+r)/2, but avoids overflow for large l and h\n\nint m = l + (r - l) / 2;\n\n// Sort first and second halves\n\nmergeSort(arr, l, m);\n\nmergeSort(arr, m + 1, r);\n\n\n\nmerge(arr, l, m, r);\n\n}\n\n} "
  
  time.innerText="TIME COMPLEXITY \n\n\n O(n*logn) \n\n\n _______________";
}