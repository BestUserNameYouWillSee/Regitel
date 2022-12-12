function users(token) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api.bundeling.com/V2/files");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Api-Key", "830919aae3594240990576b77fd7e635");
    xhr.setRequestHeader("Authorization", `BundelingAuth ${token}`);

    xhr.open("GET", "https://api.bundeling.com/V2/users");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Api-Key", "830919aae3594240990576b77fd7e635");
    xhr.setRequestHeader("Authorization", `BundelingAuth ${token}`);

    xhr.send();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            const names1 = [""];
            const Images = [""];
            //const newRequest = new Request("https://api.bundeling.com/V2/users", Images);
            let i = 0;
            console.log(JSON.parse(this.responseText))
            console.log(Images);
            while (i < 50) {
                Images.push(JSON.parse(this.responseText).data[i].picture);
                //const ImagesTest = [JSON.parse(this.responseText).data[i].picture];
                names1.push(JSON.parse(this.responseText).data[i].name + "<br/>");
                //document.getElementById("image").src = ImagesTest;
                document.getElementById("image").src =  Images.join("https://api.bundeling.com/V2/users");
                document.getElementById("naam").innerHTML =  names1.join("");
                i += 1;
            }
        }
    });
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
