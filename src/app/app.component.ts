import { Component, TemplateRef, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { FormControl, FormGroup, FormArray, Validators } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'customerqueries';
  userForm: FormGroup;
  constructor(private dialog: MatDialog) {
    this.userForm = new FormGroup({
      'title': new FormControl("", Validators.required),
      'description': new FormControl("", Validators.required),
      'status': new FormControl("", Validators.required),
      'asignee': new FormControl("", Validators.required),
      'priority': new FormControl("", Validators.required)
    });
  }

  openDialogWithTemplateRef(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef);
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log("Form Submitted!");
      console.log(this.userForm.value);
      this.userForm.reset();
    }
  }

}
