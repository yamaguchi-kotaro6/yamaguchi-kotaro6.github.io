animation.js
// このファイルを読み込む前にanime.jsを読み込んでおくこと
// 下じゃない？
function startAnimation() {
    anime({
        targets: "#animation-box",
        keyframes: [
            {translateX: 400},
            {translateY: 50},
            {translateX: -100}
        ]
    });
}


function startRotation() {
    anime({
        targets: "rotation-box",
        rotate: 360,
        duration: 4000,
        loop: true,
    });
}