import Modbus, { ModbusTCPServer } from "jsmodbus"
import type ModbusAbstractRequest from "jsmodbus/dist/abstract-request"
declare type AbstractRequest = ModbusAbstractRequest;
export declare type BufferCB = (buffer: Buffer) => void;

import { Server } from 'net'

const netServer = new Server()
const initialHoldingRegisters = Buffer.alloc(10000)
const server = new Modbus.server.TCP(netServer, {
    holding: initialHoldingRegisters
})

server.on('connection', function (client) {
    console.log('New Connection')
})


server.on('postWriteSingleRegister', function (request: AbstractRequest, cb: BufferCB) {
    console.log('Write Single Register')
    // console.log('Original {register, value}: {', address, ',', server.holding.readUInt16BE(address), '}')
})

server.on('postWriteSingleRegister', function (request: AbstractRequest, cb: BufferCB) {
    // console.log('New {register, value}: {', address, ',', server.holding.readUInt16BE(address), '}')
})

server.on('postWriteMultipleCoils', function (request: AbstractRequest, cb: BufferCB) {
    // console.log('Write multiple coils - Existing: ', value)
})

server.on('postWriteMultipleCoils', function (request: AbstractRequest, cb: BufferCB) {
    // console.log('Write multiple coils - Complete: ', value)
})

/* server.on('writeMultipleRegisters', function (request: AbstractRequest, cb: BufferCB) {
  console.log('Write multiple registers - Existing: ', value)
}) */

server.on('postWriteMultipleRegisters', function (request: AbstractRequest, cb: BufferCB) {
    // console.log('Write multiple registers - Complete: ', holding.readUInt16BE(0))
})

server.on('connection', function (client) {

    console.log('New connection...')

})

server.coils.writeUInt16BE(0x0000, 0)
server.coils.writeUInt16BE(0x0000, 2)
server.coils.writeUInt16BE(0x0000, 4)
server.coils.writeUInt16BE(0x0000, 6)

server.discrete.writeUInt16BE(0x5678, 0)

server.holding.writeUInt16BE(0x0000, 0)
server.holding.writeUInt16BE(0x0000, 2)

server.input.writeUInt16BE(0xff00, 0)
server.input.writeUInt16BE(0xff00, 2)

const port = 8502
console.log(`listening on port: ${port}`)
netServer.listen(8502)