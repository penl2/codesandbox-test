import "./style.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

//console.log("JavaScriptを実行しています");
//var elems = document.querySelectorAll(".widget_swell_index a");

//var current_flag;

//console.log(elems.length);
//console.log("表示完了");
//console.log(elems.length);

var elems;
var highlight_flag;

const highlight = (e) => {
  if (elems === null) {
    return false;
  }

  console.log("関数からelems length = " + elems.length);
  var yloc = document.documentElement.clientHeight;

  for (var i = 0; i < elems.length; i++) {
    console.log("elements=" + elems[i].classList.hash.slice(1));
    var a = document
      .getElementById(elems[i].classList.hash.slice(1))
      .getBoundingClientRect().top;
    if (yloc < a) {
      highlight_flag = elems[i];
      console.log("アサインした");
    }
  }

  /*
  elems.forEach(function (elem) {
    elem.classList.remove("current");
    var a = document.getElementById(elem.hash).getBoundingClientRect().top;
    console.log("ループ の位置=" + a);
    if (yloc < a) {
      highlight_flag = elem;
      console.log("アサインした");
    }
  });
  if (highlight_flag != null) {
    highlight_flag.classList.add("current");
    console.log("ylocの位置=" + yloc);
    console.log("現在 の位置=" + highlight_flag.hash);
  }
*/
};

function load() {
  elems = document.querySelectorAll(".widget_swell_index a");
  if (elems === null) {
    return false;
  } else {
    console.log("elemsを取得しました");
  }

  console.log("ページが読み込まれました！");
  console.log("elems length = " + elems.length);
  if (elems.length > 0) {
    console.log("OK");
  }
} // load()

window.onload = load();

window.addEventListener("scroll", highlight);
