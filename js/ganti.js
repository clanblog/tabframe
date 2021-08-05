function myFunction1() {
  let str = document.getElementById("data").innerHTML; 
  document.getElementById("data").innerHTML = str.replace
  ("a", "iframe");;
 
}
myFunction1();
function myFunction2() {
  let str = document.getElementById("data").innerHTML; 
  document.getElementById("data").innerHTML = str.replace("href", "src");;

}
  myFunction2();
function myFunction3() {
  let str = document.getElementById("data").innerHTML; 
  document.getElementById("data").innerHTML = str.replace("watch?v=", "embed/");;

}
  myFunction3(); 
