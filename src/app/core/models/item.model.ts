export interface Item {
  id: number;
  name: string;
  category: string;
  value: number;
  date: string;
  status: 'active' | 'inactive';
}
