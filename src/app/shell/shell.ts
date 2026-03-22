import { Component, signal, HostListener } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BankingService } from '../core/service/banking.service';
import { TitleByRoutePipe } from './title-by-route-pipe';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [CommonModule, RouterModule, TitleByRoutePipe],
  templateUrl: './shell.html',
  styleUrl: './shell.scss'
})
export class ShellComponent {
  drawerOpen = signal(false);

  navItems = [
    {
      label: 'Dashboard',
      route: '/dashboard',
      icon: 'M1 1h5v5H1zM8 1h5v5H8zM1 8h5v5H1zM8 8h5v5H8z'
    },
    {
      label: 'Accounts',
      route: '/accounts',
      icon: 'M1.5 3.5h11a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1zM1.5 6.5h11M3.5 9h2.5'
    },
    {
      label: 'Transactions',
      route: '/transactions',
      icon: 'M2 4h10M2 7h6M2 10h8'
    },
    {
      label: 'Transfer',
      route: '/transfer',
      icon: 'M2 4.5h9M8 2l3 2.5L8 7M12 9.5H3M6 7l-3 2.5L6 12'
    },
    {
      label: 'Loans',
      route: '/loans',
      icon: 'M2 6h10v6.5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6zM4.5 6V4.5a2.5 2.5 0 0 1 5 0V6'
    },
    {
      label: 'Settings',
      route: '/settings',
      icon: 'M7 1.5v1M7 11.5v1M1.5 7h1M11.5 7h1M3.1 3.1l.7.7M10.2 10.2l.7.7M10.2 3.8l-.7.7M3.8 10.2l-.7.7M7 5a2 2 0 1 1 0 4 2 2 0 0 1 0-4z'
    },
  ];

  constructor(public banking: BankingService, public router: Router) {}

  toggleDrawer() { this.drawerOpen.update(v => !v); }
  closeDrawer()  { this.drawerOpen.set(false); }

  @HostListener('document:keydown.escape')
  onEsc() { this.closeDrawer(); }

  logout() {
    this.banking.logout();
    this.router.navigate(['/login']);
  }
}