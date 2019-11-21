'use strict';

let date,
	budget,
	appData = {};

appData = {
	budget: budget,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: date,
	savings: true,
	detectDayBudget: function() {
		appData.moneyPerDay = (appData.budget / 30).toFixed(1);
		alert('Ваш ежедневный бюджет : ' + appData.moneyPerDay + ' $/day');
	},
	detectLevel: function() {
		if (appData.moneyPerDay < 100 ){
			alert("Минимальный уровень достатка");
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ){
			alert("Средний уровень достатка");
		} else if (appData.moneyPerDay > 2000 ){
			alert("Высокий уровень достатка");
		} else {
			alert("Произошла ошибка");
		}
	},
	checkSavings: function() {
		if (appData.savings == true) {
			let save = +prompt("Какова сумма накоплений?", "1000"),
				percent = +prompt("Под какой процент?", "7");

			appData.monthIncome = save/100/12*percent;
			alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
		}
	},
	chooseOptExpenses: function() {
		for ( let i = 1; i < 4; i++ ){
			let a = prompt('№' + i + ' Статья необязательных расходов');

			if ( (typeof(a)) === 'string' && (typeof(a)) != null && a != '' ){
				appData.optionalExpenses[i] = a;
			} else {
				i = (i-1);
			}
		}
	},
	chooseIncome: function() {
		let items = prompt("Что принесет дополнительный доход (Перечислите через запятую)", "аренда, квартплата, бизнес");
		let a = '';

		function addMore(){
			a = prompt("Мoжет что-то еще?", "долг2, долг3, долг1");

			if ( a === '') {
				addMore();
			} else if ( a === null ) {
				return;
			} else {
				items = items + ", " + a;
			}
		}

		if ( items === '' || items === null ) {
			appData.chooseIncome();
		} else if (items.length > 0 ) {
			addMore();
			appData.income = items.split(", ");
			appData.income.sort();
		}

		console.log("Способы доп. заработка: " + "\n" + "(" + appData.income + ")" );
		appData.income.forEach(function(item, i, arr) {
			console.log( (i + 1) + ": " + item );
		});
	}
};

function budgetInput() {
	budget = +prompt("Ваш бюджет на месяц?" , "70000");

	while( isNaN(budget) || budget == "" || budget == null ) {
		budget = +prompt("Ваш бюджет на месяц?" , "");
	}
	appData.budget = budget;

	date = prompt("Введите дату в формате YYYY-MM-DD", "2019-01-01");
}

function start (){
	// budgetInput();
	// appData.detectDayBudget();
	// appData.detectLevel();
	// appData.checkSavings();
	// appData.chooseOptExpenses();
	appData.chooseIncome();
}
start();

// Вывод всего обьекта
console.log("\n" + "Наша программа включает в себя данные: ");
for (let key in appData) {
	console.log( '"' + key + '"' + ' имеет значение: ' + appData[key]);
}