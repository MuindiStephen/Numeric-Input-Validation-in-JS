
function myFunction() {
	// body...

let x = document.getElementById('num').value;
let y;

if(isNaN(x) || x < 1 || x > 20){
	y = "Input Not OK"
}
else {
	y = "Input OK";
}
document.getElementById('demo').innerHTML = y;

}