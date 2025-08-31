import dbConnect from "@/backend/config/dbConnect"
import { registerUser } from "@/backend/controllers/authControllers";
import { default as nc } from "next-connect";

const handler = nc();

dbConnect();

handler.post(registerUser);

export default handler;