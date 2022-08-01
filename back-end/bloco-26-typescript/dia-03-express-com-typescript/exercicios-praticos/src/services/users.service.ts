import connection from "../models/connection";
import UserModel from '../models/user.model';
import { User, IName } from '../interface';
import { } from '../interface';
class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async login(userCredentials: User) {
    const data = await this.model.getByEmail(userCredentials.email);
    if (data === null) {
      return { code: 403, message: 'Esse email não esta cadastrado!' }
    } 
    if (data.password !== userCredentials.password) {
      return { code: 403, message: 'A senha digitada esta incorreta!' }
    }

    return { code: 200, message: { token: 'fake token' } };
  }

  public async getAll(): Promise<User[]> {
    const users = await this.model.getAll();
    return users;
  }

  public async getById(id: number) {
    const user = await this.model.getById(id);

    if(!user) return { code: 404, message: 'O usuário é inexistente!' } 
  
    return { code: 200, user: user };
  }
  
  public async create(body: IName) {
    const { email } = body;
    const emailExists = await this.model.getByEmail(email);

    if (emailExists) {
      const message = 'Ao criar um novo user, o email não pode já estar cadastrado.';
      return { code: 400, message }
    }

    const newUser = await this.model.create(body);

    return { code: 201, newUser };
  }

  public async update(id: string, body: IName) {
    const idExists = await this.model.getById(Number(id));
    if(!idExists) {
      const message = 'Esse usuário não existe!';
      return { code: 404, message };
    }

    const userEdited = await this.model.update(Number(id), body);
    return { code: 200, userEdited };
  }

  public async delete(id: string) {
    const userDeleted = await this.model.getById(Number(id));

    if(!userDeleted) {
      const message = 'Esse usuário não existe!';
      return { code: 404, message };
    }

    await this.model.delete(Number(id));

    return { code: 200, userDeleted };
  }

  }

export default UserService;