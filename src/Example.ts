class ClickCounter {

  private count = 0;

  registerClick(): void {
    this.count++;
    console.log(this.count)
  }
}

const clickCounter = new ClickCounter();
const clickHandler = clickCounter.registerClick.bind(clickCounter);
document.getElementById("target").onclick = clickHandler;
