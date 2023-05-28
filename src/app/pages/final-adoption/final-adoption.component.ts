import { Component } from '@angular/core';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-final-adoption',
  templateUrl: './final-adoption.component.html',
  styleUrls: ['./final-adoption.component.css'],
})
export class FinalAdoptionComponent {
  constructor(){}
  ngOnInit(){}

  createPdf(){
    const pdfDefinition: any={
      content:[
        {
          text: 'Hola mundo'
        }
      ]
    }

    const pdf = pdfMake.createPdf(pdfDefinition);
    pdf.open();
  }
}
