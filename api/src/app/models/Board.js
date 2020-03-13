import Sequelize, { Model } from 'sequelize';

class Board extends Model {
    static init(sequelize) {
        super.init(
            {
                title: Sequelize.STRING,
                id_department: Sequelize.INTEGER,
                id_company: Sequelize.INTEGER,
            },
            {
                sequelize
            }
        );

        return this;
    }

    static associate(models) {
        this.belongsTo(models.Department, { foreignKey: 'id_department', as: 'department' });
        this.belongsTo(models.Company, { foreignKey: 'id_company', as: 'company' });
    }
}

export default Board;
