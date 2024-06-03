interface ICreateContact {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  created_at: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export default ICreateContact;