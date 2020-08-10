(function (window, undefiend) {
  var NIC = function (selector, filter) {
    return new NIC.prototype.init(selector, filter);
  };
  NIC.prototype = {
    constructor: NIC,
    init: function (bgUrl, filter) {
      this.changeBanner(bgUrl, filter);
      console.log(
        "\n %c 小康蝴蝶主题魔改工具库" +
          this.version +
          " %c https://docs.tzki.cn/NIC/ \n",
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
  NIC.extend = NIC.prototype.extend = function (obj) {
    for (var key in obj) {
      this[key] = obj[key];
    }
  };
  // 生成相关
  NIC.extend({
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
  // 工具方法
  NIC.extend({
    /**
     * 根据cookie设置背景
     * @date 2020-06-30
     * @param {any} content_inner 公共父级
     * @param {any} opacity 透明度
     * @returns {any}
     */
    setColor: function (content_inner, opacity) {
      // style="--light_bg_color: rgb(255, 255, 255,.3);--dark_bg_color: rgba(18,18,18,.2);"
      var light_bg_color =
        "--light_bg_color: rgb(255, 255, 255," + opacity + ");";
      var dark_bg_color = "--dark_bg_color: rgba(18,18,18," + opacity + ");";
      content_inner.setAttribute("style", light_bg_color + dark_bg_color);
    },

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
  // 点击交互
  NIC.prototype.extend({
    /**
     * 当点击目录时控制台输出当前文章地址加锚点
     * @date 2020-06-30
     * @returns {NIC}
     */
    consoleAnchor: function () {
      $(".toc-link").click(function (e) {
        // location.hash = this.hash;
        console.log(this.href);
      });
      return this;
    },
    /**
     * 当使用mac代码主题时，点击绿色按钮会出现代码框放大的效果
     * @date 2020-06-30
     * @returns {NIC}
     */
    codeFull: function () {
      $(".highlight-tools").append(
        '<i class="fas fa-fingerprint fullScreen"></i>'
      );
      $(".highlight-tools").delegate(".fullScreen", "click", function () {
        $(this).parent().parent().toggleClass("code-block-fullscreen");
        // var expand = $(this).prevAll().eq(3);
        // if (expand.hasClass("code-closed")) {
        //   expand.trigger("click");
        // }
      });
      return this;
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
