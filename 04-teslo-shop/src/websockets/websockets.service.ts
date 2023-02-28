import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';
import { ConnectedClients } from './interfaces/connected-clients.interface';

@Injectable()
export class WebsocketsService {
  private connectedClients: ConnectedClients = {};

  registerClient(client: Socket) {
    this.connectedClients[client.id] = client;
  }

  removeClient(clientId: string) {
    delete this.connectedClients[clientId];
  }

  getConnectedClients(): string[] {
    return Object.keys(this.connectedClients);
  }
}
