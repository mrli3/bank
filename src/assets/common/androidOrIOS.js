export const appSource = function (){
    const u = navigator.userAgent;
    const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    if (isiOS) {
      return "ios";
    } else {
      return "andriod";
    }
}