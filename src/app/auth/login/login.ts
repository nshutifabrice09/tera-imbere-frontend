import { Router, RouterModule } from '@angular/router';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BankingService } from '../../core/service/banking.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class LoginComponent {
  private fb      = inject(FormBuilder);
  private banking = inject(BankingService);
  private router  = inject(Router);

  form = this.fb.group({
    email:    ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  loading = false;
  error   = '';

  submit() {
    if (this.form.invalid) return;
    this.loading = true;
    this.error   = '';
    const { email, password } = this.form.value;
    this.banking.login(email!, password!).subscribe({
      next: ({ token, user }) => {
        localStorage.setItem('ti_token', token);
        this.banking.currentUser.set(user);
        this.router.navigate(['/dashboard']);
      },
      error: () => {
        this.error   = 'Invalid credentials. Please try again.';
        this.loading = false;
      },
    });
  }
}