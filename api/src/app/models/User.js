import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        img: Sequelize.STRING,
        permissions: Sequelize.INTEGER,
        password: Sequelize.STRING,
        id_company: Sequelize.INTEGER,
        id_department: Sequelize.INTEGER,
      },
      {
        sequelize
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Company, { foreignKey: 'id_company', as: 'company' });
    this.belongsTo(models.Department, { foreignKey: 'id_department', as: 'department' });
  }
}

export default User;
