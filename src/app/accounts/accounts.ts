import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BankingService } from '../core/service/banking.service';
import { Account } from '../core/models';

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './accounts.html',
  styleUrl: './accounts.scss'
})
export class AccountsComponent implements OnInit {
  accounts: Account[] = [];
  loading = true;

  constructor(public banking: BankingService) {}

  ngOnInit() {
    this.banking.getAccounts().subscribe({
      next: accs => { this.accounts = accs; this.loading = false; },
      error: ()   => { this.loading = false; }
    });
  }
}