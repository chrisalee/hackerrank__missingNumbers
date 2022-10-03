/*
 * Complete the 'missingNumbers' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY arr
 *  2. INTEGER_ARRAY brr
 */

const missingNumbers = (arr, brr) => {
  let missing = [];
  const brrMap = {};
   
  //map all instances of a num in array brr
  for(let i = 0; i < brr.length; i++) {
    if(!brrMap[brr[i]]) {
      brrMap[brr[i]] = 1;
    } else {
      brrMap[brr[i]]++;
    }
  }
  
  //remove all instances of a num in array arr from array brr
  //left new map with same keys with different values
  for(let i = 0; i < arr.length; i++) {
    if(Object.hasOwnProperty.call(brrMap, arr[i])) {
      brrMap[arr[i]]--;
    }
  }
  
  let numKeys = Object.entries(brrMap);
  // add any key that still has value (not accounted for) into the missing group
  for(const [key, value] of numKeys) {
    if(value > 0) {
      missing.push(parseInt(key));
    }
  }
  
  //return the missing, sorted in numerical order
  return missing.sort((a, b) => a - b);
}
