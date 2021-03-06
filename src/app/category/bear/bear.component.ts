import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bear',
  templateUrl: './bear.component.html',
  // templateUrl: '../main.html',
  styleUrls: ['./bear.component.css']
})
export class BearComponent implements OnInit {

  public faces: Array<string> = [
    '・㉨・',
    'తꀧత',
    'ᵔᴥᵔ',
    'ʕ•ᴥ•ʔ',
    'ʕ·ᴥ·ʔ',
    'ˁ˙˟˙ˀ',
    '❃ႣᄎႣ❃',
    'ʕ　·ᴥʔ',
    'ʕᴥ·　ʔ',
    'ʕథ౪థʔ',
    'ʕ￫ᴥ￩ʔ',
    '(๏㉨๏)',
    '(ó㉨ò)',
    'ʢᵕᴗᵕʡ',
    'ʕ◉ᴥ◉ʔ',
    'ʕᴥ• ʔ',
    'ʕ≧ᴥ≦ʔ',
    'ʕ•㉨•ʔ',
    'ʕ≧㉨≦ʔ',
    '(✪㉨✪)',
    'ʕ∙ჲ∙ʔ',
    'ʕʽɞʼʔ',
    '[｡◉㉨◉]',
    'ʕº̫͡ºʔ',
    'ʕ·ᴥ·　ʔ',
    'ʕ*̫͡*ʔ',
    'ʕ•̮͡•ʔ',
    'ᶘ ᵒᴥᵒᶅ',
    'ʕ•̠͡•ʔ',
    '|ｴ)･)⊃',
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
    const al = document.getElementById('alert-bear');
    al.style.opacity = '1';
    al.style.display = 'block';
    setTimeout(() => {
      this.close();
    }, 600);
  }

  close() {
    const div = document.getElementById('alert-bear');
    div.style.opacity = '0';
    setTimeout(() => {
      div.style.display = 'none';
    }, 600);
  }

}
