import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BankingService } from '../core/service/banking.service';
import { TransactionRowComponent } from '../shared/transaction-row/transaction-row';
import { Transaction } from '../core/models';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule, FormsModule, TransactionRowComponent],
  templateUrl: './transactions.html',
  styleUrl: './transactions.scss'
})
export class TransactionsComponent implements OnInit {
  private all = signal<Transaction[]>([]);
  typeFilter   = '';
  loading      = true;

  filtered = computed(() =>
    this.all().filter(tx => !this.typeFilter || tx.type === this.typeFilter)
  );

  constructor(public banking: BankingService) {}

  ngOnInit() {
    this.banking.getTransactions().subscribe({
      next: tx => { this.all.set(tx); this.loading = false; },
      error: ()  => { this.loading = false; }
    });
  }
}