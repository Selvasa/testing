import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { endPoints } from "./endpoints";

@Injectable({ providedIn: "root" })

export class CommonService {
    private http = inject(HttpClient)
    verifyData() {
        return this.http.get(endPoints("verify"));
    }
}