var request = new XMLHttpRequest();

request.open('GET', 'https://api.bundeling.com/V1/users');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Api-Key', '830919aae3594240990576b77fd7e635');

request.onreadystatechange = function(){
    if(this.readyState === 4){
        console.log('Status:', this.status);
        console.log('Headers:', this.getAllResponseHeaders());
        console.log('Body:', this.responseText);
    }
};


function loadTable() {
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://api.bundeling.com/V1/users");
  xhttp.send();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      var trHTML = ''; 
      const objects = JSON.parse(this.responseText);
      for (let object of objects) {
        trHTML += '<tr>'; 
        trHTML += '<td>'+object['id']+'</td>';
        trHTML += '<td><img width="50px" src="'+object['avatar']+'" class="avatar"></td>';
        trHTML += '<td>'+object['fname']+'</td>';
        trHTML += '<td>'+object['lname']+'</td>';
        trHTML += '<td>'+object['username']+'</td>';
        trHTML += '<td><button type="button" class="btn btn-outline-secondary" onclick="showUserEditBox('+object['id']+')">Edit</button>';
        trHTML += '<button type="button" class="btn btn-outline-danger" onclick="userDelete('+object['id']+')">Del</button></td>';
        trHTML += "</tr>";
      }
      document.getElementById("mytable").innerHTML = trHTML;
    }
  };
}

loadTable();

request.send();

var request = new XMLHttpRequest();

request.open('GET', 'https://api.bundeling.com/V1/users/14');

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

var request = new XMLHttpRequest();

request.open('POST', 'https://api.bundeling.com/V1/users');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Api-Key', '830919aae3594240990576b77fd7e635');

request.onreadystatechange = function(){
    if(this.readyState === 4){
        console.log('Status:', this.status);
        console.log('Headers:', this.getAllResponseHeaders());
        console.log('Body:', this.responseText);
    }
};

var body = {
    "customer_id": 4,
    "username": "johndoe",
    "password": "johndoe123!",
    "name": "John Doe",
    "function": "Employee",
    "birthday": "1986-04-22",
    "email": "johndoe@email.com",
    "telephone": "+31412345678",
    "mobilephone": "+31612345678",
    "linkedin": "https:\/\/www.linkedin.com\/in\/eric-van-den-brand-a4769a\/",
    "notes": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    "external_reference": "123908",
    "hidden": false,
    "send_invite": false,
    "labels": [
        1,
        4,
        10
    ]
};

request.send(JSON.stringify(body));

var request = new XMLHttpRequest();

request.open('PUT', 'https://api.bundeling.com/V1/users/14');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Api-Key', '830919aae3594240990576b77fd7e635');

request.onreadystatechange = function(){
    if(this.readyState === 4){
        console.log('Status:', this.status);
        console.log('Headers:', this.getAllResponseHeaders());
        console.log('Body:', this.responseText);
    }
};

var body = {
    "customer_id": 4,
    "username": "johndoe",
    "password": "johndoe123!",
    "name": "John Doe",
    "function": "Employee",
    "birthday": "1986-04-22",
    "email": "johndoe@email.com",
    "telephone": "+31412345678",
    "mobilephone": "+31612345678",
    "linkedin": "https:\/\/www.linkedin.com\/in\/eric-van-den-brand-a4769a\/",
    "notes": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    "external_reference": "123908",
    "hidden": false,
    "send_invite": false,
    "labels": [
        1,
        4,
        10
    ]
};

request.send(JSON.stringify(body));

var request = new XMLHttpRequest();

request.open('DELETE', 'https://api.bundeling.com/V1/users/14');

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

