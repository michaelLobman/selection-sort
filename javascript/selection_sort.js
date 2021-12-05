function selectionSort(arr) {

  let sorted = [];
  let times = arr.length

  for (let i = 0; i < times; ++i) { 

    let min = Math.min(...arr);
    let index = arr.indexOf(min)

    sorted.push(min);

    arr.splice(index, 1);

  }

  return sorted;

  // type your code here
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("Expecting: [3, 22, 55, 100]");
  console.log("=>", selectionSort([100, 22, 3, 55]));

  console.log("");


  // BENCHMARK HERE, and print the average runtime

  const startTime = Date.now();

  let shortCount = 0;

  while (shortCount < 1000) {
    const shortInput = [];

    for (let i = 0; i < 3; ++i) {
      shortInput.push(Math.random())
    }

    selectionSort(shortInput)
    shortCount++

  }

  let longCount = 0

  while (longCount < 1000) {

    const longInput = [];

    for (let i = 0; i < 100; ++i) {
      longInput.push(Math.random());
    }

    selectionSort(longInput)
    longCount++

  }

  const finishTime = Date.now();

  const avgTime = (finishTime - startTime) / 2000


  console.log(`Average time for selectionSort() is ${avgTime} seconds`);


}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution

/*

I need to write an algorithm that sorts an array from least to greatest

it does this by remove the lowest element of the arr and adding that to a new

array.

then iterating through the arr again..., for the length of the array...

*/