// 函数防抖
// 防抖
export const Debounce = (fn, t) => {
    let delay = t || 500
    let timer
    return function () {
        let args = arguments;
        if (timer) {
            clearTimeout(timer)
        }

        let callNow = !timer

        timer = setTimeout(() => {
            timer = null
        }, delay)

        if (callNow) fn.apply(this, args)
    }
}
//换行
export const LineBreak = (value) => {
    if (value) {
        return value.replace('/\n/gm', "<br>\u3000\u3000\u3000\u3000\u3000")
    }
}

//密码正则   8位以上  必须数字加字母
export const passwordPattern = (value) => {
    const phone = /^(?=.*\d)(?=.*[A-Za-z])[\dA-Za-z]{8,16}$/;
    return phone.test(value)
}


// 时间戳转 年月日时分秒
export const formatDateCommon = (v, format) => {
    if (!v) {
        return "";
    }
    var dateV = new Date(v);
    var year = dateV.getFullYear();
    var month = dateV.getMonth() + 1;
    month = month < 10 ? '0' + month : month;
    var date = dateV.getDate();
    date = date < 10 ? ("0" + date) : date;
    var hour = dateV.getHours();
    hour = hour < 10 ? ("0" + hour) : hour;
    var minute = dateV.getMinutes();
    minute = minute < 10 ? ("0" + minute) : minute;
    var second = dateV.getSeconds();
    second = second < 10 ? ("0" + second) : second;
    var str1 = year + "-" + month + "-" + date
    var str2 = hour + ":" + minute + ":" + second;
    var str3 = month + "-" + date;
    var str
    if ("yyyy-MM-dd" == format) {
        str = str1;
    } else if ("MM-dd" == format) {
        str = str3
    } else {
        str = str1 + " " + str2
    }
    return str;

}
