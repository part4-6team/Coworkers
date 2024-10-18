export interface User {
  teamId: number;
  image: string;
  nickname: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  id: number;
}

export interface UserPatch {
  nickname: string;
  name: string;
}

export interface UserPassword {
  passwordConfirmation: string;
  password: string;
}

export interface UserPasswordCheck {
  email: string;
  password: string;
}
