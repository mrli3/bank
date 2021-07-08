export const msToDate = function (time,type='-') {
    let datetime = new Date(time);
    let year = datetime.getFullYear();
    let month = datetime.getMonth();
    let date = datetime.getDate();
    let hour = datetime.getHours();
    let minute = datetime.getMinutes();
    let second = datetime.getSeconds();
 
    let result = year + 
                 type + 
                 ((month + 1) >= 10 ? (month + 1) : '0' + (month + 1)) + 
                 type + 
                 ((date + 1) < 10 ? '0' + date : date);
 
 
    return result;
}
 