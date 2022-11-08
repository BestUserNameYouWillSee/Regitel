<<<<<<< HEAD
include('./js/admin.js')
Authorization: BundelingAuth 

var request = new XMLHttpRequest();
 
request.open('GET', 'https://api.bundeling.com/V2/news');
 
request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Api-Key', '830919aae3594240990576b77fd7e635');
 
request.onreadystatechange = function(){
    if(this.readyState === 4){
=======
var request = new XMLHttpRequest();


request.open('POST', 'https://api.bundeling.com/V2/login');


request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Api-Key', '830919aae3594240990576b77fd7e635');


request.onreadystatechange = function () {
    if (this.readyState === 4) {
>>>>>>> 936f626988c19bb1844063a367cc8da54716e149
        console.log('Status:', this.status);
        console.log('Headers:', this.getAllResponseHeaders());
        console.log('Body:', this.responseText);
    }
};
<<<<<<< HEAD
 
request.send();
=======

var body = {
    "username": "roy.tieben@gmail.com",
    "password": "zzqQAB%WZpgQ!jXR"
};
request.send(JSON.stringify(body));

<<<<<<< Updated upstream
console.log(token);
>>>>>>> 936f626988c19bb1844063a367cc8da54716e149
=======

var token = thisgetResponseHeader();
console.log(token);
>>>>>>> Stashed changes
