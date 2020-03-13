import jwt from 'jsonwebtoken';
import User from '../models/User';

import authConfig from '../../config/auth';

import { promisify } from 'util';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).json({ error: 'Token not provided' });

  const [, token] = authHeader.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);
    const getCompany = async (request, response) => {
      console.log(decoded.id);
      const user = await User.findOne({ where: { 'id': decoded.id } });

      req.userId = decoded.id;
      req.companyId = user.id_company;
      next();
    }

    getCompany();
  } catch (err) {
    return res.status(401).json({ error: 'Token invalid' });
  }
};