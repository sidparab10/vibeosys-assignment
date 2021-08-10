import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footerBtns = [
    'Try pilo free',
    'Pricing',
    'image speed test',
    'docs',
    'faq',
    'contact'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
