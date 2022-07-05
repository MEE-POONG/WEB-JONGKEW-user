import dbConnect from '@/lib/dbConnect'
import User from '@/models/User'
import { comparePassword, hashedPassword } from '@/utils/encrypt'

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'POST':
      try {
        const { username, password } = req.body
        const users = await User.findOne({ username })
        const validPassword = await comparePassword(password, users.password)
        if (!validPassword) {
          res.status(400).end({ success: false, messages: "password invalid" });
        }
        const user = await User.findOne({ _id: users._id }, { 'password': 0 })
        res.status(200).json({ success: true, data: user })
      } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, messages: "password invalid" })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}