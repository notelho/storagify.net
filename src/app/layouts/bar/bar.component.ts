import { Component, OnInit, ElementRef } from '@angular/core';
import { OnScrollService } from 'src/app/services/on-scroll.service';
import { debounce } from 'rxjs/operators';
import { interval } from 'rxjs';

@Component({
  selector: 'stfy-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

  scrollClass: '' | 'top' = 'top'

  ref: any = null

  constructor(public onScrollService: OnScrollService) { }

  ngOnInit() {
    let
      body: any = document.body,
      doc: any = document.documentElement
    this.ref = (doc.clientHeight) ? doc : body

    this.onScrollService.onScroll()
      .pipe(debounce(() => interval(20)))
      .subscribe(() => this.scrollClass = this.ref.scrollTop == 0 ? 'top' : '')

  }
}