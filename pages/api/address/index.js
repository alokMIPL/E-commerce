import dbConnect from "@/backend/config/dbConnect"
import { getAddresses, newAddress } from "@/backend/controllers/addressControllers";
import { default as nc } from "next-connect";

const handler = nc();

dbConnect();

handler.post(newAddress);
handler.get(getAddresses);

export default handler;