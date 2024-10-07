import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnChanges, OnInit {
  @Input() puserName: string = '';
  ngOnChanges() {
    console.log('onChanges triggered');
  }
  ngOnInit() {
    console.log('onInit triggered');
    console.log('username onInit', this.puserName);
  }
  constructor() {
    console.log('constructor triggered');
    console.log('username in constructor', this.puserName);
  }
}
