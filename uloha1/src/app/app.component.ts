import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'uloha1';
  cislo = "0";

  convertCislo(cislo: string): void{
    var num = new Number(cislo);
    let bin = num.toString(2);
    console.log(bin);

    console.log(bin.length)
    //let checkboxes = document.getElementById(i.toString()) as HTMLInputElement | null;
    let checkboxes = document.querySelectorAll<HTMLInputElement>('input[type="checkbox"]');
    let i = bin.length

    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });

    while (i>0){

      if (checkboxes != null){
        if (bin[bin.length - i] == "1"){
          checkboxes[8-i].checked = true;
        } else {
          checkboxes[8-i].checked = false;
        }
      }
      i--;
    }
  }
  setCisloByCheckboxes(): void{
    let checkboxes = document.querySelectorAll<HTMLInputElement>('input[type="checkbox"]');
    let number = new String();
    for (let i=0; i<8; i++){
      if (checkboxes[i].checked == true){
        number = number.concat("1");
      } else {
        number = number.concat("0");
      }
    }
    let x = number.toString();
    let xDec = parseInt(x, 2).toString();
    this.cislo = xDec;
  }
}
