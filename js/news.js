function news(token) {
  var xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      console.log(JSON.parse(this.responseText));

      const Newscontent = [JSON.parse(this.responseText).data[0].content];
      const Newstitle = [JSON.parse(this.responseText).data[0].title];
      const Newspicture = [JSON.parse(this.responseText).data[0].picture];
      //document.body.innerHTML = response
      document.getElementById("title").innerHTML = Newstitle;
      document.getElementById("description").innerHTML = Newscontent;
      document.getElementById("picture").src = Newspicture;

    }
  });

  xhr.open("GET", "https://api.bundeling.com/V2/news", "https://api.bundeling.com/V2/files${Newspicture}");
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