/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
    if (hours < 0 || hours > 23)
        return false;
    if (minutes < 0 || minutes > 59)
        return false;
    
    var minutesFromInterval = interval;
    var hoursFromInterval = 0;

    if (interval > 59)
    {
        hoursFromInterval = Math.floor(interval/60); //количество часов в интервале
        minutesFromInterval = interval - (hoursFromInterval * 60);//количество минут в интервале
    }
    if (hoursFromInterval > 23)
        hoursFromInterval -= Math.floor(hoursFromInterval/24) * 24;//вычитание целых суток из интервала
    
    var resultMinutes = minutes + minutesFromInterval;
    
    if (resultMinutes > 59)  //если набралось минут больше одного часа
    {
        resultMinutes -= 60;
        hoursFromInterval += 1;
    } 
    
    var resultHours = hours + hoursFromInterval;

    if (resultHours > 23) //если часы перешли за 24 часа
        resultHours -= 24;

    var printingHours = "";
    var printingMinutes = "";

    if (resultHours < 10)
        printingHours += "0";
    if (resultMinutes < 10)
        printingMinutes += "0";
    
    
    return printingHours + resultHours + ":" + printingMinutes + resultMinutes;
        
};
