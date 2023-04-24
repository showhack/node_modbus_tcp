import * as dotenv from "dotenv"
dotenv.config()

export function requireEnv(name: string) {
  const value = process.env[name]

  if(value == undefined) throw new Error(`${name} not found`);

  return value
}

export const Config = {
  modbusServerPort: requireEnv("MODBUS_SERVER_PORT"),
  
}

