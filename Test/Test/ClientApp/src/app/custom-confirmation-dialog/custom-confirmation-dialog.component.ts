import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-custom-confirmation-dialog',
  templateUrl: './custom-confirmation-dialog.component.html',
  styleUrls: ['./custom-confirmation-dialog.component.css']
})
export class CustomConfirmationDialogComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<CustomConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {message : string}) { }
  
    ngOnInit() {
    }
    close(){
      this.dialogRef.close();
    }
}

