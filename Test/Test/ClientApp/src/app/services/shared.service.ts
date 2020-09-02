import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private snackBar:MatSnackBar) { }

  showSucessMessage(message: string){
    this.snackBar.open(message, "Close", {
      duration: 5000,
      panelClass: ['green-snackbar']
    });
  }

  showErrorMessage(message: string){
    this.snackBar.open(message, "Close", {
      duration: 5000,
      panelClass: ['red-snackbar']
    });
  }
}
