import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cute',
  templateUrl: './cute.component.html',
  styleUrls: ['./cute.component.css']
})
export class CuteComponent implements OnInit {

  public faces: Array<string> = [
    'ʕ￫ᴥ￩ʔ',
    '٩◔̯◔۶',
    'U^ｴ^U',
    'ʕ·ᴥ·ʔ',
    'ʕ•ᴥ•ʔ',
    '(ˇ⊖ˇ)',
    '༼☯﹏☯༽',
    '^ↀᴥↀ^',
    '(◕ᴥ◕)',
    'ʕ⊙ᴥ⊙ʔ',
    '(´﹃｀)',
    '༼ꉺɷꉺ༽',
    '(✿ヘᴥヘ)',
    'ʕ￫ᴥ￩　ʔ',
    '(✿╹◡╹)',
    '(▰∀◕)ﾉ',
    '(人◕ω◕)',
    '(ㆁᴗㆁ✿)',
    '(ﾉ≧ڡ≦)',
    'ʕ　·ᴥ·ʔ',
    '(≖ᴗ≖✿)',
    '(◕‿◕✿)',
    '（๑♜д♜）',
    '(✾♛‿♛)',
    '(*бωб)',
    '(ᇴ‿ฺᇴ)',
    '(๑￫ܫ￩)',
    '(❍ᴥ❍ʋ)',
    'ʕ·ᴥ·　ʔ',
    '(✪‿✪)ノ',
  ];

  public name = 'cute';

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
    const al = document.getElementById('alert-cute');
    al.style.opacity = '1';
    al.style.display = 'block';
    setTimeout(() => {
      this.close();
    }, 600);
  }

  close() {
    const div = document.getElementById('alert-cute');
    div.style.opacity = '0';
    setTimeout(() => {
      div.style.display = 'none';
    }, 600);
  }

}
