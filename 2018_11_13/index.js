var header = document.getElementById('Name');
var content = document.getElementById('text');

var input = prompt('What is header?');

header.appendChild(document.createTextNode(input));

var numP = parseInt(prompt('How many paragraph?'));

for (var i = 1; i <= numP; i++) {
	input = prompt('Enter paragraph ' + i);
	var newP = document.createElement('p');
	newP.innerText = input;

	content.appendChild(newP);

}