import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


import {
  selectorSettings,
  ActionSettingsChangeTheme,
  ActionSettingsChangeAutoNightMode,
  ActionSettingsChangeAnimationsPage,
  ActionSettingsChangeAnimationsElements,
  SettingsState,
  ActionSettingsPersist
} from '../settings.reducer';
import { Router } from '@angular/router';
import { routeAnimations } from '../../core';
import { AuthService } from '../../core/auth/auth.service';


@Component({
  selector: 'gp-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  animations: [routeAnimations]
})
export class SettingsComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();
  settings: SettingsState;

  themes = [
    { value: 'DEFAULT-THEME', label: 'Blue' },
    { value: 'LIGHT-THEME', label: 'Light' },
    { value: 'NATURE-THEME', label: 'Nature' },
    { value: 'BLACK-THEME', label: 'Dark' }
  ];

  constructor(private store: Store<any>,
    public router: Router,
    public auth: AuthService
    ) {
    store
      .select(selectorSettings)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(settings => (this.settings = settings));
  }

  ngOnInit() { }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onThemeSelect({ value: theme }) {
    this.store.dispatch(new ActionSettingsChangeTheme({ theme }));
    this.store.dispatch(new ActionSettingsPersist({ settings: this.settings }));
  }

  onAutoNightModeToggle({ checked: autoNightMode }) {
    this.store.dispatch(
      new ActionSettingsChangeAutoNightMode({ autoNightMode })
    );
    this.store.dispatch(new ActionSettingsPersist({ settings: this.settings }));
  }

  onPageAnimationsToggle({ checked: pageAnimations }) {
    this.store.dispatch(
      new ActionSettingsChangeAnimationsPage({ pageAnimations })
    );
    this.store.dispatch(new ActionSettingsPersist({ settings: this.settings }));
  }

  onElementsAnimationsToggle({ checked: elementsAnimations }) {
    this.store.dispatch(
      new ActionSettingsChangeAnimationsElements({ elementsAnimations })
    );
    this.store.dispatch(new ActionSettingsPersist({ settings: this.settings }));
  }
}
