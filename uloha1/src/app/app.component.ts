import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cislo = "0";
  changeChecks(cislo: String): void {
    let num = Number(cislo);
    let bin = "";

    while (num != 0) {
      if (num % 2 == 1) {
        bin = "1" + bin;
      } else {
        bin = "0" + bin;
      }
      num = Math.floor(num / 2);
    }
    for (let a = 0 + bin.length; a < 8; a++) {
      bin = "0" + bin;
    }
    let b = [];
    for (let a = 0; a < bin.length; a++) {
      b[a] = bin[a];
    }
    for (let i = 0; i <= 7; i++) {
      let checkbox = document.getElementById(
        i.toString()
      ) as HTMLInputElement | null;

      if (checkbox != null) {
        if (b[i] == '1') {
          checkbox.checked = true;
        } else {
          checkbox.checked = false;
        }
      }
    }
  }

  changeInputNumber(): void {
    let dec = "";
    for (let i = 0; i <= 7; i++) {
      let checkbox = document.getElementById(
        i.toString()
      ) as HTMLInputElement | null;

      if (checkbox != null) {
        if (checkbox.checked == true) {
          dec = dec.concat("1")
        } else {
          dec = dec.concat("0")
        }
      }
    }
    let x = parseInt(dec, 2);
    this.cislo = x.toString();
  }
}


