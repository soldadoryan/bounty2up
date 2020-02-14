import jwt from 'jsonwebtoken';
import * as Yup from 'yup';
import sha1 from 'sha1';

import User from '../models/User';
import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const schema = Yup.object().shape({
      email: Yup.string().required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body)))
      return res.json({ error: 'Campos com * são obrigatórios!' });

    const user = await User.findOne({
      where: { email, password: sha1(password) }
    });

    if (!user)
      return res.json({ error: 'E-mail e/ou senha não estão cadastrados.' });

    return res.json({
      success: true,
      user,
      token: jwt.sign({ id: user.id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();