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
    },
    version: "3.1.1",
    selector: "",
    // 背景图片列表
    imgList: [
      "https://ae01.alicdn.com/kf/Uc32240fb1b134adc8b256577bd78b9a3j.jpg",
    ],
    // banner图列表
    bannerList: [
      "https://ae01.alicdn.com/kf/H21b5f6b8496141a1979a33666e1074d9x.jpg",
    ],
  };
  xkTool.extend = xkTool.prototype.extend = function (obj) {
    for (var key in obj) {
      this[key] = obj[key];
    }
  };
  // 生成相关
  xkTool.extend({
    /**
     * 生成随机整数 包括首尾
     * @date 2020-06-30
     * @param {number} min 最小值
     * @param {number} max 最大值
     * @returns {any}
     */
    randomNum: function (min, max) {
      // min最小值，max最大值
      return Math.floor(Math.random() * (max - min)) + min;
    },
  });
  // 元素相关
  NIC.prototype.extend({
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
