var content=document.getElementById('info2');
var time=document.getElementById('info1');
function k_algorithm()
{
  content.innerText=" pivot creating pseudocode \n\n\nfunction partitionFunc(left, right, pivot)\n\nleftPointer = left\n\nrightPointer = right - 1\n\nwhile True\n\ndo\n\nwhile A[++leftPointer] < pivot\n\ndo\n\n//do-nothing            \n\nend while\n\nwhile rightPointer > 0 && A[--rightPointer] > pivot do\n\n//do-nothing        end while\n\nif leftPointer >= rightPointer\n\nbreak\n\nelse               \n\nswap leftPointer,rightPointer\n\nend if\n\nend while\n\n swap leftPointer,right\n\nreturn leftPointer\n\nend function\n\n\n______________\n\nquick sort\n\n procedure quickSort(left, right)\n\nif right-left <= 0\n\nreturn\n\nelse     pivot = A[right]\n\npartition = partitionFunc(left, right, pivot)\n\nquickSort(left,partition-1)\n\nquickSort(partition+1,right)   \n\n end if	\n\nend procedure";
  
  time.innerText="TIME COMPLEXITY \n\n\n O(n^2) \n\n\n _______________";
}