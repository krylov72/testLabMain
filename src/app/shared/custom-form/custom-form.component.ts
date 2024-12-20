import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CustomButtonComponent } from '../custom-button/custom-button.component';
import { CustomCheckboxComponent } from '../custom-checkbox/custom-checkbox.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-custom-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomButtonComponent,
    CustomCheckboxComponent,
    MatIconModule,
  ],
  templateUrl: './custom-form.component.html',
  styleUrl: './custom-form.component.scss',
})
export class CustomFormComponent {
  form: FormGroup;

  formIsValid = false;

  showPlaceholder = {
    name: { isShow: false },
    phone: { isShow: false },
  };

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      phone: ['', [Validators.required, Validators.pattern(/^\+?\d{10,15}$/)]],
      agree: [false, [Validators.requiredTrue]],
    });
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(() => {
      this.formIsValid = this.form.valid;
    });
  }

  onFocus(field: string) {
    if (field === 'name') {
      this.showPlaceholder['name'].isShow = true;
    } else if (field === 'phone') {
      this.showPlaceholder['phone'].isShow = true;
    }
  }

  onBlur(field: string) {
    if (field === 'name') {
      this.showPlaceholder['name'].isShow = false;
    } else if (field === 'phone') {
      this.showPlaceholder['phone'].isShow = false;
    }
  }

  onSubmit() {
    this.formIsValid = false;
    if (this.form.valid) {
      console.log(this.form.value);
      setTimeout(() => {
        alert('Данные успешно отправлены');
        this.form.reset();
      }, 1000);
    }
  }
}
