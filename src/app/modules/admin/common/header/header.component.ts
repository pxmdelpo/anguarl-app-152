import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    @Input() user;
    @Output() logout: EventEmitter<boolean> = new EventEmitter<boolean>();

    onClick() {
        this.logout.emit(true);
    }
}