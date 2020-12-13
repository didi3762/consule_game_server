import { SubscribeMessage, WebSocketGateway, WebSocketServer, OnGatewayConnection, OnGatewayInit, OnGatewayDisconnect, WsResponse } from '@nestjs/websockets';
import { Logger, UseFilters } from '@nestjs/common';
import { Socket, Server } from 'socket.io';

@WebSocketGateway(3001)
export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  

  @WebSocketServer() server: Server;
 private logger: Logger = new Logger('AppGateway');

 @SubscribeMessage('create_ansowers')
 handleCreate(client: Socket, payload: string): void {
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


 @SubscribeMessage('chatToServer')
 handleMessage(client: Socket, message: { sender: string, room:string , message:string, photo_url:string}): void {
  console.log('chatToServer',message);
  this.server
  .to(message.room)
  .emit('chatToClient', message);
 }

 @SubscribeMessage('signUser')
 handleSignin(client: Socket, user: { sender: string, room:string , message:string }): void {
  console.log('signUser',user);
       this.server.to(user.room).emit('user_aded', user);
 }

 @SubscribeMessage('joinRoom')
 handlejoinRoom(client: Socket, room: string): void {
   console.log('joinRoom',room);
   client.join(room);
   client.emit('joinedRoom',room)
 }

 @SubscribeMessage('invite_frinde')
 handleInviteFrinde(client: Socket, frinders: { host:string , guest:string}): void {
   console.log('invite_frinde',frinders);
   this.server.to(frinders.guest).emit('invite_to_frinde', frinders.host);
 }

 @SubscribeMessage('conf_frinde')
 handleConfFrinde(client: Socket, message: { host:string ,  conf:boolean}): void {
   console.log('conf_frinde',message);
   this.server.to(message.host).emit('conf_to_frinde', message.conf);
 }

 @SubscribeMessage('join_room_tow')
 handlejoinFrinde(client: Socket, message: { host:string ,  guest:string , room:string}): void {
   console.log('join_room_tow',message);
   client.join(message.room);
   client.emit('joined_tow_frindes',message.room)
 }

 @SubscribeMessage('leaveRoom')
 hanleLeaveRoom(client: Socket, room: string): void {
   console.log('leaveRoom');
   client.leave(room)
   client.emit('leftRoom', room);
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
