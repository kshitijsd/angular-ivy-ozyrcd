import { Component, VERSION } from "@angular/core";
import { OnInit } from "@angular/core";
import { Input, Output, EventEmitter } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import {
  FormBuilder,
  Validators,
  ControlContainer,
  FormControl,
  FormGroup,
  NgForm
} from "@angular/forms";

@Component({
  selector: "search",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  alpha: any[];
  m1: any;
  hour1: any;
  //.............................Level 2 custom time input............................//
  getTime(time: any) {
    this.hour1 = +time.substr(0, 2);
    this.m1 = +time.substr(3, 4);
    console.log(this.hour1 + " and " + this.m1);
    this.setgrid(this.hour1, this.m1);
  }
  //...................................Level 2.....................................//
  //.................................level 3 validation part.........................................//
  getTime1(time1: any) {
    this.hour1 = +time1.substr(0, 2);
    this.m1 = +time1.substr(3, 4);
    console.log(this.hour1 + " and " + this.m1);
    let regexpNumber = new RegExp("^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$");
    if (regexpNumber.test(time1)) {
      this.setgrid(this.hour1, this.m1);
    } else {
      alert("invalid format");
      this.defaultgrid();
    }
  }
  //.................................level 3...........................................................//

  //..................................Level 1 Grid Display.........................................//
  setgrid(hour: number, m: number) {
    this.alpha = [
      [
        { letter: "I", display: true },
        { letter: "T", display: true },
        { letter: "L", display: false },
        { letter: "I", display: true },
        { letter: "S", display: true },
        { letter: "B", display: false },
        { letter: "F", display: false },
        { letter: "A", display: false },
        { letter: "M", display: false },
        { letter: "P", display: false },
        { letter: "M", display: false }
      ],

      [
        { letter: "A", display: false },
        { letter: "C", display: false },
        { letter: "Q", display: false },
        { letter: "U", display: false },
        { letter: "A", display: false },
        { letter: "R", display: false },
        { letter: "T", display: false },
        { letter: "E", display: false },
        { letter: "R", display: false },
        { letter: "D", display: false },
        { letter: "C", display: false }
      ],

      [
        { letter: "T", display: false },
        { letter: "W", display: false },
        { letter: "E", display: false },
        { letter: "N", display: false },
        { letter: "T", display: false },
        { letter: "Y", display: false },
        { letter: "F", display: false },
        { letter: "I", display: false },
        { letter: "V", display: false },
        { letter: "E", display: false },
        { letter: "X", display: false }
      ],

      [
        { letter: "H", display: false },
        { letter: "A", display: false },
        { letter: "L", display: false },
        { letter: "F", display: false },
        { letter: "B", display: false },
        { letter: "T", display: false },
        { letter: "E", display: false },
        { letter: "N", display: false },
        { letter: "F", display: false },
        { letter: "T", display: false },
        { letter: "O", display: false }
      ],

      [
        { letter: "P", display: false },
        { letter: "A", display: false },
        { letter: "S", display: false },
        { letter: "T", display: false },
        { letter: "E", display: false },
        { letter: "R", display: false },
        { letter: "U", display: false },
        { letter: "N", display: false },
        { letter: "I", display: false },
        { letter: "N", display: false },
        { letter: "E", display: false }
      ],

      [
        { letter: "O", display: false },
        { letter: "N", display: false },
        { letter: "E", display: false },
        { letter: "S", display: false },
        { letter: "I", display: false },
        { letter: "X", display: false },
        { letter: "T", display: false },
        { letter: "H", display: false },
        { letter: "R", display: false },
        { letter: "E", display: false },
        { letter: "E", display: false }
      ],

      [
        { letter: "F", display: false },
        { letter: "O", display: false },
        { letter: "U", display: false },
        { letter: "R", display: false },
        { letter: "F", display: false },
        { letter: "I", display: false },
        { letter: "V", display: false },
        { letter: "E", display: false },
        { letter: "T", display: false },
        { letter: "W", display: false },
        { letter: "O", display: false }
      ],

      [
        { letter: "E", display: false },
        { letter: "I", display: false },
        { letter: "G", display: false },
        { letter: "H", display: false },
        { letter: "T", display: false },
        { letter: "E", display: false },
        { letter: "L", display: false },
        { letter: "E", display: false },
        { letter: "V", display: false },
        { letter: "E", display: false },
        { letter: "N", display: false }
      ],

      [
        { letter: "S", display: false },
        { letter: "E", display: false },
        { letter: "V", display: false },
        { letter: "E", display: false },
        { letter: "N", display: false },
        { letter: "T", display: false },
        { letter: "W", display: false },
        { letter: "E", display: false },
        { letter: "L", display: false },
        { letter: "V", display: false },
        { letter: "E", display: false }
      ],

      [
        { letter: "T", display: false },
        { letter: "E", display: false },
        { letter: "N", display: false },
        { letter: "S", display: false },
        { letter: "E", display: false },
        { letter: "O'", display: false },
        { letter: "C", display: false },
        { letter: "L", display: false },
        { letter: "O", display: false },
        { letter: "C", display: false },
        { letter: "K", display: false }
      ]
    ];

    //......................................level 1.........................................//

    let min = Math.floor((m / 60) * 12) * 5;

    switch (min) {
      case 0:
        var arr: any[] = [[9, 5, 10]];
        break;
      case 5:
        var arr: any[] = [[2, 6, 9], [4, 0, 3]];
        break;
      case 10:
        var arr: any[] = [[3, 5, 7], [4, 0, 3]];
        break;
      case 15:
        var arr: any[] = [[1, 2, 8], [4, 0, 3]];
        break;
      case 20:
        var arr: any[] = [[2, 0, 5], [4, 0, 3]];
        break;
      case 25:
        var arr: any[] = [[2, 0, 9], [4, 0, 3]];
        break;
      case 30:
        var arr: any[] = [[3, 0, 3], [4, 0, 3]];
        break;
      case 35:
        var arr: any[] = [[2, 0, 9], [3, 9, 10]];
        break;
      case 40:
        var arr: any[] = [[2, 0, 5], [3, 9, 10]];
        break;
      case 45:
        var arr: any[] = [[1, 2, 8], [3, 9, 10]];
        break;
      case 50:
        var arr: any[] = [[3, 5, 7], [3, 9, 10]];
        break;
      case 55:
        var arr: any[] = [[2, 6, 9], [3, 9, 10]];
    }

    for (var x = 0; x < arr.length; x++) {
      for (var y = 0; y < arr[x].length; y++) {
        for (var i = arr[x][0]; i <= arr[x][0]; i++) {
          for (var j = arr[x][1]; j <= arr[x][2]; j++) {
            this.alpha[i][j].display = true;
          }
        }
      }
    }
    if (min > 30) {
      hour = hour + 1;
    }
    switch (hour) {
      case 0:
        var arr: any[] = [[8, 5, 10]];
        break;
      case 1:
        var arr: any[] = [[5, 0, 2]];
        break;
      case 2:
        var arr: any[] = [[6, 8, 10]];
        break;
      case 3:
        var arr: any[] = [[5, 6, 10]];
        break;
      case 4:
        var arr: any[] = [[6, 0, 3]];
        break;
      case 5:
        var arr: any[] = [[6, 4, 7]];
        break;
      case 6:
        var arr: any[] = [[5, 3, 5]];
        break;
      case 7:
        var arr: any[] = [[8, 0, 4]];
        break;
      case 8:
        var arr: any[] = [[7, 0, 4]];
        break;
      case 9:
        var arr: any[] = [[4, 7, 10]];
        break;
      case 10:
        var arr: any[] = [[9, 0, 2]];
        break;
      case 11:
        var arr: any[] = [[7, 5, 10]];
        break;
      case 12:
        var arr: any[] = [[8, 5, 10]];
        break;
    }

    for (var x = 0; x < arr.length; x++) {
      for (var y = 0; y < arr[x].length; y++) {
        for (var i = arr[x][0]; i <= arr[x][0]; i++) {
          for (var j = arr[x][1]; j <= arr[x][2]; j++) {
            console.log(this.alpha[i][j]);
            this.alpha[i][j].display = true;
          }
        }
      }
    }
  }
  defaultgrid() {
    //..................................bonus ..........................................//
    let d = new Date();
    let hour = d.getHours();
    if (hour > 12) {
      hour = hour - 12;
    }
    let m = d.getMinutes();

    //.........................................bonus.............................................//

    this.setgrid(hour, m);
  }

  constructor() {
    this.defaultgrid();
  }
}
