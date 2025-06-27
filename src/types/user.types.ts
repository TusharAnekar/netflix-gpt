export interface User {
  uid: string | null;
  email: string;
  displayName: string;
}

export interface UserState {
  uid: string | null;
  email: string;
  displayName: string;
  isAuthenticated: boolean;
  isLoading: boolean;
}
