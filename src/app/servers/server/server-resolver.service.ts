import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import { ServersService } from '../servers.service';
import { Injectable } from '@angular/core';

interface Server {
  id: number,
  name: string,
  status: string;
}

// Es pot copiar <{id: number, name: string, status: string}> a dalt i baix o crear interfície
@Injectable()
export class ServerResolver implements Resolve<Server> {

  constructor(private serversService: ServersService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server{
    //Fem servir + per convertir a number
    return this.serversService.getServer(+route.params['id']);
  }

}
