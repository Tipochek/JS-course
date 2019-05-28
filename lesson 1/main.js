'use strict';

let budget = prompt("Ваш бюджет на месяц?" , "1000"),
	date = prompt ("Введите дату в формате YYYY-MM-DD", "2019-01-01"),
	exp1 = prompt('Введите обязательную статью расходов в этом месяце', '1'),
	exp2 = prompt('Во сколько обойдется ?', '2'),
	exp3 = prompt('Введите обязательную статью расходов в этом месяце', '3'),
	exp4 = prompt('Во сколько обойдется ?', '4'),
	expenses = {},
	appData = {
		budget: budget,
		timeData: date,
		Expenses: expenses,
		optionalExpenses: {},
		income: [],
		savings: false
	};

expenses[exp1] = exp2;
expenses[exp3] = exp4;

alert('Ваш ежедневный бюджет :' + budget/30 + '$/day' );

/*

Вопросы к этому заданию

1) Сколько типов данных существует в JS?  ---  6 + symbol  (string, number, object, boolean, NULL, undefined)

2) Как вывести информацию в консоль?      ---  console.log();

3) Какая функция операторов || и &&?      ---  logical "or' and "and"

*/