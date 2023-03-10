
changeName = () => {
    let message;
    let personName = prompt("What is your name?", "Hermione Granger");
    if (personName == null || personName == "") {
        message = "Hello, Unnamed Stranger!";
    } else {
        message = "Hello, " + personName + "!";
    }   
    document.getElementById("inputName").innerHTML = message;
}
