import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feminine',
  templateUrl: './feminine.component.html',
  styleUrls: ['./feminine.component.css']
})
export class FeminineComponent implements OnInit {

  public faces: Array<string> = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ];

  constructor() { }

  ngOnInit() {
  }

  click(idx) {
    const $temp = $('<input>');
    const toCopy = this.faces[idx];
    // console.log(idx, toCopy);
    $('body').append($temp);
    $temp.val(toCopy).select();
    document.execCommand('copy');
    $temp.remove();
    this.open();
  }

  open() {
    const al = document.getElementById('alert');
    al.style.opacity = '1';
    al.style.display = 'block';
    setTimeout(() => {
      this.close();
    }, 600);
  }

  close() {
    const div = document.getElementById('alert');
    div.style.opacity = '0';
    setTimeout(() => {
      div.style.display = 'none';
    }, 600);
  }

}
