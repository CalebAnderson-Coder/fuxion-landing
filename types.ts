export interface Sponsor {
  name: string;
  code: string;
  imageUrl: string;
}

export interface SelectionOption {
  id: string;
  label: string;
  type: 'client' | 'entrepreneur';
}