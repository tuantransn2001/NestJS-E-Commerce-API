export interface User {
  id: number;
  name: string;
  avatar: string;
}

export interface Member {
  id: string;
}
export interface Message {
  id: string;
  sender: Member;
  content: string;
  isDelete?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
export interface Conversation {
  id: string;
  name: string;
  members: Member[];
  messages: Message[];
  isDelete?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
