import { Component, Input } from '@angular/core';

@Component({
  selector: 'post-list',
  standalone: true,
  imports: [],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent {
  @Input() postListTitle: string = '';

  childMessage: string = 'This is a message from the child component';
}
