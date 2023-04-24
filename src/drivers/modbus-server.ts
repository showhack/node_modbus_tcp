import modbus, {ModbusTCPServer} from "jsmodbus";
import net from "net";
import NetServer = net.Server

export interface ModbusServerConfig {
  port:number
}


export class ModbusServerDriver {
  private static DefaultConfig: ModbusServerConfig = {
    port: 502
  }

  private readonly netServer: net.Server
  private readonly modbusServer: ModbusTCPServer

  constructor(private readonly config: ModbusServerConfig = ModbusServerDriver.DefaultConfig) {
    this.netServer = new net.Server()
    this.modbusServer = new modbus.server.TCP(this.netServer)
  }

  start() {
    this.netServer.listen(this.config.port)
  }
}


