import dbConnect from "@/backend/config/dbConnect"
import { getAddresses, newAddress } from "@/backend/controllers/addressControllers";
import { isAuthenticatedUser } from "@/backend/middlewares/auth";
import { default as nc } from "next-connect";
import onError from "@/backend/middlewares/errors"


const handler = nc( { onError } );

dbConnect();

handler.post(newAddress);
handler.get(getAddresses);

export default handler;