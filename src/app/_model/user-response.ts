import { Cart } from './cart';

export class UserResponse {
  firstName: string;
  surname: string;
  cart: Cart;
  roles: string[];
  token: string;
}
