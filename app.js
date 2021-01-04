// let car1 = {
// 	color: 'green',
// 	maxSpeed: 300,
// 	audio: {
// 		colon: 12,
// 		company: 'Sony'
// 	}
// };

// let car2 = {
// 	color: 'red',
// 	maxSpeed: 300,
// 	audio: {
// 		colon: 12,
// 		company: 'Sony'
// 	}
// };

// let carColor = 'color';

// car2.color = 'green';

// console.log(typeof car2);
// console.log(car2);

// let carOne = {
// 	color : 'green'
// };

// let carTwo = {
// 	color : 'red'
// };

// console.log(carOne.color, carTwo.color);

// carTwo.color = carOne.color ;

// console.log(carOne.color, carTwo.color);

// let car = {
// 	color: 'black',
// 	maxspeed: 300,
// 	audio : {
// 			brand: 'Sony',
// 			speakers: 12
// 	}
// };

// if(car.audio.brand == 'Apple') {
// 	console.log('wrong car');
// }else if(car.audio.brand == 'Microsoft') {
// 	console.log('wrong car');
// }else{
// 	console.log('undifinetely');
// }

// let car = {
// 	color: 'Black',
// 	maxspeed: 300,
// 	audio : {
// 			brand: 'Sony',
// 			speakers: 11
// 	}
// };

// // if(car.maxspeed > 200 || car.audio.speakers > 4) {
// // 	console.log('тачка крутая');
// // }else{
// // 	console.log('так, среднячок');
// // }

// // console.log(car);

// if(car.color =='Orange') {
// 	console.log('Wrong car');
// }else if(car.color =='Black') {
// 	console.log('Yes');
// }else{
// 	console.log('Wrong');
// }

// console.log(car);

// let Roman = {
// 	height: 174,
// 	weith: 80,
// 	head : {
// 		eyes: 'brown',
// 		hairs: 'black'
// 	}
// };

// console.log(Roman);

// console.log(typeof Roman);

// if(Roman.height > 180 && Roman.weith > 90){
// 	console.log('славный парень');
// }else if(Roman.height > 175 && Roman.weith > 85){
// 	console.log('обычный парень');
// }else{
// 	console.log('good boy');
// }

// let car1 = {
// 	color: 'black'
// };

// let car2 = {
// 	color: 'red'
// };

// colorChange(car1);
// colorChange(car2);

// function colorChange(theCar) {
// 	theCar.color = 'orange';
// };

// console.log ("Car: " + car1.color);
// console.log ("Car2: " + car2.color);

// let Car = {
// 	maxspeed: 240
// };

// let Car2 = {
// 	maxspeed: 340
// };
// speedChange(Car);
// speedChange(Car2);

// function speedChange(speedCar) {
// 	console.log(speedCar.maxspeed);
// 	speedCar.maxspeed = 300;
// 	console.log(speedCar.maxspeed);
// };

// let car = {
// 	color: 'red',
// 	maxSpeed: 300,
// 	update: speedChange
// };

// speedChange();
// car.update();

// function speedChange() {
// 	console.log(car.maxSpeed);
// }

// // function watch (message = 'txt') {
// // 	console.log(message);
// // }

// // watch();

// function watch (message) {
// 	return message + ' ХаудиХо';
// }

// let message = watch('Простое слово');

// console.log(message);

// let a = 5;
// let b = 77;

// a + b;

// console.log('a = ' ,a, 'b = ' ,b);

// let power = console.log(a+b);

// console.log(power);

// let a = 5;
// let b = `Он сказал ${a} раз привет`;

// console.log(b);

// let Roman = {
// 	height: 184,
// 	weith: 97,
// 	head : {
// 		eyes: 'brown',
// 		haird: 'black'
// 	}
// };

// let elite = Roman.head;

// console.log(Roman.height);
// console.log(typeof Roman.head);
// console.log(typeof elite);

// if(Roman.height !=184 && Roman.weith !=97){
// 	console.log('Другой парень');
// }else{
// 	console.log('Это я');
// }

// let car = {
// 	color: 'red'
// };

// let car2 = {
// 	color: 'black'
// };

// colorChange(car)
// colorChange(car2);

// function colorChange(car) {
// 	car.color = 'golden';

// }

// console.log(car.color);
// console.log(car2.color);

// let bmv = {
// 	firstspeed : 250
// };

// speedChange(bmv);

// function speedChange(speed) {
// 	console.log('maxspeed:',bmv.firstspeed);
// 	speed.firstspeed = 300;
// 	console.log('maxspeed:',bmv.firstspeed);
// }

// let car = {
// 	maxspeed: 250,
// 	update: speedChange
// };

// car.update();

// function speedChange() {
// 	console.log(car.maxspeed);
// }

// function bigDaddy(par) {
// 	return par + 'Osipenko';
// }

// let me = bigDaddy('Roman ');
// console.log(me);

// function color(test) {

// }

// let color = getColor;
// color();
// color('yellow');

// let color = 'red';
// getColor(color);

// function getColor(color) {

// 	if (color == "red") {
// 		console.log('Оно');
// 	}else{
// 		console.log(color);
// 	}
// }
// console.log(color);

// let house = {
// 	volume : 100,
// 	name: getVolume
// }

// house.name();

// function getVolume() {
// 	console.log(house.volume);
// }

// function observe(message) {
// 	return message + ' проверка'
// }

// let test = observe('golden horde');

// console.log(test);

// let lerning = function () {
// 	console.log('you are strong');
// };

// lerning();

// (function () {
// 	console.log('you are strong');
// })();

// let power = () => console.log('we are strong');

// power();

// let white = () => 'we are white';
// console.log(white());

// let anonym = (message) => {
// 	let count = 3;
// 	return message +4;
// }

// console.log(anonym('she is strong'));

// let dz = () => console.log('мы стрелочная функция');
// dz();

// let dzTwo = (horse, house) => {
// return horse + house};

// console.log(dzTwo('учусь ', 6));

// let best = {
// 	number: 2,
// 	firm: 'Apple',
// 	round: function(message) {
// 		console.log(message);
// 	}
// }

// best.round('who am i');

// let test = [2, 5, 'пример достойный ', 'подражания'];

// console.log(test[2] + test[3]);

// let car = {
// 	color: 'red',
// 	drivers: ['Tyson', 'Zelenskiy'],
// 	getDriver(driver) {
// 		console.log('Current driver - ' + this.drivers[1]);
// 	}
// }
// car.getDriver();

// function getColor(took) {
// 	console.log(car.color);
// }

// (function () {
// 	console.log('yes it is you');
// })();

// getColor();

// car.getDriver(1);

// let krematorium = () => console.log(12 + 7);

// krematorium();

// let varriors = ['mike', 'bradd', 'tom'];

// for (let i = varriors.length -1; i >= 0; i--) {
// 	console.log(varriors[i]);
// }

// let Roman = ['height=184', ' weith=95 kg', 111, 'just text'];

// for (let b = 0; b < Roman.length; b++) {
// 	console.log(Roman[b]);
// }

// console.log(Roman[0] + Roman[1]);
// console.log(Roman[2],Roman[3])

// let haterOne = {
// 	firstName: 'Pitt',
// 	lastName: 'Cruse',
// 	getName() {
// 		return `${this.firstName} ${this.lastName}`;
// 	}
// }

// console.log(haterOne.getName());

// let haterTwo = {
// 	firstName: 'Ping',
// 	lastName: 'Chon',
// 	getName() {
// 		return `${this.firstName} ${this.lastName}`;
// 	}
// }

// console.log(haterTwo.getName());

// class Hater {
// 	constructor (firstName, lastName) {
// 		this.firstName = firstName;
// 		this.lastName = lastName;
// 	}

// 	sayMyName() {
// 		console.log(`Наш хейтер: ${this.firstName} ${this.lastName}`);
// 	}

// }

// let hater1 = new Hater ('Норман', 'Ридус',);
// hater1.sayMyName();

// let hater2 = new Hater ('Великий', 'Гэтсби');
// hater2.sayMyName();

// function watch (message = 'eee boy') {
// 	console.log(message);
// }

// watch('golden');
// watch();

// function watch (message) {
// 	return message + 'golden';
// }

// let message = watch('Простое слово');

// console.log(message);

// let Roman = {
// 	height: 184,
// 	weith: 95,
// 	eyes: 'brown',
// 	head: {
// 		hairs: 'black',
// 		neck: 'big'
// 	},
// 	update: hairsChange

// };

// if (Roman.height < 185) {
// 	console.log('bad boy');
// }else {
// 	console.log('norm boy');
// }

// function hairsChange(hairs) {
// 	Roman.head.hairs = 'brown';
// }

// Roman.update();
// console.log(Roman.head.hairs);

// function speedChange(speedCar) {
// 	console.log(speedCar.maxspeed);
// 	speedCar.maxspeed = 300;
// 	console.log(speedCar.maxspeed);
// };

// let car = {
// 	color: 'red',
// 	maxSpeed: 300,
// 	update: speedChange
// };

// let car1 = {
// 	color: 'blue'
// }

// // let car2 = {
// // 	color: 'orange'
// // }

// colorChange(car1);

// function colorChange(theCar) {

// 	console.log(car1.color);
// 	theCar.color = 'brown';
// 	console.log(car1.color);
// }

// console.log('car1: ' + car1.color);

// function getColor(color = 'red') {
// 	if (color == 'red') {
// 		return;
// 	}
// 	console.log(color);
// }

// let test = getColor;

// test();

// let color = getColor;
// color();

// function getColor(color = "red") {
// 	if (color == "red") {
// 		return;
// 	}

// 	console.log(color);
// }

// function Roman(Lesson ) {
// 	return Lesson + 'заебала эта хуйня';
// }

// let padal = Roman('падаль ');

// console.log(padal);

//  (() => console.log('мы стрелочная функция'))();

// let car = {
// 	 	color: 'red',
// 	 	brendGet: function(test) {
// 	 		console.log(test);
// 	 	}
// }

// car.brendGet('yes');

// let car = {
// 	color: 'заебало'
// }

// let = krem = ['text', 12, { color: 'заебало'}];

// console.log(krem[0] + krem[1]);

// let car = {
// 	color: 'red',
// 	drivers : ['tyson', 'mohammed'],
// 	getDriver(driver) {
// 		console.log('Current driver: ' + this.drivers[driver]);
// 	}
// }
// car.getDriver(1);

// let a = b = 20;
// a = a + b;
// console.log(a,b);

// let carOne = {
// 	cost: 12000
// };

// let carTwo = {
// 	cost: 15000
// };

// console.log(carOne);
// console.log(carTwo);
// costChange(carOne);

// function costChange(theCar) {
// 	theCar.cost = 20000;
// 	console.log('car: ' + theCar.cost);
// }

// if (carOne.cost > 21000) {
// 	console.log('good car');
// } else {
// 	console.log('bad car');
// }

// function colorChange(theColor) {
// 	return theColor + 2;
// }

// console.log(colorChange('be strong'))

// let color = getColor;
// color();

// function getColor(color = "red") {
// 	if (color == "red") {
// 		return;
// 	}

// 	console.log(color);
// }

// let car = strong() => console.log('we are strong');

// car();

// let anonym = (strong = 'eee boy') => {
// 	let ron = 2;
// 	return strong + 2;
// }

// console.log(anonym('px'));

// let people = {
// 	height: 184,
// 	eyes: 'brown',
// 	body(info = 'good') {
// 		console.log(info);
// 	}
// }

// people.body();

// let people = {
// 	height: 184,
// 	eyes: 'brown',
// 	body(info) {
// 		console.log(info);
// 	}
// }

// let people = {
// 	height: 184,
// 	driver: ['Elis', 'Puppey'],
// 	getDriver(theDriver) {
// 		console.log('Текущий водитель ' + this.driver[theDriver]);
// 	}
// }

// people.getDriver(1);

// let house = (power = 'eee boy') => power + 2;

// console.log(house());

// let anonym = (strong = 'eee boy') => {
// 	let ron = 2;
// 	return strong + 2;
// }

// console.log(anonym());

// function horde(golden = 'top') {
// 	return golden + '10';
// }

// let rus = horde;

// console.log(rus());

// let a = b = 5;
// a = a + b;
// console.log(a);

// let drivers = ['miki', 'pigi', 'vigi'];

// for (i = 0; i < drivers.length; i++) {
// 	console.log(drivers[i]);
// }

// let hater1 = {
// 	firstName: 'Bill',
// 	lastName: 'Gaits',
// 	getName(take) {
// 		return `${this.firstName} ${this.lastName}`;
// 	}
// }

// let hater2 = {
// 	firstName: 'Jon',
// 	lastName: 'Brzenk',
// 	getName(take) {
// 		return `${this.firstName} ${this.lastName}`;
// 	}
// }

// console.log(hater2.getName());

// class enemy {
// 	constructor(firstname, lastname) {
// 		this.firstname = firstname;
// 		this.lastname = lastname;
// 	}
// 	getName() {
// 		console.log(`Хейтер:  ${this.firstname} ${this.lastname}`);
// 	}
// }

// let enemy1 = new enemy('Тот', 'Самый');
// enemy1.getName();

// class driver {
// 	constructor(getInfo, firstName, lastName) {
// 		this.getInfo = getInfo;
// 		this.firstName = firstName;
// 		this.lastName = lastName;
// 	}

// 	takeInfo() {
// 		console.log(`Канал: ${this.getInfo}, наш автор ${this.firstName} ${this.lastName}`);
// 	}
// }

// let ron = new driver('От 0 до 1', 'Вадим', 'Прокопчук');

// ron.takeInfo();

// let hater1 = {
// 	height: 184,
// 	weith: ", 90 'kg'",
// 	getStat() {
// 		console.log(`${this.height} ${this.weith}`);
// 	}
// }

// hater1.getStat();

// let ron = (topless = 'pigi') => {
// 	console.log('we are strong');
// 	return topless + ' vigi';
// };

// console.log(ron());

// console.log(document.getElementById('header'));
// console.log(typeof document.getElementById('header'));
// document.getElementById('header').innerText = 'не отображается';

// let roiden = document.querySelector('.input');
// console.log(roiden);

// console.log(typeof document.querySelector('.input'));

// console.log(document.querySelector('[value="20"]'));

// let a = {
// 	class: '.btn',
// 	value: 100
// };

// let b = document.querySelector(a.class);

// b.value = a.value;

// console.log(a);
// console.log(b);

// console.log(document.querySelector('.btn'));

// let element = {
// 	class: 'btn',
// 	value: 40
// }

// let house = {
// 	color: 'red',
// 	volume: 100,

// };

// let colorChange = 'color';

// house.colorChange = 'black';

// console.log(house.colorChange);

// function ron(theRon) {
// 	return theRon + 10;
// }

// let vin = ron('hello ');

// console.log(vin);

// let roy = {
// 	color: 'red',
// 	getPower(vin1, vin2) {
// 		console.log(vin1);
// 		console.log(vin2);
// 	}

// }

// console.log(roy.getPower(2, 4));

// function roman(roy) {
// 	return + 2;
// }

// console.log(roman());

// let hater = {
// 	firstname: 'Bill',
// 	lastname: 'Gaits'
// };

// function getName(firstname, lastname) {
// 	this.firstname = firstname;
// 	this.lastname = lastname;
// 	return (`${this.firstname} ${this.lastname}`);
// }

// console.log(getName(hater.firstname, hater.lastname));

// class pain {
// 	constructor(firstname, lastname) {
// 		this.a = firstname;
// 		this.b = lastname;
// 	}

// 	sayInfo() {
// 		console.log(`${this.a} ${this.b}`);
// 	}
// };

// let hater1 = new pain('Норман', 'Ридус');

// hater1.sayInfo();

// class car {
// 	constructor(speed) {
// 		this.speed = speed;
// 	}

// 	returnSpeed() {
// 		return `Моя скорость ${this.speed} км/ч `;
// 	}
// }

// let audi = new car(200);

// console.log(audi.returnSpeed());

// document.querySelector('h1').innerText = audi.returnSpeed();

// audi.speed = 500;

// document.querySelector('h2').innerText = audi.returnSpeed();

// let car = {
// 	marka: 'BMW',
// 	lef: ['mike', 'lina']
// }

// console.log(`Мой автомобиль :  '${car.marka}'`);
// console.log(`Количество букв в марке '${car.marka.length}'`);
// console.log(car.lef[0]);

// function roman (krem) {
// 	for (i = 0; i < krem; i++) {
// 		console.log(i + 'take get');
// 	};
// }

// let car = {
// 	color: 'red',
// 	ron: roman
// }

// let you = {
// 	vigi: (lili = 12) => {
// 	console.log('we yes');
// 	return lili + 22;
// 	}
// }

// console.log(you.vigi());

// let a = 5;
// let b = 24;
// console.log(a + String(b));

// console.log(document.querySelector('.interactive').innerText = 'отправить');

// let roy = 'fghj';
// roy = Number(roy);
// alert (typeof roy);
// alert( Boolean("0") );
// alert( Boolean(' ') );

// let a = '1' + '2';
// console.log(a);
// console.log(typeof a);
// a = Number(a);
// alert(typeof a);
// console.log(typeof a);
// b = a + 3;
// console.log(b);

// let apples = '25';
// let bananas = '20';

// console.log(+apples + +bananas);

// alert(10 % 4); //остаток2

// let krem = 2;
// ++krem;
// console.log(krem);
// console.log(krem++);

// let a = 1;

// console.log(a++);
// console.log(a);

// let n = 2;
// n += 5; // теперь n=7 (работает как n = n + 5)
// n *= 2; // теперь n=14 (работает как n = n * 2)

// let toy = 5;
// toy += 10;
// toy *=10;
// console.log(toy);

// let a = 10,
// 	b = 20;

// alert(a != b);
// alert( '01' == 1 );

// alert( '' == false );

// a = '';

// console.log(typeof a);

//  alert( Boolean(0) );
//  alert( Boolean(' ') );

// a = 5;
// b = 10;
// alert(a ===b);

// let a = 10,
// 	b = 20;

// alert(a != b);

// let str = "123";
// alert(typeof str); // string

// let num = +str;
// alert(typeof num);

// let vin = 22 + 'fggsdgd';
// console.log(vin);
// console.log(typeof vin);
// vin = String(vin);
// console.log(vin);
// console.log(typeof vin);

// let roiden = prompt('сколько у вас денег', '');

// alert(`у вас ${roiden} денег`);

// let name = prompt('Ваше имя', '');

// alert(`Ваше имя ${name}`);

// let miki = confirm('Вы согласны?');
// alert(miki);

// let ecma = prompt('вы взрослый?', '30');

// if (ecma >= 30) {
// 	 console.log('yes, yoo good');
// }else if (ecma >= 1 && ecma <= 10) {
// 	console.log('baby');
// }else {
// 	console.log('nope, yoa young');
// }

// let roy = prompt('Какое «официальное» название JavaScript?', '');

//  if(roy == 'ECMAScript') {
// 	alert(roy);
// } else {
// 	alert('Не знаете? ECMAScript!');
// }

// let get1 = prompt('введите число для урока', '0');

// if( get1 > 0) {
// 	alert(1);
// }else if (get1 < 0) {
// 	alert(-1);
// }else {
// 	alert(0);
// }

// let login = prompt('кто ты?', '');

// let message;

// if (login == 'Сотрудник') {
//   alert('привет сотрудник');
// } else if (login == 'Директор') {
//   alert('Здравствуй директор')
// }  else {

// }

// console.log(message);

// let boy = 102;
// if (boy >=10 || boy <= 100) {
// 	console.log('vin');
// }else {
// 	console.log('lose');
// }

// let login = prompt('Who is there', '');

// if (login == 'Админ') {

// 	let pass = prompt('Пароль?', '');

// 	if (pass == 'Я главный'){
// 		alert('Здравствуйте!');
// 	}else if (pass = '' || pass == null){
// 		alert('Отменено');
// 	}else {
// 		alert('иди нахуй');
// 	}

// }else if (login == '' || login == null) {
// 	alert('отменено');
// }else {
//   alert( "Я вас не знаю" );
// }

// let i = 3;
// while (i) {
// 	alert(i);
// 	i--;
// }

// let a = 0;
// do {
// 	alert(a);
// 	a++;
// } while (a < 4)

// let i = 0; // мы уже имеем объявленную i с присвоенным значением

// for (; i < 3; i++) { // нет необходимости в "начале"
//   alert( i ); // 0, 1, 2
// }

// let sum = 0;

// while (true) {

//   let value = +prompt("Введите число", '');

//   if (!value) break; // (*)

//   sum += value;

// }
// alert( 'Сумма: ' + sum );

// for (i = 0; i <= 10; i++) {
// 	if(i % 2 == 0) {
// 		alert(i);
// 	}
// }

// let i = 0;

// while(3>i) {

// 	alert(`number: ${i}`);
// 	i++;
// }

// let sum = 0;

// while (true) {

//   let value = +prompt("Введите число", '');

//   if (!value) break; // (*)

//   sum = sum + value;

// }
// alert( 'Сумма: ' + sum );

// for (let i = 0; i < 10; i++) {

//   // если true, пропустить оставшуюся часть тела цикла
//   if (i % 2 == 0) continue;

//   alert(i); // 1, затем 3, 5, 7, 9
// }

// for (let i = 0; i < 10; i++) {

//   if (i % 2) {
//     alert( i );
//   }

// }

// let a = 3;

// switch (a) {
// 	case 0:
// 	alert('мало');
// 	break;
// 	case 1;
// 	alert('нормально');
// 	break;
// 	case 2:
// 	alert('мало');
// 	break;
// 	default:
// 	alert('не найдено');
// }

// let a = 2 + 2;

// switch (a) {
//   case 4:
//     alert('Правильно!');
//     break;

//   case 3: // (*) группируем оба case
//   case 5:
//     alert('Неправильно!');
//     alert("Может вам посетить урок математики?");
//     break;

//   default:
//     alert('Результат выглядит странновато. Честно.');
// }

// const number = +prompt('Введите число между 0 и 3', '');

// switch(number) {
// 	case 0:
// 	alert('Вы ввели число 0');
// 	break;
// 	case 1:
// 	alert('Вы ввели число 1');
// 	break;

// 	case 2:
// 	case 3:
// 	alert('Вы ввели число 2, а может и 3');
// 	break;

// }

// function enterMessage() {
// 	let roy = 'Hello i am Roman';
// 	alert(roy);
// }
// enterMessage();

// function showMessage(from, text) { // аргументы: from, text
// 	this.from = from;
// 	this.text = text;
//   alert(`${this.from} : ${this.text}`);
// }

// showMessage('Аня', 'Привет!'); // Аня: Привет! (*)
// showMessage('Аня', "Как дела?"); // Аня: Как дела? (**)

// let bi = 'Анна';

// function showMesage(bi, text) {
// 	bi = `*Анна* `;
// 	alert(bi + text);
// }

// showMesage(bi, 'привет');

// let bi = 'Анна';

// function showMesage(bi, text = 'привет') {
// 	bi = `*Анна* `;
// 	alert(bi + text);
// }

// showMesage('привет');

// function sum(a, b) {
//   return a + b;
// }

// let get = sum(1,2);
// alert(get);

// let age = prompt('Сколько вам лет?', '');

// function CheckAge(age) {
// 	if (age > 21) {
// 		return true;
// 	}else {
// 		return confirm('А родители разрешили?');
// 	}
// }

// if (CheckAge(age)) {
// 	alert('Доступ получен');
// }else {
// 	alert('Доступ закрыт');
// }

// function min(a,b) {
// 	if(a > b) {
// 		alert(b);
// 	}else {
// 		alert(a);
// 	}
// }

// let miki = min(2, 5);

// function ask(question, yes, no) {
// 	if(confirm(question)) {
// 		yes();
// 	}else {
// 		no();
// 	}
// }

// function a() {
// 	alert('Да это так');
// };

// function b() {
// 	alert('Вы отменили');
// };

// ask('Вы согласны?', a, b);

// let age = prompt("Сколько Вам лет?", 18);

// if(age >= 18) {
// 	welcome();
// 	function welcome() {
// 		alert('Здравствуйте');
// 	}
// }else {
// 	welcome();
// 	function welcome() {
// 		alert('Привет')
// 	};
// 	welcome();
// }

// let roy = prompt('are you ready?', 'yes');

// let vin = (roy == 'yes' || roy == 'Yes') ? () => alert('Вперед') :() => alert('Ошибка');

// vin();

// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Вы согласны?",
//   function() { alert("Вы согласились."); },
//   function() { alert("Вы отменили выполнение."); }
// );

// let ask = (question, yes, no) => (confirm(question))
// ? yes()
// : no();

// ask(
//   "Вы согласны?",
//   () =>  alert("Вы согласились."),
//   () =>  alert("Вы отменили выполнение."),
// );

// function pow(x, n) {
//   let result = 1;
//   //              <--
//   for (let i = 0; i < n; i++) {
//     result *= x;
//     alert(result);
//   }
//   //              <--
//   alert(result);
// }

// pow(5, 5);

// function loh(a,b) {
// 	if (a < 0) {
// 		alert('Цифра не поддерживается');
// 		return;
// 	}

// 	let numbers = 1;

// 	for (i = 0; a > i; i++) {
// 		alert(numbers *=b);
// 	}
// 	return numbers;
// }

// loh(3,4);

// let riri = (question, yes, no) => (question) ? yes() : no();

// riri(
// 	confirm('Вы человек?'),
// 	() => alert('Поздравляю'),
// 	() => alert('Тоже не плохо')
// 	)

// ask(
//   "Вы согласны?",
//   function() { alert("Вы согласились."); },
//   function() { alert("Вы отменили выполнение."); }
// );

// let ask = (question, yes, no) => (confirm(question))
// ? yes()
// : no();

// function showPrimes(n) {

//   for (let i = 2; i < n; i++) {
//     if (!isPrime(i)) continue;

//     alert(n);
//   }
// }

// function isPrime(n) {
//   for (let i = 2; i < n; i++) {
//     if (n % i == 0) return false;
//   }

//   return true;
// }

//  function loh(a,b) {
// 	if (a < 0) {
// 		alert('Цифра не поддерживается');
// 		return;
// 	}

// 	let numbers = 1;

// 	for (i = 0; a > i; i++) {
// 		alert(numbers *=b);
// 	}
// 	return numbers;
// }

// loh(3,4);

// function vin(a, b) {
// 	(a > b) ? alert('Привет'):
// 	alert('Пока');

// }

// vin(30, 20);

// let name = {
// 	name: 'Jonh',
// 	age: 30,
// 	isAdmin: true
// }

// alert(typeof name.age);

// class findOutName {
// 	constructor(a,b,c) {
// 		this.a = a;
// 		this.b = b;
// 		this.c = c;
// 	};

// 	Checked() {
// 		alert(`${this.a} ${this.b} ${this.c}`);
// 	}
// }

// let hater1 = new findOutName(1, 2, 3);
// hater1.Checked();

// let user = {
//   name: "John",
//   age: 30
// };

// let key = prompt("Что вы хотите узнать о пользователе?", "age");

// // доступ к свойству через переменную
// alert( user[key] ); // John (если ввели "name")

// let fruit = 'apple';
// let bag = fruit + 'banana';

// alert(bag);

// function makeUser(name, age) {
//   return {
//     name: name,
//     age: age
//     // ...другие свойства
//   };
// }

// let user = makeUser("John", 30);
// alert(user.name); // John

// function makeUser(name, age) {
//   return {
//     name, // то же самое, что и name: name
//     age   // то же самое, что и age: age
//     // ...
//   };
// }

// let user = makeUser('Mike', 20);
// alert(user.age);

// function makeUser(name, age) {

//     name = 'Mike', // то же самое, что и name: name
//     age = 30  // то же самое, что и age: age

// }

// let user = makeUser;
// alert(user.name);

// let pigi = 20;

// alert(typeof pigi);

// pigi = String(20);
// alert(typeof pigi);

// let mimi = {
// 	age: 30,
// };

// let key = 'age';
// alert(key in mimi);

// let user = {
//   name: "John",
//   age: 30,
//   isAdmin: true
// };

// for (let key in user) {
//   // ключи
//   alert( key );
//     // name, age, isAdmin
//   // значения ключей
//   alert( user[key] ); // John, 30, true
// }

// let car = {
// 	color: 'red',
// 	age: 22,
// 	drivers: ['mike', 'sike', 'vifi' ],
// }

// function getDriver(theDriver) {
// 	alert(car.drivers[theDriver]);
// }

// getDriver(1);

// let car = {
// 	color: 'red',
// 	age: 22,
// 	drivers: ['mike', 'sike', 'vifi' ],
// }

// function getDriver() {
// 	for (i = 0; i < car.drivers.length; i++) {
// 		alert(car.drivers[i]);
// 	}
// }

// getDriver();

// let codes = {
//   "+49": "Германия",
//   "+41": "Швейцария",
//   "+44": "Великобритания",
//   // ..,
//   "+1": "США"
// };

// for (let code in codes) {
//   alert( +code ); // 49, 41, 44, 1
// }

// let user = {name : "John"};

// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };

// // копируем все свойства из permissions1 и permissions2 в user
// Object.assign(user, permissions1, permissions2);

// console.log(user);

// function person(firstname, lastname, age) {
// 	this.firstname = firstname;
// 	this.lastname = lastname;
// 	this.age = age;
// 	console.log(`${this.firstname}, ${this.lastname}, ${this.age} `);
// }

// let roman = person('Роман', 'Осипенко', 29);

// let roy = {
// 	name: 'Roman',
// 	age : 29,
// }

// roy.lastname = 'Osipenko';

// console.log(roy);

// let mimi = {
// 	name: 'Roman',
//  	age : 29,
// };

// function isEmpty(a) {
// 	for(let key in a) {
// 		alert('хей');
// 	}
// 	 alert('ой');
// }

// isEmpty('mimi');

// let salaries = {
// 	John: 100,
// 	Ann: 160,
// 	Pete: 130
// }

// function getSalari(a) {
// 	let sum = 0;
// 	for(let key in a) {
// 		sum += a[key];
// 	}
// }

// getSalari(salaries);

// alert(sum);

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// function multiplyNumeric(name) {
// 	let sum = 2;
// 	for(let key in name) {
// 		if(typeof name[key] == 'number') {
// 			name[key] *= sum;
// 		}
// 	}
// }

// multiplyNumeric(menu);
// console.log(menu.width);
// console.log(menu.height);

// let krem = Symbol("dfhdfhdh");

// let user = {
//   name: "Вася"
// };

// user[krem] = 25;

// alert(user[krem]);

// alert(krem.toString());

// let car = {
// 	color: 'red',
// 	age: 22,
// 	drivers: ['mike', 'sike', 'vifi' ],
// }

// function getDriver(a) {
// 	for (i = 0; i < a.drivers.length; i++) {
// 		alert(a.drivers[i]);
// 	}
// }

// getDriver(car);

// let user = {
//   name: "Джон",
//   age: 30,

// };

// let user1 = user;

// user1.age = 35;

// console.log(user.age);

// let user = {
// 	name: "Джон"
// };

// let admin = {
// 	name: "Админ"
// };

// function sayHi(a) {
//   alert( a.name );
// }

// sayHi(user);
// sayHi(admin);

// let user = {
// 	name: "Джон"
// };

// let admin = {
// 	name: "Админ"
// };

// function sayHi() {
//   alert( this.name );
// }

// user.say = sayHi;
// admin.say = sayHi;

// user.say();

// function makeUser() {
//   return {
//     name: "Джон",
//     ref() {
//       return this;
//     }
//   };
// };

// let user = makeUser();

// alert( user.ref().name );

// let calculator = {
//   sum() {
//     return this.a + this.b;
//   },

//   mul() {
//     return this.a * this.b;
//   },

//   read() {
//     this.a = +prompt('a?', 0);
//     this.b = +prompt('b?', 0);
//   }
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

// let salaries = {
//  	John: 100,
// 	Ann: 160,
// 	Pete: 130
// };

// function getSalary(a) {
// 	let test = 0;
// 	for(let key in a) {
// 		test += a[key];
// 	}
// }

// getSalary(salaries);
// alert(test);

// let user = {
// 	name: "John",
// 	money: 1000,

// 	[Symbol.toPrimitive](hint) {
// 		alert(`hint: ${hint}`);
// 		return hint == "string" ? `{name: "${this.name}"}` : this.money;
// 	}

// };

// демонстрация результатов преобразований:
// alert(user); // hint: string -> {name: "John"}
// alert(+user); // hint: number -> 1000
// alert(user + 500); // hint: default -> 1500

// function Calculator() {
// 	this.read = function() {
// 		this.a = +prompt('Введите число', '');
// 		this.b = +prompt('Введите число', '');
// 	};

// 	this.sum = function() {
// 		return this.a + this.b;
// 	};

// 	this.mul = function() {
// 		return this.a * this.b;
// 	};
// }

// let test = new Calculator();

// test.read();
// alert('Сумма' + test.sum());
// alert('Умножение' + test.mul());

// function Accumulator(startingValue) {
// 	this.value = startingValue;

// 	this.read = function() {
// 		this.value +=  +prompt('Введите число', '5');
// 	};
// }

// let accumulator = new Accumulator(1);

// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению

// alert(accumulator.value);

// let toys = 1e-3;

// alert(toys);

// let roy = 2e6;

// let num1 = 12.3445;
// alert( num1.toFixed(2) ); // "12.34"

// let test = +prompt('Введите число', '');

// alert(isFinite(test));

// alert( parseInt('100px') ); // 100
// alert( parseFloat('12.5em') ); // 12.5

// alert( parseInt('12.3') ); // 12, вернётся только целая часть
// alert( parseFloat('12.3.4') ); // 12.3, произойдёт остановка чтения на второй точке

// let car = {
// 	price: '12000$',
// 	color: 'red'
// };

// function bibi(a) {
// 	alert(parseInt (a.price));
// };

// bibi(car);

// function readNumber() {
//   let num;

//   do {
//     num = prompt("Введите число", 0);
//   } while ( !isFinite(num) );

//   if (num === null || num === '') {
//   	return null
//   };

//   return +num;
// }

// alert(`Число: ${readNumber()}`);

// let a = 5;
// let b = 5;
// alert(Object.is(a,b) ); // переменные равны

// let a = '4$';

// alert(parseFloat(a));

// alert(Math.min(2,3, 1.4));
// alert(Math.max(2,3, 1.4));

// let i = 0;
// while (i < 11) {
//   i += 0.2;
//   if(i > 9.1 && i < 10.2) {
//   	alert(i);
//   }
// }

// let af = {
// 	num: 2131242

// };

// function getS(a) {
// 	for(let key in a) {
// 		a[key] = a[key].toString();
// 	}

// }

// getS(af);

// alert(af.num.length);

// let str = `Hello`;

// // получаем последний символ
// alert( str[str.length - 1] ); // o

// let str = 'Ослик Иа-Иа посмотрел на виадук';

// let target = 'Иа'; // цель поиска

// let pos = 0;
// while (true) {
//   let foundPos = str.indexOf(target, pos);
//   if (foundPos == -1) break;

//   alert( `Найдено тут: ${foundPos}` );
//   pos = foundPos + 1; // продолжаем со следующей позиции
// }

// let str = "Ослик Иа-Иа посмотрел на виадук";
// let target = "Иа";

// let pos = -1;
// while ((pos = str.indexOf(target, pos + 1)) != -1) {
//   alert( pos );
// }

// let alf = 'Привет ебаный Бармолей';

// alert(alf.includes('ебаный', 1));

// alert(alf.slice(4, 10));

// function ucFirst(str) {
//   if (!str) return str;

//   return str[0].toUpperCase() + str.slice(1);
// }

// alert( ucFirst("вася") ); // Вася

// function checkSpam(str) {
//   let lowerStr = str.toLowerCase();

//   return lowerStr.includes('viagra') || lowerStr.includes('xxx');
// }

// alert( checkSpam('buy ViAgRA now') );
// alert( checkSpam('free xxxxx') );
// alert( checkSpam("innocent rabbit") );

// let arr = [ 'Яблоко', { name: 'Джон' }, true, function() { alert('привет'); } ];

// // получить элемент с индексом 1 (объект) и затем показать его свойство
// arr[3](); // Джон

// let fruits = [3,4]; // создаём массив

// fruits[2] = 5;

// console.log(fruits);

// function sumInput() {

//   let numbers = [];

//   while (true) {

//     let value = prompt("Введите число", 0);

//     // Прекращаем ввод?
//     if (value === "" || value === null || !isFinite(value)) break;

//     numbers.push(+value);
//   }

//   let sum = 0;
//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum;
// }

// alert( sumInput() );

// let vin = [1,2];
// vin[2] = 3;
// vin.push(4);
// alert(vin);

// delete vin[0];
// alert(vin);

// let pipi = ['я', 'изучаю', 'скрипт'];
// pipi.splice(0, 0, 'весьма', 'хорош', 'весьма');

// alert(pipi);

// let arr = ["t", "e", "s", "t"];

// alert( arr.slice(1, 3) ); // e,s (копирует с 1 до 3)

// alert( arr.slice(-2) ); // s,t (копирует с -2 до конца)

// let vivi = arr.slice();

// alert(vivi);

// arr.pop();
// alert(arr);
// alert(vivi);

// let bibi = ["Bilbo", "Gandalf", "Nazgul"];

// alert(bibi.includes('Bilbo'));

// bibi.forEach((item, index, array) => {
//   alert(`${item} имеет позицию ${index} в ${array}`);
// });

// let arr = [1, 0, false];

// alert( arr.indexOf(0) ); // 1
// alert( arr.indexOf(false) ); // 2
// alert( arr.indexOf(null) ); // -1

// alert( arr.includes(1) ); // true

// let users = [
//   {id: 1, name: "Вася"},
//   {id: 2, name: "Петя"},
//   {id: 3, name: "Маша"}
// ];

// let user = users.find(item => item.id == 1);

// alert(user.name); // Вася

// let bibi = ["Bilbo", "Gandalf", "Nazgul"];

// for(key in bibi) {
// 	alert(`Наш герой: ${bibi[key]}`);
// }

// function camelize(str) {
//   return str
//     .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
//     .map(
//       // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
//       // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
//       (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
// }

// let pog = 'я не могу без тебя';

// function bibi(a) {
// return	a.split(' ').map(item => {item[0].toUpperCase()}) + item.slice(1);

// }

// console.log(bibi(pog));

// function filterRange(anal, a, b) {
// 	return anal.filter(item => (a <= item && b >= item))

// }

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert(filtered);

// function filterRangeInPlace(arr, a, b) {

//   for (let i = 0; i < arr.length; i++) {
//     let val = arr[i];

//   if( a ≤ val ≤ b) {
//   		val
//   }

// }

// let test = [5, 3, 8, 1];

// filterRangeInPlace(test, 1, 4); // удалены числа вне диапазона 1..4

// alert( test ); // [3, 1]

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map(function(a){
// 	console.log(`пользователь ${a.name} ${a.age}`)
// })

// let range = {
//   from: 1,
//   to: 5
// };

// // 1. вызов for..of сначала вызывает эту функцию
// range[Symbol.iterator] = function() {

//   // ...она возвращает объект итератора:
//   // 2. Далее, for..of работает только с этим итератором, запрашивая у него новые значения
//   return {
//     current: this.from,
//     last: this.to,

//     // 3. next() вызывается на каждой итерации цикла for..of
//     next() {
//       // 4. он должен вернуть значение в виде объекта {done:.., value :...}
//       if (this.current <= this.last) {
//         return { done: false, value: this.current++ };
//       } else {
//         return { done: true };
//       }
//     }
//   };
// };

// // теперь работает!
// for (let num of range) {
//   alert(num); // 1, затем 2, 3, 4, 5
// }

// let bibi = {
// 	1: 'red',
// 	2: 'black',
// 	3: 'blue',
// 	4: 'purple',
// 	length: 5
// };

// let roy = Array.from(bibi);

// console.log(roy)

// let popa = new Map();

// popa.set("1", "str1");    // строка в качестве ключа
// popa.set(1, "num1");      // цифра как ключ
// popa.set(true, "bool1");  // булево значение как ключ

// // помните, обычный объект Object приводит ключи к строкам?
// // popa сохраняет тип ключей, так что в этом случае сохранится 2 разных значения:
// alert(popa.get(1)); // "num1"
// alert(popa.get("1")); // "str1"

// alert(popa.size); // 3

// let krem = new Map();

// krem.set('color', 'very black');
// krem.set(2, 51255);
// krem.set('3', '5451255');
// krem.set(true, 'yes');

// alert(typeof krem.get(2));

// let john = { name: "John" };

// // давайте сохраним количество посещений для каждого пользователя
// let visitsCountMap = new Map();

// // объект john - это ключ для значения в объекте Map
// visitsCountMap.set(john, 123);

// alert(visitsCountMap.get(john)); // 123

// let recipeMap = new Map([
//   ["огурец", 500],
//   ["помидор", 350],
//   ["лук",    50]
// ]);

// // перебор по ключам (овощи)
// for (let vegetable of recipeMap.keys()) {
//   alert(vegetable); // огурец, помидор, лук
// }

// // перебор по значениям (числа)
// for (let amount of recipeMap.values()) {
//   alert(amount); // 500, 350, 50
// }

// // перебор по элементам в формате [ключ, значение]
// for (let entry of recipeMap) { // то же самое, что и recipeMap.entries()
//   alert(entry); // огурец,500 (и так далее)
// }

// let obj = {
//   name: "John",
//   age: 30
// };

// let test = new Map(Object.entries(obj));
// console.log(test)

// let obj2 = (
// 	['banana', 1],
// 	['orange', 2],
// 	['meat', 4]
// 	)

// let obj3 = Object.fromEntries([obj2]);

// console.log(obj3);

// let prices = Object.fromEntries([
// 	['banana', 1],
// 	['orange', 2],
// 	['meat', 4]
// 	]);

// // now prices = { banana: 1, orange: 2, meat: 4 }

// alert(prices.orange); // 2

// let krem = new Set();

// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };

// // считаем гостей, некоторые приходят несколько раз
// krem.add(john);
// krem.add(pete);
// krem.add(mary);
// krem.add(john);
// krem.add(mary);

// // set хранит только 3 уникальных значения
// alert(krem.size); // 3

// for (let user of krem) {
//   alert(user.name); // John (потом Pete и Mary)
// }

// let set = new Set(["апельсин", "яблоко", "банан"]);

// for (let value of set) alert(value);

// // то же самое с forEach:
// set.forEach((value, valueAgain, set) => {
//   alert(value);
// });

// function unique(arr) {
// 	return Array.from(new Set(arr))
// };

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// alert(unique(values));

// let authorSchakal = new Map();

// authorSchakal.set("name", "John");

// let keys = Array.from(authorSchakal.keys());

// keys.push("more");

// alert(keys); // name, more

// function sumInput() {
// 	let mass = [];
// 	while(true) {
// 		let value = prompt('Введите число', '')
// 		if( value === '' || value === null || !isFinite(value)) break;

// 		mass.push(+value);
// 	}

// 	let sum = 0;

// 	for (let number of mass) {
// 		sum += number;
// 	}
// 	return sum;

// }

// alert(sumInput());

// let users = [
//   {id: 1, name: "Вася"},
//   {id: 2, name: "Петя"},
//   {id: 3, name: "Ма"}
// ];

// let someUsers = users.filter(item => item.name.length > 3);

// alert(someUsers.length);

// let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.toLowerCase());

// alert(lengths);

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.map((user) =>({
// 	fullName: `${user.name} ${user.surname}`,
// 	id: user.id

// }))

// /*
// usersMapped = [
//   { fullName: "Вася Пупкин", id: 1 },
//   { fullName: "Петя Иванов", id: 2 },
//   { fullName: "Маша Петрова", id: 3 }
// ]
// */

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // Вася Пупкин

// let prices = {
// 	banana: 1,
// 	orange: 2,
// 	meat: 4,
// };

// let doublePrices = Object.fromEntries(
//   // преобразовать в массив, затем map, затем fromEntries обратно объект
//   Object.entries(prices).map(([key, value]) => [key, value * 2])
//   );

// alert(doublePrices.orange); // 4

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// function sumSalaries(salary) {
// 	let sum = 0;
// 	for(let value of Object.values(salary)) {
// 		sum += value;

// 	}
// 	return sum;
// }

// alert(sumSalaries(salaries));

// function sumSalaries(salary) {
// 	return Object.values(salary).reduce((a, b) => a + b, 0)
// }

// let arr = ["Ilya", "Kantor"]

// // деструктурирующее присваивание
// // записывает firstName=arr[0], surname=arr[1]
// let [firstName, surname] = arr;

// alert(firstName); // Ilya
// alert(surname);  // Kantor
// Теперь мы можем использовать переменные вместо элементов массива.

// Отлично смотрится в сочетании со split или другими методами, возвращающими массив:

// let [firstName, surname] = "Ilya Kantor".split(' ');

// let user = {
//   name: "John",
//   age: 30
// };

// for(let [key, value] of Object.entries(user)){
// 	alert(`${key} : ${value}`);
// }

// let user = new Map();

// user.set('name', "John");
// user.set('age', "30");
// user.set('hairs', 'black');

// for(let [a,b] of user) {
// 	alert(`${a} : ${b}`)
// }

// let [name = "Guest", surname = "Anonymous"] = ["Julius"];

// alert(name);    // Julius (из массива)
// alert(surname); // Anonymous (значение по умолчанию)

// let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// alert(name1); // Julius
// alert(name2); // Caesar

// // Обратите внимание, что `rest` является массивом.
// alert(rest[0]); // Consul
// alert(rest[1]); // of the Roman Republic
// alert(rest.length); // 2

// let [name = prompt('name&'), surname = prompt('surname&')] = ['julius'];

// alert(name);
// alert(surname);

// let options = {
//   title: "Menu",
//   width: 100,
//   height: 200
// };

// // взять только title, игнорировать остальное
// let { title, ...bingi } = options;

// alert(title); // Menu
// alert(bingi.width);

// let user = {
//   name: "John",
//   years: 30
// };

// let {name, years, isAdmin = false} = user;

// alert( name ); // John
// alert( years ); // 30
// alert( isAdmin ); // false

// let [a, b, c] = "abc";
// let [one, two, three] = new Set([1, 2, 3]);

// alert(two);

// let user = {};

// [name, lastname, ...rest] = ['Roman', 'Osipenko', 'Osipengsko', 'Osipengsdgsdko'];

// alert(rest)

// let krem = {height, width, title} = {width: 180, title: 'hi', height: 200 };

// let roy = krem.title;
// console.log(krem.title);
// console.log(roy)

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// function topSalary(salaries) {

//   let max = 0;
//   let maxName = null;

//   for(const [name, salary] of Object.entries(salaries)) {
//     if (max < salary) {
//       max = salary;
//       maxName = name;
//     }
//   }

//   return maxName;
// }

// alert(topSalary(salaries));

// let start = new Date(); // начинаем отсчёт времени

// // выполняем некоторые действия
// for (let i = 0; i < 100000; i++) {
//   let doSomething = i * i * i;
// }

// let end = new Date(); // заканчиваем отсчёт времени

// alert( `Цикл отработал за ${end - start} миллисекунд` );

// Date.now();

// function getWeekDay(date) {
// 	let days = ['ВС','ПН','ВТ','СР','ЧТ','ПТ','СБ',];
// 	return days[date.getDay()];
// }

// let krem = new Date(1990, 11, 1);

// alert(getWeekDay(krem));

// let krem = {

// 	name: 'ROman',
// 	age : 30,

// 	wife: 'no'
// };

// let roy = JSON.stringify(krem);

// let roy = JSON.parse(krem);
// alert(typeof roy)

// let room = {
//   number: 23
// };

// let meetup = {
//   title: "Conference",
//   participants: [{name: "John"}, {name: "Alice"}],
//   place: room // meetup ссылается на room
// };

// room.occupiedBy = meetup; // room ссылается на meetup

// alert( JSON.stringify(meetup, ['title', 'participants']) );
// // {"title":"Conference","participants":[{},{}]}

// let meetup = {
//   title: "Conference",
//   room: {
//     number: 23,
//     participants: ["john", "ann"]
//   }
// };

// alert(JSON.stringify(meetup));

// let room = {
//   number: 23,
//   color: 'red'
// };

// let meetup = {
//   title: "Conference",
//   participants: [{name: "John"}, {name: "Alice"}],
//   place: room //
// };

// alert(JSON.stringify(meetup, ['title', 'participants', 'name', 'place', 'number', 'color']))

// function pow(x, n) {
//   let result = 1;

//   // умножаем result на x n раз в цикле
//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

// alert( pow(2, 1) ); // 8

// let company = { // тот же самый объект, сжатый для краткости
//   sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
//   development: {
//     sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
//     internals: [{name: 'Jack', salary: 1300}]
//   }
// };

// // Функция для подсчёта суммы зарплат
// function sumSalaries(department) {
//   if (Array.isArray(department)) { // случай (1)
//     return department.reduce((prev, current) => prev + current.salary, 0); // сумма элементов массива
//   } else { // случай (2)
//     let sum = 0;
//     for (let subdep of Object.values(department)) {
//       sum += sumSalaries(subdep); // рекурсивно вызывается для подотделов, суммируя результаты
//     }
//     return sum;
//   }
// }

// alert(sumSalaries(company)); // 6700

// function pedobir(...opa) {
// 	sum = 0;
// 	for(let ket of opa) {
// 		sum += ket;
// 	}
// };

// pedobir(12,5,643,32,5,)

// function getTitler(a,b, ...massiv) {
// 	alert(a + ' и ' + b);
// 	alert(massiv[0]);
// 	alert(massiv[1]);
// }

// getTitler('Великий', 'могучий', 'умный', 'мудрый',);

// function outUser(a,b) {
// 	function just() {
// 		return a + ' ' + b;
// 	}
// 	alert('hi ' + just());
// 	alert('bye ' + just());
// }

// outUser('Василий', 'Уткин');

// function krem() {
// 	let a = 0;
// 	return function() {
// 		a++;
// 		console.log(a);
// 	}
// }

// let b = krem();
// b();
// b();
// b();

// function learn(domain) {
// 	return function bibi (url) {
// 	return	`htpps//:${url}.${domain}`;
// 	}
// }

// let begin1 = learn('com');
// let begin2 = learn('ru');
// console.log(begin1('vkontakte'));
// console.log(begin2('vkontakte'));

// function logPerson(a, ...b) {
// 	console.log(`${a.name}, ${a.lastname}, ${a.age} `);
// };

// let person = {
// 	name: 'Roman',
// 	lastname: 'Osipenko',
// 	age: 29,
// 	color: 'eys',
// 	house: 'yes'
// };

// logPerson(person);

// function makeCounter() {
//   // вместо
//   // let count = 0

//   function counter() {
//     return counter.count++;
//   };

//   counter.count = 0;

//   return counter;
// }

// let cou = makeCounter();
// alert( cou() ); // 0
// alert( cou() ); // 1

// let sayHi = function(who) {
//   if (who) {
//     alert(`Hello, ${who}`);
//   } else {
//     sayHi("Guest"); // Ошибка: sayHi не является функцией
//   }
// };

// let welcome = sayHi;
// sayHi = null;

// welcome(); // Ошибка, вложенный вызов sayHi больше не работает!

// function makeCounter() {
//   let count = 0;

//   function counter() {
//     return count++;
//   }

//   counter.set = value => count = value;

//   counter.decrease = () => count--;

//   return counter;
// }

// let a = makeCounter();

// a();
// a();
// a();
// alert(a);

// setTimeout(() => (alert('Привет аафа')), 2000);

// let timerId = setTimeout(() => alert("ничего не происходит"), 3000);
// alert(timerId); // идентификатор таймера

// clearTimeout(timerId);
// alert(timerId);

// let time = setInterval(() => alert('Опа вот он я'), 2000);

// setTimeout(() => {clearInterval(time); alert('stop');}, 5000)

// let bibi = setTimeout(function test(){
// 	alert('я все смогу и могу');

// 	bibi = setTimeout(test, 1000)
// }, 3000)

// function printNumbers(from, to) {
//   let current = from;

//   setTimeout(function go() {
//     alert(current);
//     if (current < to) {
//       setTimeout(go, 1000);
//     }
//     current++;
//   }, 1000);
// }

// // использование:
// printNumbers(5, 10);

// function printNumbers(from, to) {
//   let current = from;

//   let timerId = setInterval(function() {
//     alert(current);
//     if (current == to) {
//       clearInterval(timerId);
//     }
//     current++;
//   }, 1000);
// }

// // использование:
// printNumbers(5, 10);

// function printNumbers(from, to) {
// 	let start = from;
// 	setTimeout(function go() {
// 		alert(start);

// 		if(from < to) {
// 			setTimeout(go, 1000);

// 		}
// 		start++;

// 	}, 1000);
// }

// printNumbers(5, 7);

// function hello() {
// 	console.log('hello', this)
// };

// const person = {
// 	name: 'Vladilen',
// 	age: 25,
// 	sayHello: hello,
// 	getInfo: function(job, phone) {
// 		console.log(`Мое имя ${this.name}`)
// 		console.log(`Мой возраст ${this.age}`)
// 		console.log(`Моя работа, ${job}`)
// 		console.log(`Моя phone ${phone}`)
// 	}
// }

// person.getInfo('IT', '31668');

// let sluta = {
// 	name: 'Anna',
// 	age: 22,

// };

// const opa = person.getInfo.bind(sluta);

// opa('Senior', '354 3253');

// let mas = [1, 5, 10, 20];

// function bibi(arr, b) {
// 	return arr.map( function(i){
// 		return i * b
// 	})
// }

// alert(bibi(mas, 4));

// let fac = function f(n) {
// 	return (n !== 1) ? f(n -1) * n : n;
// }

// function logResultDecorator(func, test) {
// 	return function() {
// 		let result = func.apply(this, arguments);
// 		console.log(`говнокод нашей ${test} ${result}`);
// 		return result;
// 	}
// };

// function callCountDecorator(func, test) {
// 	let count = 0;
// 	return function() {
// 		count++;
// 		console.log(`Функция ${test} была вызвана ${count} раз`);
// 		return func.apply(this, arguments);
// 	}
// }

// fac = logResultDecorator(fac, 'test');
// fac = callCountDecorator(fac, 'test');

// fac(7);
// fac(7);

// let roma = document.querySelector('.interactive');

// window.addEventListener("scroll", function() {
// 	let osip = window.scrollY;
// 	if(osip > 50) {
// 		roma.classList.add('active');
// 	}else{
// 		roma.classList.remove('active');
// 	}

// });

// roma.addEventListener("click", function() {

// roma.classList.toggle('active');

// })

// function f() {
//   let value = 123;

//   return function g() {
//   	value =+ value;
//   	console.log(value);

//   }

// }

// let g = f();

// g();
// g();
// g();

// function test(from, to) {
// 	let current = from;

// 	let id = setInterval(function bibi() {
// 		alert(current);
// 		if (current == to) {
// 			clearInterval(id)
// 		};
// 		current++
// 	})

// }

// alert(test(2,5))

// let input = document.querySelector('.input');
// let btn = document.querySelector('.button');
// let text = document.querySelector('.opa');

// btn.addEventListener(
// 	'click', function() {
// 		let sum = +input.value;
// 		if (typeof sum !== 'number') {
// 			alert('не число')
// 		}
// 		console.log(sum * 10);
// 		text.innerHTML = sum;
// 		input.value = '';

// 	})

// let offset = 0;

// function move() {
// 	offset = offset + 5;
// 	document.querySelector('.test').style.left = offset + 'px';
// 	if(offset > 200) {
// 		return
// 	}
// 	setTimeout(move, 1000)
// }

// document.querySelector('.btn').addEventListener('click', move);

// let links = document.querySelectorAll('.link');

// for (let key of links) {
// 	key.addEventListener('click', function() {
// 		console.log(key.textContent)
// 	})
// }

let a = document.querySelector(".book");

console.log(a.classList.contains("book"));

a.addEventListener("click", (el) => {
  // if(el.target.classList.contains('li')) {
  //     console.log('yep')
  // }else {
  //     console.log(22)
  // }
  if (el.target.classList.contains("chapter")) {
    console.log(11);
  }
});

const papa = async () => {
  try {
    const res = await fetch("vk.com");
    const data = await res.json();
  } catch (e) {
    console.log(e);
  }
};
