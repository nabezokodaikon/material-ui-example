class Student {
    fullName: string

    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = `${firstName}-${middleInitial}-${lastName}`
    }
}

interface Person {
    firstName: string
    lastName: string
}

function greeter3(student: Student) {
    return `Hello ${student.fullName}`
}

const user3 = new Student("Taro", "D", "Yamada")

document.getElementById("greeter3").innerHTML = greeter3(user3)
