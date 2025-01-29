import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  form!: FormGroup<any>;
  constructor(
    
  ){}

  ngOnInit(){
    this.form = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      comment: new FormControl()
    })
  }

  onSubmit(){
    console.log(this.form);
    setTimeout(()=>{this.reset()}, 4000);
  }

  reset(){
    this.form.reset();
  }
}
