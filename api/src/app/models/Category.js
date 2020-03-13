import Sequelize, { Model } from 'sequelize';

class Category extends Model {
    static init(sequelize) {
        super.init(
            {
                title: Sequelize.STRING,
                value: Sequelize.INTEGER,
                id_company: Sequelize.INTEGER,
            },
            {
                sequelize
            }
        );

        return this;
    }

    static associate(models) {
        this.belongsTo(models.Company, { foreignKey: 'id_company', as: 'company' });
    }
}

export default Category;
