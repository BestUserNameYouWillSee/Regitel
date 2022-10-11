var request = new XMLHttpRequest();
     
request.open('GET', 'https://v2.jokeapi.dev/joke/Any?safe-mode');

request.send();

request.onload = () => {
    console.log(request);
}