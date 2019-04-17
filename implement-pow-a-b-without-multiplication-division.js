/**
 * Implement pow(a,b) without multiplication or division
 * 从闻思修入三摩地初于闻中入流亡所所入既寂动静二相了然不生
 * 如是渐增闻所闻尽尽闻不住觉所觉空空觉极圆空所生灭生灭既亡寂灭现前
 * 忽然超越世出世间十方圆明获二殊胜一者上合十方诸佛本妙觉心与佛如来同一慈力二者下合十方一切六道众生与诸众生同一悲仰
 */

function pow(num, e) {
  const negative = (num < 0) && (e % 2 === 1);

  let answer = Math.abs(num);

  while (e > 1) {
    // add the previous added number b times
    // e.g. 4^3 = 4 * 4 * 4
    //      4*4 = 4 + 4 + 4 + 4 = 16
    //     16*4 = 16 + 16 + 16 + 16 = 64
    let added = 0;
    for (let i = 0; i < Math.abs(num); i++) { added += answer; }
    answer = added;
    e--;
  }

  return negative ? -answer : answer;
}

pow(4, 3); // 64

// hidden runtime response
window.global = {
  runtimeRes: `<span>pow(4, 3):</span> ${pow(4, 3)}`
};