import { Component, OnInit } from '@angular/core';

import { environment as env } from '@env/environment';
import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';

@Component({
  selector: 'gp-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  versions = env.versions;

  ngOnInit() {}

  openLink(link: string) {
    window.open(link, '_blank');
  }
}
