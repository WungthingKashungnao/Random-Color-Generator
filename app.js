
const btn = document.getElementById("btn");
const changeColor = ()=>{
    //generating random number for hex color
    const randomNumber = Math.floor(Math.random()*16777215);
    // here we put 16 at toString function so that we convert the random number to hexcode
    const color = "#"+randomNumber.toString(16);

    //changing text of  h1 
    let colorCode = document.getElementById('colorCode');
    colorCode.innerText = color;
    
    // changing background color of main
    const bg  = document.getElementById('main');
    bg.style.backgroundColor = color;
}
// event call to the function changeColor
btn.addEventListener("click",changeColor)
// initial call
changeColor();