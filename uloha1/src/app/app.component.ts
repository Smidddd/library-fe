import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cislo = "0";

  changecheckbox(cislo: String): void {
    let input = Number(cislo);
    let polecisel = [];
    let poleciselreverse = "";

    let bincislo = input.toString(2)

    for (let i = bincislo.length - 1; i >= 0; i--) {
      polecisel[i] = bincislo[i];
    }

    for (let char of polecisel) {
      poleciselreverse = char + poleciselreverse;
    }

    for (let i = 0; i <= 7; i++) {
      let checkbox = document.getElementById(
        i.toString()
      ) as HTMLInputElement | null;

      if (checkbox != null) {
        if (poleciselreverse.charAt(i) == '1') {
          checkbox.checked = true;
        } else {
          checkbox.checked = false;
        }
      }
    }
  }

  changeInputNumber(): void {
    let dec = "";
    for (let i = 7; i >= 0; i--) {
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
