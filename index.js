function destory_carousel() {
    let carousel_items = document.querySelectorAll(".o-carousel--item img");
    carousel_items.forEach(carousel_item => {
        carousel_item.style.display = 'none';
    });
}

function destory_caption() {
    let captions = document.querySelectorAll(".o-carousel--caption .o-carousel--caption-text");
    captions.forEach(cap => {
        cap.style.display = 'none';
    });
}

function reset_thumbnail_highlight() {
    let thumbnails = document.querySelectorAll(".o-carousel--thumbnail img");
    thumbnails.forEach(thumbnail => {
        thumbnail.style.height = '15%';
    });

}

function appear_carousel_image_and_caption(appear_carousel_number) {

    reset_thumbnail_highlight();
    let thumbnail = document.querySelector("#thumbnail" + appear_carousel_number);
    thumbnail.style.height = "12%";

    let carousel_item = document.querySelector("#item" + appear_carousel_number);
    carousel_item.style.display = "block";

    let cap = document.querySelector("#cap" + appear_carousel_number);
    cap.style.display = "block";
}

function prev_func() {
    appear_carousel_number --;
    if (appear_carousel_number == -1) {
        appear_carousel_number = 5;
    }
    appear_carousel_image_and_caption(appear_carousel_number);
}

function next_func() {
    appear_carousel_number ++;
    appear_carousel_number %= 6;
    appear_carousel_image_and_caption(appear_carousel_number);
}

function change_image(image_number) {
    destory_carousel();
    destory_caption();
    appear_carousel_number = image_number;
    appear_carousel_image_and_caption(appear_carousel_number);
}

let appear_carousel_number = 0;  // 現在メインに表示されている画像の番号(0-5)

let prev_btn = document.querySelector(".o-carousel--prev");
let next_btn = document.querySelector(".o-carousel--next");

prev_btn.addEventListener("click", destory_carousel);
next_btn.addEventListener("click", destory_carousel);

prev_btn.addEventListener("click", destory_caption);
next_btn.addEventListener("click", destory_caption);

prev_btn.addEventListener("click", prev_func);
next_btn.addEventListener("click", next_func);

let thumbnail0 = document.querySelector("#thumbnail0");
thumbnail0.addEventListener("click", () => change_image(0));

let thumbnail1 = document.querySelector("#thumbnail1");
thumbnail1.addEventListener("click", () => change_image(1));

let thumbnail2 = document.querySelector("#thumbnail2");
thumbnail2.addEventListener("click", () => change_image(2));

let thumbnail3 = document.querySelector("#thumbnail3");
thumbnail3.addEventListener("click", () => change_image(3));

let thumbnail4 = document.querySelector("#thumbnail4");
thumbnail4.addEventListener("click", () => change_image(4));

let thumbnail5 = document.querySelector("#thumbnail5");
thumbnail5.addEventListener("click", () => change_image(5));