import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class ImprimirService {
    imprimir = false;
    constructor(private httpClient: HttpClient) { }

    toggleImprimir() {
        this.imprimir = !this.imprimir;
    }
}
