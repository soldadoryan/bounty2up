import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import authMiddleware from './app/middlewares/auth';

import UserController from './app/controllers/UserController';
import CompanyController from './app/controllers/CompanyController';
import SessionController from './app/controllers/SessionController';
import DepartmentController from './app/controllers/DepartmentController';
import BoardController from './app/controllers/BoardController';
import CategoryController from './app/controllers/CategoryController';

const routes = new Router();
const upload = multer(multerConfig);


// Companies
routes.post('/companies', CompanyController.store);

// Sessions
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

// Users
routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
routes.put('/users/:id', upload.single('avatar'), UserController.update);
routes.delete('/users/:ids', UserController.destroy);

// Departments
routes.get('/departments', DepartmentController.index);
routes.post('/departments', DepartmentController.store);
routes.put('/departments/:id', DepartmentController.update);
routes.delete('/departments/:ids', DepartmentController.destroy);

// Boards
routes.get('/boards', BoardController.index);
routes.post('/boards', BoardController.store);
routes.put('/boards/:id', BoardController.update);
routes.delete('/boards/:ids', BoardController.destroy);

// Categories
routes.get('/categories', CategoryController.index);
routes.post('/categories', CategoryController.store);
routes.put('/categories/:id', CategoryController.update);
routes.delete('/categories/:ids', CategoryController.destroy);

export default routes;
