import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ПРИВЕТ';
  counter = 0;
  colors = ['red', 'blue', 'green'];
  style: any = {
    opacity: 1,
    color: this.colors[0]
  };

  constructor() {
    this.render();
  }

  // render() {
  //   requestAnimationFrame(() => {
  //     this.counter++;
  //     this.render();
  //   });
  // }
  render() {
    setInterval(() => {
      this.style.opacity =
        ++this.counter % 2;
    }, 1000);
  }

  myOnClick(event: MouseEvent) {
    this.style.color = this.colors[this.getColorIndex()];
  }

  getColorIndex() {
    return Math.floor(Math.random() * 3);
  }
}
