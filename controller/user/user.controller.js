import Users from "../../db/models/user.model.js";
import bcrypt from "bcryptjs";
// signup function
export const signup = async (req, res) => {
    const {
        name,
        gender,
        roll,
        email,
        password
      } = req.body
      const branch = roll.split("/");
      const passingYear = parseInt("20" + branch[1]) + 4;
      const alumni = passingYear < new Date().getFullYear();
  try {
    const user = await Users.findOne({ email });
    if (user) {
      return res.status(401).json({ error: "User already Exist." });
    }
    const newuser = await Users.create({
        name,
        gender,
        roll,
        email,
        password,
        branch: branch[0],
        passingYear:passingYear,
        alumni:alumni,  
      })
    res.status(201).json({ newuser });
    console.log("User Created Successfully");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const login = async (req, res) => {
    try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    res.status(200).json("Login Sucessfull");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}





