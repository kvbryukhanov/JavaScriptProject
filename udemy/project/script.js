
let money = prompt("Ващ бюджет на месяц?");//budjet per month
let time = prompt("Введите дату в формате YYYY-MM-DD");//
let appData = {
    budjet : money,
    timeData: time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    saving : false
};   

// вариант цикла 1
for (let i = 0; i < 2; i++) {
    let expenseItem = prompt("введите обязательную статью расходов");
    let howDoesItCoast = prompt("во сколько обойдется?");
    if ( typeof(expenseItem) === "string" && typeof(expenseItem != null) && 
        typeof(howDoesItCoast) != null && expenseItem != "" &&
        howDoesItCoast != "" && expenseItem.length <= 50) {
            console.log("done");
            appData.expenses[expenseItem] = howDoesItCoast;
    } else {
        i --;
        alert("Некорректные данные! Попробуйте ещё раз");
        continue;        
    }  
}
/*
// вариант цикла 2
let i = 0;//счетчик цикла ниже
do {
    let expenseItem = prompt("введите обязательную статью расходов");
    let howDoesItCoast = prompt("во сколько обойдется?");
    if ( typeof(expenseItem) === "string" && typeof(expenseItem != null) && 
        typeof(howDoesItCoast) != null && expenseItem != "" && 
        howDoesItCoast != "" && expenseItem.length <= 50) {
            console.log("done");
            appData.expenses[expenseItem] = howDoesItCoast;
    } else {
        alert("Некорректные данные!");
        continue;
    } 
    i++;
} while (i < 1);

// вариант цикла 3
let j = 0;
while (j < 2) {
    let expenseItem = prompt("введите обязательную статью расходов");
    let howDoesItCoast = prompt("во сколько обойдется?");
    if ( typeof(expenseItem) === "string" && typeof(expenseItem != null) && 
        typeof(howDoesItCoast) != null && expenseItem != "" && 
        howDoesItCoast != "" && expenseItem.length <= 50) {
            console.log("done");
            appData.expenses[expenseItem] = howDoesItCoast;
    } else {
        alert("Некорректные!");
        continue;
    }
    j++;
}
*/

// let dayBudjet = Number(appData.budjet);
// for (let key in appData.expenses) {
//     dayBudjet -= Number(appData.expenses[key]);  
// }
//dayBudjet /= 30;
//alert(`Бюджет на день ${dayBudjet}`);
let dayBudjet = +appData.budjet / 30;
alert(`Бюджет на ден: ${dayBudjet}`);

switch (dayBudjet) {
    case dayBudjet < 100:
        alert("Мало очень будет ((");
        break;
    /*case (dayBudjet >= 100 && dayBudjet < 500):
        alert("Пойдет...");
        break;*/
    case dayBudjet >= 100:
        alert("Ну, теперь заживем!");
        break;
    default :
        alert("Ooooops...");
        break;   
}

