/*Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] Знайти суму та кількість позитивних елементів.
Знайти мінімальний елемент масиву та його порядковий номер.
Знайти максимальний елемент масиву та його порядковий номер.
Визначити кількість негативних елементів.
Знайти кількість непарних позитивних елементів.
Знайти кількість парних позитивних елементів.
Знайти суму парних позитивних елементів.
Знайти суму непарних позитивних елементів.
Знайти добуток позитивних елементів.
Знайти найбільший серед елементів масиву, ост альні обнулити.*/



const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

const minElementArr = (arr) => {
	let minElement = arr[0];
	let minElementIndex;
	for (let i=0; i < arr.length; i++){
		let currentElement = arr[i];
		
		if (currentElement < minElement){
			minElement = currentElement;
			minElementIndex = i
		}
	}
	console.log(`мінімальний елемент масиву  = ${minElement}, та його порядковий номер = ${minElementIndex}`)
}
minElementArr(arr)

const maxElementArr = (arr) => {
	let maxElement = arr[0];
	let maxElementIndex;
	for (let i=0; i < arr.length; i++){
		let currentElement = arr[i];

		if (currentElement > maxElement){
			maxElement = currentElement;
			maxElementIndex = i
		}
	}
	console.log(`максимальний елемент масиву = ${maxElement}, та його порядковий номер = ${maxElementIndex}`)
}

maxElementArr(arr)



const negativeElement = (arr) => {
	let countNegativeElement = 0;
	for (let i=0; i < arr.length; i++){
		let currentElement = arr[i];
		if (currentElement < 0) {
			countNegativeElement++;
		}
	}
	console.log(`кількість негативних елементів = ${countNegativeElement}`)
}
negativeElement(arr)



const unpaired = (arr) => {
	let countPositiveElement = 0;
	for (let i=0; i < arr.length; i++){
		let currentElement = arr[i];
		if (currentElement > 0 && currentElement % 2 === 0 ) {
			countPositiveElement++;

		}
	}
	console.log(`кількість парних позитивних елементів = ${countPositiveElement}`)
}
unpaired(arr)


const paired = (arr) => {
	let countPositiveElement = 0;
	for (let i=0; i < arr.length; i++){
		let currentElement = arr[i];
		if (currentElement > 0 && currentElement % 2 !== 0 ) {
			countPositiveElement++;

		}
	}
	console.log(`кількість непарних позитивних елементів = ${countPositiveElement}`)
}
paired(arr)


const sumPaired = (arr) => {
	let sumOfPaired = 0;
	for (let i=0; i < arr.length; i++){
		let currentElement = arr[i];
		if (currentElement > 0 && currentElement % 2 === 0 ) {
			sumOfPaired += currentElement;

		}
	}
	console.log(`сума парних позитивних елементів = ${sumOfPaired}`)
}
sumPaired(arr)


const sumUnPaired = (arr) => {
	let sumOfPaired = 0;
	for (let i=0; i < arr.length; i++){
		let currentElement = arr[i];
		if (currentElement > 0 && currentElement % 2 !== 0 ) {
			sumOfPaired += currentElement;

		}
	}
	console.log(`сума непарних позитивних елементів = ${sumOfPaired}`)
}
sumUnPaired(arr)

const multPositive = (arr) => {
	let sumOfPaired = 1;
	for (let i=0; i < arr.length; i++){
		let currentElement = arr[i];
		if (currentElement > 0  ) {
			sumOfPaired *= currentElement;

		}
	}
	console.log(`добуток позитивних елементів = ${sumOfPaired}`)
}
multPositive(arr)


const maxElementAndZero = (arr) => {
	let maxElement = 0;
	let maxElementIndex = 0;
	for (let i=0; i < arr.length; i++){
		if (arr[i] > maxElement  ) {
			maxElement = arr[i];
			maxElementIndex = i;
		}
		arr[i] = 0;
	}
	arr[maxElementIndex] = maxElement;
	console.log(`найбільший серед елементів масиву = ${maxElement} та масив після обнулення = ${arr}`)
}
maxElementAndZero(arr)