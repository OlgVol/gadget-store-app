import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-successful-submission',
  templateUrl: './successful-submission.component.html',
  styleUrls: ['./successful-submission.component.scss']
})
export class SuccessfulSubmissionComponent {

constructor( public router: Router,
  ) {}

  exit() {
    location.reload();
  }
}
