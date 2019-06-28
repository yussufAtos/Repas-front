
export interface PageOf<T> {

  content: T[];
  last: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  sort: string;
  first: boolean;
  numberOfElements: number;
}
