/*
* Excercise 1
*
*/

const square = document.getElementById('color-block');
const colorText = document.getElementById('color-name');
square.addEventListener("click", () =>{
  changeColor();
});


function changeColor(){
    const color = square.getAttribute("class");
    //Write a condition determine what color it should be changed to
      if(color === "color1") {
          square.setAttribute ("class", "color2");
          colorText.innerHTML = "#FA8223";
      }
      else {
        square.setAttribute ("class", "color1");
        colorText.innerHTML = "#F08080";
      }
}


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/
const button = document.getElementById('convertbtn');
const cText = document.getElementById('c-output');
button.addEventListener("click", () =>{
  convertTemp();
});

/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(){
  const fValue = document.getElementById('f-input').value;
  console.log(fValue);
  cValue = (fValue - 32)*(5/9);
  console.log(cValue);
  cText.innerHTML = cValue;
    //Calculate the temperature here

    //Send the calculated temperature to HTML

}
