import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stfy-home-tools',
  templateUrl: './home-tools.component.html',
  styleUrls: ['./home-tools.component.scss']
})
export class HomeToolsComponent implements OnInit {

  images: string[] = [
    'npm.svg',
    'github.svg',
    'typescript.svg',
    'javascript.svg',
    'yarn.svg'
  ]

  constructor() { }

  ngOnInit() {
  }

}
