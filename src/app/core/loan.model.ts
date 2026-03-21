export interface Loan {
  id: string;
  type: string;
  disbursedDate: string;
  originalAmount: number;
  outstanding: number;
  interestRate: number;
  nextPaymentAmount: number;
  nextPaymentDate: string;
  status: 'active' | 'closed';
}