export interface CheckAuth {
  error?: string;
  user?: {
    _id: string;
    email: string;
    username: string;
  };
  token?: string;
}
