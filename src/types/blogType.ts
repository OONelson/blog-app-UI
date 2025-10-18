export interface Blog {
  id: number;
  title: string;
  author: string;
  content: string;
  category: string;
  date: string;
}

export interface BlogFormData {
  title: string;
  author: string;
  content: string;
  category: string;
}
