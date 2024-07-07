import { Component } from '@angular/core';
import {LibInputComponent} from "../../../components/shared/lib-input/lib-input.component";
import {LibButtonComponent} from "../../../components/shared/lib-button/lib-button.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    LibInputComponent,
    LibButtonComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
