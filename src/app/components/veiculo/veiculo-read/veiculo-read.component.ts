import { Component, OnInit, ViewChild } from '@angular/core';
import { ResponseVeiculo } from '../veiculo.model';
import { VeiculoService } from '../veiculo.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-veiculo-read',
  templateUrl: './veiculo-read.component.html',
  styleUrls: ['./veiculo-read.component.css']
})


export class VeiculoReadComponent implements OnInit {
  veiculosPage!: ResponseVeiculo;

  displayedColumns: string[] = ['id', 'veiculo', 'marca', 'ano','cor', 'vendido','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private veiculoService: VeiculoService) {}

  ngOnInit(): void {
    this.veiculoService.read().subscribe(veiculosPage => {
      this.veiculosPage = veiculosPage;
      this.dataSource = new MatTableDataSource(veiculosPage.data.content);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
