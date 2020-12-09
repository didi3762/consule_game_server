import { OnGatewayConnection, OnGatewayInit, OnGatewayDisconnect } from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
export declare class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    server: Server;
    private logger;
    handleCreate(client: Socket, payload: string): void;
    sendcard(client: Socket, payload: string): void;
    start_client(client: Socket, payload: string): void;
    handleMessage(client: Socket, message: {
        sender: string;
        room: string;
        message: string;
        photo_url: string;
    }): void;
    handleSignin(client: Socket, user: {
        sender: string;
        room: string;
        message: string;
    }): void;
    handlejoinRoom(client: Socket, room: string): void;
    hanleLeaveRoom(client: Socket, room: string): void;
    afterInit(server: Server): void;
    handleDisconnect(client: Socket): void;
    handleConnection(client: Socket, ...args: any[]): void;
}
