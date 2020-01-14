import { Component } from '@angular/core';
import { OnScrollService } from './services/on-scroll.service';
import { debounce } from 'rxjs/operators';
import { timer, interval } from 'rxjs';

@Component({
  selector: 'stfy-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'storagify'

  squareTop = 0

  constructor(public onScrollService: OnScrollService) {

    this.onScrollService.onScroll()
      .pipe(debounce(() => interval(70)))
      .subscribe(() => this.moveBackground())

  }

  moveBackground() {

    let scrollamount = (window.pageYOffset !== undefined) ?

      window.pageYOffset : (document.documentElement || document.body).scrollTop;

    console.log(scrollamount);

    this.squareTop= scrollamount

    // this.scrollClass = this.ref.scrollTop == 0 ? 'top' : ''


  }

}