import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Transaction } from '../../core/models';
import { BankingService } from '../../core/service/banking.service';

@Component({
  selector: 'app-transaction-row',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transaction-row.html',
  styleUrl: './transaction-row.scss'
})
export class TransactionRowComponent {
  @Input({ required: true }) tx!: Transaction;

  constructor(public banking: BankingService) {}

  get iconBg(): string {
    return this.banking.categoryColor(this.tx.category) + '22';
  }
}