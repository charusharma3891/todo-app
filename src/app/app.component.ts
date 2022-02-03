import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todoapp';
  closeResult = '';
  constructor(private addNoteModal: NgbModal) { }

  openAddNote(content: any) {
    this.addNoteModal.open(content).result.then((result: any) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason: any) => {
      this.closeResult =
        `Dismissed ${this.getDismissReason(reason)}`;
    });

  }

  private getDismissReason(reason: any) {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  saveNote(content: any, title: string) {
    this.addNoteModal.dismissAll('Save click')
    //save note details in local storage
    localStorage.setItem("Title", title);
    alert(localStorage.getItem("Title"));
  }
}

