(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/EquiposMoviles/Create.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/EquiposMoviles/Create.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ClassicEditor: _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  data: function data() {
    return {
      status: '',
      activeField: '',
      editor: _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1___default.a
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('EquiposMovilesSingle', ['entry', 'loading', 'lists'])),
  mounted: function mounted() {
    this.fetchCreateData();
  },
  beforeDestroy: function beforeDestroy() {
    this.resetState();
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('EquiposMovilesSingle', ['storeData', 'resetState', 'setCodigo', 'setMarca', 'setModelo', 'setNumeroDeSerie', 'setImei', 'setPerifericos', 'setNota', 'setEstatus', 'fetchCreateData'])), {}, {
    updateCodigo: function updateCodigo(e) {
      this.setCodigo(e.target.value);
    },
    updateMarca: function updateMarca(value) {
      this.setMarca(value);
    },
    updateModelo: function updateModelo(e) {
      this.setModelo(e.target.value);
    },
    updateNumeroDeSerie: function updateNumeroDeSerie(e) {
      this.setNumeroDeSerie(e.target.value);
    },
    updateImei: function updateImei(e) {
      this.setImei(e.target.value);
    },
    updatePerifericos: function updatePerifericos(value) {
      this.setPerifericos(value);
    },
    updateNota: function updateNota(value) {
      this.setNota(value);
    },
    updateEstatus: function updateEstatus(e) {
      this.setEstatus(e.target.checked);
    },
    submitForm: function submitForm() {
      var _this = this;

      this.storeData().then(function () {
        _this.$router.push({
          name: 'equipos_moviles.index'
        });

        _this.$eventHub.$emit('create-success');
      })["catch"](function (error) {
        _this.status = 'failed';

        _.delay(function () {
          _this.status = '';
        }, 3000);
      });
    },
    focusField: function focusField(name) {
      this.activeField = name;
    },
    clearFocus: function clearFocus() {
      this.activeField = '';
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/EquiposMoviles/Create.vue?vue&type=template&id=22d0372f&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/EquiposMoviles/Create.vue?vue&type=template&id=22d0372f& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-fluid" }, [
    _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.submitForm($event)
          }
        }
      },
      [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-12" }, [
            _c("div", { staticClass: "card" }, [
              _c(
                "div",
                {
                  staticClass:
                    "card-header card-header-primary card-header-icon"
                },
                [
                  _vm._m(0),
                  _vm._v(" "),
                  _c("h4", { staticClass: "card-title" }, [
                    _vm._v(
                      "\n              " +
                        _vm._s(_vm.$t("global.create")) +
                        "\n              "
                    ),
                    _c("strong", [
                      _vm._v(
                        _vm._s(_vm.$t("cruds.equiposMovile.title_singular"))
                      )
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [_c("back-button")], 1),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "card-body" },
                [
                  _c("bootstrap-alert"),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-12" }, [
                      _c(
                        "div",
                        {
                          staticClass: "form-group bmd-form-group",
                          class: {
                            "has-items": _vm.entry.codigo,
                            "is-focused": _vm.activeField == "codigo"
                          }
                        },
                        [
                          _c("label", { staticClass: "bmd-label-floating" }, [
                            _vm._v(
                              _vm._s(
                                _vm.$t("cruds.equiposMovile.fields.codigo")
                              )
                            )
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: { type: "text" },
                            domProps: { value: _vm.entry.codigo },
                            on: {
                              input: _vm.updateCodigo,
                              focus: function($event) {
                                return _vm.focusField("codigo")
                              },
                              blur: _vm.clearFocus
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "form-group bmd-form-group",
                          class: {
                            "has-items": _vm.entry.marca_id !== null,
                            "is-focused": _vm.activeField == "marca"
                          }
                        },
                        [
                          _c(
                            "label",
                            { staticClass: "bmd-label-floating required" },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.$t("cruds.equiposMovile.fields.marca")
                                )
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("v-select", {
                            key: "marca-field",
                            attrs: {
                              name: "marca",
                              label: "nombre",
                              value: _vm.entry.marca_id,
                              options: _vm.lists.marca,
                              reduce: function(entry) {
                                return entry.id
                              }
                            },
                            on: {
                              input: _vm.updateMarca,
                              search: [
                                function($event) {
                                  if (
                                    !$event.type.indexOf("key") &&
                                    _vm._k(
                                      $event.keyCode,
                                      "focus",
                                      undefined,
                                      $event.key,
                                      undefined
                                    )
                                  ) {
                                    return null
                                  }
                                  return _vm.focusField("marca")
                                },
                                function($event) {
                                  if (
                                    !$event.type.indexOf("key") &&
                                    _vm._k(
                                      $event.keyCode,
                                      "blur",
                                      undefined,
                                      $event.key,
                                      undefined
                                    )
                                  ) {
                                    return null
                                  }
                                  return _vm.clearFocus($event)
                                }
                              ]
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "form-group bmd-form-group",
                          class: {
                            "has-items": _vm.entry.modelo,
                            "is-focused": _vm.activeField == "modelo"
                          }
                        },
                        [
                          _c("label", { staticClass: "bmd-label-floating" }, [
                            _vm._v(
                              _vm._s(
                                _vm.$t("cruds.equiposMovile.fields.modelo")
                              )
                            )
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: { type: "text" },
                            domProps: { value: _vm.entry.modelo },
                            on: {
                              input: _vm.updateModelo,
                              focus: function($event) {
                                return _vm.focusField("modelo")
                              },
                              blur: _vm.clearFocus
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "form-group bmd-form-group",
                          class: {
                            "has-items": _vm.entry.numero_de_serie,
                            "is-focused": _vm.activeField == "numero_de_serie"
                          }
                        },
                        [
                          _c(
                            "label",
                            { staticClass: "bmd-label-floating required" },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "cruds.equiposMovile.fields.numero_de_serie"
                                  )
                                )
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: { type: "text", required: "" },
                            domProps: { value: _vm.entry.numero_de_serie },
                            on: {
                              input: _vm.updateNumeroDeSerie,
                              focus: function($event) {
                                return _vm.focusField("numero_de_serie")
                              },
                              blur: _vm.clearFocus
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "form-group bmd-form-group",
                          class: {
                            "has-items": _vm.entry.imei,
                            "is-focused": _vm.activeField == "imei"
                          }
                        },
                        [
                          _c("label", { staticClass: "bmd-label-floating" }, [
                            _vm._v(
                              _vm._s(_vm.$t("cruds.equiposMovile.fields.imei"))
                            )
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: { type: "text" },
                            domProps: { value: _vm.entry.imei },
                            on: {
                              input: _vm.updateImei,
                              focus: function($event) {
                                return _vm.focusField("imei")
                              },
                              blur: _vm.clearFocus
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", [
                            _vm._v(
                              _vm._s(
                                _vm.$t("cruds.equiposMovile.fields.perifericos")
                              )
                            )
                          ]),
                          _vm._v(" "),
                          _c("v-radio", {
                            attrs: {
                              value: _vm.entry.perifericos,
                              options: _vm.lists.perifericos
                            },
                            on: { change: _vm.updatePerifericos }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", [
                            _vm._v(
                              _vm._s(_vm.$t("cruds.equiposMovile.fields.nota"))
                            )
                          ]),
                          _vm._v(" "),
                          _c("ckeditor", {
                            attrs: {
                              editor: _vm.editor,
                              value: _vm.entry.nota
                            },
                            on: { input: _vm.updateNota }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "form-group bmd-form-group form-check has-items"
                        },
                        [
                          _c("label", { staticClass: "bmd-label-floating" }, [
                            _vm._v(
                              _vm._s(
                                _vm.$t(
                                  "cruds.equiposMovile.fields.estatus_helper"
                                )
                              )
                            )
                          ]),
                          _vm._v(" "),
                          _c("label", { staticClass: "form-check-label" }, [
                            _c("input", {
                              staticClass: "form-check-input",
                              attrs: { type: "checkbox" },
                              domProps: {
                                value: _vm.entry.estatus,
                                checked: _vm.entry.estatus
                              },
                              on: { change: _vm.updateEstatus }
                            }),
                            _vm._m(1),
                            _vm._v(
                              _vm._s(
                                _vm.$t("cruds.equiposMovile.fields.estatus")
                              )
                            )
                          ])
                        ]
                      )
                    ])
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "card-footer" },
                [
                  _c(
                    "vue-button-spinner",
                    {
                      staticClass: "btn-primary",
                      attrs: {
                        status: _vm.status,
                        isLoading: _vm.loading,
                        disabled: _vm.loading
                      }
                    },
                    [
                      _vm._v(
                        "\n              " +
                          _vm._s(_vm.$t("global.save")) +
                          "\n            "
                      )
                    ]
                  )
                ],
                1
              )
            ])
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-icon" }, [
      _c("i", { staticClass: "material-icons" }, [_vm._v("add")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "form-check-sign" }, [
      _c("span", { staticClass: "check" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/adminapp/js/cruds/EquiposMoviles/Create.vue":
/*!***************************************************************!*\
  !*** ./resources/adminapp/js/cruds/EquiposMoviles/Create.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_22d0372f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=22d0372f& */ "./resources/adminapp/js/cruds/EquiposMoviles/Create.vue?vue&type=template&id=22d0372f&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/adminapp/js/cruds/EquiposMoviles/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_22d0372f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_22d0372f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/adminapp/js/cruds/EquiposMoviles/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/adminapp/js/cruds/EquiposMoviles/Create.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/EquiposMoviles/Create.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/EquiposMoviles/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/adminapp/js/cruds/EquiposMoviles/Create.vue?vue&type=template&id=22d0372f&":
/*!**********************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/EquiposMoviles/Create.vue?vue&type=template&id=22d0372f& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_22d0372f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=22d0372f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/EquiposMoviles/Create.vue?vue&type=template&id=22d0372f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_22d0372f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_22d0372f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);