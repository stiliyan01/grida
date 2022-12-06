let arrToAdd = [
  { parentId: 1, name: "Talisha Babin", city: "Paris", age: 27 },
  { parentId: 2, name: "Maxim Gagarin", city: "Moscow", age: 34 },
  { parentId: 3, name: "Linda Johansson", city: "Stockholm", age: 29 },
];

let target = document.querySelector(".target");
const grid = new bryntum.grid.TreeGrid({
  appendTo: target,
  columns: [
    { field: "name", text: "Name", flex: 1, type: "tree" },
    { field: "city", text: "City", flex: 1 },
    { type: "number", field: "age", text: "Age", flex: 1 },
  ],

  data: [
    {
      id: 1,
      name: "Dan Stevenson",
      city: "Los Angeles",
      age: 24,
    },
    {
      id: 2,
      name: "dve",
      city: "Los Angeles",
      age: 24,
    },
    {
      id: 3,
      name: "tri",
      city: "Los Angeles",
      age: 24,
    },
  ],
});
grid.tree = true;
grid.isTreeMode = true;
grid.DisplayAsTreeGrid = ["Yes"];
grid.isTreeIconOverride = true;
grid.isTreeGrouped = true;

grid.store.data.forEach((element) => {
  let button = document.createElement(`button`);
  button.setAttribute("id", `${element.id}`);
  button.innerHTML = element.id;
  document.body.appendChild(button);
});

let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", function (event) {
    let buttonID = this.id;
    let parent = null;
    // const newBaby = grid.store.getById(1).appendChild({
    //   name: "Baby",
    //   age: 0,
    // });
    grid.store.data.forEach((el) => {
      if (el.id == buttonID) {
        parent = el;
        let equal = arrToAdd.filter(function (item) {
          console.log(grid.store.getById(parent.parentId).id);
          return item.id == grid.store.getById(parent.parentId).id;
        });
        console.log(equal);
        grid.store.getById(parent.id).appendChild(equal);
      }
    });
  });
});

function neshto(arr) {
  arr.filter((item) => {
    return item.id == parent.id;
  });
}
