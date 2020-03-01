import Company from '../models/Company';
import Department from '../models/Department';
import User from '../models/User';

import sha1 from 'sha1';

class CompanyController {
  async store(req, res) {
    const { companyName, userName, userEmail, userPwd } = req.body;

    const company = await Company.create({ name: companyName });

    const department = await Department.create({
      name: 'Geral',
      id_company: company.id
    });

    const admin = await User.create({
      name: userName,
      email: userEmail,
      permissions: 0,
      password: sha1(userPwd),
      id_department: department.id,
      id_company: company.id
    });

    return res.json(admin);
  }
}

export default new CompanyController();