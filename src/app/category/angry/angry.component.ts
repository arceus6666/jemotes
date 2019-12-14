import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';

@Component({
  selector: 'app-angry',
  templateUrl: './angry.component.html',
  // templateUrl: '../main.html',
  styleUrls: ['./angry.component.css']
})
export class AngryComponent implements OnInit {

  public faces: Array<string> = [
    'ಠ_ಠ',
    '⋋_⋌',
    '눈_눈',
    'ಠ⌣ಠ',
    'ಠ▃ಠ',
    'ఠ ͟ಠ',
    'ノಠ_ಠノ',
    '(¬_¬)',
    '(｀ε´)',
    '(｀Д´)',
    '(ಠ⌣ಠ)',
    '(◣_◢)',
    '(¬▂¬)',
    '(┳◇┳)',
    '(눈_눈)',
    '(¬､¬)',
    '(`A´)',
    '（▽д▽）',
    '-`д´-',
    '(’益’)',
    '(⋋▂⋌)',
    '〴⋋_⋌〵',
    '(◔ д◔)',
    '☜(`o´)',
    '(ʘдʘ╬)',
    '（♯▼皿▼）',
    '(#｀皿´)',
    '(╬ಠ益ಠ)',
    '(ಠ ∩ಠ)',
    'ლಠ益ಠ)ლ',
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
    const al = document.getElementById('alert-angry');
    al.style.opacity = '1';
    al.style.display = 'block';
    setTimeout(() => {
      this.close();
    }, 600);
  }

  close() {
    const div = document.getElementById('alert-angry');
    div.style.opacity = '0';
    setTimeout(() => {
      div.style.display = 'none';
    }, 600);
  }
}
