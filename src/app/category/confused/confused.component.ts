import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confused',
  // templateUrl: './confused.component.html',
  templateUrl: '../main.html',
  styleUrls: ['./confused.component.css']
})
export class ConfusedComponent implements OnInit {

  public faces: Array<string> = [
    'ఠ_ఠ',
    '◔_◔',
    '●.◉',
    '(^^ゞ',
    'ಠ_ರೃ',
    '℃ↂ_ↂ',
    'عربى',
    'ɾ◉⊆◉ɹ',
    '(。ヘ°)',
    '(⊙_☉)',
    '(＾＾；)',
    '(☉_☉)',
    '(♠_♦)',
    '(ﾟｰﾟ;',
    '(C_C)',
    '(⊙_◎)',
    '(゜-゜)',
    '(◑○◑)',
    '(・・；)',
    '⁀⊙﹏☉⁀',
    '(゜。゜)',
    '(・・)',
    '(´エ｀；)',
    '(‘◇’)',
    '（・∩・）',
    '(・∧‐)ゞ',
    '(⊙＿⊙)',
    '(◎_◎;)',
    '(●__●)',
    '(ﾟヘﾟ)',
  ];

  public name = 'confused';
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
    const al = document.getElementById('alert-confused');
    al.style.opacity = '1';
    al.style.display = 'block';
    setTimeout(() => {
      this.close();
    }, 600);
  }

  close() {
    const div = document.getElementById('alert-confused');
    div.style.opacity = '0';
    setTimeout(() => {
      div.style.display = 'none';
    }, 600);
  }

}
