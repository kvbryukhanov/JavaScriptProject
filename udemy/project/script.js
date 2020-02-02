
let money = prompt("Ващ бюджет на месяц?");//budjet per month
let time; prompt("Введите дату в формате YYYY-MM-DD");//
let appData = {
    budjet : null,
    timeData: null,
    expenses : {},
    optionalExpenses : {},
    income : [],
    saving : false
};

appData.budjet = money;
appData.timeData = time;    

for (let i = 0; i < 2; i++)
{
    let expenseItem = prompt("введите обязательную статью расходов");
    appData.expenses[expenseItem] = prompt("во сколько обойдется?");
}
   

let dayBudjet = Number(appData.budjet);
for (let key in appData.expenses) {
    dayBudjet -= Number(appData.expenses[key]);  
}

dayBudjet /= 30;

alert(`Бюджет на день ${dayBudjet}`);

