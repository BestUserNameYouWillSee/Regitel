var news;

var request = new XMLHttpRequest();
     
request.open('POST', 'https://api.bundeling.com/V2/news&APPID=830919aae3594240990576b77fd7e635');
 
request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Api-Key', '830919aae3594240990576b77fd7e635');
 
request.onreadystatechange = function(){
    if(this.readyState === 4){
        console.log('Status:', this.status);
        console.log('Headers:', this.getAllResponseHeaders());
        console.log('Body:', this.responseText);
    }
};
 
request.send();
request.onload = () => {
    console.log(request);
}

var request1 = new XMLHttpRequest();
 
request.open('GET', 'https://api.bundeling.com/V1/news');
 
request.setRequestHeader('Content-Type', 'application/xml');
request.setRequestHeader('Api-Key', 'RAegSX8yZfEbqSPM');
 
request.onreadystatechange = function(){
    if(this.readyState === 4){
        console.log('Status:', this.status);
        console.log('Headers:', this.getAllResponseHeaders());
        console.log('Body:', this.responseText);
    }
};
document.write(request1)
document.write(request)
 
request.send();