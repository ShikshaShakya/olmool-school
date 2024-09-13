import { User } from "../models/user.model.js";

export const registerUser = async (req, res) => {
  try {
    const {
      name,
      eventName,
      dob,
      fatherName,
      motherName,
      address,
      email,
      schoolName,
      academyName,
    } = req.body;

    if (
      name === "" ||
      eventName === "" ||
      dob === "" ||
      fatherName === "" ||
      motherName === "" ||
      address === "" ||
      email === "" ||
      academyName === "" ||
      schoolName === ""
    ) {
      throw new Error("Required all the fields");
    }

    const user = User.create({
      name,
      eventName,
      dob,
      fatherName,
      motherName,
      address,
      email,
      academyName,
      schoolName,
    });

    return res
      .status(200)
      .json({ data: user, message: "Registered Successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};
