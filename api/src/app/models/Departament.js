import Sequelize, { Model } from 'sequelize';

class Departament extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        id_company: Sequelize.INTEGER
      },
      {
        sequelize,
        tableName: "departaments"
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Company, { foreignKey: 'id_company', as: 'company' });
  }
}

export default Departament;