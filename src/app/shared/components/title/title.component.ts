import { BaseComponent } from './../base/base.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent extends BaseComponent implements OnInit {

  constructor() {
    super();
    this.title = 'new title';
   }

  ngOnInit() {
  }

}
