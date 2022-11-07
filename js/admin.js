    var request = new XMLHttpRequest();
 
    request.open('POST', 'https://api.bundeling.com/V2/login');
     
    request.setRequestHeader('Content-Type', 'application/json');
    request.setRequestHeader('Api-Key', '830919aae3594240990576b77fd7e635');
     
    request.onreadystatechange = function(){
       if(this.readyState === 4){
            console.log('Status:', this.status);
            console.log('Headers:', this.getAllResponseHeaders());
            console.log('Body:', this.responseText);
            authent = console.log('Body:', this.responseText);
        }
    };
     
    var body = {
        "username": "roy.tieben@gmail.com",
        "password": "zzqQAB%WZpgQ!jXR"
    };

    request.send(JSON.stringify(body));

    console.log(authent);

    export function authent()

