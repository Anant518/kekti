import { Component, OnInit } from '@angular/core';
import{ User } from '../models/User';
import{ UserService } from '../services/user.service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: User;

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.userService.signUp(this.user).subscribe(u => {
      this.router.navigate(['login']);
    },
        e => {});
}
}
