// Write your code here!
const main=document.querySelector("#main");

main.parentElement.removeChild(main);

const newHeader= document.createElement("h1");
newHeader.setAttribute('id','victory');
newHeader.innerHTML="Kenneth is the champion";

document.body.appendChild(newHeader);






