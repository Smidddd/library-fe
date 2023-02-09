import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  cislo = "0"
  changeCheckbox(cislo: String): void{
    var num = new Number(cislo);

    var bin = num.toString(2);

    let reversepola: string = "";

    for (let char of bin){
      reversepola = char + reversepola
    }

    for(let i=0;i<=7;i++){
        let checkbox = document.getElementById(
          i.toString()
        ) as HTMLInputElement | null;

            if (checkbox != null) {
              if (reversepola[i] == '1'){
                  checkbox.checked = true;
                }else {
                  checkbox.checked = false;
                }
              }
        }
  }

  changeInputNumber(): void {
    let polecisla = "";
    for (let i = 7; i >= 0; i--) {
      let checkbox = document.getElementById(
        i.toString()
      ) as HTMLInputElement | null;

      if (checkbox != null) {
        if (checkbox.checked == true) {
          polecisla = polecisla.concat("1")
        } else {
          polecisla = polecisla.concat("0")
        }
      }
    }
    let x = parseInt(polecisla, 2);
    this.cislo = x.toString();
  }
}

