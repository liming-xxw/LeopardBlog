export interface option {
  value: string;
  label: string;
}

export interface Tags {
  id: string;
  name: string;
  createdAt?: string;
  updateAt?: string;
  superiors?: [];
  superiorid?: string;
}
