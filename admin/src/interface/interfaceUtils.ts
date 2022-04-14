export interface option {
  value: string;
  label: string;
  superiors?:any
}

export interface Tags {
  id: string;
  name: string;
  createdAt?: string;
  updateAt?: string;
  superiors?: [];
  superiorid?: string;
}
