import { Component } from '@angular/core';
import { OnScrollService } from './services/on-scroll.service';

@Component({
  selector: 'stfy-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'storagify'

  flowerSize: number = 0

  squareTop: number = 0

  clouds: number[] = [
    -631 * 0.55,
    -631 * 0.55 * 2,
    -631 * 0.55 * 3
  ]

  constructor(public onScrollService: OnScrollService) {
    this.onScrollService.onScroll()
      // .pipe(debounce(() => interval(70)))
      .subscribe(() => this.moveBackground())
  }

  moveBackground() {
    let scrollamount = (window.pageYOffset !== undefined) ?
      window.pageYOffset : (document.documentElement || document.body).scrollTop
    this.squareTop = scrollamount
    this.flowerSize = scrollamount / 4
    for (let i = 0; i < this.clouds.length; i++) {
      this.clouds[i] = ((-631 * 0.55) * (i + 1)) + scrollamount
    }
  }

  getFlowerStyles() {
    return {
      'width': this.flowerSize + 'px',
      'height': this.flowerSize + 'px',
      'bottom': -this.flowerSize / 2 + 'px',
      'left': 300 - this.flowerSize / 2 + 'px',
      'box-shadow':
        `${this.flowerSize * 0.5}px 20px 0 0 #EDE9F3,` +
        `${-this.flowerSize * 0.5}px 20px 0 0 #EDE9F3,` +
        `${this.flowerSize * 0.25}px -${this.flowerSize * 0.25}px 0 0 #EDE9F3,` +
        `${-this.flowerSize * 0.25}px -${this.flowerSize * 0.25}px 0 0 #EDE9F3,` +
        `0 -${this.flowerSize * 0.15}px 0 0 #EDE9F3`
    }
  }

}