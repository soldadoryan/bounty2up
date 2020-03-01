import User from '../models/User';
import Department from '../models/Department';
import sha1 from 'sha1';

class UserController {
  async store(req, res) {
    const { companyId } = req;

    const { name, email, password, id_department } = req.body;

    const existsUser = await User.findOne({ where: { email } });

    if (existsUser) {
      return res.json({
        error: true,
        message: 'Este e-mail já está cadastrado em nosso sistema!'
      });
    }

    const user = await User.create({
      name,
      email,
      password: sha1(password),
      permissions: 1,
      id_company: companyId,
      id_department
    });

    return res.json({
      user, success: true, message: 'Usuário criado com sucesso!'
    });
  }

  async index(req, res) {
    const { companyId } = req;

    const users = await User.findAll({
      where: { id_company: companyId },
      raw: true,
      include: [
        { model: Department, as: 'department' }
      ]
    });

    return res.json(users);
  }

  async update(req, res) {
    const { id } = req.params;

    const { name, email, password, id_department } = req.body;

    console.log(password);

    const user = await User.findByPk(id);

    await user.update({
      name,
      email,
      password: sha1(password),
      id_department
    });

    return res.json({
      user, success: true, message: 'Usuário alterado com sucesso!'
    });
  }

  async destroy(req, res) {
    const { ids } = req.params;

    const arrayIds = ids.split(',');

    arrayIds.map(async id => {
      await User.destroy({ where: { id } });
    });

    return res.json({
      success: true,
      message: 'Usuário(s) deletado(s) com sucesso!'
    });
  }
}

export default new UserController();