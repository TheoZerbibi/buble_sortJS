const readline = require('readline-sync');
const tab = readline.question("Entrer des nombres : ");

main(tab);

function buble_sort(tab) {
	console.log(`\nTab Start :`);
	console.log(tab);
	console.log('\n Algo :');
	let i = 0;
	let leng = tab.length;
	let temp;
	while (leng !== 1) {
		while (i !== leng) {
			let y = i + 1;
			if (tab[i] > tab[y]) {
				temp = tab[i];
				tab[i] = tab[y];
				tab[y] = temp;
				console.log(tab);
				y++;
			}
			i++;
		}
		leng--;
		i = 0;
	}
	console.log(`\nTab End :`);
	console.log(tab);
}

function array(tab) {
	let newTAB = new Array(null);
	let i = 0;
	let y = 0;
	let x = 0;
	while (i != tab.length) {
		if (tab[i] == ' ') {
			newTAB[x] = Number(tab.slice(y, i));
				y = i + 1;
			x++;
		}
		i++;
	}
	newTAB[x] = Number(tab.slice(y, i));
	return (newTAB);
}

function check(tab) {
	let i = 0;
	while(i < tab.length) {
		if (isNaN(tab[i]) == true) {
			console.log('Nombres invalide !');
			break ;
		}
		i++;
	}
	return(tab);
}

function main(tab) {
	tab = array(tab);
	tab = check(tab);
	if (tab.length <= 1) {
		console.log('Entrez au-moins deux nombres');
		return (0);
	}
	buble_sort(tab);
}