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
          this.version +
          " %c https://swpnic.com \n",
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
  });
  // 元素相关
  NIC.prototype.extend({
    /**
     * 魔幻圆圈
     * @date 2020-07-03
     * @param {any} radius 圆圈数量
     * @param {any} densety 密度
     * @param {any} color 颜色，random为随机
     * @param {any} clearOffset 消失偏移
     * @returns {any}
     */
    magicCirle: function (radius, densety, color, clearOffset) {
      $(".scroll-down").after(
        '<canvas id="canvas" width="1700px" height="470"></canvas>'
      );
      $("");
      $.fn.circleMagic = function (options) {
        let width,
          height,
          largeContainer,
          canvas,
          ctx,
          target,
          animateHeader = true;
        let circles = [];
        // 对象合并
        let settings = $.extend(
          {
            elem: ".header",
            color: "rgba(255,225,225,.4)",
            radius: 20,
            densety: 0.3,
            clearOffset: 0.2,
          },
          options
        );

        initContainer();
        addListeners();

        function initContainer() {
          width = $(window).width();
          height = $(window).height();
          target = { x: 0, y: height };
          largeContainer = document.querySelector(settings.elem);
          largeContainer.style.height = height + "px";
          initCanvas();
          canvas = document.getElementById("canvas");
          canvas.width = width;
          canvas.height = height;
          ctx = canvas.getContext("2d");
          for (let x = 0; x < width * settings.densety; x++) {
            let c = new Circle();
            circles.push(c);
          }
          animate();
        }

        function initCanvas() {
          let canvasElement = document.createElement("canvas");
          canvasElement.id = "canvas";
          largeContainer.append(canvasElement);
        }

        function addListeners() {
          window.addEventListener("scroll", scrollCheck);
          window.addEventListener("resize", resize);
        }

        function scrollCheck() {
          if (document.body.scrollTop > height) animateHeader = false;
          else animateHeader = true;
        }

        function resize() {
          width = window.innerWidth;
          height = window.innerHeight;
          largeContainer.style.height = height + "px";
          canvas.width = width;
          canvas.height = height;
        }

        function animate() {
          if (animateHeader) {
            ctx.clearRect(0, 0, width, height);
            for (let i in circles) {
              circles[i].draw();
            }
          }
          requestAnimationFrame(animate);
        }

        function randomColor() {
          let r = Math.floor(Math.random() * 255);
          let g = Math.floor(Math.random() * 255);
          let b = Math.floor(Math.random() * 255);
          let alpha = Math.random().toPrecision(2);
          let rgba = `rgba(${r}, ${g}, ${b}, ${alpha})`;
          return rgba;
        }

        function Circle() {
          let self = this;
          (function () {
            self.pos = {};
            init();
          })();
          function init() {
            self.pos.x = Math.random() * width;
            self.pos.y = height + Math.random() * 100;
            self.alpha = 0.1 + Math.random() * settings.clearOffset;
            self.scale = 0.1 + Math.random() * 0.3;
            self.speed = Math.random();
            if (settings.color === "random") {
              self.color = randomColor();
            } else {
              self.color = settings.color;
            }
          }
          this.draw = function () {
            if (self.alpha <= 0) {
              init();
            }
            self.pos.y -= self.speed;
            self.alpha -= 0.0005;
            ctx.beginPath();
            ctx.arc(
              self.pos.x,
              self.pos.y,
              self.scale * settings.radius,
              0,
              2 * Math.PI,
              false
            );
            ctx.fillStyle = self.color;
            ctx.fill();
            ctx.closePath();
          };
        }
      };
      $(".full_page")
        .css({
          overflow: "hidden",
        })
        .circleMagic({
          elem: ".full_page",
          radius: radius ? radius : 18,
          densety: densety ? densety : 0.1,
          color: color ? color : "random",
          // color: 'rgba(255,105,180,.7)',
          clearOffset: clearOffset ? clearOffset : 0.3,
        });
      return this;
    },
    /**
     * 页脚养鱼
     * @date 2020-07-16
     * @returns {any}
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
