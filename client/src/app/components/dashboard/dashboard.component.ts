import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

  @Component({
    moduleId: module.id,
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
  })

  export class DashboardComponent implements OnInit {

    constructor(private router: Router){}

    ngOnInit(){}

    // Close  AsideBar
    closeAside(){
    document.getElementById("myAside").style.width = "0";
    document.getElementById("main").style.marginRight= "0";
    }
    // Open AsideBar
    openNav() {
    document.getElementById("myAside").style.width = "300px";
    document.getElementById("main").style.marginRight = "300px";
    }

}
