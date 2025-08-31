import dbConnect from "@/backend/config/dbConnect"
import { getProducts, newProduct } from "@/backend/controllers/productControllers";
import { default as nc } from "next-connect";

const handler = nc();

dbConnect();

handler.post(newProduct);
handler.get(getProducts);

export default handler;