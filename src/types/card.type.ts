export interface Card {
  id: string;
  name: string;
  bankName: string;
  type: 'visa' | 'mastercard' | 'amex';
  lastFour: string;
  outstanding: number;
  creditLimit: number;
  rewardPoints: number;
  cashback: number;
  dueDate: string;
  minimumDue: number;
}
