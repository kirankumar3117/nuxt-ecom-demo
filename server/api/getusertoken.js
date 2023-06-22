import { userToken } from "../../lib/usertoken";

export default defineEventHandler(async(e) => {
  if (e.req.method === 'POST') {
    try {
      const body = await readRawBody(e)
      const {id,password}=JSON.parse(body);
      const token =await userToken(id,password);
      return token
    } catch (error) {
      return `${error}`
    }
  }
});