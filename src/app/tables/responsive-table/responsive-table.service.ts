import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { UserData } from '../interfaces'

@Injectable()
export class ResponsiveTableService {
    private localhost = 'http://localhost:3000/'
    private getAPI = 'result'
    constructor(private service: HttpClient) {}

    public getAll(): Observable<UserData[]> {
        const api = this.localhost + this.getAPI
        return this.service.get<UserData[]>(api)
    }
}
