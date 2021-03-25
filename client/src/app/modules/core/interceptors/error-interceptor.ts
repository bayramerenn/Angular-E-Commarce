import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private router: Router, private toastr: ToastrService) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
            .pipe(
                catchError(error => {
                    if (error.status) {
                        switch (error.status) {
                            case 400:
                                this.toastr.error(error.error.title, error.status)
                                this.router.navigateByUrl('/not-found')
                                break;
                            case 500:
                                this.toastr.error(error.error.title, error.status)
                                this.router.navigateByUrl('/server-error')
                                break;
                        }
                    }
                    return throwError(error)
                })
            )
    }
}
