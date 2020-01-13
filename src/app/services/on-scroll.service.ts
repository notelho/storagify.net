import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OnScrollService implements OnDestroy {

  private _onScroll = new Subject()

  constructor() {
    document.addEventListener('scroll', () => this._onScroll.next())
  }

  public onScroll(): any {
    return this._onScroll
  }

  ngOnDestroy() {
    document.removeEventListener('scroll', null)
  }

}
