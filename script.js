let btn1 = document.getElementById("myButton");
let btn2 = document.getElementById("myButton2");
  let copyDiv = document.querySelector(".copycode");
  let rgb1 ="#0000";
  let rgb2= "#ffff";

const hexvalue = ()=>
{
    let myHexaValues = "0123456789abcdef";
    let colors = "#";
    for(i=0; i<6;i++)
    {
        colors = colors + myHexaValues[Math.floor(Math.random() * 16)];
       
    };
    return colors;
};
const handleButton1 = () => {
 rgb1 = hexvalue();
   console.log(rgb1);
   btn1.innerText = `${rgb1}`;
   document.body.style.backgroundImage=`linear-gradient(to right , ${rgb1},${rgb2}  )`; 
   copyDiv.innerHTML = ` backgroundImage= linear-gradient(to right , ${rgb1},${rgb2}  )`;

};
const handleButton2 = () => {
  rgb2 = hexvalue();
   console.log(rgb2);
   btn2.innerText = `${rgb2}`;
   btn2.innerHTML.style = `${rgb1}`;
   document.body.style.backgroundImage=`linear-gradient(to right , ${rgb1} ,${rgb2} )`; 
   copyDiv.innerHTML = ` backgroundImage= linear-gradient(to right , ${rgb1} ,${rgb2} )`;

};
btn1.addEventListener("click", handleButton1);
btn2.addEventListener("click", handleButton2);