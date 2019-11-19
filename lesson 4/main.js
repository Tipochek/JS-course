'use strict';

let date,
	budget,
	appData = {};

function start() {
	budget = +prompt("Ваш бюджет на месяц?" , "70000");

	while( isNaN(budget) || budget == "" || budget == null ) {
		budget = +prompt("Ваш бюджет на месяц?" , "");
	}
	appData.budget = budget;

	date = prompt("Введите дату в формате YYYY-MM-DD", "2019-01-01");
}
start();

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
			let save = +promt("Какова сумма накоплений?", "1000"),
				percent = +promt("Под какой процент?", "12");

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
		let items = prompt("Что принесет дополнительный доход (перечислите через запятую)", "");
		appData.income = items.split(", ");
		appData.income.push(prompt("Мoжет что-то еще?"));
		appData.income.sort();
	}
};