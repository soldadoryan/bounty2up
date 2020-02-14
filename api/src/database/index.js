import Sequelize from 'sequelize';

import Company from '../app/models/Company';
import Departament from '../app/models/Departament';
import User from '../app/models/User';

import databaseConfig from '../config/database';

const models = [Company, Departament, User];

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
