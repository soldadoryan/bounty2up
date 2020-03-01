import Sequelize from 'sequelize';

import Company from '../app/models/Company';
import Department from '../app/models/Department';
import User from '../app/models/User';

import databaseConfig from '../config/database';

const models = [Company, Department, User];

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
