import { Component,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  // newServerName='';
  // newServerContent='';




  // serverElements=[{type:'server',name:'TestServer',content:'it just a test!'}];

  // onServerAdded(serverData:{serverName:string,serverContent:string}){
  //   this.serverElements.push({
  //     type:'server',
  //     name:serverData.serverName,
  //     content:serverData.serverContent
  //   });
  // }
  // onBlueprintAdded(blueprintData:{serverName:string,serverContent:string}){
  //   this.serverElements.push({
  //     type:'blueprint',
  //     name:blueprintData.serverName,
  //     content:blueprintData.serverContent
  //   });
  // }
  // onChangeFirst(){
  //   this.serverElements[0].name="changed";
  // }
  // onDestroyFirst(){
  //   this.serverElements.splice(0,1);
  // }

  oddNumbers:number[]=[];
  evenNumbers:number[]=[];
  onIntervalFired(firedNumber:number){
    //console.log(firedNumber);
    if(firedNumber % 2===0){
      this.evenNumbers.push(firedNumber);
     }else{
      this.oddNumbers.push(firedNumber);
     }
  }
}
