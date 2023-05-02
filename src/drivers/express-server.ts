import express from 'express'
import net from "net"
import NetServer = net.Server

export interface ExpressServerConfig {
  port: number
}

export class ExpressServerDriver  {
  private static DefaultConfig: ExpressServerConfig = {
    port: 502
  }


  private readonly netServer: net.Server
  
  constructor(private readonly config: ExpressServerConfig = ExpressServerDriver.DefaultConfig) {
    this.netServer = new net.Server()
  }

  start() {
    this.netServer.listen(this.config.port)
  }
}

  