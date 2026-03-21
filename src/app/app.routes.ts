import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./auth/login/login').then(m => m.LoginComponent)
  },
  {
    path: '',
    loadComponent: () => import('./shell/shell').then(m => m.ShellComponent),
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard').then(m => m.DashboardComponent)
      },
      {
        path: 'accounts',
        loadComponent: () => import('./accounts/accounts').then(m => m.AccountsComponent)
      },
      {
        path: 'transactions',
        loadComponent: () => import('./transactions/transactions').then(m => m.TransactionsComponent)
      },
      {
        path: 'transfer',
        loadComponent: () => import('./transfer/transfer').then(m => m.TransferComponent)
      },
      {
        path: 'loans',
        loadComponent: () => import('./loans/loans').then(m => m.LoansComponent)
      },
      {
        path: 'settings',
        loadComponent: () => import('./settings/settings').then(m => m.SettingsComponent)
      },
    ]
  },
  { path: '**', redirectTo: 'login' }
];