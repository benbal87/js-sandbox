import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component(
  {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })

export class AppComponent {
  wolves = 0;
  wolvesArray: number[] = [0, 1, 2, 3, 4];
  title = 'note organizer';

  constructor(private router: Router) {
  }

  getRouterState() {
    return this.router.url;
  }

  manageWolves(input: string) {
    if (input === '-') {
      this.wolves--;
    } else if (input === '+') {
      this.wolves++;
    }
  }

  setLanguage(language: string) {
    if (language === 'en') {
      localStorage.setItem('localeId', null);
      location.reload(true);
    } else {
      localStorage.setItem('localeId', language);
      location.reload(true);
    }
  }
}
