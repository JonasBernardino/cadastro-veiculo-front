import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { ResponseVeiculo, Veiculo, VeiculoId } from './veiculo.model';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable, catchError, map } from 'rxjs';
import { isError } from 'util';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  baseUrl = "http://localhost:8080/api/v1/veiculo"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }
  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }

  create(veiculo: Veiculo): Observable<Veiculo>{
    const url = `${this.baseUrl}/create`;
    return this.http.post<Veiculo>(url, veiculo)
  }

  read(): Observable<ResponseVeiculo>{
    return this.http.get<ResponseVeiculo>(this.baseUrl)
  }

  readById(id:string | null):Observable<VeiculoId>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<VeiculoId>(url)
  }

  deletById(id: string | null):Observable<Veiculo>{
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<VeiculoId>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(user:Veiculo):Observable<Veiculo>{
    const url = `${this.baseUrl}/update`
    return this.http.put<Veiculo>(url, user)
  }

}
