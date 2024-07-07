import { Component } from '@angular/core';
import {LibInputComponent} from "../../../components/shared/lib-input/lib-input.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    LibInputComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
