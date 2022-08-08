"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayCityDirectory = exports.addcityDirectory = void 0;
var mainList = [];
const addcityDirectory = (data1, data2, data3) => {
    let newcityDirectory = { city: data1, country: data2, population: data3 };
    mainList.push(newcityDirectory);
    (0, exports.displayCityDirectory)();
};
exports.addcityDirectory = addcityDirectory;
const displayCityDirectory = () => {
    const tableBody = document.getElementById('tableData');
    let dataHtml = '';
    mainList.forEach((data) => {
        dataHtml += '<tr><td>' + data.city + '</td><td>' + data.country + '</td><td>' + data.population + '</td></tr>';
        tableBody.innerHTML = dataHtml;
    });
};
exports.displayCityDirectory = displayCityDirectory;
