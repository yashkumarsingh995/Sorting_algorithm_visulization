var content=document.getElementById('info2');
var time=document.getElementById('info1');
function n_algorithm()
{
  content.innerText="void heapify(int arr[], int n, int i)\n\n {\n\n    int largest = i; // Initialize largest as root\n\n    int l = 2 * i + 1; // left = 2*i + 1\n\n    int r = 2 * i + 2; // right = 2*i + 2\n\n  // If left child is larger than root\n\n   if (l < n && arr[l] > arr[largest])\n\n      largest = l;\n\n    // If right child is larger than largest so far\n\n    if (r < n && arr[r] > arr[largest])\n\n      largest = r;\n\n    // If largest is not root\n\n   if (largest != i) {\n\n      swap(arr[i], arr[largest]);\n\n      // Recursively heapify the affected sub-tree\n\n      heapify(arr, n, largest);\n\n    }\n\n  }\n\n // main function to do heap sort\n\n  void heapSort(int arr[], int n)\n\n {\n\n   // Build heap (rearrange array)\n\n   for (int i = n / 2 - 1; i >= 0; i--;\n\n      heapify(arr, n, i);\n\n    // One by one extract an element from heap\n\n   for (int i = n - 1; i > 0; i--) {\n\n    // Move current root to end\n\n      swap(arr[0], arr[i]);\n\n      // call max heapify on the reduced heap\n\n      heapify(arr, i, 0);\n\n  }\n\n  }";
  
  time.innerText="TIME COMPLEXITY \n\n\n O(log n) \n\n\n _______________";
}