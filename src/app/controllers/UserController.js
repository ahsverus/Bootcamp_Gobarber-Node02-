import User from '../models/User';

class UserController {
  async store(req, res) {
    const userExist = await User.findOne({ where: { email: req.body.email } });

    if (userExist) {
      return res.status(400).json({ error: 'user already exist' });
    }

    const { name, email, provider } = await User.create(req.body);

    return res.json({ name, provider, email });
  }
}

export default new UserController();
