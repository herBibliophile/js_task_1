"use strict"

let numbersOfSeries = +prompt(`Nechta serial ko'rdingiz ?` , "")
const seriesDB = {
    count: numbersOfSeries ,
    series: {},
    actors: {},
    genres: [],
    private: false
}
let savol1 = prompt(`Oxirgi ko'rgan serialingiz 1` , "") 
let point1 = prompt(`Necha baho berasiz 1` , "")
let savol2 = prompt(`Oxirgi ko'rgan serialingiz 2` , "") 
let point2 = prompt(`Necha baho berasiz 2` , "")
seriesDB.series[savol1] = point1
seriesDB.series[savol2] = point2
console.log(seriesDB);