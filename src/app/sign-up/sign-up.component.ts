import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  constructor() {}

  ngOnInit(): void {}
  
  onSubmit(): void {
    window.alert(
      `${this.myForm.get('name')?.value ?? ''} has successfully signed up`
    );
  }
}
