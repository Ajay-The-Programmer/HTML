let superheroes = [
  {
    name: "Thor",
    age: 1500,
    planet: "Asgard",
    height: "6.3",
  },
  {
    name: "Iron Man",
    age: 34,
    planet: "Earth",
    height: "5.10",
  },
  {
    name: "Captain America",
    age: 101,
    planet: "Earth",
    height: "6",
  },
];

display(superheroes);
function display(superarray) {
  let tableData = "";
  superarray.forEach(function (superhero, index) {
    let curruntrow = `<tr>
    <td>${index + 1}</td>
    <td>${superhero.name}</td>
    <td>${superhero.age}</td>
    <td>${superhero.planet}</td>
    <td>${superhero.height}</td>
    <td><button onclick="deletSuperhero(index)">Delete</button></td>
    </tr>`;

    tableData += curruntrow;

    let name = (document.getElementById("name").value = "");
    let age = (document.getElementById("age").value = "");
    let planet = (document.getElementById("planet").value = "");
    let height = (document.getElementById("height").value = "");
  });
  document.getElementById("tdata").innerHTML = tableData;
}

function addSuperhero(event) {
  event.preventDefault();
  let superhero = {};
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let planet = document.getElementById("planet").value;
  let height = document.getElementById("height").value;

  superhero.name = name;
  superhero.age = Number(age);
  superhero.planet = planet;
  superhero.height = height;

  superheroes.push(superhero);
  display(superheroes);
}

function searchByName() {
  let searchValue = document.getElementById("searchName").value;
  console.log(searchValue);

  let newData = superheroes.filter(function (superhero) {
    return (
      superhero.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
    );
  });
  display(newData);
}

function deletSuperhero(index) {
  superheroes.splice(index, 1);
  display(superheroes);
}
