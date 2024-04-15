// head要素を取得し、中身を出力する
console.log(document.head);

// body要素を取得し、中身を出力する
console.log(document.body);

// windowオブジェクトの中身を出力する
console.log(window);

// HTML要素をidで取得し、中身を出力する
console.log(document.getElementById('first-list'));

// HTML要素をclassで取得し、中身を出力する
console.log(document.getElementsByClassName('heading'));

// 複数のHTML要素を1つずつ取得し、定数に代入する
const headings = document.getElementsByClassName('heading');

// 複数のHTML要素を1つずつ取得し、中身を出力する
for (let i = 0; i < headings.length; i++) {
  console.log(headings[i]);
}

// 複数のHTML要素を1つずつ取得し、定数に代入する
const headings1 = document.querySelectorAll('h1');

// 複数のHTML要素を1つずつ取得し、中身を出力する
for (let i = 0; i < headings1.length; i++) {
  // console.log(headings1[i]);
   headings1[i].innerHTML = i;
}

// HTML要素をCSSセレクタで取得し、中身を出力する（最初の一つ）
console.log(document.querySelector('h1'));
console.log(document.querySelector('#second-heading'));
console.log(document.querySelector('.list'));

// HTML要素をCSSセレクタで取得し、中身を出力する
console.log(document.querySelectorAll('.heading'));
console.log(document.querySelectorAll('li'));

// 新しくli要素を作成し、定数に代入する
const li = document.createElement('li');

// 作成したli要素にテキストを追加する
li.textContent = 'JavaScriptで新しく作成したリスト3';

// ul要素の末尾にli要素を追加する
document.querySelector('ul').appendChild(li);