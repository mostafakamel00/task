import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Userface } from '../interface/userface';
import { UsersService } from '../sevice/users.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  userArr: Userface[] = [];
  selectArr: Userface[] = [];
  tempArr: Userface[] = [];
  searchName: string = '';
  searchDate: string = '';
  searchSalary: string = '';
  searchDepartment: string = '';
  searchExperince: string = '';
  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.getAll();
  }

  //all users
  getAll() {
    this.userService.getAllUsers().subscribe((res) => {
      this.userArr = res;
      this.tempArr = res;
      this.selectArr = res;
    });
  }

  //filter By Name
  filterName() {
    if (this.searchName != '') {
      this.userArr = this.userArr.filter((res: any) => {
        return res.name
          ?.toLocaleLowerCase()
          .match(this.searchName.toLocaleLowerCase());
      });
    }
  }

  //filter By Date
  filterDate() {
    if (this.searchDate != '') {
      this.userArr = this.userArr.filter((el: any) => {
        return el.date.match(this.searchDate);
      });
    }
  }

  //filter By Department
  filterDepartment() {
    if (this.searchDepartment) {
      this.userArr = this.userArr.filter((res: any) => {
        return res.department
          .toLocaleLowerCase()
          .match(this.searchDepartment.toLocaleLowerCase());
      });
    }
  }

  //filter By Salary
  filterSalary() {
    if (this.searchSalary) {
      this.userArr = this.userArr.filter((res: any) => {
        res.salary += '';
        return res.salary.match(this.searchSalary);
      });
    }
  }

  //filter By Experince
  filterExperince() {
    if (this.searchExperince) {
      this.userArr = this.userArr.filter((res: any) => {
        res.experince += '';
        return res.experince.match(this.searchExperince);
      });
    }
  }

  filterData() {
    this.userArr = this.tempArr;
    this.filterName();
    this.filterDate();
    this.filterDepartment();
    this.filterSalary();
    this.filterExperince();
  }
  clearAll() {
    this.userArr = this.tempArr;
    this.searchName = '';
    this.searchDate = '';
    this.searchSalary = '';
    this.searchDepartment = '';
    this.searchExperince = '';
  }
}
