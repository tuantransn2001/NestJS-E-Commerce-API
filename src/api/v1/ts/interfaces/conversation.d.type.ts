export interface User {
  id: number;
  type: string;
  firstName: string;
  avatar: string;
}

export interface Message {
  id: string;
  sender: User;
  content: string;
  isDelete?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
export interface Conversation {
  id: string;
  name: string;
  members: User[];
  messages: Message[];
  isDelete?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
