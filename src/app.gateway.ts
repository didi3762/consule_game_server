import { SubscribeMessage, WebSocketGateway, WebSocketServer, OnGatewayConnection, OnGatewayInit, OnGatewayDisconnect, WsResponse } from '@nestjs/websockets';
import { Logger, UseFilters } from '@nestjs/common';
import { Socket, Server } from 'socket.io';

@WebSocketGateway(3001)
export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  

  @WebSocketServer() wss: Server;

  private  logger = new Logger('AppGateway');

  afterInit(server: any){
    this.logger.log('Initialized!')
    console.log('Initialized!');
    
  }

  
  handleConnection(client: Socket, ...args:any[]){
    // this.logger.log(`Client connected: ${client.id}`)
    // client.emit('connection', 'Successfuly connected to server')
    // this.wss.emit('position', this.position);
   return console.log('connection');
    
  }

  handleDisconnect(client: Socket) {
    // this.logger.log(`Client connected: ${client.id}`)
    console.log('disconnect');
    
  }

  
  // @UseFilters(new WsExceptionFilter())
  @SubscribeMessage('move')
  async handleMessage(client: Socket, text: string){
      // return { event: 'msgToServer', data:text}
      this.logger.log(`Client move: ${client.id}`)
     await console.log(`Client move: ${text}`)
      
        
      //   this.wss.on('move', data => {
      //     switch (data) {
      //       case 'left':
      //         this.position.x = this.position.x -5
      //         this.wss.emit('position', this.position);
      //         break;
      //       case 'right':
      //         this.position.x = this.position.x + 5
      //         this.wss.emit('position', this.position);
      //         break;
      //       case 'up':
      //         this.position.y = this.position.y -5
      //         this.wss.emit('position', this.position);
      //         break;
            // case 'down':
      //         this.position.y = this.position.y + 5
      //         this.wss.emit('position', this.position);
      //         break;
      //     }
        
      // })
  }

  position = {
    x: 200,
    y: 200,
  }

//  handleGame(){
//   this.wss.on('connected', socket =>{
//     socket.emit('position', this.position);
//     this.wss.on('move', data => {
//       switch (data) {
//         case 'left':
//           this.position.x = this.position.x -5
//           this.wss.emit('position', this.position);
//           break;
//         case 'right':
//           this.position.x = this.position.x + 5
//           this.wss.emit('position', this.position);
//           break;
//         case 'up':
//           this.position.y = this.position.y -5
//           this.wss.emit('position', this.position);
//           break;
//         case 'down':
//           this.position.y = this.position.y + 5
//           this.wss.emit('position', this.position);
//           break;
//       }
//     })
//   })
//  } 
}
