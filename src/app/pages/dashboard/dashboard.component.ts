import { Component, OnInit } from '@angular/core';
import { DashBoardService } from './dashboard.service';
import { Router } from '@angular/router';
import { AuthService } from '../sharedService/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  username: string | null = '';
  user_id: string | null = '';
  noRecordsFound: boolean = false;
  orders: any = [];
  constructor(
    private dashboardService: DashBoardService,
    private router: Router,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    this.dashboardService.getDashboardData().subscribe(
      (res) => {
        this.username = this.authService.getUsername();
        this.user_id = this.authService.getUserId();
      },
      (err) => {
        console.log(err);
        this.router.navigate(['login']);
      }
    );
  }

  logout() {
    this.authService.clearData();
    this.router.navigate(['login']);
  }

  fetchOrders() {
    const email = this.authService.getEmail();
    if (email) {
      this.dashboardService.getOrders(email).subscribe(
        (res) => {
          if (res.length === 0) {
            this.noRecordsFound = true;
            this.orders = []; 
          } else {
            this.orders=res;
            this.noRecordsFound = false;
          }
        },
        (error) => {
          console.error('Error fetching orders:', error);
        this.noRecordsFound = true;
        }
      );
    }
  }
}
