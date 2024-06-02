import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AxButtonType, ButtonModel } from './ax-button.model';

@Component({
  selector: 'ax-button',
  templateUrl: './ax-button.component.html',
  styleUrls: ['./ax-button.component.scss']
})
export class AxButtonComponent {
  @Input() buttonConfig!: ButtonModel;
  @Output() event = new EventEmitter<Event>();
  ButtonType = AxButtonType;

  /**
   * Method emits Click event
   */
  onClick(): void {
    this.event.emit();
  }
}
