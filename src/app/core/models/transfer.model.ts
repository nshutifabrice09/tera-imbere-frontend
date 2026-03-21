export interface TransferPayload {
  fromAccountId: string;
  toAccountNumber: string;
  recipientName: string;
  amount: number;
  transferType: 'internal' | 'rtgs' | 'mobile_money';
  description?: string;
}