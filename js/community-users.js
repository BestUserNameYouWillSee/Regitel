function users(token) {
    var xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {


            let i = 0;
            while (i < 50) {
                console.log(JSON.parse(this.responseText));
                var name = JSON.parse(this.responseText).data[i].name;
                const names = [JSON.parse(this.responseText).data[i].name];
                i + 1;

                console.log(names);
            }

        }
    });

    xhr.open("GET", "https://api.bundeling.com/V2/users");
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
        users(data.token);
    }
});

xhr.open("POST", "https://api.bundeling.com/V2/login");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Api-Key", "830919aae3594240990576b77fd7e635");

xhr.send(data);
