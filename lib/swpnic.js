(function (window, undefiend) {
  var xkTool = function (selector, filter) {
    return new xkTool.prototype.init(selector, filter);
  };
  xkTool.prototype = {
    constructor: xkTool,
    init: function (bgUrl, filter) {
      this.changeBanner(bgUrl, filter);
      console.log(
        "\n %c 小康蝴蝶主题魔改工具库" +
          this.version +
          " %c https://docs.tzki.cn/xkTool/ \n",
        "color: #fff; background: #4285f4; padding:5px 0;",
        "background: #66CCFF; padding:5px 0;"
      );
      return this;
    });
  // 元素相关
  NIC.prototype.extend({
    /**
     * 页脚
     */
    footFish: function () {
      $("#footer-wrap").css({
        position: "absolute",
        "text-align": "center",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        "z-index": 99,
      });
      $("footer").append(
        `<div class="container" id="jsi-flying-fish-container"></div>`
      );
      $("body").append(
        '<script src="https://cdn.jsdelivr.net/gh/whyyznsh/cdn@master/lib/fish.js"></script>'
      );
      return this;
    },
  });
  NIC.prototype.init.prototype = NIC.prototype;

  window.NIC = NIC;
})(window);
