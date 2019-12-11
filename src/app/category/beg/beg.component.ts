import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beg',
  // templateUrl: './beg.component.html',
  templateUrl: '../main.html',
  styleUrls: ['./beg.component.css']
})
export class BegComponent implements OnInit {

  public faces: Array<string> = [
    '○几',
    '＿|￣|○',
    '人´∀｀)',
    '(￣十￣)',
    '(-m-)',
    '(；人；)',
    'Ω＼ζ゜）',
    '(mm*)',
    '(￣人￣)',
    '(uωu人)',
    '(-人-)',
    '（＾人＾）',
    '(^人^)',
    '(/∇≦*)',
    '（×÷×）人',
    '(人･∀･)',
    '(ﾟ∀ﾟ人)',
    '(」ﾟДﾟ」',
    '((_　_*',
    '（人･ω･)',
    '|･ω･)ﾉ',
    '(人ゝд∩)',
    '(人・ェ・)',
    '（－||－）',
    '(人εﾟ●)',
    '(人ФｴФ)',
    '人´･皿･)',
    'ヽ(-Д-◎',
    '(人ゝω・）',
    '(人ﾟ∀ﾟ)',
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
