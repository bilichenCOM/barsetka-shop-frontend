import { UserResponse } from './../_model/user-response';
import { UserService } from './../_service/user.service';
import { Component, OnInit } from '@angular/core';
import { AdminItem } from './admin-item';

@Component({
	selector: 'app-administration',
	templateUrl: './administration.component.html',
	styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {

  public admin: UserResponse;

  public adminItems: AdminItem[] = [
    {name: "Категорії", description: "додати або змінити товарні категорії", link: "categories"},
    {name: "Товари", description: "додати або змінити товари", link: "products"},
  ];

	constructor(private userService: UserService) { }

	ngOnInit(): void {
    this.userService.getCurrentUser().subscribe(u => this.admin = u);
  }
}
