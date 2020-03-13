import Sequelize from 'sequelize';

import Company from '../app/models/Company';
import Department from '../app/models/Department';
import User from '../app/models/User';
import Board from '../app/models/Board';
import Category from '../app/models/Category';

import databaseConfig from '../config/database';

const models = [Company, Department, User, Board, Category];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
    models.map(
      model => model.associate && model.associate(this.connection.models)
    );
  }
}

export default new Database();
