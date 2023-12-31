import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularrouting';

  constructor(private activatedRoute: ActivatedRoute, private authService: AuthService) { }

  ngOnInit() {
    this.activatedRoute.fragment.subscribe((value) => {
      this.jumpTo(value);
    })
  }

  jumpTo(section: any) {
    document.getElementById(section)?.scrollIntoView({behavior: 'smooth'});
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
