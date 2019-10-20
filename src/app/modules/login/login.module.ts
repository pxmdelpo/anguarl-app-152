import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
    declarations: [SignInComponent], // components, directives, pipes
    imports: [
        CommonModule,
        RouterModule
    ], // modules
    exports: [SignInComponent],
    providers: [] // services
})
export class LoginModule {}