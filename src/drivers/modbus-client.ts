import modbus, { ModbusTCPClient, ModbusTCPRequest } from "jsmodbus"
import net from "net";
import NetClient = net.Socket

export interface ModbusClientConfig {
  port:number
}

export class ModbusClientDriver {
  private static DefaultConfig: ModbusClientConfig = {
    port: 502
  }

  private readonly netClient: net.Socket
  private readonly modbusClient: ModbusTCPClient

  constructor(private readonly config: ModbusClientConfig = ModbusClientDriver.DefaultConfig) {
    this.netClient = new net.Socket()
    this.modbusClient = new modbus.client.TCP(this.netClient)
  }

  start() {
    this.netClient.connect(this.config.port)
  }

}