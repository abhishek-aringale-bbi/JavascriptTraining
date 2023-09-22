let newItem = document.getElementById("newItem");
let addItem = document.getElementById("addItem");
let removeLast = document.getElementById("removeLast");
let remaining = document.getElementById("remaining");
let itemarr = document.getElementById("itemList");

let obj = {};
let ct = 0;
function addtoJson() {
  let text = newItem.value;
  if (text !== "") {
    obj[`${ct}`] = text;
    ct++;
    remaining.textContent++;
  } else {
    alert("text cannot be empty");
  }
  return JSON.stringify(obj);
}
let json;
addItem.addEventListener("click", function () {
  json = addtoJson();
  console.log(json);

  add();
});

let obj1;
function add() {
  obj1 = JSON.parse(json);
  let li;
  itemarr.innerHTML = "";

  for (prop in obj1) {
    li = document.createElement("li");
    li.innerHTML = `<span>${obj[prop]}</span> <button class="delete"> Delete </button>`;
    itemarr.appendChild(li);
  }
  newItem.value = "";
}

itemarr.addEventListener("click", function (e) {
  if (e.target.tagName == "BUTTON") {
    remove(e.target.closest("li"));
  }
});

function remove() {
  let last = itemarr.lastElementChild;

  if (itemarr.children.length === 0) {
    alert("no elements remaining to delete");
  } else {
    let par1 = document.querySelectorAll("li:not(.completed)");
    if (par1.length == 0) {
      return;
    } else if (par1.length > 0) {
      par1[par1.length - 1].remove();
    } else {
      console.log(obj1);
      itemarr.removeChild(last);
      remaining.textContent = itemarr.children.length;
      console.log(last);
      // console.log(obj1);
      let x = Object.keys(obj1).length;
      delete obj1[x - 1];
      console.log(obj1);
      obj = obj1;
    }
  }
}

removeLast.addEventListener("click", remove);

let delet = document.getElementsByClassName("delete");
itemarr.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    //   console.log(e.target.children[1]);
    if (e.target.children[1]) {
      e.target.children[1].remove();
    }
    e.target.classList.add("completed");
    obj = remaining.textContent--;

    // let par = document.querySelectorAll("li:(.completed)");
    // par[par.length - 1].remove();
    // console.log(par);
    // console.log(obj1);
  }
});

// function add() {
//   let text = newItem.value;
//   if (text == "") {
//     alert("Enter valid text");
//     return;
//   }

//   let li = document.createElement("li");
//   li.innerHTML = `${text} <button class="delete"> Delete </button>`;
//   itemarr.appendChild(li);

//   newItem.value = "";
//   remaining.textContent++;

//   console.log(itemarr.children.length);

//   //   let del = document.getElementsByClassName("delete");
//   //   console.log(del);
//   //   let current = li.querySelector("delete");
//   //   current.addEventListener("click", function () {
//   //     itemarr.removeChild(li);
//   //   });
// }

// function removelast() {
//   let items = itemarr.children.pop();
// }
// addItem.addEventListener("click", add);
