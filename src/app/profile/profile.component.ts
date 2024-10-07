import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnChanges {
  @Input() puserName: string = '';
  ngOnChanges() {
    console.log('onChanges triggered');
  }
}
