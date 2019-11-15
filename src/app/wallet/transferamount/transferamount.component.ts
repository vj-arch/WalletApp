import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-transferamount",
  templateUrl: "./transferamount.component.html",
  styleUrls: ["./transferamount.component.css"]
})
export class TransferamountComponent implements OnInit {
  constructor() {}

  username: string = "";
  touser: string = "";
  amount: number = 0;
  ngOnInit() {}
}
