import { Component, OnInit } from '@angular/core';
import { Veiculo, VeiculoId } from '../veiculo.model';
import { VeiculoService } from '../veiculo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-veiculo-update',
  templateUrl: './veiculo-update.component.html',
  styleUrls: ['./veiculo-update.component.css']
})
export class VeiculoUpdateComponent implements OnInit {

  veiculoFull!: VeiculoId;

  id = this.route.snapshot.paramMap.get('id');

  veiculo: Veiculo = {
    veiculo: '',
    marca: '',
    ano: '',
    descricao: '',
    cor: '',
    vendido: false
  };



  constructor(
    private veiculoService: VeiculoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.veiculoService.readById(this.id).subscribe((resp => {
      this.veiculoFull = resp;
      this.veiculo = {
        id: this.veiculoFull.data.id,
        veiculo: this.veiculoFull?.data.veiculo,
        marca: this.veiculoFull?.data.marca,
        ano: this.veiculoFull?.data.ano,
        descricao: this.veiculoFull?.data.descricao,
        cor: this.veiculoFull?.data.cor,
        vendido: this.veiculoFull.data.vendido
      };
    }));
  }

  atualizar(){
    this.veiculoService.update(this.veiculo).subscribe((resp =>{
      this.veiculoService.showMessage('Veiculo atualizado com sucesso!');
      this.router.navigate(['veiculo/read']);
    }))
  }
}
