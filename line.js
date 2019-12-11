
console.log(fruitNames);

let answer = document.querySelector("#answer");

/**
 * 戦略：最終的に変数answerHTMLに以下のHTML文字列が入っている用にしたい
 *   <ul>
 *     <li>りんご</li>
 *     <li>みかん</li>
 *     <li>いちご</li>
 *     <li>いちじく</li>
 *   </ul>
 */

let answerHTML = "";

answerHTML = "<ul>";
let i = 0;
while(i < fruitNames.length){
    answerHTML = answerHTML + "<li>" + fruitNames[i] + "</li>";
    i++;
}
answerHTML = answerHTML + "</ul>";

answer.innerHTML = answerHTML;