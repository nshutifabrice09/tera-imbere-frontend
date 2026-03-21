import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BankingService } from '../core/service/banking.service';
import { TransactionRowComponent } from '../shared/transaction-row/transaction-row';
import { Account, Transaction } from '../core/models';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, TransactionRowComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class DashboardComponent implements OnInit {
  accounts: Account[] = [];
  recentTx: Transaction[] = [];
  totalBalance     = 0;
  savingsBalance   = 0;
  monthlySpend     = 0;
  loanOutstanding  = 500000;

  get primaryAccount() { return this.accounts[0] ?? null; }

  constructor(public banking: BankingService) {}

  ngOnInit() {
    this.banking.getAccounts().subscribe(accs => {
      this.accounts       = accs;
      this.totalBalance   = accs.reduce((s, a) => s + a.balance, 0);
      this.savingsBalance = accs.find(a => a.type === 'savings')?.balance ?? 0;
    });
    this.banking.getTransactions({ limit: 5 }).subscribe(tx => {
      this.recentTx    = tx;
      this.monthlySpend = tx
        .filter(t => t.type === 'debit')
        .reduce((s, t) => s + t.amount, 0);
    });
  }
}