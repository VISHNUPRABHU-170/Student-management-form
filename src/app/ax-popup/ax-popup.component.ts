import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PopupModel } from './ax-popup.model';

@Component({
  selector: 'ax-popup',
  templateUrl: './ax-popup.component.html',
  styleUrls: ['./ax-popup.component.scss']
})
export class AxPopupComponent {
  @Input() popupConfig!: PopupModel;
  @Output() event = new EventEmitter<Event>();

  /**
   * Method Emits Click event when Close button is Clicked.
   */
  onClose(): void {
    this.event.emit();
  }
}
