import { Component } from '@angular/core';
import {LibInputComponent} from "../../../components/shared/lib-input/lib-input.component";
import {LibButtonComponent} from "../../../components/shared/lib-button/lib-button.component";
import {LibCheckboxComponent} from "../../../components/shared/lib-checkbox/lib-checkbox.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    LibInputComponent,
    LibButtonComponent,
    LibCheckboxComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
