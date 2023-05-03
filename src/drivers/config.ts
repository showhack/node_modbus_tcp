import * as dotenv from "dotenv"
dotenv.config()

export function requireEnv(name: string) {
  // En lugar de buscar la variable de ambiente inmediatamente,
  // devolvemos una función que es la encargada de hacerlo, de
  // esta manera si nunca necesitamos la variable no la pedimos,
  // y eso te ahorra tener que configurar las cosas que no vas
  // a utilizar, por ejemplo, no tener que poner el puerto del
  // servidor si nada más vas a usar el cliente
  //
  // La diferencia es que en lugar de usar Config.serverPort,
  // necesitas llamar a la función, o sea, Config.serverPort(),
  return function () {
    const value = process.env[name]

    if (value == undefined) throw new Error(`${name} not found`)

    return value
  }
}

export const Config = {
  modbusServerPort: requireEnv("MODBUS_SERVER_PORT"),
  modbusClientPort: requireEnv("MODBUS_CLIENT_PORT"),
  expressServerPort: requireEnv("EXPRESS_SERVER_PORT")
}

