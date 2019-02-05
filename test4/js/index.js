'use strict'

var lang = [
	{ 
		language: "english",
		keyboard: {
			1: 'qwertyuiop',
			2: ']asdfghjkl;\'',
			3:'zxcvbnm,./"'
		}
	},

	{ 
		language: "русский",
		keyboard: {
			1: 'йцукенгшщзхъ',
			2: 'фывапролджэ',
			3: 'ячсмитьбю."'
		}
	},

	{ 
		language: "українська",
		keyboard: {
			1: 'йцукенгшщзхї',
			2: 'фівапролджє',
			3: 'ячсмитьбю."'
		}
	}
]

function langChoice() {
	var chooseLang = prompt(`Select the language: ${lang[0].language}, ${lang[1].language}, ${lang[2].language}`);
	
	switch (chooseLang) {
		case '1':
			var symbol = prompt(`Choose some`);
			break;
		case '2':
			var symbol = prompt(`Впиши символ`);
			break;
		case '3': 
			var symbol = prompt(`Будь що`)
	}

	// function find(array, value) {
 //      for (var i=0; i<array.length; i++)
 //      if (array[i].indexOf(value) != -1) {return [i,array[i].indexOf(value)]  }
 //      return -1
	// }

	alert(find(lang, symbol));
}
langChoice();







