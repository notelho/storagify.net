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

  documentHeight: number = 0

  constructor(public onScrollService: OnScrollService) {
    this.onScrollService.onScroll()
      // .pipe(debounce(() => interval(70)))
      .subscribe(() => this.moveBackground())

  }

  moveBackground() {

    let scrollamount = (window.pageYOffset !== undefined) ?

      window.pageYOffset : (document.documentElement || document.body).scrollTop

    this.squareTop = scrollamount

    this.flowerSize = scrollamount / 6

    for (let i = 0; i < this.clouds.length; i++) {

      this.clouds[i] = ((-631 * 0.55) * (i + 1)) + scrollamount

    }

    // this.scrollClass = this.ref.scrollTop == 0 ? 'top' : ''


  }

}