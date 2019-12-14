import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-bad-mood',
  templateUrl: './bad-mood.component.html',
  // templateUrl: '../main.html',
  styleUrls: ['./bad-mood.component.css']
})
export class BadMoodComponent implements OnInit {

  public faces: Array<string> = [
    '（￣s￣；',
    '（￣ε￣）',
    '( ￣＾￣)',
    '(´ﾟзﾟ)',
    '(;´д｀)',
    '（＞μ＜＃）',
    '(´･з･)',
    '(\'ε\'*)',
    '(ｰ ｰ;)',
    '(´･･`)',
    '(ó﹏ò｡)',
    '(・ε・｀*)',
    '(´･д･｀)',
    '…φ(。。*)',
    '(。・ε・。)',
    '(´･_･｀)',
    '( *｀з´)',
    '(*･ε･*)',
    '( *ﾟзﾟ)',
    '(´-ε-｀)',
    '(´･ε･｀)',
    '(-公- ;)',
    '(・´з`・)',
    '(・ε・`*)',
    '(*・ε・*)',
    '(･ε･｀ )',
    '(=｀.´=)',
    '(￣ε(#￣)',
    '(´･ｪ･｀)',
    '(●´^｀●)',
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
    const al = document.getElementById('alert-bad-mood');
    al.style.opacity = '1';
    al.style.display = 'block';
    setTimeout(() => {
      this.close();
    }, 600);
  }

  close() {
    const div = document.getElementById('alert-bad-mood');
    div.style.opacity = '0';
    setTimeout(() => {
      div.style.display = 'none';
    }, 600);
  }

}
