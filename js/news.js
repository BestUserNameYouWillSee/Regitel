function news(token) {
    var xhr = new XMLHttpRequest();
  
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
      }
    });
  
    xhr.open("GET", "https://api.bundeling.com/V2/news");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Api-Key", "830919aae3594240990576b77fd7e635");
    xhr.setRequestHeader("Authorization", `BundelingAuth ${token}`);
  
    xhr.send();
  }
  
  var data = JSON.stringify({
    username: "roy.tieben@gmail.com",
    password: "zzqQAB%WZpgQ!jXR",
  });
  
  var xhr = new XMLHttpRequest();
  
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      const data = JSON.parse(this.responseText);
      news(data.token);
    }
  });
  
  xhr.open("POST", "https://api.bundeling.com/V2/login");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Api-Key", "830919aae3594240990576b77fd7e635");
  
  xhr.send(data);