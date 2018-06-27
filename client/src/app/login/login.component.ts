import { FormGroup, FormControl, FormArray, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private myForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.myForm = new FormGroup({
      'username': new FormControl(),
      'password': new FormControl()
    });
  }

}
