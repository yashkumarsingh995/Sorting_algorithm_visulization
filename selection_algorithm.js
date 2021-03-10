var content=document.getElementById('info2');
var time=document.getElementById('info1');
function m_algorithm()
{
  content.innerText="procedure selection sort \n\nlist  : array of items\n\nn     : size of list\n\nfor i = 1 to n - 1\n\n /* set current element as minimum*/\n\nmin = i    \n\n /* check the element to be minimum */\n\nfor j = i+1 to n \n\nif list[j] < list[min] then\n\n        min = j;\n\n       end if\n\n     end for\n\n/* swap the minimum element with the current element*/\n\n   if indexMin != i  then\n\n        swap list[min] and list[i]\n\n      end if\n\n   end for\n\nend procedure";
  
  time.innerText="TIME COMPLEXITY \n\n\n O(n^2) \n\n\n _______________\n\n";
}