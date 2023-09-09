import nc from "next-connect"; //nextConnect
import db from "../../../utils/db";
import User from "../../../models/User";
import bcrypt from "bcrypt";
const handler = nc();

handler.put(async (req, res) => {
  try {
    await db.connectDb();
    const { user_id, password } = req.body;
    const user = await User.findById(user_id);
    if (!user) {
      return res
        .statusCode(400)
        .json({ message: "This Account does not exists." });
    }
    const cryptedPassword = await bcrypt.hash(password, 12);
    await user.updateOne({
      password: cryptedPassword,
    });
    res.json({ email: user.email });
    await db.connectDb();
  } catch (error) {
    res.send(500).json({ message: error.message });
  }
});

export default handler;
