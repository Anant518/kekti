import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/Category'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  cat: Category;
  constructor() { }

  ngOnInit(): void {
  }

}
