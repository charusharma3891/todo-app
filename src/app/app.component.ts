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
  modalOpen = false;
  openAddNote(content: any) {
    if (this.modalOpen) return;
    this.modalOpen = true;
    this.addNoteModal.open(content).result.then((result: any) => {
        this.modalOpen = false;
        this.closeResult = `Closed with: ${result}`;
    }, (reason: any) => {
        this.modalOpen = false;
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
}

