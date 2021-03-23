
def binary_search(alist, target):
  first = 0
  last = len(alist) - 1
  print(first, last)
 
  while first <= last:
    midpoint = (first + last) // 2

    if alist[midpoint] == target:
      print(alist[midpoint], target)
      return midpoint
    elif target > alist[midpoint]:
      first = midpoint + 1
    else:
      last = midpoint - 1
  
  return None





print(binary_search([1, 2, 3, 4, 5, 6, 7, 8], 2))

