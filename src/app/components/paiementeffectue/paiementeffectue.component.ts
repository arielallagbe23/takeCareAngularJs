import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Paiementeffectue } from 'src/app/paiementeffectue';

@Component({
  selector: 'app-paiementeffectue',
  templateUrl: './paiementeffectue.component.html',
  styleUrls: ['./paiementeffectue.component.css']
})
export class PaiementeffectueComponent implements OnInit {

  paiementeffectues:any;
  paiementeffectue = new Paiementeffectue;
  

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }

  insertPaiementeffectue() 
  {
      this.dataService.insertPaiementeffectue(this.paiementeffectue).subscribe(res => {
      console.log(res);
    })
  }

}
