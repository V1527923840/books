require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([24],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(9);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_6c4656ab_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(12);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(10)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_6c4656ab_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\classbook\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6c4656ab", Component.options)
  } else {
    hotAPI.reload("data-v-6c4656ab", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
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

/* harmony default export */ __webpack_exports__["a"] = ({
    data: {
        showJoin: false,
        showList: true,
        bookList: []

    },
    mounted: function mounted() {
        var that = this;
        wx.showShareMenu({});
        wx.login({
            success: function success(res) {
                console.log(res);
                if (res.code) {
                    wx.request({
                        url: 'https://darktech.fun/login',
                        method: 'post',
                        data: {
                            code: res.code,
                            avatarUrl: wx.getStorageSync('avatarUrl'),
                            nickName: wx.getStorageSync('nickName')
                        },
                        success: function success(res) {
                            wx.setStorage({
                                key: 'token',
                                data: res.data.content.jwtToken
                            });
                        }
                    });
                }
            }
        }), wx.request({
            url: 'https://darktech.fun/book/all',
            method: 'get',
            header: {
                'Authorization': 'Bearer ' + wx.getStorageSync('token')
            },
            data: {
                pageNum: 1,
                pageSize: 2,
                type: 'time',
                sort: 'desc'
            },
            success: function success(res) {

                console.log(res.data.list);
                res.data.list.map(function (x) {
                    that.bookList.push(x);
                });
            }
        });
    },

    methods: {
        test: function test() {
            var that = this;
            wx.request({
                url: 'https://darktech.fun/book/all',
                method: 'get',
                header: {
                    'Authorization': 'Bearer ' + wx.getStorageSync('token')
                },
                data: {
                    pageNum: 1,
                    pageSize: 2,
                    type: 'time',
                    sort: 'desc'
                },
                success: function success(res) {
                    console.log(res.data.list);
                    res.data.list.map(function (x) {
                        that.bookList.push(x);
                    });
                }
            });
        }
    }
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.showJoin) ? _c('div', [_c('div', {
    staticClass: "tips"
  }, [_vm._v("未加入班级，请加入您的班级")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1)]) : _vm._e(), _vm._v(" "), (_vm.showList) ? _c('div', [_c('ul', {
    staticClass: "booklist"
  }, _vm._l((_vm.bookList), function(item, key) {
    return _c('li', {
      key: key
    }, [_c('a', {
      attrs: {
        "href": "#"
      }
    }, [_c('image', {
      staticClass: "bookphoto",
      attrs: {
        "src": item.coverUrl
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "bookname"
    }, [_vm._v(_vm._s(item.bookName))]), _vm._v(" "), _c('div', {
      staticClass: "price"
    }, [_vm._v("价格:" + _vm._s(item.price))])])])
  }))], 1) : _vm._e()])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "join"
  }, [_c('a', {
    attrs: {
      "href": "/pages/common/joinclass/main"
    }
  }, [_vm._v("加入班级")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "create"
  }, [_c('a', {
    attrs: {
      "href": "/pages/common/createclass/main"
    }
  }, [_vm._v("创建班级?")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-6c4656ab", esExports)
  }
}

/***/ })
],[8]);