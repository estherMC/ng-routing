import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.route.params
        .subscribe((params: Params)=> {
            this.server = this.serversService.getServer(+params['id']);
        }
      )
  }

  onEdit(){
    //We can use the next:
    //this.router.navigate(['/servers', this.server.id, 'edit']);
    //We can do it easily with this doing relatively:
    //preserve --> mantain queryParams, merge --> merge with new ones
    this.router.navigate(['edit'], {relativeTo:this.route, queryParamsHandling: 'preserve'});

  }

}
