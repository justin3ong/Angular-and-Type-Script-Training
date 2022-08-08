
interface cityDirectory {
    city: string;
    country: string;
    population: number;
}

var mainList: cityDirectory[] = [];
export const addcityDirectory = (data1: string, data2: string, data3: number) => {
    let newcityDirectory: cityDirectory = { city: data1, country: data2, population: data3 }
    mainList.push(newcityDirectory);
    displayCityDirectory();
}


export const displayCityDirectory = () => {
    const tableBody = document.getElementById('tableData') as HTMLTableElement;
    let dataHtml = '';
    mainList.forEach((data: cityDirectory) => {
        dataHtml += '<tr><td>' + data.city + '</td><td>' + data.country + '</td><td>' + data.population + '</td></tr>';
        tableBody.innerHTML = dataHtml;
    })
}


