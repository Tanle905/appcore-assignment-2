import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { UserService } from '../../services/user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit, OnDestroy {
  usersData: User[] = [];
  searchText: string = '';
  filterText: string = '';
  userStatus: string = 'true';
  maxItemsPerPage: number = 6;
  page: number = 1;
  sortBy: string = 'firstname';
  order: boolean | 'asc' | 'desc' = 'asc';
  onDeleteUserSubscription: Subscription = new Subscription();

  constructor(private usersService: UserService) {}

  ngOnInit(): void {
    this.usersService.getUsersData().subscribe((datas: any) => {
      this.usersData = datas;
    });
    this.onDeleteUserSubscription = this.usersService.onDeleteUser.subscribe(
      (deletedUser) => {
        this.usersData = this.usersData.filter(
          (data) => data.id !== deletedUser.id
        );
      }
    );

  }
  ngOnDestroy(): void {
    this.onDeleteUserSubscription.unsubscribe();
  }
}
