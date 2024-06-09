 // to get values
 let numbers = document.querySelectorAll(".number");
 numbers.forEach(number => {
     number.addEventListener("click", function () {
         document.querySelector("#getvalue").value += this.textContent;
     });
 });


 //For Result
 function finalResult() {
     let x = document.getElementById("getvalue").value;
     let y = eval(x);
     document.getElementById("getvalue").value = y;
 }


 // clear screen function
 document.querySelector("#clearOne").addEventListener("click", clearOne);
 document.querySelector("#clrE").addEventListener("click", clear);
 function clear() {
     document.querySelector("#getvalue").value = "";
 };
 
 function clearOne() {
     let val = document.getElementById("getvalue").value;
     let a = val.slice(0, -1);
     document.getElementById("getvalue").value = a;
 };


 // positive Negative
 document.querySelector("#Negative").addEventListener("click", function () {
     let val = document.getElementById("getvalue").value;
     let a = val * (-1);
     document.getElementById("getvalue").value = a;
 });


 // Power
 document.querySelector("#sqPow").addEventListener("click", function () {
     let a = document.getElementById("getvalue").value;
     let b = Math.pow(a, 2);
     document.getElementById("getvalue").value = b;
 });


 //root
 document.querySelector("#sqRoot").addEventListener("click", function () {
     let a = document.getElementById("getvalue").value;
     let b = Math.sqrt(a, 2);
     document.getElementById("getvalue").value = b;
 });


 //1 / upon value
 document.querySelector("#upn").addEventListener("click", function () {
     let val = document.getElementById("getvalue").value;
     let a = 1 / val;
     document.getElementById("getvalue").value = a;
 });