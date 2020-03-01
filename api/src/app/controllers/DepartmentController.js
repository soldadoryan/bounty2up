import Department from '../models/Department';

class DepartmentController {
  async store(req, res) {
    const { companyId } = req;

    const { name } = req.body;

    const existsDepartment = await Department.findOne({ where: { name } });

    if (existsDepartment) {
      return res.json({
        error: true,
        message: 'Este setor já está cadastrado em nosso sistema!'
      });
    }

    const department = await Department.create({
      name,
      id_company: companyId,
    });

    return res.json({
      department: {
        id: department.id,
        name: department.name,
      },
      success: true,
      message: 'Setor criado com sucesso!'
    });
  }

  async index(req, res) {
    const { companyId } = req;

    const departments = await Department.findAll({
      where: { id_company: companyId },
    });

    return res.json(departments);
  }

  async update(req, res) {
    const { id } = req.params;
    const { name } = req.body;

    const department = await Department.findByPk(id);

    await department.update({
      name
    });

    return res.json({
      department: {
        id: department.id,
        name: department.name,
      },
      success: true,
      message: 'Setor alterado com sucesso!'
    });
  }

  async destroy(req, res) {
    const { ids } = req.params;

    const arrayIds = ids.split(',');

    arrayIds.map(async id => {
      await Department.destroy({ where: { id } });
    });

    return res.json({
      success: true,
      message: 'Setor(es) excluído(s) com sucesso!'
    });
  }
}

export default new DepartmentController();