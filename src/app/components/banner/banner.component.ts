import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  navBtns = [
    {
      type: 'img-speed-test',
      label: 'Image Speed Test'
    },
    {
      type: 'docs',
      label: 'Docs'
    },
    {
      type: 'pricing',
      label: 'Pricing'
    },
    {
      type: 'try-pilo-free',
      label: 'Try Pili Free'
    },
    {
      type: 'login',
      label: 'Login',
      border: true
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
