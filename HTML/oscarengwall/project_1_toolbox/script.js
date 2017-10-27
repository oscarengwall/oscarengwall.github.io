console.log("Hello");
alert("hi!");

document.getElementById("Hello").innerHTML = "Put some text here!";

console.log(0.2345*1000);
console.log(2+5);
console.log(7+8);

console.log(Math.random()*100);

if (5<4) {
	console.log("it is true") 

}
else {
	console.log("it is false")
}

function printApples(nrApples) {
	while (nrApples<15){
		console.log("I have an apple");
		nrApples+=1;
	}
}

printApples(10);


document.getElementById("home").inerHTML = alert("You are home");