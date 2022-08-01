import { Request, Response } from 'express';
import UserService from '../services/users.service';
import { User, IName } from '../interface';

class UserController {
  constructor(private userService = new UserService()) { }

  public login = async (req: Request, res: Response) => {
    const userCredentials = req.body as User;

    const { code, message } = await this.userService.login(userCredentials);

    return res.status(code).json(message);
  };

  public getAll = async (_req: Request, res: Response) => {
    const users = await this.userService.getAll();

    return res.status(200).json(users);
  }
  
  public getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    
    const user = await this.userService.getById(Number(id));

    if(user.message) {
      return res.status(user.code).json(user.message);
    }

    return res.status(user.code).json(user.user);
  }

  public create = async (req: Request, res: Response) => {
    const body = req.body as IName;

    const newUser = await this.userService.create(body);

    if (newUser.message) {
      res.status(newUser.code).json(newUser.message);
    }

    return res.status(newUser.code).json(newUser.newUser);
  }

  public update = async (req: Request, res: Response) => {
    const body = req.body as IName;
    const { id } = req.params;

    const editedUser = await this.userService.update(id, body);

    if (editedUser.message) {
      res.status(editedUser.code).json(editedUser.message);
    }

    return res.status(editedUser.code).json(editedUser.userEdited);
  }

  public remove = async (req: Request, res: Response) => {
    const { id } = req.params;

    const removeUser = await this.userService.delete(id);

    if(removeUser.message) {
      res.status(removeUser.code).json(removeUser.message);
    }

    return res.status(removeUser.code).json(removeUser.userDeleted);
  }
}

export default UserController;