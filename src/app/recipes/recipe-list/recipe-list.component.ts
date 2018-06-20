import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe('Test Recipe', 'Testing description', 'https://media1.popsugar-assets.com/files/thumbor/ePh5LxLfZyIARCmVfF1YbPHJXyk/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2016/08/01/999/n/24155406/a204eaeb_edit_img_front_page_image_file_30950092_1453493460/i/Kid-Food-Art-Pictures.png')
  ];
  constructor() { }

  ngOnInit() {
  }

}
