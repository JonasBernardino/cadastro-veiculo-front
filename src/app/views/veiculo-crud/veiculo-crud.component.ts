import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-veiculo-crud',
  templateUrl: './veiculo-crud.component.html',
  styleUrls: ['./veiculo-crud.component.css']
})
export class VeiculoCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateVeiculoCreate(){
    this.router.navigate(['/veiculo/create'])
  }

  navigateVeiculoRead(){
    this.router.navigate(['/veiculo/read'])
  }

}
