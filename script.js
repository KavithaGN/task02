//XHR ->  are used to interact with servers via API
//1. creating an XHR object
//new keyword
var request = new XMLHttpRequest();
//2. opening a connection(specify the url)
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
//3.sending a connection
request.send();
//4. once the server responded sucessfully, then we have to process the data 
request.onload = function() {
    let data = JSON.parse(this.response);
    console.log(data);
    for(let a=0; a<data.length; a++) {
        console.log(data[a].name + " " + data[a].capital);
        console.log(data[a].flag);
    }
}
//print the capitals of the 10 countries
