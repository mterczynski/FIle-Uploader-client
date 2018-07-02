import { Component } from '@angular/core';
import { Themer } from '@shared/services/themer.service';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.scss'],
})
export class CustomizeComponent {

  themes = [{
      name: 'Material Design',
      imgUrl: './assets/bootstrap-preview/mdb.jpg',
      themeUrl: './assets/bootstrap/mdb.min.css',
    }, {
      name: 'Cerulean',
      imgUrl: './assets/bootstrap-preview/cerulean.png',
      themeUrl: './assets/bootstrap/cerulean.min.css',
    }, {
      name: 'Cosmo',
      imgUrl: './assets/bootstrap-preview/cosmo.png',
      themeUrl: './assets/bootstrap/cosmo.min.css',
    }, {
      name: 'Cyborg',
      imgUrl: './assets/bootstrap-preview/cyborg.png',
      themeUrl: './assets/bootstrap/cyborg.min.css',
    }, {
      name: 'Darkly',
      imgUrl: './assets/bootstrap-preview/darkly.png',
      themeUrl: './assets/bootstrap/darkly.min.css',
    }, {
      name: 'Flatly',
      imgUrl: './assets/bootstrap-preview/flatly.png',
      themeUrl: './assets/bootstrap/flatly.min.css',
    }, {
      name: 'Journal',
      imgUrl: './assets/bootstrap-preview/journal.png',
      themeUrl: './assets/bootstrap/journal.min.css',
    }, {
      name: 'Litera',
      imgUrl: './assets/bootstrap-preview/litera.png',
      themeUrl: './assets/bootstrap/litera.min.css',
    }, {
      name: 'Lumen',
      imgUrl: './assets/bootstrap-preview/lumen.png',
      themeUrl: './assets/bootstrap/lumen.min.css',
    }, {
      name: 'Lux',
      imgUrl: './assets/bootstrap-preview/lux.png',
      themeUrl: './assets/bootstrap/lux.min.css',
    }, {
      name: 'Materia',
      imgUrl: './assets/bootstrap-preview/materia.png',
      themeUrl: './assets/bootstrap/materia.min.css',
    }, {
      name: 'Minty',
      imgUrl: './assets/bootstrap-preview/minty.png',
      themeUrl: './assets/bootstrap/minty.min.css',
    }, {
      name: 'Pulse',
      imgUrl: './assets/bootstrap-preview/pulse.png',
      themeUrl: './assets/bootstrap/pulse.min.css',
    }, {
      name: 'Sandstone',
      imgUrl: './assets/bootstrap-preview/sandstone.png',
      themeUrl: './assets/bootstrap/sandstone.min.css',
    }, {
      name: 'Simplex',
      imgUrl: './assets/bootstrap-preview/simplex.png',
      themeUrl: './assets/bootstrap/simplex.min.css',
    }, {
      name: 'Sketchy',
      imgUrl: './assets/bootstrap-preview/sketchy.png',
      themeUrl: './assets/bootstrap/sketchy.min.css',
    }, {
      name: 'Slate',
      imgUrl: './assets/bootstrap-preview/slate.png',
      themeUrl: './assets/bootstrap/slate.min.css',
    }, {
      name: 'Solar',
      imgUrl: './assets/bootstrap-preview/solar.png',
      themeUrl: './assets/bootstrap/solar.min.css',
    }, {
      name: 'Spacelab',
      imgUrl: './assets/bootstrap-preview/spacelab.png',
      themeUrl: './assets/bootstrap/spacelab.min.css',
    }, {
      name: 'Superhero',
      imgUrl: './assets/bootstrap-preview/superhero.png',
      themeUrl: './assets/bootstrap/superhero.min.css',
    }, {
      name: 'United',
      imgUrl: './assets/bootstrap-preview/united.png',
      themeUrl: './assets/bootstrap/united.min.css',
    }, {
      name: 'Yeti',
      imgUrl: './assets/bootstrap-preview/yeti.png',
      themeUrl: './assets/bootstrap/yeti.min.css',
    },
  ];

  constructor(
    private themer: Themer,
  ) { }

  changeTheme(url) {
    this.themer.setTheme(url);
  }

}
