//Find the lowest number in the array below.

const heights2 = [167, 990, 120, 200, 137, 500];

let height1 = heights2[0];

for (height of heights2) {
  if (height > height1) {
    height1 = height;
  }
}
console.log(height1);
