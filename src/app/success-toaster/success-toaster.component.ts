import { Component, inject } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-success-toaster',
  templateUrl: './success-toaster.component.html',
  styleUrls: ['./success-toaster.component.scss'],

})
export class SuccessToasterComponent {
snackBarRef = inject(MatSnackBarRef)
exit() {
location.reload()
}
}
