import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user.service";
import { Router } from "@angular/router";
import{ Role } from '../Enum/Role'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  returnUrl = '/';
  isInvalid: boolean;
    isLogout: boolean;
    submitted = false;
    model: any = {
        username: '',
        password: '',
        remembered: false
    };

  constructor(private userService: UserService,
    private router: Router,) { }

  ngOnInit(): void {
    
  }

  onSubmit() {
    this.submitted = true;
    this.userService.login(this.model).subscribe(
        user => {
            if (user) {
                if (user.role != Role.Customer) {

                    this.returnUrl = '/seller';
                }

                this.router.navigateByUrl(this.returnUrl);
            } else {
                this.isLogout = false;
                this.isInvalid = true;
            }

        }
    );
}


}
