import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankingService } from '../core/service/banking.service';
import { Loan } from '../core/models';

@Component({
  selector: 'app-loans',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loans.html',
  styleUrl: './loans.scss'
})
export class LoansComponent implements OnInit {
  loans: Loan[] = [];
  loading = true;

  constructor(public banking: BankingService) {}

  ngOnInit() {
    this.banking.getLoans().subscribe({
      next: loans => { this.loans = loans; this.loading = false; },
      error: ()    => { this.loading = false; }
    });
  }

  repaidPercent(loan: Loan): number {
    return Math.round(((loan.originalAmount - loan.outstanding) / loan.originalAmount) * 100);
  }
}