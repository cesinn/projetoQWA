import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  
  private element: any;

  @Input() mustOpen : boolean = true;
  @Output() mustClose = new EventEmitter();
  


  constructor(private el: ElementRef) {
      this.element = el.nativeElement;
  }

  ngOnInit(): void {

      // move element to bottom of page (just before </body>) so it can be displayed above everything else
      document.body.appendChild(this.element);

      // close modal on background click
      this.element.addEventListener('click', (el : any) => {
        let className = el.target.className.split(' ')
          if (className[0] == 'body-alert') {
              this.close();
          }
      });
  }

  // close modal
  close(): void {
    this.mustClose.emit('Fechou');
  }


}