import { Component, ElementRef, ViewChild} from '@angular/core'; 
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-exportform1',
  templateUrl: './exportform1.component.html',
  styleUrls: ['./exportform1.component.scss']
})


export class Exportform1Component {

  @ViewChild('content') content: ElementRef;

  constructor(private elementRef: ElementRef) { 
  }

  public onClick(){
    let doc = new jsPDF();
    doc.addHTML(document.body,0,0,{ allowTaint: true }, () => {
      doc.save("test.pdf");
    } );
  }

}
