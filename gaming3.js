window.onload = function() {
	const score1 = localStorage.getItem('score');
	const score3 = Number.isInteger(parseInt(score1));
	document.getElementById('poggers').value = '';
	if (score3 === true) {
		console.log('good');
	}
	else if (score3 === false) {
		console.log('bye bye');
		localStorage.setItem('score', 0);
		window.location.reload();
	}
	else {
		console.log('how?');
	}
	const cringe2 = localStorage.getItem('score');
	score2.textContent = cringe2;
};
const score2 = document.getElementById('score');
const num1 = document.getElementById('pog');
const num2 = document.getElementById('pog2');
const awnser = document.getElementById('awnser');
const awnserg = document.getElementById('awnserg');
const awnserb = document.getElementById('awnserb');
const input = document.getElementById('poggers');
const button = document.getElementById('pepega');
const button2 = document.getElementById('pepega2');

const num11 = Math.floor(Math.random() * 12) + 1;
const num22 = Math.floor(Math.random() * 12) + 1;
awnser.textContent = num11 * num22;

num1.textContent = num11;
num2.textContent = num22;
let score = parseInt(localStorage.getItem('score'));
// enter go brrrrr
window.addEventListener('keydown', (e) => {
	if (e.key === 'Enter') {
		check();
	}
});
// button go brrr
button.addEventListener('click', () => {
	check();
});
button2.addEventListener('click', () => {
	localStorage.setItem('score', 0);
	window.location.reload();
});
function check() {
	if (input.value == awnser.textContent) {
		awnserg.style.display = 'block';
		score += 1;
		score2.textContent = score;
		localStorage.setItem('score', score);
		setTimeout(function() {
			window.location.reload();
		}, 1000);
	}
	else if (input.value !== awnser.textContent) {
		awnserb.style.display = 'block';
		setTimeout(function() {
			window.location.reload();
		}, 1000);
	}
}