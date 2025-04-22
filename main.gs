/*__DELETE__*/
function init(){
  /**入力データコーディング**/
  const data = `
3 5
  ` ;

  // 読み込んだデータを改行で分割して配列に変換
  const input = data.trim().split("\n").map(line => line.trim());
  main(input);
}
/*__DELETE__*/

function main(lines) {
  const [a, b] = lines[0].split(" ").map(Number);

  console.log(a);
  console.log(b);
}
