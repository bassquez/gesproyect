import { Component, OnInit } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'gp-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  releaseButler = require('../../../assets/release-butler.png');

  constructor(
    public auth: AuthService
  ) {}

  ngOnInit() {}

  onLogoutClick() {
    this.auth.logout();
  }
}
