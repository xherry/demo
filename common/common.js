

// 检验数据类型：
function $type(obj) {
    var regexp = /\s(\w+)\]/;
    var result = regexp.exec(Object.prototype.toString.call(obj))[1];
    return result;
};

// 数组取最大/小值：
// 最大
function getMax(arr) {
    // Math.max.apply(null, arr);
    return Math.max.call(null, ...arr);
}
function getMin(arr) {
    // Math.min.apply(null, arr);
    return Math.min.call(null, ...arr);
}
// 显示你的字符串或整数的字节大小
const byteSizeStr = str => new Blob([str]).size;
const byteSizeInt = int => new Blob([int]).size;

// 非数组值或数据转换为数组形式
const convertToArray = val => (Array.isArray(val) ? val : [val]);

// 以大写形式转换字符串中字符的每个第一个字母
const capitalize = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());

// 获取当前网址
const currentURL = () => window.location.href;

// 数字转换为数字数组
const digitize = n => [...`${n}`].map(i => parseInt(i));

// 计数出现次数
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

// 检查特定字符串是否为字谜。字谜是可以改写成另一个词的词。
const Anagram = (string1, string2) => {
    const normalize = str => str
        .toLowerCase()
        .replace(/[^a-z0-9]/gi, '')
        .split('')
        .sort()
        .join('');
    return normalize(string1) === normalize(string2);
};

//检查浏览器标签焦点
const Browser_Tab_Focused = () => !document.hidden;

// 环境是浏览器还是非浏览器
const isBrowser = () => ![typeof window, typeof document].includes('undefined');

// 检查值的变量是否为数字。
const isNumeric = (num) => {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

// 反转字符串
const reverseStr = str => [...str].reverse().join('');

// 返回列表中的最大数字。这是从列表中找到最大数字的最快方法。
const maxN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n);


// 从列表中选择随机数。
const random = arr => arr[Math.floor(Math.random() * arr.length)];

// 重定向到网址
const redirect = (url, asLink = true) => asLink ? (window.location.href = url) : window.location.replace(url);

// 快速返回列表中最小的数字。
const minimum = (arr, n = 1) => [...arr].sort((a, b) => a - b).slice(0, n);

// 在一个范围内的随机整数数组
const randomIntArrayInRange = (min, max, n = 1) =>
    Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);

// 生成给定范围内的随机整数。
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// 检查 JavaScript 中任何变量或值的类型
const getType = v => v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();

// 删除重复项的一种快速简便的方法
const filterNonUnique = arr => [...new Set(arr)];

// 半径的度数;
const degreeToRad = deg => (deg * Math.PI) / 180.0;

// 一年中的一天
const dayOfYear = date => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

// 检查所有相等
const AllEqual = arr => arr.every(val => val === arr[0]);

// 以字符串格式从数据对象返回当前时间。
const getTime = date => date.toTimeString().slice(0, 8);

// 此片段代码将读取文件并将其行以数组格式存储。
const fs = require('fs');
const readFileLines = filename => fs
    .readFileSync(filename)
    .toString('UTF8')
    .split('\n');

// 图片懒加载
const lazyload = () => {
    const imgs = document.getElementsByTagName('img');
    const len = imgs.length;
    // 视口的高度
    const viewHeight = document.documentElement.clientHeight;
    // 滚动条高度
    const scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;
    for (let i = 0; i < len; i++) {
        const offsetHeight = imgs[i].offsetTop;
        if (offsetHeight < viewHeight + scrollHeight) {
            const src = imgs[i].dataset.src;
            imgs[i].src = src;
        }
    }
}
// 可以使用节流优化一下
// window.addEventListener('scroll', lazyload);

// 下载一个excel文档
const download = (link, name) => {
    if (!name) {
        name = link.slice(link.lastIndexOf('/') + 1)
    };
    let eleLink = document.createElement('a');
    eleLink.download = name;
    eleLink.style.display = 'none';
    eleLink.href = link;
    document.body.appendChild(eleLink);
    eleLink.click();
    document.body.removeChild(eleLink);
}

// 在浏览器中自定义下载一些内容
/**
 * 浏览器下载静态文件
 * @param {String} name 文件名
 * @param {String} content 文件内容
 */
const downloadFile = (name, content) => {
    if (typeof name == 'undefined') {
        throw new Error('The first parameter name is a must')
    }
    if (typeof content == 'undefined') {
        throw new Error('The second parameter content is a must')
    }
    if (!(content instanceof Blob)) {
        content = new Blob([content])
    }
    const link = URL.createObjectURL(content)
    download(link, name)
};

// 图片、pdf等文件，浏览器会默认执行预览，不能调用download方法进行下载，需要先把图片、pdf等文件转成blob，再调用download方法进行下载，转换的方式是使用axios请求对应的链
//可以用来下载浏览器会默认预览的文件类型，例如mp4,jpg等

// import axios from 'axios'

//提供一个link，完成文件下载，link可以是  http://xxx.com/xxx.xls

const downloadByLink = (link, fileName) => {
    // axios.request({
    //     url: link,
    //     responseType: 'blob' //关键代码，让axios把响应改成blob
    // }).then(res => {
    //     const link = URL.createObjectURL(res.data)
    //     download(link, fileName)
    // })

}

// 防抖
// 在一定时间间隔内，多次调用一个方法，只会执行一次.
/**
 *
 * @param {*} func 要进行debouce的函数
 * @param {*} wait 等待时间,默认500ms
 * @param {*} immediate 是否立即执行
 */
const debounce = (func, wait = 500, immediate = false) => {
    var timeout
    return function () {
        var context = this
        var args = arguments

        if (timeout) clearTimeout(timeout)
        if (immediate) {
            // 如果已经执行过，不再执行
            var callNow = !timeout
            timeout = setTimeout(function () {
                timeout = null
            }, wait)
            if (callNow) func.apply(context, args)
        } else {
            timeout = setTimeout(function () {
                func.apply(context, args)
            }, wait)
        }
    }
}
//防抖实例
// function onInput() {
//     console.log('1111')
// }
// const debounceOnInput = debounce(onInput)
// document
//     .getElementById('input')
//     .addEventListener('input', debounceOnInput) //在Input中输入，多次调用只会在调用结束之后，等待500ms触发一次   


// 节流
// 多次调用方法，按照一定的时间间隔执行
/**
 * 节流，多次触发，间隔时间段执行
 * @param {Function} func
 * @param {Int} wait
 * @param {Object} options
 */



export default common = {
    downloadByLink,//文件下载
    downloadFile,//在浏览器中自定义下载一些内容
    download,//下载一个excel文档
    lazyload,// 图片懒加载
    getTime,// 以字符串格式从数据对象返回当前时间。
    readFileLines,// 此片段代码将读取文件并将其行以数组格式存储。
    AllEqual,// 检查所有相等
    dayOfYear,// 一年中的一天
    degreeToRad,// 半径的度数;
    filterNonUnique,// 删除重复项的一种快速简便的方法
    getType,// 检查 JavaScript 中任何变量或值的类型
    randomInteger,// 生成给定范围内的随机整数。
    randomIntArrayInRange,// 在一个范围内的随机整数数组
    minimum,// 快速返回列表中最小的数字。
    redirect,// 重定向到网址
    random,// 从列表中选择随机数
    reverseStr,// 反转字符串
    maxN,// 返回列表中的最大数字。这是从列表中找到最大数字的最快方法。
    isNumeric,// 检查值的变量是否为数字
    isBrowser,// 环境是浏览器还是非浏览器
    Browser_Tab_Focused,//检查浏览器标签焦点
    $type,// 检验数据类型：
    getMax, //数组取最大
    getMin,// 数组取小值
    byteSizeStr,// 显示你的字符串的字节大小
    byteSizeInt,// 显示你的整数的字节大小
    convertToArray,// 非数组值或数据转换为数组形式
    capitalize,// 以大写形式转换字符串中字符的每个第一个字母
    currentURL,// 获取当前网址
    digitize,// 数字转换为数字数组
    countOccurrences,// 计数出现次数
    Anagram,// 检查特定字符串是否为字谜。字谜是可以改写成另一个词的词。
}

