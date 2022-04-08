import {
  FormGroup,
  AbstractControl,
  ValidatorFn,
  ValidationErrors,
} from "@angular/forms";

export function atLeastOneCheckboxCheckedValidator(
  minRequired = 3
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return function validate(formGroup: FormGroup) {
      let checked = 0;

      Object.keys(formGroup.controls).forEach((key) => {
        const control = formGroup.controls[key];

        if (control.value === true) {
          checked++;
        }
      });

      if (checked < minRequired) {
        return {
          requireCheckboxToBeChecked: true,
        };
      }

      return null;
    };
  };
}
