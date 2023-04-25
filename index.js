// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Multiplication table</h1>`;

// Your task, is to create N×N multiplication table, of size provided in parameter.
// For example, when given size is 3:
// 1 2 3
// 2 4 6
// 3 6 9

const multiplicationTable = size => {
   let table = [];
  for (let i = 1; i <= size; i++) {
    let row = [];
    for (let j = 1; j <= size; j++) {
      row.push(i * j);
    }
    table.push(row);
  }
  return table;
}

console.log(multiplicationTable(3))
console.log(multiplicationTable(4))
console.log(multiplicationTable(2))
console.log(multiplicationTable(1))

