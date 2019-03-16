import { Component } from '@angular/core';
import { Themer } from '@shared/services/themer.service';
import { themes } from '../../constants/themes';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.scss'],
})
export class CustomizeComponent {

  themes = themes;

  constructor(
    private themer: Themer,
  ) { }

  changeTheme(url) {
    this.themer.setTheme(url);
  }

}
