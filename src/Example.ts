///<reference path="Sub.ts" />

import doc = Docking.Dock;

class ClickCounter {

  private count = 0;

  registerClick(): void {
    this.count++;
    console.log(this.count)
    const d = new doc();
    d.call()
  }
}

const clickCounter = new ClickCounter();
const clickHandler = clickCounter.registerClick.bind(clickCounter);
document.getElementById("target").onclick = clickHandler;
