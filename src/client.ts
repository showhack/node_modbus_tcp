import { Config2 } from "./drivers/config.js"
import { ModbusClientDriver } from "./drivers/modbus-client.js"

console.log("Client Started....")
const client = new ModbusClientDriver({port: Number.parseInt(Config2.modbusClientPort)})

client.start()
