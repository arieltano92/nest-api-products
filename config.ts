//This is for do types for our config. This prevent development errors

import { registerAs } from "@nestjs/config";

export default registerAs('config', ()=> {
  return {
  database:{
    name: process.env.DATABASE_NAME,
    port: process.env.DATABASE_PORT
  },
  apiKey : process.env.API_KEY
}
})
