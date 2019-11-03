import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
    declarations: [SignInComponent, LoginComponent], // components, directives, pipes
    imports: [
        CommonModule,
        LoginRoutingModule
    ], // modules
    providers: [] // services
})
export class LoginModule {}