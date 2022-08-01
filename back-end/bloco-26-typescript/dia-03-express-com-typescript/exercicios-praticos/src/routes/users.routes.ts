import { Router } from 'express';
import UserController from '../controllers/user.controller';
import middlewareUser from '../middlewares/userMiddleware';

const router = Router();

const userController = new UserController;

router.post('/login', userController.login);
router.get('/', userController.getAll);
router.get('/:id', userController.getById);
router.delete('/:id', userController.remove);

router.use(middlewareUser);

router.post('/', userController.create);
router.put('/:id', userController.update);

export default router;