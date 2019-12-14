import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cry',
  templateUrl: './cry.component.html',
  styleUrls: ['./cry.component.css']
})
export class CryComponent implements OnInit {

  public faces: Array<string> = [
    'أ‿أ',
    '╥﹏╥',
    '(;﹏;)',
    '(ToT)',
    '(┳Д┳)',
    '(ಥ﹏ಥ)',
    '（；へ：）',
    '(T＿T)',
    '（πーπ）',
    '(Ｔ▽Ｔ)',
    '(⋟﹏⋞)',
    '（ｉДｉ）',
    '(´Д⊂ヽ',
    '(;Д;)',
    '（>﹏<）',
    '(TдT)',
    '(つ﹏⊂)',
    '༼☯﹏☯༽',
    '(ノ﹏ヽ)',
    '(ノAヽ)',
    '(╥_╥)',
    '(T⌓T)',
    '(༎ຶ⌑༎ຶ)',
    '(☍﹏⁰)｡',
    '(ಥ_ʖಥ)',
    '(つд⊂)',
    '(≖͞_≖̥)',
    '(இ﹏இ`｡)',
    '༼ಢ_ಢ༽',
    '༼ ༎ຶ ෴ ༎ຶ༽',
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
    const al = document.getElementById('alert-cry');
    al.style.opacity = '1';
    al.style.display = 'block';
    setTimeout(() => {
      this.close();
    }, 600);
  }

  close() {
    const div = document.getElementById('alert-cry');
    div.style.opacity = '0';
    setTimeout(() => {
      div.style.display = 'none';
    }, 600);
  }

}
