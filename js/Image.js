function image(token) {
  var xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      console.log(JSON.parse(this.responseText));
      //document.body.innerHTML = response
      document.getElementsByClassName("api1")[0].innerHTML = JSON.parse(this.responseText).content;
    }
  });

  xhr.open("GET", "https://api.bundeling.com/V2/documentation/method/files/single?format=json&language=raw");
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
    image(data.token);
  }
});

xhr.open("POST", "https://api.bundeling.com/V2/login");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Api-Key", "830919aae3594240990576b77fd7e635");

xhr.send(data);