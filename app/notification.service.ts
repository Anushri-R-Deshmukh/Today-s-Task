import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastrService: ToastrService) {
  }

  public showSuccess(): void {
    this.toastrService.success('Message Success!', 'Title Success!');
  }

  public showInfo(): void {
    this.toastrService.info('Message Info!', 'Title Info!');
  }

  public showWarning(): void {
    this.toastrService.warning('Message Warning!', 'Title Warning!');
  }

  public showError(): void {
    this.toastrService.error('Message Error!', 'Title Error!');
  }

}
