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
    /**
     * 随机banner图
     * @date 2020-07-06
     * @param {any} startUrl 开始的url
     * @param {any} endUrl 结束的url
     * @param {any} startNum 开始的数字
     * @param {any} endNum 结束的数字
     * @param {any} filter=false 是否使用滤镜，默认不使用
     * @returns {any}
     */
    randomBanner: function (
      startUrl,
      endUrl,
      startNum,
      endNum,
      filter = false
    ) {
      var num;
      if ((arguments.length = 1 && startUrl == true)) {
        filter = true;
      }
      if (arguments.length < 4) {
        var imgLength = this.bannerList.length;
        num = NIC.randomNum(0, imgLength);
        console.log(this.bannerList[num], num);
        NIC.setBanner(this.bannerList[num], filter);
      } else {
        num = NIC.randomNum(startNum, endNum + 1);
        NIC.setBanner(startUrl + num + endUrl, filter);
      }
      return NIC;
    },
    /**
     * 手机状态下工具栏默认不展开
     * @date 2020-06-30
     * @returns {any}
     */
    mobileSidebar: function () {
      var mobile_sidebar_menus = document.getElementById(
        "mobile-sidebar-menus"
      );
      var menus_item_child = mobile_sidebar_menus.getElementsByClassName(
        "menus_item_child"
      );
      var menus_expand = mobile_sidebar_menus.getElementsByClassName(
        "menus-expand"
      );
      for (var i = 0; i < menus_item_child.length; i++) {
        menus_item_child[i].style.display = "none";
        menus_expand[i].className += " menus-closed";
      }
      return this;
    },
    /**
     * 根据Cookie设置背景、透明度等
     * @date 2020-06-30
     * @returns {any}
     */
    bgPage: function () {
      // 获取标签
      // 全局背景div
      var web_bg = document.getElementById("web_bg");
      // 公共父级
      var content_inner = document.getElementById("content-inner");
      // 获取Cookies
      // 透明度
      var opacity = Cookies.get("opacity") ? Cookies.get("opacity") : 0.5;
      // 背景
      var bg = Cookies.get("bg");
      // 动画
      var animation = Cookies.get("animation");
      // 背景类型
      var type = Cookies.get("type");
      // 声明遍历 用于记录当前color
      // 设置背景
      if (bg) {
        web_bg.style.background = bg;
        web_bg.setAttribute("data-type", type);
        if (animation) {
          web_bg.style.animation = animation;
        }
      }
      NIC.setColor(content_inner, opacity);
      return this;
    },
    /**
     * 随机背景
     * @date 2020-07-06
     * @param {any} startUrl 开始的url
     * @param {any} endUrl 结束的url
     * @param {any} startNum 开始的数字
     * @param {any} endNum 结束的数字
     * @returns {any}
     */
    randomBg: function (startUrl, endUrl, startNum, endNum) {
      var num;
      if (arguments.length < 4) {
        var imgLength = this.imgList.length;
        num = NIC.randomNum(0, imgLength);
        NIC.setBg(this.imgList[num]);
      } else {
        num = NIC.randomNum(startNum, endNum + 1);
        NIC.setBg(startUrl + num + endUrl);
      }
      return NIC;
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
