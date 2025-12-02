export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

/* Users-related interfaces */
export interface Geo {
  lat: string;
  lng: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo?: Geo;
}

export interface Company {
  name: string;
  catchPhrase: string; // now required per checker
  bs?: string;
}

export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address?: Address;
  phone?: string;
  website?: string;
  company?: Company;
}

export interface PostData {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}