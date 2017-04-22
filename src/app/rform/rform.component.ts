import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.css']
})
export class RFormComponent implements OnInit {
  genders = ['male', 'female'];
  signForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.signForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'gender': new FormControl('male')

    });
  }
  onSubmit() {
    console.log(this.signForm);
  }

}
