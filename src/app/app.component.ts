import {Component, VERSION} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = `Angular! v${VERSION.full}`;

  searchTextInput: string; // поиск через фильтер
  selectedGames: { name: string; id: number; selected: boolean; }[]; // выбранные чекбоксы

  // все доступные чекбоксы
  games = [
    {
      name: 'Chess',
      id: 1,
      selected: true
    },
    {
      name: 'Ludo',
      id: 2,
      selected: false
    },
    {
      name: 'Snakes & Ladders',
      id: 3,
      selected: false
    },
    {
      name: 'Carrom',
      id: 4,
      selected: false
    },
    {
      name: 'Scrabble',
      id: 5,
      selected: false
    },
    {
      name: 'Monopoly',
      id: 6,
      selected: true
    },
    {
      name: 'Uno',
      id: 7,
      selected: false
    }
  ];

  constructor() {
    this.getSelected(); // дефолтные чекбоксы
  }

  // получим активные чекбоксы
  private getSelected() {
    this.selectedGames = this.games.filter(s => s.selected);
  }

  // отключим
  private deleteGame(id: number) {
    this.games = this.games.filter(g => {
      if (g.id === id) {
        g.selected = false;
      }

      return true;
    });

    this.getSelected();
  }
}
