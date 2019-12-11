fetch("https://morimorihoge.github.io/teu2019f/tweets.json").then(
    function (respons) {
        return respons.json();
    }
).then(
    function (json) {
        let answerHTML = "";
        json.forEach(function (tweet) {
            answerHTML += `<li>${tweet.name}</li>`;
        })
        document.querySelector("#answer").innerHTML = answerHTML;
    }
);