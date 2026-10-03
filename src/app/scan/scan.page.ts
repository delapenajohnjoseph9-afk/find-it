import { Component } from '@angular/core';

import { IonContent } from '@ionic/angular';

import { Router } from '@angular/router';

import {
  CapacitorBarcodeScanner,
  CapacitorBarcodeScannerTypeHint
} from '@capacitor/barcode-scanner';


@Component({

  selector: 'app-scan',

  templateUrl: './scan.page.html',

  styleUrls: ['./scan.page.scss'],

  imports: [
    IonContent
  ]

})

export class ScanPage {

  constructor(
    private router: Router
  ) {}


  // ==============================
  // GO TO HOME
  // ==============================

  goToHome() {

    this.router.navigate(['/home']);

  }


  // ==============================
  // GO TO CATEGORIES
  // ==============================

  goToCategories() {

    this.router.navigate(['/categories']);

  }


  // ==============================
  // GO TO MESSAGE
  // ==============================

  goToMessage() {

    this.router.navigate(['/message']);

  }


  // ==============================
  // GO TO PROFILE
  // ==============================

  goToProfile() {

    console.log('Profile button clicked');

    this.router.navigate(['/profile']);

  }


  // ==============================
  // START BARCODE SCANNER
  // ==============================

  async startScan() {

    try {

      const result =
        await CapacitorBarcodeScanner.scanBarcode({

          hint: CapacitorBarcodeScannerTypeHint.ALL,

          scanInstructions:
            'Position the barcode inside the frame',

          scanButton: true,

          scanText: 'Scan',

          cameraDirection: 1

        });


      console.log('Scan result:', result);


      console.log(
        'Barcode:',
        result.ScanResult
      );


      if (result.ScanResult) {

        alert(
          'Barcode detected: ' +
          result.ScanResult
        );

      } else {

        console.log(
          'Scanner closed without scanning.'
        );

      }


    } catch (error) {

      console.log(
        'Scanner closed:',
        error
      );

    }

  }

}