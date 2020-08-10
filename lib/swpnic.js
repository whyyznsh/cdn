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
  // 工具方法
  NIC.extend({
    /**
     * 设置背景图片
     * @date 2020-06-30
     * @param {string}} img 图片的地址
     * @returns {any}
     */
    setBg: function (img) {
      $("#web_bg").css({
        backgroundImage: "url(" + img + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      });
    },
    /**
     * 设置banner的方法
     * @date 2020-07-06
     * @param {any} img 图片地址
     * @param {any} filter 是否开启滤镜，默认不开启
     * @returns {any}
     */
    setBanner: function (img, filter) {
      if (!filter) {
        $(".full_page").css({
          backgroundImage: "url(" + img + ")",
        });
      } else {
        $(".full_page").css({
          backgroundImage:
            'url("https://ae01.alicdn.com/kf/H18a4b998752a4ae68b8e85d432a5aef0l.png"), linear-gradient(60deg, rgba(255, 165, 150, 0.5) 5%, rgba(0, 228, 255, 0.35)), url(' +
            img +
            ")",
        });
      }
    },
  });
  // 视觉感受
  NIC.prototype.extend({
    /**
     * 修改主页banner图，参数传入图片地址，或者transparent
     * @date 2020-06-30
     * @param {string} [imageUrl] 可选，传入图片地址或者transparent
     * @param {boolean} filter=false 是否使用滤镜 默认不适用
     * @returns {NIC}
     */
    changeBanner: function (imageUrl, filter = false) {
      if (imageUrl != undefined && imageUrl.search("http") != -1) {
        NIC.setBanner(imageUrl, filter);
      } else if (imageUrl == "transparent") {
        $(".full_page").css({
          background: "transparent",
        });
      }
      return this;
    },
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
