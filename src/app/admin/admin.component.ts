import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {

   }

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem('access_token');
    this.router.navigate(['/login']);
  }

}
