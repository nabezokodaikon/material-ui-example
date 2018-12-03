class HelloWorld
{
    constructor(public displayText : string) {}

    greet()
    {
        return this.displayText;    
    }

    sub() {
        return 1
    }
}

var helloWorld = new HelloWorld("HelloWorld");
document.body.innerHTML = helloWorld.greet();

