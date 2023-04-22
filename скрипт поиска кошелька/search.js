let inputField = document.getElementById('input_field');
let outputField = document.getElementById('result');
let resultFind = document.querySelector('text-result-find');
let fieldResult = document.getElementById('field-result');

let arr = [
	"0000",
	"0323",
	"0423",
	"0523",
	"5623",
	"7823",
	"4523",
	"2323",
	"4323",
	"7923",
	"2356",
	"6754",
	"6789",
	"2334",
	"0023",
	"5678",
	"4144",
	"6756",
	"6754",
];


outputField.addEventListener('click', search);



function search() {
	for (let i = 0; i < arr.length; i++) {
		if (inputField.value === arr[i]) {
			fieldResult.value = inputField.value;
			fieldResult.value = 'Кошелек найден';
		} else {
			resultFind.innerHTML = "Кошелек не найден";
		}

	}
}