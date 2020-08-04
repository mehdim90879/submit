/* Lab 6, Task 2.  Use the prototype library */
var i = 0;
var m = 0;
var n = 0;
window.onload = function() {
	//document.getElementById("input1").onkeypress = keyPress;
	document.getElementById("input1").observe("keydown", keyPress);
	i++;
	document.getElementById("input2").onkeypress = keyPress1;
	m++;
	document.getElementById("input3").onkeypress = keyPress2;
	n++;
	document.getElementById("submitButton").onclick = sending;
}

function keyPress() {
 // document.getElementById("input1").value = "";
 if (i == 1)
 {document.getElementById("input1").value = "";}
 ++i;
}
function keyPress1() {
  if (m == 1)
 {document.getElementById("input2").value = "";}
 ++m;
}
function keyPress2() {
  if (n == 1)
 {document.getElementById("input3").value = "";}
 ++n;
}

function sending() {
	if (document.getElementById("input1").value == "" ||
	document.getElementById("input2").value == "" ||
	document.getElementById("input3").value == "")
	{document.getElementById("ErrorMessage").innerHTML =
	"One of your fields have an error!"}
	else
	{document.getElementById("myForm").submit();}
}
