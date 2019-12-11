import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat',
  // templateUrl: './cat.component.html',
  templateUrl: '../main.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  public faces: Array<string> = [
    'ὃ⍜ὅ',
    'ㅇㅅㅇ',
    'චᆽච',
    'ऴिाी',
    '(ꀄꀾꀄ)',
    'ฅ•ω•ฅ',
    '(ꅈꇅꅈ)',
    '(ꀂǒꀂ)',
    '(ꃪꄳꃪ)',
    '=ටᆼට=',
    'ʘ̥ꀾʘ̥',
    '=ộ⍛ộ=',
    '^ↀᴥↀ^',
    'โ๏∀๏ใ',
    '(ΦωΦ)',
    'ミ๏ｖ๏彡',
    'ि०॰०ॢी',
    '(ฅ\'ω\'ฅ)',
    '(=ↀωↀ=)',
    '=^∇^*=',
    '(⁎˃ᆺ˂)',
    '(ㅇㅅㅇ❀)',
    'ฅ(≚ᄌ≚)',
    '(^･ｪ･^)',
    '§ꊘ⃑٥ꊘ⃐§',
    '(=‘ｘ‘=)',
    '(^-人-^)',
    '(=①ω①=)',
    '(=ＴェＴ=)',
    '(=ｘェｘ=)',
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
