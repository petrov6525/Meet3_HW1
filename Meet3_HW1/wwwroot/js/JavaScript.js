
var ar = [];


function ShowBlocks(isTwo) {
	


	let root = document.getElementById("root");


	for (i = 0; i < 10; i++) {
		let count = GetCount();

		root.appendChild(RenderBlock(count,isTwo));

	}

	console.log(ar);

}

function GetCount() {
	let count = GetRandomInDiap(1, 10);

	if (ar.includes(count)) {
		return GetCount();
	}
	else {
		ar.push(count);
		return count;
	}
}

function GetRandomInDiap(min, max) {

	return Math.floor(Math.random() * (max - min + 1)) + min;
}


function RenderBlock(count,isTwo) {
	let div = document.createElement("div");

	let p1 = document.createElement("p");

	p1.innerText = `Question ${count}`;

	div.appendChild(p1);

	let p2 = document.createElement("p");

	let input = document.createElement("input");
	input.type = "checkbox";
	input.name = "Correct";

	p2.appendChild(input);

	let span = document.createElement("span");
	span.innerText = `Answer ${count}`;

	p2.appendChild(span);

	input = document.createElement("input");
	input.type = "checkbox";
	if (isTwo) input.name = "Correct";

	p2.appendChild(input);

	span = document.createElement("span");
	span.innerText = isTwo?`Answer ${count}`:"Answer 2";

	p2.appendChild(span);

	input = document.createElement("input");
	input.type = "checkbox";

	p2.appendChild(input);

	span = document.createElement("span");
	span.innerText = `Answer 3`;

	p2.appendChild(span);

	div.appendChild(p2);


	return div;
}

