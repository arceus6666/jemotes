import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-make-up-my-mind',
  templateUrl: './make-up-my-mind.component.html',
  styleUrls: ['./make-up-my-mind.component.css']
})
export class MakeUpMyMindComponent implements OnInit {

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

  public name = '';

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
    const al = document.getElementById(`alert-${this.name}`);
    al.style.opacity = '1';
    al.style.display = 'block';
    setTimeout(() => {
      this.close();
    }, 600);
  }

  close() {
    const div = document.getElementById(`alert-${this.name}`);
    div.style.opacity = '0';
    setTimeout(() => {
      div.style.display = 'none';
    }, 600);
  }

}
