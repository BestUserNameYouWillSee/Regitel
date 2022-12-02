function bijeenkomsten(token) {
    var xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(JSON.parse(this.responseText));
            var bijeenkomsttitle = JSON.parse(this.responseText).data[0].title;
            var bijeenkomstdescription = JSON.parse(this.responseText).data[0].description;
            var bijeenkomstdate = JSON.parse(this.responseText).data[0].date;
            //document.body.innerHTML = response
            document.getElementById("title1").innerHTML = bijeenkomsttitle;
            document.getElementById("description1").innerHTML = bijeenkomstdescription;
            document.getElementById("date1").innerHTML = bijeenkomstdate;
        }
    });

    xhr.open("GET", "https://api.bundeling.com/V2/events");
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
        bijeenkomsten(data.token);
    }
});

xhr.open("POST", "https://api.bundeling.com/V2/login");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Api-Key", "830919aae3594240990576b77fd7e635");

xhr.send(data);
