let count = 0;
const mainElement = document.querySelector("div.main>img");
const url = [
  "https://upload.wikimedia.org/wikipedia/commons/1/11/Yanbarusoba.jpg",
   "https://image.rakuten.co.jp/anmar-shop/cabinet/item/jimami/28898-10_re.jpg",
   "https://mi-journey.jp/foodie/wp-content/uploads/2019/04/190450omeletterice14.jpg",
   "https://media-cdn.tripadvisor.com/media/photo-s/15/a0/70/4a/caption.jpg",
   "http://cdn-ak.f.st-hatena.com/images/fotolife/e/emojoiecuisine/20150928/20150928034205.jpg",
   "https://www.hyponex.co.jp/yasai_daijiten/websys/wp-content/uploads/2020/08/パプリカA-676x507.jpg",
   "https://www.asahi-kasei.co.jp/saran/assets/images/preservation/vegetables/detail/food11_tph00.jpg",
   "https://www.takashimaya.co.jp/sto/image/product/product_image_main/7770/0001637770-001.jpg",
   "https://tblg.k-img.com/restaurant/images/Rvw/35532/320x320_rect_35532120.jpg",
   "https://cont-daidokolog.pal-system.co.jp/system/recipe/3064/img/thumbnail/sp_detail_main_PS_KCH_1431M.jpg"
];

function left() {
  console.log(count);
  count--;
  if (count <= 0) {
    count = url.length-1;
  }
  mainElement.setAttribute('src', url[count]);
}
function right() {
  count++;
  if (count >= url.length) {
    count = 0;
  }
  mainElement.setAttribute('src', url[count]);
}

let timer;
let nowPlaying = false;

function autoPlay() {
  right();
  timer = setTimeout(function() {
    autoPlay();
  }, 1000);
}

function play() {
  if (nowPlaying) {
    return;
  }
  nowPlaying = true;
  autoPlay();
}

function stop() {
  clearTimeout(timer);
  nowPlaying = false;
}

function reset() {
  stop();
  mainElement.setAttribute('src', url[0]);
  count = 0;
}
