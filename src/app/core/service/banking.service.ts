import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, Account, Transaction, Loan, TransferPayload } from '../models';

@Injectable({ providedIn: 'root' })
export class BankingService {
  private api = 'http://localhost:8080/api';

  currentUser = signal<User | null>(null);
  isLoggedIn  = computed(() => !!this.currentUser());

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post<{ token: string; user: User }>(`${this.api}/auth/login`, { email, password });
  }

  logout() {
    localStorage.removeItem('ti_token');
    this.currentUser.set(null);
  }

  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(`${this.api}/accounts`);
  }

  getTransactions(params?: { accountId?: string; limit?: number }): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.api}/transactions`, { params: params as any });
  }

  transfer(payload: TransferPayload) {
    return this.http.post<{ referenceId: string; status: string }>(`${this.api}/transfers`, payload);
  }

  getLoans(): Observable<Loan[]> {
    return this.http.get<Loan[]>(`${this.api}/loans`);
  }

  formatRWF(amount: number): string {
    return 'RWF ' + Math.round(amount).toLocaleString();
  }

  categoryColor(cat: string): string {
    const map: Record<string, string> = {
      income: '#1D9E75', transfer: '#378ADD', utility: '#BA7517',
      interest: '#1D9E75', shopping: '#D4537E', loan: '#E24B4A', education: '#534AB7',
    };
    return map[cat] ?? '#888780';
  }
}