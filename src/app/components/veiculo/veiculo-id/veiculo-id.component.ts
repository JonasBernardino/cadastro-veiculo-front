import { Component, OnInit } from '@angular/core';
import { VeiculoService } from '../veiculo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VeiculoId } from '../veiculo.model';

@Component({
  selector: 'app-veiculo-id',
  templateUrl: './veiculo-id.component.html',
  styleUrls: ['./veiculo-id.component.css']
})
export class VeiculoIdComponent implements OnInit {

  veiculo: VeiculoId = {
    statusCode: "",
    data: {
      id: "",
      veiculo: "",
      marca: "",
      ano: "",
      descricao: "",
      cor: "",
      vendido: false,
      criado: "",
      atualizado: null
    },
    timeStamp: ""
  }

  id = this.route.snapshot.paramMap.get('id');

  constructor(
    private veiculoService: VeiculoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.readId()
  }

  readId() {
    this.veiculoService.readById(this.id).subscribe((resp => {
      this.veiculo = resp;
    }))
  }

  deletById() {
    this.veiculoService.deletById(this.id).subscribe((resp => {
      this.veiculoService.showMessage('Veiculo deletado com sucesso!');
      this.router.navigate(['veiculo/read']);
    }))
  }

}
