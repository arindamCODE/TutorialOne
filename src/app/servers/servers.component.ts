import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '.app-servers',
  /* template: `
            <app-server></app-server>
            <app-server></app-server>
            `, */
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer : boolean = false;
  serverCreationStatus : string = 'No Server was created!';
  serverName : string = 'Testserver';
  serverCreated : boolean = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {
  }

  onCreateServer()
  {
    this.serverCreated = true;
    this.serverCreationStatus = 'Sever was Created! ' + this.serverName;
  }


  onUpdateServerName(event : Event)
  {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
