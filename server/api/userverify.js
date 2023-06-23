import { verifyUser } from "../../lib/userverify";

export default defineEventHandler(async(e) => {
  if (e.req.method === 'POST') {
    try {
      const body = await readRawBody(e)
      const {token}=JSON.parse(body);
      const verify =await verifyUser(token);
      // console.log(verify.message)
      return verify.message
    } catch (error) {
      return `${error}`
    }
  }
});