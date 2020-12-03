import { SubscribeMessage, WebSocketGateway, WebSocketServer, OnGatewayConnection, OnGatewayInit, OnGatewayDisconnect, WsResponse } from '@nestjs/websockets';
import { Logger, UseFilters } from '@nestjs/common';
import { Socket, Server } from 'socket.io';

@WebSocketGateway(3001)
export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  

  @WebSocketServer() server: Server;
 private logger: Logger = new Logger('AppGateway');

//  @SubscribeMessage('msgToServer')
//  handleMessage(client: Socket, payload: string): void {
//    console.log('msgToServer');
   
//   this.server.emit('msgToClient', payload);
//  }

 @SubscribeMessage('create_ansowers')
 handleMessage(client: Socket, payload: string): void {
   console.log('send_to_client');
   
  this.server.emit('create_dic', payload);
 }

 @SubscribeMessage('card')
 sendcard(client: Socket, payload: string): void {
   console.log('sendcard');
   
  this.server.emit('sendcard', payload);
 }
 @SubscribeMessage('start')
 start_client(client: Socket, payload: string): void {
   console.log('start_client');
   
  this.server.emit('start_client', payload);
 }

 afterInit(server: Server) {
  this.logger.log('Init');
 }

 handleDisconnect(client: Socket) {
  this.logger.log(`Client disconnected: ${client.id}`);
 }

 handleConnection(client: Socket, ...args: any[]) {
  this.logger.log(`Client connected: ${client.id}`);
 }
}
