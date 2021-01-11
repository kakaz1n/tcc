import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IData } from '../../interfaces/data.interface';
import { Observable } from 'rxjs';

@Injectable()
export class LogicProvider {

    private dataUrl: string = "'./estados_cidades.json'"

      constructor(private http: HttpClient) { }

      getData(): Observable<IData[]> {
        return this.http.get<IData[]>(this.dataUrl)
     }

}