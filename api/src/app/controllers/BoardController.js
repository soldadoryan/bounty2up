import Board from '../models/Board';
import Department from '../models/Department';

class BoardController {
    async store(req, res) {
        const { companyId: id_company } = req;

        const { title, id_department } = req.body;

        const existsBoard = await Board.findOne({ where: { title } });

        if (existsBoard) {
            return res.json({
                error: true,
                message: 'Este quadro já está cadastrado em nosso sistema!'
            });
        }

        console.log("id da empresa:" + id_company);

        const board = await Board.create({
            title,
            id_company,
            id_department,
        });

        return res.json({
            board,
            success: true,
            message: 'Quadro criado com sucesso!'
        });
    }

    async index(req, res) {
        const { companyId } = req;

        const boards = await Board.findAll({
            where: { id_company: companyId },
            raw: true,
            include: [
                { model: Department, as: 'department' }
            ]
        });

        return res.json(boards);
    }

    async update(req, res) {
        const { id } = req.params;
        const { title, id_department } = req.body;

        const board = await Board.findByPk(id);

        await board.update({
            title,
            id_department
        });

        return res.json({
            board,
            success: true,
            message: 'Quadro alterado com sucesso!'
        });
    }

    async destroy(req, res) {
        const { ids } = req.params;

        const arrayIds = ids.split(',');

        arrayIds.map(async id => {
            await Board.destroy({ where: { id } });
        });

        return res.json({
            success: true,
            message: 'Quadro(s) excluído(s) com sucesso!'
        });
    }
}

export default new BoardController();