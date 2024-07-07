import {Component, input, output} from '@angular/core';

@Component({
  selector: 'app-lib-input',
  standalone: true,
  imports: [],
  templateUrl: './lib-input.component.html',
  styleUrl: './lib-input.component.scss'
})
export class LibInputComponent {
  width = input<string>('w-full');
  height = input<string>('h-[50px]');
  placeholder = input<string>('');
  type = input<string>('text');

  onInput = output<string>();

  onInputChanged(el: HTMLInputElement): void {
    const value = el.value;
    this.onInput.emit(value);
  }
}
