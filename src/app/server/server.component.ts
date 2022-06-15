import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit,SimpleChanges,ViewChild,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
  // encapsulation:ViewEncapsulation.None
})
export class ServerComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,
AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
 @Input('srvElement') element :{ type: string, name: string, content: string } |any ;
 @Input() name:string;
 @ViewChild('heading') header:ElementRef;
  constructor() {
    console.log("costructor called")
  }

  ngOnInit(): void {
    console.log("ngOnInit called");
    // console.log("Text content" + this.header.nativeElement.textContent);
  }
ngOnChanges(changes: SimpleChanges): void {
  console.log("Onchange called");
  console.log(changes);
}
ngDoCheck(): void {
  console.log("DoCheck called")

}
ngAfterContentInit(): void {
  console.log("AfterContentInit called")
}
ngAfterContentChecked(): void {
  console.log("AfterContentchecked called")
}
ngAfterViewInit(): void {
  console.log("AfterViewInit called");
  console.log("Text content"+this.header.nativeElement.textContent);
}
ngAfterViewChecked(): void {
  console.log("AfterViewChecked called")
}
ngOnDestroy(): void {
  console.log("destroy called");

}
}
