export interface UserPayload {
  id: string;
  username: string;
  email: string;
  iat?: number;
  exp?: number;
}
