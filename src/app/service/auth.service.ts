import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { endPoints } from "./endpoints";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Injectable({ providedIn: "root" })
export class AuthService {
    private http = inject(HttpClient);
    private route = inject(Router)
    private toastr = inject(ToastrService)
    timer: any = null;
    login(data: any) {
        return this.http.post(endPoints("login"), data)
    }

    register(data: any) {
        return this.http.post(endPoints("register"), data)
    }

    logout() {
        const user = localStorage.removeItem("token");
        this.route.navigateByUrl("login");
        this.toastr.success("Logout Successfully", "", { positionClass: "toast-top-right" })
        if (this.timer) {
            clearTimeout(this.timer);
        }
        this.timer = null
    }
    autoLogout(timer: any) {
        this.timer = setTimeout(() => {
            console.log('date', timer);
            this.logout();
        }, timer)
    }
}