import { Component } from '@angular/core';

// Imported by Nick: 
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // Defines loginForm as a Form Group.
  loginForm!: FormGroup;

  // On Init Hook: 
  ngOnInit() {
    this.loginForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password' : new FormControl(null, Validators.required),
    });
  }

  // Function to Login:
  logIn() {
    let user = this.loginForm;
    console.log("welcome "+ user.value);
  }

}
