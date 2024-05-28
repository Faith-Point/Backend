interface ICreateConnection {
  name: string;
  type: string;
  host: string;
  port: number; 
  database: string;
  schema: string;
  password: string;
  username: string;
}

export default ICreateConnection;