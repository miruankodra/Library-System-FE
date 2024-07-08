import {Component, output} from '@angular/core';

@Component({
  selector: 'app-lib-checkbox',
  standalone: true,
  imports: [],
  templateUrl: './lib-checkbox.component.html',
  styleUrl: './lib-checkbox.component.scss'
})
export class LibCheckboxComponent {
  isChecked: boolean = false
  onCheckboxChange = output<boolean>();

  toggleCheckbox(el: HTMLInputElement) {
    el.checked = !el.checked;
    this.isChecked = el.checked;
    this.onCheckboxChange.emit(this.isChecked);
  }
}
