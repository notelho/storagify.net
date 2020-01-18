import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stfy-animated-encryption',
  templateUrl: './animated-encryption.component.html',
  styleUrls: ['./animated-encryption.component.scss']
})
export class AnimatedEncryptionComponent implements OnInit {

  availableTexts: string[] = ['storagify', 'c3RvcmFnaWZ5']
  glitchText: string = 'storagify'
  dataText: string = 'storagify'

  loop = setInterval(() => {
    const index = this.availableTexts.indexOf(this.dataText) ^ 1
    setTimeout(() => this.glitchText = this.availableTexts[index], 100)
    setTimeout(() => this.dataText = this.availableTexts[index], 800)
  }, 5000)

  constructor() { }

  ngOnInit() { }

}
