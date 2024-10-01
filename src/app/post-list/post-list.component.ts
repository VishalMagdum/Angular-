import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'post-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent {
  @Input() postListTitle: string = '';

  childMessage: string =
    'This is a message from the child component using click event';

  //----- data Flow from child to parent using @Output() Event Emitter-----
  @Output() MessageEvent = new EventEmitter<string>();
  messageToParent: string =
    'This is a message from the child component to the parent component';
  sendMessage() {
    console.log('send message btn clicked');
    this.MessageEvent.emit(this.messageToParent);
  }
  //-----------------------------------------------------------------------
}
