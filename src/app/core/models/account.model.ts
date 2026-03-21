export interface Account {
  id: string;
  type: 'current' | 'savings' | 'business';
  accountNumber: string;
  balance: number;
  currency: string;
  status: 'active' | 'inactive';
}