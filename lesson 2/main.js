'use strict';

let budget = +prompt("Ваш бюджет на месяц?" , "5000"),
	date = prompt ("Введите дату в формате YYYY-MM-DD", "2019-01-01"),
	appData = {
		budget: budget,
		timeData: date,
		expenses: {},
		optionalExpenses: {},
		income: [],
		savings: false
	};

for ( let i = 0; i < 2; i++ ){
	let a = prompt('№' + (i+1) + ' Введите обязательную статью расходов в этом месяце', ''),
		b = prompt('№' + (i+1) + ' Во сколько обойдется ?', '');

	if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50 ){
		console.log("done");
		appData.expenses[a] = b;
	} else {
		i = (i-1);
	}
};

appData.moneyPerDay = appData.budget / 30 ;

alert('Ваш ежедневный бюджет :' + appData.moneyPerDay + ' $/day');

if (appData.moneyPerDay < 100 ){
	console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ){
	console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000 ){
	console.log("Высокий уровень достатка");
} else {
	console.log("Произошла ошибка");
}