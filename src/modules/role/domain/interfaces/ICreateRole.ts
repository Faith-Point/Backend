interface ICreateRole {
  id: string;
  name?: string;
  created_at: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export default ICreateRole;