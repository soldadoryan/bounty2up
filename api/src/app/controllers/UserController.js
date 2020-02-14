import User from '../models/User';
import sha1 from 'sha1';

class UserController {
  async store(req, res) {
    const { companyId } = req;

    const { name, email, password, id_departament } = req.body;

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
      id_departament
    });

    return res.json({
      user, success: true, message: 'Usuário criado com sucesso!'
    });
  }

  async index(req, res) {
    const { companyId } = req;

    const users = await User.findAll({ where: { id_company: companyId } });

    return res.json(users);
  }

  async update(req, res) {
    const { id } = req.params;

    const { name, email, password, permissions, id_departament, } = req.body;

    const user = await User.findByPk(id);

    if (password === 'same') {
      await user.update({
        name,
        email,
        img,
        permissions,
        id_departament
      });
    } else {
      await user.update({
        name,
        email,
        img,
        password: sha1(password),
        permissions,
        id_departament
      });
    }

    return res.json({
      user, success: true, message: 'Usuário alterado com sucesso!'
    });
  }

  async destroy(req, res) {
    const { id } = req.params;

    await User.destroy({ where: { id } });

    return res.json({ success: true, message: 'Usuário deletado com sucesso!' });
  }
}

export default new UserController();