var request = new XMLHttpRequest();
     
request.open('GET', 'https://api.bundeling.com/V1/news');
 
request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Api-Key', 'RAegSX8yZfEbqSPM');
 
request.onreadystatechange = function(){
    if(this.readyState === 4){
        console.log('Status:', this.status);
        console.log('Headers:', this.getAllResponseHeaders());
        console.log('Body:', this.responseText);
    }
};
 
request.send();