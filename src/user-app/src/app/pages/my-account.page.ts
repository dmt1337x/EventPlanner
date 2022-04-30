import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
@Component({
  selector: 'app-my-account-page',
  templateUrl: './my-account.page.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyAccountPage {
  constructor() {}
}
