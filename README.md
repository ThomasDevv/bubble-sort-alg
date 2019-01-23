# bubble-sort-alg
A JavaScript implementation of the bubble sort algorithm.

# What is the bubble sort algorithm?
Bubble sort is a sorting algorithm which basically works by going through the given list of numbers and swapping elements together if they're in incorrect order.

# How does this script work?
This script works as follows:

It begins by checking if the passed argument is actually an instance of an Array object. If not, it doesn't move onto the iteration and rather spills out a message in console implying that you need to pass an array. If that condition is met, however, it'l normally proceed to the iteration process. Afterwards, it basically iterates over the passed array and first makes sure the element is a numeric value, if so, it checks if the element at the current index is greater than the adjacent element, and swaps them together if that condition's true.
