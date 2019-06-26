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

  constructor(private route: ActivatedRoute, private router: Router, private messageService: MessageService, private api: ApiServiceService) { }

  ngOnInit() {
  }

  userLogin() {
    const loginData = {
      username: this.username,
      password: this.password
    }
    this.api.login(loginData).subscribe(
      (resp) => {
        console.log(resp);
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
