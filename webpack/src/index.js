import css from './css/index.css';
import css2 from './css/index2.css';
import sass from './css/style.scss';
// import $ from 'jquery';
let json = require('../author.json');
var oDiv1 = document.querySelector('#div1');
oDiv1.innerHTML = 'Hello My World';

let b = 5;
console.log(b);

$('#div7').html('test jquery plugin');

$('#div8').html(`作者：${json.name}, 年龄：${json.age}, 学校：${json.school}`);