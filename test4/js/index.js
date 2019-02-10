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

// перебор всего массива на предмет элементов со свойством language 

let chooseLangMessage = ''

lang.forEach(function(elem, i){
	const langName = elem.language
	chooseLangMessage += ` ${i+1} - ${langName}` 
})


const findSymbol = function(symbolChoice) {
	const userSymbolChoice  = prompt('Choise keyboard symbol');

	const keyboard = lang[symbolChoice].keyboard;

	const keyBoardKeys = Object.keys(keyboard); // собираем ключи объекта

	let answer = 'Not found...'

	// засовываем ключи в массив

	Array.from(keyBoardKeys, function(keyRow) {
		const keyBoardRow = keyboard[keyRow]

		const symbolPosition = keyBoardRow.indexOf(userSymbolChoice)

		if(symbolPosition !== -1) {
			answer = `Your symbol is in row ${keyRow} on position ${symbolPosition+1}`
		}

	})

	alert(answer);
}

const langChoiсe = function () {
	var chooseLang = prompt(`Select the language: ${chooseLangMessage}`);

	if(isNaN(chooseLang)) {
		alert('Enter the number');
		langChoiсe()
	} else if (chooseLang < 0 || chooseLang > lang.length) {
		alert('Wrong choise, try again')
		langChoiсe()
	} else {
		findSymbol(chooseLang-1) 
	}
}

langChoiсe()
