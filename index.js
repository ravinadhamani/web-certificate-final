// JavaScript code
function search_team() {
	let input = document.getElementById('example').value
	input=input.toLowerCase();
	let x = document.getElementsByClassName('fa fa-search');
	
	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display="none";
		}
		else {
			x[i].style.display="list-item";				
		}
	}
}
