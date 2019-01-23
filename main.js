
/*
  @param {Number[]} arr
  
  Applies the bubble-sort algorithm to the passed array and returns a new sorted array.
*/

const sort = (arr) => {
    if(!arr instanceof Array) return console.error('Please provide an array.')

    for(const element of arr) {
        if(isNaN(element)) {
            console.error('It seems like you have passed a value which is not a number as an element to the array.')
            break
        }

        for (let i = 0; i < arr.length - 1; i++) {
            if(arr[i] > arr[i + 1]) {
                let k = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = k
            }
        }
    }

    return console.log(arr)
}

sort([6, 4, 3, 1, 5])

/* 
  * An example of usage
  * sort([6, 4, 3, 1, 5]) - returns: [1, 3, 4, 5, 6]
*/
