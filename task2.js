//Find the friend with the smallest name.

const names = ["rahim", "robin", "rafi", "ronika", "rashed"];

let smallName = names[0];

for (name of names) {
  if (name.length < smallName.length) {
    smallName = name;
  }
}

console.log(smallName);
