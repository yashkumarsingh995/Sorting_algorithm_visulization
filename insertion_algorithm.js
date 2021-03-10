var content=document.getElementById('info2');
var time=document.getElementById('info1');
function i_algorithm()
{
  content.innerText="void insertionSort(int arr[], int n)\n\n{\n\nint i, key, j;\n\nfor (i = 1; i < n; i++) {\n\nkey = arr[i];\n\nj = i - 1;\n\nwhile (j >= 0 && arr[j] > key) {\t\t\n\narr[j + 1] = arr[j];\n\nj = j - 1;\n\n}\n\narr[j + 1] = key;\n\n}\n\n}";
  
  time.innerText="TIME COMPLEXITY \n\n\n O(n^2) \n\n\n _______________\n\n ";
}