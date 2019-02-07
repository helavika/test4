'use strict'

var lang = [
	{ 
		language: 'english',
		keyboard: {
			1: 'qwertyuiop',
			2: ']asdfghjkl;\'',
			3:'zxcvbnm,./"'
		}
	},

	{ 
		language: 'русский',
		keyboard: {
			1: 'йцукенгшщзхъ',
			2: 'фывапролджэ',
			3: 'ячсмитьбю."'
		}
	},

	{ 
		language: 'українська',
		keyboard: {
			1: 'йцукенгшщзхї',
			2: 'фівапролджє',
			3: 'ячсмитьбю."'
		}
	}
]

let symbol;

let index;

let i;

var chooseLang = prompt(`Select the language: ${lang[0].language}, ${lang[1].language}, ${lang[2].language}`);

switch (chooseLang) {

	case '1':
		symbol = prompt(`Choose some`);
	break;

	case '2':
		symbol = prompt(`Впиши символ`);
	break;

	case '3': 
		symbol = prompt(`Будь що`)
	}

function find (lang, symbol) {

	for (var i = 0; i < lang.length; i++) {

		const obj = lang[i];

		const keyboard = obj.keyboard;

		const keys = Object.keys(keyboard);

		keys.forEach((key, i) => {
			const string = keyboard[key];

			index = string.indexOf(symbol);
		});

		alert(`${index} - ${i}`) 
	}
}

find (lang, symbol)
