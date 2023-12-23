import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "shared-search-box",
  templateUrl: "./search-box.component.html",
  styles: ``
})
export class SearchBoxComponent {
  @Output() onValue = new EventEmitter<string>();
  onInput(value: string) {
    this.onValue.emit(value);
  }

  @Input() public placeholder: string = "";
}
