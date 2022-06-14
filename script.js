a = document.getElementById("submit")
a.addEventListener("click", displaydata);
function displaydata() {
    const x = document.forms['myform'];
    let text = "";
    for (let i = 0; i < x.length; i++) {
        text += x.elements[i].value + "<br>";
    }
    document.getElementById("log").innerHTML = text;
    console.log(text);
}