interface Person {
    firstName: string
    lastName: string
}

function greeter2(person: Person) {
    return `Hello, ${person.firstName} ${person.lastName}`
}

const user2 = { firstName: "Taro", lastName: "Yamada" }

document.getElementById("greeter2").innerHTML = greeter2(user2)
