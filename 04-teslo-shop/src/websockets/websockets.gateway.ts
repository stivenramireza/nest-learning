import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { NewMessageDto } from './dto/new-message.dto';
import { WebsocketsService } from './websockets.service';

@WebSocketGateway({ cors: true })
export class WebsocketsGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() webSocketServer: Server;

  constructor(private readonly websocketsService: WebsocketsService) {}

  handleConnection(client: Socket) {
    const token = client.handshake.headers.authorization as string;
    console.log({ token });

    this.websocketsService.registerClient(client);
    this.emitConnectedClients();
  }

  handleDisconnect(client: Socket) {
    this.websocketsService.removeClient(client.id);
    this.emitConnectedClients();
  }

  private emitConnectedClients() {
    const connectedClients = this.websocketsService.getConnectedClients();
    this.webSocketServer.emit('clients-updated', connectedClients);
  }

  @SubscribeMessage('message-from-client')
  onMessageFromClient(client: Socket, payload: NewMessageDto) {
    // Emit only client
    // client.emit('message-from-server', {
    //   fullName: 'Stiven',
    //   message: payload.message || 'No message',
    // });

    // Emit all, not the initial client
    // client.broadcast.emit('message-from-server', {
    //   fullName: 'Stiven',
    //   message: payload.message || 'No message',
    // });

    // Emit all
    this.webSocketServer.emit('message-from-server', {
      fullName: 'Stiven',
      message: payload.message || 'No message',
    });
  }
}
