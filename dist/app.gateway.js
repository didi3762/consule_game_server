"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const common_1 = require("@nestjs/common");
let AppGateway = class AppGateway {
    constructor() {
        this.logger = new common_1.Logger('AppGateway');
    }
    handleCreate(client, payload) {
        console.log('send_to_client');
        this.server.emit('create_dic', payload);
    }
    sendcard(client, payload) {
        console.log('sendcard');
        this.server.emit('sendcard', payload);
    }
    start_client(client, payload) {
        console.log('start_client');
        this.server.emit('start_client', payload);
    }
    handleMessage(client, message) {
        console.log('chatToServer', message);
        this.server
            .to(message.room)
            .emit('chatToClient', message);
    }
    handleSignin(client, user) {
        console.log('signUser', user);
        this.server.to(user.room).emit('user_aded', user);
    }
    handlejoinRoom(client, room) {
        console.log('joinRoom', room);
        client.join(room);
        client.emit('joinedRoom', room);
    }
    handleInviteFrinde(client, frinders) {
        console.log('invite_frinde', frinders);
        this.server.to(frinders.guest).emit('invite_to_frinde', frinders.host);
    }
    handleConfFrinde(client, message) {
        console.log('conf_frinde', message);
        this.server.to(message.host).emit('conf_to_frinde', { conf: message.conf, room: `${message.host} & ${message.guest}` });
        this.server.to(message.guest).emit('conf_to_frinde', { conf: message.conf, room: `${message.host} & ${message.guest}` });
    }
    handlejoinFrinde(client, message) {
        console.log('join_room_tow', message);
        client.join(message.room);
        this.server.emit('joined_tow_frindes', { host: message.host, guest: message.guest, room: message.room });
    }
    hanleLeaveRoom(client, room) {
        console.log('leaveRoom');
        client.leave(room);
        client.emit('leftRoom', room);
    }
    selectGame(client, selct) {
        console.log('select_game', selct);
        this.server.to(selct.room).emit('selected_game', selct.url);
    }
    afterInit(server) {
        this.logger.log('Init');
    }
    handleDisconnect(client) {
        this.logger.log(`Client disconnected: ${client.id}`);
    }
    handleConnection(client, ...args) {
        this.logger.log(`Client connected: ${client.id}`);
    }
};
__decorate([
    websockets_1.WebSocketServer(),
    __metadata("design:type", Object)
], AppGateway.prototype, "server", void 0);
__decorate([
    websockets_1.SubscribeMessage('create_ansowers'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], AppGateway.prototype, "handleCreate", null);
__decorate([
    websockets_1.SubscribeMessage('card'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], AppGateway.prototype, "sendcard", null);
__decorate([
    websockets_1.SubscribeMessage('start'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], AppGateway.prototype, "start_client", null);
__decorate([
    websockets_1.SubscribeMessage('chatToServer'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AppGateway.prototype, "handleMessage", null);
__decorate([
    websockets_1.SubscribeMessage('signUser'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AppGateway.prototype, "handleSignin", null);
__decorate([
    websockets_1.SubscribeMessage('joinRoom'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], AppGateway.prototype, "handlejoinRoom", null);
__decorate([
    websockets_1.SubscribeMessage('invite_frinde'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AppGateway.prototype, "handleInviteFrinde", null);
__decorate([
    websockets_1.SubscribeMessage('conf_frinde'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AppGateway.prototype, "handleConfFrinde", null);
__decorate([
    websockets_1.SubscribeMessage('join_room_tow'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AppGateway.prototype, "handlejoinFrinde", null);
__decorate([
    websockets_1.SubscribeMessage('leaveRoom'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], AppGateway.prototype, "hanleLeaveRoom", null);
__decorate([
    websockets_1.SubscribeMessage('select_game'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AppGateway.prototype, "selectGame", null);
AppGateway = __decorate([
    websockets_1.WebSocketGateway(3001)
], AppGateway);
exports.AppGateway = AppGateway;
//# sourceMappingURL=app.gateway.js.map