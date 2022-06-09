import { Component, Input, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
  // encapsulation:ViewEncapsulation.None
})
export class ServerComponent implements OnInit {
 @Input('srvElement') element :{ type: string, name: string, content: string } |any ;

  constructor() { }

  ngOnInit(): void {
  }

}
