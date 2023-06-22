
import axios from "axios";
import { userToken } from "../../lib/usertoken";
export default defineEventHandler((event) => {
  
  const user=userToken()
  return user
});