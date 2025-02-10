import fs from "fs";
import path from "path";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { SECRET_KEY } from "../utils/constants";

dotenv.config();

const usersFilePath = path.join(__dirname, "../data/users.json");

function getUsers(): { email: string; password: string }[] {
  const usersData = fs.readFileSync(usersFilePath, "utf-8");
  return JSON.parse(usersData);
}

function saveUsers(users: { email: string; password: string }[]) {
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
}

async function login(email: string, password: string) {
  const users = getUsers();
  const user = users.find((u) => u.email === email);

  if (!user) throw new Error("Invalid email or password");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid email or password");

  const token = jwt.sign({ email: user.email }, SECRET_KEY, { expiresIn: "1h" });

  return { email: user.email, token };
}

async function signup(email: string, password: string) {
  const users = getUsers();
  
  if (users.some((u) => u.email === email)) {
    throw new Error("Email already registered");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = { email, password: hashedPassword };

  users.push(newUser);
  saveUsers(users);

  const token = jwt.sign({ email: newUser.email }, SECRET_KEY, { expiresIn: "1h" });

  return { email: newUser.email, token };
}

export default { login, signup };
