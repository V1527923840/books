require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([1],{

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(124);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_5060d5e7_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(127);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(125)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_5060d5e7_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\post\\scandetail\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5060d5e7", Component.options)
  } else {
    hotAPI.reload("data-v-5060d5e7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 125:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 126:
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

/* harmony default export */ __webpack_exports__["a"] = ({
    data: {
        bookPhoto: '',
        bookName: '',
        bookPublishDate: '',
        bookPublisher: '',
        bookprice: null,
        bookId: 0
    },
    mounted: function mounted() {
        var that = this;
        wx.request({
            //扫码后，获取书籍在豆瓣的信息
            url: 'https://darktech.fun/book/isbn/' + wx.getStorageSync('bookisbn'),
            method: 'get',
            data: {
                isbn: wx.getStorageSync('bookisbn')
            },
            success: function success(res) {
                console.log(res);
                if (res.data.code === 100) {
                    //获取到书籍在豆瓣的数据，渲染到页面上
                    that.bookPhoto = res.data.content.coverUrl;
                    that.bookName = res.data.content.bookName;
                    that.bookPublisher = res.data.content.publisher;
                    that.bookPublishDate = res.data.content.publishDate;
                    that.bookId = res.data.content.bookId;
                    console.log(that.bookId);
                } else {
                    // 获取不到书籍的数据，弹框提示可以手动输入书籍信息
                    wx.showModal({
                        title: '提示',
                        content: '找不到该书籍,可以尝试手动输入书籍信息',
                        success: function success(res) {
                            if (res.confirm) {
                                //按 "确认" 跳转到手写输入页面
                                wx.switchTab({
                                    url: '/pages/post/main'
                                });
                            } else {
                                //按 "取消" 跳转到post页面
                                wx.switchTab({
                                    url: '/pages/post/main'
                                });
                            }
                        }
                    });
                }
            }
        });
    },
    methods: {
        bookpost: function bookpost() {
            var that = this;
            if (that.bookprice === null) {
                wx.showToast({
                    title: '价格不能为空',
                    icon: 'none',
                    duration: 2000
                });
            } else if (typeof that.bookprice === "string") {
                wx.showToast({
                    title: '价格应为整数',
                    icon: 'none',
                    duration: 2000
                });
            } else {
                wx.request({
                    //把书籍发布出去
                    url: 'https://darktech.fun/lend',
                    method: 'post',
                    header: {
                        'Authorization': 'Bearer ' + wx.getStorageSync('token')
                    },
                    data: {
                        bookId: that.bookId,
                        price: that.bookprice
                    },
                    success: function success(res) {
                        console.log(res);
                        if (res.data.code === 100) {
                            // 发布成功 弹框提示发布成功并跳转到post页面
                            console.log(res);
                            wx.showToast({
                                title: '发布成功',
                                icon: 'success',
                                duration: 2000
                            });
                            wx.switchTab({
                                url: '/pages/post/main'
                            });
                        } else if (res.data.code === -1003) {
                            wx.showToast({
                                title: '用户未登录',
                                icon: 'none',
                                duration: 2000
                            });
                        }
                    }
                });
                wx.removeStorage({
                    //发布成功后，把storage里面的bookisbn码删掉
                    key: 'bookisbn',
                    success: function success(res) {
                        console.log(res);
                        that.bookPhoto = '';
                        that.bookName = '';
                        that.bookPublisher = '';
                        that.bookPublishDate = '';
                        that.bookprice = null;
                        that.bookId = 0;
                        wx.switchTab({
                            url: '/pages/post/main'
                        });
                    }
                });
            }
        }
    }
});

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', [_c('image', {
    staticClass: "bookimage",
    attrs: {
      "src": _vm.bookPhoto
    }
  }), _vm._v(" "), _c('ul', {
    staticClass: "bookcontent"
  }, [_c('li', {
    staticClass: "bookname"
  }, [_vm._v(_vm._s(_vm.bookName))]), _vm._v(" "), _c('li', {
    staticClass: "publishdate"
  }, [_vm._v("出版日期:" + _vm._s(_vm.bookPublishDate))]), _vm._v(" "), _c('li', {
    staticClass: "publisher"
  }, [_vm._v("出版社:" + _vm._s(_vm.bookPublisher))]), _vm._v(" "), _c('li', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.number",
      value: (_vm.bookprice),
      expression: "bookprice",
      modifiers: {
        "number": true
      }
    }],
    attrs: {
      "type": "number",
      "maxlength": "3",
      "placeholder": "请输入借阅的悦读币价格",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.bookprice)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.bookprice = _vm._n($event.target.value)
      },
      "blur": function($event) {
        _vm.$forceUpdate()
      }
    }
  })]), _vm._v(" "), _c('li', {
    staticStyle: {
      "color": "red",
      "font-size": "10px"
    }
  }, [_vm._v("\n            悦读币的价格为整数\n            ")])], 1), _vm._v(" "), _c('button', {
    staticClass: "button",
    attrs: {
      "type": "primary",
      "eventid": '1'
    },
    on: {
      "click": _vm.bookpost
    }
  }, [_vm._v("发布")])], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-5060d5e7", esExports)
  }
}

/***/ })

},[123]);