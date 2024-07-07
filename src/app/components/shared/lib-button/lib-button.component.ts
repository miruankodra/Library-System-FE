import {Component, input} from '@angular/core';

@Component({
  selector: 'app-lib-button',
  standalone: true,
  imports: [],
  templateUrl: './lib-button.component.html',
  styleUrl: './lib-button.component.scss'
})
export class LibButtonComponent {
  width = input<string>('w-full');
  height = input<string>('h-[50px]');
  background = input<string>('bg-white bg-opacity-60');
  border = input<string>('border-2 border-white rounded-[15px]');
  text = input<string>('text-black text-[36px]');
  font = input<string>('font-semibold');
}
