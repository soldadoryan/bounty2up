import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
  const token = req.headers['jwt_token'];

  if (!token) return res.status(401).send({
    auth: false, error: 'Token não fornecido.'
  });

  jwt.verify(token, process.env.SECRET, function (err, decoded) {
    if (err) return res.status(500).send({
      auth: false, error: 'Falha para autenticar o token'
    });

    const getCompany = async (request, response) => {
      const user = await User.findOne({ where: { 'id': decoded.id } });

      req.userId = decoded.id;
      req.companyId = user.id_company;
      next();
    }

    getCompany();
  });
};