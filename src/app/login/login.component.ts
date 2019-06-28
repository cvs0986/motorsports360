import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SelectItem, MessageService } from 'primeng/components/common/api';
import { Message } from 'primeng/components/common/api';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  isLoading = false;

  constructor(private route: ActivatedRoute, private router: Router, private messageService: MessageService, private api: ApiServiceService) { }

  ngOnInit() {
  }

  userLogin() {
    const loginData = {
      username: this.username,
      password: this.password
    }
    
    if (this.username == '' || this.username == undefined) {
      this.messageService.add({ severity: 'error', summary: 'Invalid Credentials!', detail: 'username and password is required!' });
    } else if (this.password == '' || this.password == undefined) {
      this.messageService.add({ severity: 'error', summary: 'Invalid Credentials!', detail: 'username and password is required!' });
    } else {
      this.isLoading = true;
      this.api.login(loginData).subscribe(
        (resp) => {
          console.log(resp);
          if (resp.status === 200) {
            this.isLoading = false;
            this.router.navigate(['/admin/dashboard']);
          }
        },
        (error) => {
          console.log(error);
          if (error.status === 400) {
            this.isLoading = false;
            this.messageService.add({ severity: 'error', summary: 'Invalid Credentials!', detail: error.error.non_field_errors[0] });
          } else {
            this.isLoading = false;
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong. Please try after sometime!'});
          }
        }
      );
    }
  }

}
