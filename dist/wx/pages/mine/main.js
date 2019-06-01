require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([15],{

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(54);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_7c612c42_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(57);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(55)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7c612c42"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_7c612c42_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\mine\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7c612c42", Component.options)
  } else {
    hotAPI.reload("data-v-7c612c42", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 55:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    data: {
        photo: '',
        name: '',
        showlogin: false, //登录界面
        showcontent: true //用户信息
    }, created: function created() {},
    mounted: function mounted() {
        var that = this;
        wx.getSetting({
            //查验是否已经获取用户信息了
            success: function success(res) {
                if (!res.authSetting['scope.userInfo']) {
                    //如果用户没有授权登录 则登录界面为true 用户信息界面为false
                    that.showlogin = true;
                    that.showcontent = false;
                } else {
                    //如果用户已经授权登录 直接获取头像和昵称
                    // that.photo = wx.getStorageSync('avatarUrl');
                    // that.name = wx.getStorageSync('nickName');
                    wx.getUserInfo({
                        success: function success(res) {
                            that.photo = res.userInfo.avatarUrl;
                            that.name = res.userInfo.nickName;
                        }
                    });
                }
            }
        });
    },
    methods: {
        bindGetUserInfo: function bindGetUserInfo(e) {
            var that = this;
            if (e.mp.detail.rawData) {
                //按了允许后获取用户信息并跳转到mine页面
                //获取用户信息:头像和昵称
                wx.getUserInfo({
                    success: function success(res) {
                        //login界面消失，用户信息界面出现
                        that.showlogin = !that.showlogin;
                        that.showcontent = !that.showcontent;

                        //渲染头像和微信昵称
                        that.photo = res.userInfo.avatarUrl;
                        that.name = res.userInfo.nickName;
                    }
                });
                //登录后台操作
                wx.login({
                    success: function success(res) {
                        if (res.code) {
                            console.log(res);
                            wx.request({
                                url: 'https://darktech.fun/login',
                                method: 'post',
                                data: {
                                    code: res.code,
                                    avatarUrl: that.photo,
                                    nickName: that.name
                                },
                                success: function success(res) {
                                    // console.log(res.data.content.jwtToken);
                                    //登录成功 把后台返回的token存到storage中
                                    wx.setStorage({
                                        key: "token",
                                        data: res.data.content.jwtToken
                                    });
                                }
                            });
                        }
                    }
                });
            } else {
                that.showlogin = true;
                that.showcontent = false;
            }
        }
    }
});

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.showlogin) ? _c('div', [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('button', {
    staticClass: "bottom",
    attrs: {
      "type": "primary",
      "open-type": "getUserInfo",
      "eventid": '0'
    },
    on: {
      "getuserinfo": _vm.bindGetUserInfo
    }
  }, [_vm._v("授权登录")])], 1) : _vm._e(), _vm._v(" "), (_vm.showcontent) ? _c('div', [_c('div', {
    staticClass: "account"
  }, [_c('image', {
    staticClass: "accountimg",
    attrs: {
      "src": _vm.photo
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "accountname"
  }, [_vm._v(_vm._s(_vm.name))]), _vm._v(" "), _c('div', {
    staticClass: "faith"
  }, [_vm._v("信用度:100")]), _vm._v(" "), _c('div', {
    staticClass: "coin"
  }, [_vm._v("悦读币:???")])]), _vm._v(" "), _c('div', {
    staticClass: "state"
  }, [_c('ul', {
    staticClass: "bookstate"
  }, [_c('li', [_c('a', {
    attrs: {
      "href": "/pages/mine/landout/main"
    }
  }, [_vm._v("待借出")]), _vm._v(" "), _c('div', {
    staticClass: "count"
  }, [_vm._v("1")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/pages/mine/landouted/main"
    }
  }, [_vm._v("已借出")]), _vm._v(" "), _c('div', {
    staticClass: "count"
  }, [_vm._v("2")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/pages/mine/return/main"
    }
  }, [_vm._v("待还书")]), _vm._v(" "), _c('div', {
    staticClass: "count"
  }, [_vm._v("5")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/pages/mine/pingjia/main"
    }
  }, [_vm._v("评价")]), _vm._v(" "), _c('div', {
    staticClass: "count"
  }, [_vm._v("4")])])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "mydata"
  }, [_c('ul', {
    staticClass: "data"
  }, [_c('li', [_c('a', {
    attrs: {
      "href": "/pages/mine/favour/main"
    }
  }, [_vm._v("我的收藏")]), _c('div', {
    staticClass: "arrow"
  }, [_vm._v(">")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/pages/mine/myclassdetail/main"
    }
  }, [_vm._v("我的班级")]), _c('div', {
    staticClass: "arrow"
  }, [_vm._v(">")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/pages/mine/readcoin/main"
    }
  }, [_vm._v("信用度/悦读币")]), _c('div', {
    staticClass: "arrow"
  }, [_vm._v(">")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/pages/mine/news/main"
    }
  }, [_vm._v("消息")]), _vm._v(" "), _c('div', {
    staticClass: "arrow"
  }, [_vm._v(">")]), _vm._v(" "), _c('div', {
    staticClass: "datacount"
  }, [_vm._v("5")])])], 1)], 1)]) : _vm._e()])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "header"
  }, [_c('image', {
    attrs: {
      "src": "../../static/images/lunbo3.png"
    }
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content"
  }, [_c('div', [_vm._v("申请获取以下权限")]), _vm._v(" "), _c('text', [_vm._v("获得你的公开信息(昵称，头像等)")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-7c612c42", esExports)
  }
}

/***/ })

},[53]);