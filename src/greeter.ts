function greeter(person: String) {
    return `Hello, ${person}`;
}

const user = "Taro";

document.getElementById("greeter1").innerHTML = greeter(user);
