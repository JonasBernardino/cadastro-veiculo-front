import { Component, OnInit } from '@angular/core';
import { VeiculoService } from '../veiculo.service';
import { Router } from '@angular/router';
import { Veiculo } from '../veiculo.model';

@Component({
  selector: 'app-veiculo-create',
  templateUrl: './veiculo-create.component.html',
  styleUrls: ['./veiculo-create.component.css']
})
export class VeiculoCreateComponent implements OnInit {

  veiculo: Veiculo = {
    veiculo: "",
    marca: "",
    ano: "",
    descricao: "",
    cor: "",
    vendido: false
  }

  constructor(private veiculoService: VeiculoService, private router: Router) { }

  ngOnInit(): void {
  }

  createVeiculo(): void {
    this.veiculoService.create(this.veiculo).subscribe(() => {
      this.veiculoService.showMessage('Veiculo criado')
      this.router.navigate(['/veiculo'])
    })
  }

  cancel() {
    this.router.navigate(['/veiculo'])
  }

}
