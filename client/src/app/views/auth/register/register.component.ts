import { Component } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../../../service/authentication.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
    credentials: TokenPayload = {
        email: '',
        name: '',
        password: '',
    };

    constructor(private auth: AuthenticationService, private router: Router) {}

    register() {
        this.auth.register(this.credentials).subscribe(
            () => {
                this.router.navigateByUrl('/');
            },
            (err) => {
                console.error(err);
            },
        );
    }
}
