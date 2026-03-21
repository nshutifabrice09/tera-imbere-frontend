import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { BankingService } from '../core/service/banking.service';
import { Account } from '../core/models';

@Component({
  selector: 'app-transfer',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './transfer.html',
  styleUrl: './transfer.scss'
})
export class TransferComponent implements OnInit {
  private fb      = inject(FormBuilder);
  public banking  = inject(BankingService);

  accounts: Account[] = [];
  loading     = false;
  success     = false;
  referenceId = '';

  form = this.fb.group({
    fromAccountId:   ['', Validators.required],
    toAccountNumber: ['', Validators.required],
    recipientName:   ['', Validators.required],
    amount:          [null as number | null, [Validators.required, Validators.min(1)]],
    transferType:    ['internal', Validators.required],
    description:     [''],
  });

  ngOnInit() {
    this.banking.getAccounts().subscribe(accs => {
      this.accounts = accs.filter(a => a.status === 'active');
      if (this.accounts[0]) {
        this.form.patchValue({ fromAccountId: this.accounts[0].id });
      }
    });
  }

  submit() {
    if (this.form.invalid) return;
    this.loading = true;
    this.banking.transfer(this.form.value as any).subscribe({
      next: res => {
        this.success     = true;
        this.referenceId = res.referenceId;
        this.loading     = false;
      },
      error: () => this.loading = false,
    });
  }

  reset() {
    this.success = false;
    this.form.reset({ transferType: 'internal' });
  }
}