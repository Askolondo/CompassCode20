// Datatypes in computer languages
var text = "Hello World"; //String
var number = 40046; //Integer
var char = "@";
var degree = 50.16; //float
var isHungry = false //Boolean false or true
var students = [
  "Enzo",
  "Jenny",
  "Patricia",
  "Hannatu",
  "Ivan",
  "Jessica",
  "Lata"
]

// Backend Commands
console.log("Hello World");
console.warn(text + " " + degree + " " + isHungry);
console.info(students[2] + " " + students[6]);
// Frontend Commands
// alert("The Answer for" + 1000 +  "Everything is number: " + number);

//TODOLIST FUNCTIONS
function AddTodo() {
  console.log("Started the AddTodo Function");
  // extracting the text aka. value of the input field
  var fieldValue = document.querySelector(".myInput").value;

  if (fieldValue === "") {
    alert("Cant Add Empty Todo");
  } else {
    console.log(fieldValue);
    var textNode = document.createTextNode(fieldValue);

    //variable newListItem, will create an empty ListItem aka. li everytime the function is triggerd
    var newListItem = document.createElement("li");
    newListItem.appendChild(textNode); //append the 2D Text that was converted into a textnode to the empty listitem

    // when the text has been extracted, converted into a 2D modul with textNode and packed into an emtpy ListItem, then we can assign that ListItem with its TextNode as a child of the unordered list in html.
    document.querySelector(".myUL").appendChild(newListItem);

    //   resetting the input field after successfully adding a todoItem
    document.querySelector(".myInput").value = " ";
  }

}