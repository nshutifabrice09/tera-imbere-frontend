export interface Transaction {
  id: string;
  description: string;
  date: string;
  amount: number;
  type: 'credit' | 'debit';
  category: 'income' | 'transfer' | 'utility' | 'shopping' | 'loan' | 'education' | 'interest';
  accountId: string;
}