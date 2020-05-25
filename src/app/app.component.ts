import { Component, OnInit } from '@angular/core';
import { Shop, User } from './models';
import { UsersService } from './services/users.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'testUsersShops';
    selectedUsers: { user: User, ids: string[] }[];

    constructor(private usersService: UsersService) {
    }

    ngOnInit(): void {
        this.selectedUsers = this.usersService.getUsers();
    }
}
