import Category from '../models/Category';

class CategoryController {
    async store(req, res) {
        const { companyId: id_company } = req;

        const { title, value } = req.body;

        const existsCategory = await Category.findOne({ where: { title } });

        if (existsCategory) {
            return res.json({
                error: true,
                message: 'Esta categoria já está cadastrada em nosso sistema!'
            });
        }

        const category = await Category.create({
            title,
            value,
            id_company,
        });

        return res.json({
            category,
            success: true,
            message: 'Categoria criada com sucesso!'
        });
    }

    async index(req, res) {
        const { companyId } = req;

        const categories = await Category.findAll({
            where: { id_company: companyId },
        });

        console.log(categories);

        return res.json(categories);
    }

    async update(req, res) {
        const { id } = req.params;
        const { title, value } = req.body;

        const category = await Category.findByPk(id);

        await category.update({
            title,
            value
        });

        return res.json({
            category,
            success: true,
            message: 'Categoria alterada com sucesso!'
        });
    }

    async destroy(req, res) {
        const { ids } = req.params;

        const arrayIds = ids.split(',');

        arrayIds.map(async id => {
            await Category.destroy({ where: { id } });
        });

        return res.json({
            success: true,
            message: 'Categoria(s) excluída(s) com sucesso!'
        });
    }
}

export default new CategoryController();