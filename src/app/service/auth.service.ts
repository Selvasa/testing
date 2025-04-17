import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { endPoints } from "./endpoints";

@Injectable({ providedIn: "root" })
export class AuthService {
    private http = inject(HttpClient);

    login(data: any) {
        return this.http.post(endPoints("login"), data)
    }

    register(data: any) {
        return this.http.post(endPoints("register"), data)
    }
}