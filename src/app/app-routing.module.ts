import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { VeiculoCrudComponent } from './views/veiculo-crud/veiculo-crud.component';
import { VeiculoCreateComponent } from './components/veiculo/veiculo-create/veiculo-create.component';
import { VeiculoReadComponent } from './components/veiculo/veiculo-read/veiculo-read.component';
import { VeiculoIdComponent } from './components/veiculo/veiculo-id/veiculo-id.component';
import { VeiculoUpdateComponent } from './components/veiculo/veiculo-update/veiculo-update.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "veiculo",
    component: VeiculoCrudComponent
  },
  {
    path: "veiculo/create",
    component: VeiculoCreateComponent
  },
  {
    path: "veiculo/read",
    component: VeiculoReadComponent
  }
  ,
  {
    path: "veiculo/read/:id",
    component: VeiculoIdComponent
  },
  {
    path: "veiculo/update/:id",
    component: VeiculoUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
