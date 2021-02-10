import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { FormControl, FormGroup, FormArray, Validators } from "@angular/forms";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  title = 'customerqueries';
  userForm: FormGroup;
  userList = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  ];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];


  constructor(
    private dialog: MatDialog
  ) {

    this.userForm = new FormGroup({
      'title': new FormControl("", Validators.required),
      'description': new FormControl("", Validators.required),
      'status': new FormControl("", Validators.required),
      'asignee': new FormControl("", Validators.required),
      'priority': new FormControl("", Validators.required)
    });

  }

  ngOnInit(): void {
  }

  openDialogWithTemplateRef(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef, {
      width: '400px',
      height: '600px'
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log("Form Submitted!");
      console.log(this.userForm.value);
      this.userForm.reset();
    }
  }

}
