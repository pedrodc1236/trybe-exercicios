import { Pool, ResultSetHeader } from 'mysql2/promise';
import { User, IName, UserObj } from '../interface';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getByEmail(email: string): Promise<UserObj | null> {
    const query = `SELECT * FROM Users Where email = ?`;
    const [data] = await this.connection.execute(query, [email]);
    const [user] = data as UserObj[];

    return user || null;
  }

  public async getAll(): Promise<UserObj[]> {
    const query = `SELECT * FROM Users`;
    const [users] = await this.connection.execute(query);

    return users as UserObj[];
  }

  public async getById(id: number): Promise<UserObj> {
    const query = `SELECT * FROM Users WHERE id = ?`;
    const [data] = await this.connection.execute(query, [id]);
    const [user] = data as UserObj[];

    return user || null;
  }

  public async create(user: IName): Promise<UserObj> {
    const { name, email, password } = user;
    
    const query = `INSERT INTO Users (name, email, password) VALUES (?, ?, ?)`;
    const [data] = await this.connection.execute<ResultSetHeader>(query, [name, email, password]);
    const { insertId } = data;
    const id = insertId;
    const newUser = { id, name, email, password}
    return newUser;
  } 

  public async update(id: number, user: IName): Promise<UserObj> {
    const { name, email, password } = user;

    const query = `UPDATE Users SET name = ?, email = ?, password = ? WHERE id = ?`;
    await this.connection.execute(query, [name, email, password, id]);

    const userEdited = { id, name, email, password };

    return userEdited;
  }

  public async delete(id: number): Promise<void> {
    const query = `DELETE FROM Users WHERE id = ?`;
    await this.connection.execute(query, [id]);
  }
}