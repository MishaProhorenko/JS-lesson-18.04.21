'use strict'


//Data object


// const currentDate = new Date();
// console.log(currentDate);

const otherDate = new Date(2008, 0, 3);
// console.log(otherDate);
// const otherDate2 = new Date(2008, 0, 3, 14, 33, 55);
// console.log(otherDate2);
// const otherDate3 = new Date('2008-03-11');
// console.log(otherDate3);
// const otherDate4 = new Date(-29000000000000);
// console.log(otherDate4);


// const actionDate = new Date(2021,3,30,23,59,59)
// const currentDate = new Date();
// console.log(actionDate < currentDate)
// console.log(+actionDate )
// console.log(+currentDate )

// console.log(currentDate);

// const curyear = currentDate.getDay()

// console.log(curyear)

// 18.04.2021 ВСКР



// let getCurrenDate = () => {
//     const currentDate = new Date();
//     const currendYear = currentDate.getFullYear();
//     const currendMonth = currentDate.getMonth();
//     const currendDate = currentDate.getDate();
//     const weekDay = currentDate.getDay();
//     let day = ['ВСКР', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
//     return `${currendDate}.${currendMonth + 1}.${currendYear} ${day[weekDay]}`
// }

// console.log(getCurrenDate())


let getLeapYear = (year) => {
    const date = new Date(year, 2, 0);
   return date.getDate() === 29;
}
console.log(getLeapYear(2020))





