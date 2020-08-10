(function (window, undefiend) {
  var NIC = function (selector, filter) {
    return new NIC.prototype.init(selector, filter);
  };
  NIC.prototype = {
    constructor: NIC,
    init: function (bgUrl, filter) {
      this.changeBanner(bgUrl, filter);
      console.log(
        "\n %c 汕尾职业技术学院NIC" +
          " %c https://swpnic.com \n",
        "color: #fff; background: #4285f4; padding:5px 0;",
        "background: #66CCFF; padding:5px 0;"
      );
      return this;
    },
    selector: "",
  };
  NIC.extend = NIC.prototype.extend = function (obj) {
    for (var key in obj) {
      this[key] = obj[key];
    }
  };
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
