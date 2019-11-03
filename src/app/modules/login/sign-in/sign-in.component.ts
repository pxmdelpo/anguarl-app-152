import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  model: any;

  constructor() { }

  ngOnInit() {
    this.model = {
      email: '',
      password: ''
    };
  }

  onClick(e) {
    e.preventDefault();
    console.log(this.model);
  }
}
