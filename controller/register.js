const database = require("../database/db");

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // ✅ Fix validation condition
    if (!name || !email || !password) {
      return res.status(400).send({
        status: "error",
        message: "All fields (name, email, password) are required!",
      });
    }

    const db = await database();
    const user = db.collection("user");

    // ✅ Check for existing email
    const existingUser = await user.findOne({ email });
    if (existingUser) {
      return res.status(400).send({
        status: "error",
        message: "Email already registered!",
      });
    }

    // ✅ Insert new user
    const result = await user.insertOne({ name, email, password });

    res.status(201).send({
      status: "success",
      message: "User registered successfully!",
      data: result,
    });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send({
      status: "error",
      message: "Something went wrong!",
      error: err.message,
    });
  }
};

// ✅ Correct export name
module.exports = { registerUser };