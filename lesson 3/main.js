'use strict';

let budget, date,
	appData = {
		budget: budget,
		timeData: date,
		expenses: {},
		optionalExpenses: {},
		income: [],
		savings: false
	};

function detectDayBudget() {
	budget = +prompt("Ваш бюджет на месяц?" , "5000");
	date = prompt ("Введите дату в формате YYYY-MM-DD", "2019-01-01");

	while( isNaN(budget) || budget == "" || budget == null ) {
		budget = +prompt("Ваш бюджет на месяц?" , "5000");
	}
	appData.budget = budget;
}
detectDayBudget();

appData.moneyPerDay = (appData.budget / 30).toFixed(1);

alert('Ваш ежедневный бюджет : ' + appData.moneyPerDay + ' $/day');

function detectLevel() {
	if (appData.moneyPerDay < 100 ){
		alert("Минимальный уровень достатка");
	} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ){
		alert("Средний уровень достатка");
	} else if (appData.moneyPerDay > 2000 ){
		alert("Высокий уровень достатка");
	} else {
		alert("Произошла ошибка");
	}
}
detectLevel();


function chooseOptExpenses() {
	for ( let i = 1; i < 4; i++ ){
		let a = prompt('№' + i + ' Статья необязательных расходов');

		if ( (typeof(a)) === 'string' && (typeof(a)) != null && a != '' ){
			appData.optionalExpenses[i] = a;
		} else {
			i = (i-1);
		}
	};
}
chooseOptExpenses();