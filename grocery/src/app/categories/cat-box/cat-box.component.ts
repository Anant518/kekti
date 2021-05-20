import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/Category';

@Component({
  selector: 'app-cat-box',
  templateUrl: './cat-box.component.html',
  styleUrls: ['./cat-box.component.css']
})
export class CatBoxComponent implements OnInit {

  category: Category;

  constructor() { }

  ngOnInit(): void {
  }

}



// id: number
// employee: Employee
// constructor(private route: ActivatedRoute, private employeService: EmployeeService) { }

// ngOnInit(): void {
//   this.id = this.route.snapshot.params['id'];

//   this.employee = new Employee();
//   this.employeService.getEmployeeById(this.id).subscribe( data => {
//     this.employee = data;
//   });
// }
