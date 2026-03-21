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
    { label: 'Dashboard',    route: '/dashboard' },
    { label: 'Accounts',     route: '/accounts' },
    { label: 'Transactions', route: '/transactions' },
    { label: 'Transfer',     route: '/transfer' },
    { label: 'Loans',        route: '/loans' },
    { label: 'Settings',     route: '/settings' },
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