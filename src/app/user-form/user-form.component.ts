import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  calendar: any = {
    firstDayOfWeek: 0,
    dayNames: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"],
    dayNamesShort: ["日", "月", "火", "水", "木", "金", "土"],
    dayNamesMin: ["日", "月", "火", "水", "木", "金", "土"],
    monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    monthNamesShort: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    today: '今日',
    clear: 'クリア',
  };
  yearRange: string = "1950:2030";
  dateFormat: string = "yy-mm-dd";

  email: string;
  tuoi: number;
  select: any;
  user: {};

  constructor() { }

  ngOnInit() {
    this.user = {
      email: "Khanh@gmail.com",
      tuoi: 22,
      select: "1",
      birthday: "2018-01-01",
    }
  }

  onUpdate(formUser) {
    const userDetail = formUser.value;
    console.log(formUser);
    if (typeof userDetail.birthday != "string") {
      var birthday = userDetail.birthday;
      birthday = new Date(birthday).setDate(new Date(birthday).getDate() + 1);
      userDetail.birthday = new Date(birthday).toISOString().slice(0, 10);
    }
    console.log(userDetail);
  }


}
