function onclick1(){
let a = document.getElementById('1').value;
let b = a.split('').sort();
let c = b;

let tableRef = document.getElementById(2);
let g = document.getElementById(2).rows.length; 

count = 0;

if (g > 1){
	for (i = 1; i < g; i += 0){
		tableRef.deleteRow(i);
		g -= 1;
}
};


function main1() {
let d = c.filter((element) =>{
	return element === c[0]});
for (x in d){
	c.shift();
}
//console.log(d[0] + ': ' + d.length);

// Get a reference to the table
//let tableRef = document.getElementById(2);

// Insert a row in the table at row index 0
let newRow = tableRef.insertRow();

// Insert a cell in the row at index 0
let newCell = newRow.insertCell();
let newCell2 = newRow.insertCell();
let newCell3 = newRow.insertCell();

// Append a text node to the cell

let newText = document.createTextNode(count += 1);
let newText2 = document.createTextNode(d[0]);
let newText3 = document.createTextNode(d.length);
newCell.appendChild(newText);
newCell2.appendChild(newText2);
newCell3.appendChild(newText3);
	
}
	
for (i in a) {
	if (c.length > 0){
		main1();
	}
}

};