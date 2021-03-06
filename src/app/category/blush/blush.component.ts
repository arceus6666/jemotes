import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blush',
  templateUrl: './blush.component.html',
  // templateUrl: '../main.html',
  styleUrls: ['./blush.component.css']
})
export class BlushComponent implements OnInit {

  public faces: Array<string> = [
    '＠＾▽＾＠',
    '(´ω｀*)',
    '(‘-’*)',
    '(´∀｀•)',
    '(ﾉ∀`♥)',
    '(/ε＼*)',
    '(*^^*)',
    '(*^_^*)',
    '(*^.^*)',
    '(•ﾟдﾟ•)',
    '(*ﾟ∀ﾟ*)',
    '(^-^*)ノ',
    '(・´ｪ｀・)',
    '(*´ω｀*)',
    '(*´_ゝ｀)',
    '(*´ｪ｀*)',
    '(*´∀`*)',
    '(*ﾟｪﾟ*)',
    '(*ﾉ∀`*)',
    '(*´∀｀*)',
    '( *∵* )',
    '(〃￣ω￣〃ゞ',
    '(*ﾟｰﾟ)ゞ',
    '(●´艸｀)ヾ',
    'v(・∀・*)',
    'v(^∀^*)',
    '(*´-｀*)',
    '(*´台｀*)',
    '(*´I`*)',
    '(*≧∀≦*)',
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
    const al = document.getElementById('alert-blush');
    al.style.opacity = '1';
    al.style.display = 'block';
    setTimeout(() => {
      this.close();
    }, 600);
  }

  close() {
    const div = document.getElementById('alert-blush');
    div.style.opacity = '0';
    setTimeout(() => {
      div.style.display = 'none';
    }, 600);
  }

}
