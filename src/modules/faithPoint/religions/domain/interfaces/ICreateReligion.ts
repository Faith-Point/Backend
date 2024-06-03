interface ICreateReligion {
  id: string;
  name: string;
  description?: string;
  created_at: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export default ICreateReligion;