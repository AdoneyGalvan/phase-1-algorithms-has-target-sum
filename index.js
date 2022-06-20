function hasTargetSum(array, target) {
  // Write your algorithm here

  // Sort the array
  const sortedArray = array.sort(function(a, b) {
    return a - b;
  });

  // Loop through every index
  for (let i = 0; i < sortedArray.length; i++)
  {
    // Set the start of the binary search
    let start = 0;

    // Set the end of the binary search
    let end = sortedArray.length;

    // Calculate the complement to search for 
    let complement = target - sortedArray[i];
  
    debugger
    // Loop through the array elminating the parts that do not contain the complement
    while (start <= end) {

      let mid = Math.floor((start + end) / 2);
        
      if (sortedArray[mid] === complement ) 
      {
        if(mid != i)
        {
          return true;
        }
      }

      if (sortedArray[mid] < complement) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
