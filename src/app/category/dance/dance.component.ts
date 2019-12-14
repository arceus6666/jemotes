import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dance',
  templateUrl: './dance.component.html',
  // templateUrl: '../main.html',
  styleUrls: ['./dance.component.css']
})
export class DanceComponent implements OnInit {

  public faces: Array<string> = [
    '└|∵┌|',
    '|┐∵|┘',
    '(ノ‥)ノ',
    '|o∵|o',
    'ح˚௰˚づ',
    'o|∵o|',
    '(/・・)ノ',
    'ヾ(^ ^ゞ',
    '(o^^)o',
    'o(^^o)',
    'ヾ(^^ゞ)',
    '(ノ・・)ノ',
    '(ノ^o^)ノ',
    '(ノ￣ー￣)ノ',
    '(ノ￣ω￣)ノ',
    '⌎⌈╹우╹⌉⌍',
    '(ﾉ･o･)ﾉ',
    '(ﾉ･ｪ･)ﾉ',
    '┌(☆o★)┘',
    '└|ﾟεﾟ|┐',
    '(ﾉ≧∀≦)ﾉ',
    '(ﾉﾟ▽ﾟ)ﾉ',
    '┌|ﾟзﾟ|┘',
    '┌(メ▼▼)┘',
    '(〜^∇^)〜',
    '〜(^∇^〜)',
    '〜(^∇^)〜',
    '⌌⌈╹므╹⌉⌏',
    '＼(^ω^＼)',
    '१|˚–˚|५',
    '(〜￣△￣)〜',
    '〜(￣△￣〜)',
    '〜(￣△￣)〜',
    '〜(꒪꒳꒪)〜',
  ];

  public name = 'dance';

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
