(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[65],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/ResguardosPcs/Edit.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/ResguardosPcs/Edit.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_Attachments_Attachment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Attachments/Attachment */ "./resources/adminapp/js/components/Attachments/Attachment.vue");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Attachment: _components_Attachments_Attachment__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      status: '',
      activeField: ''
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('ResguardosPcsSingle', ['entry', 'loading', 'lists'])),
  beforeDestroy: function beforeDestroy() {
    this.resetState();
  },
  watch: {
    '$route.params.id': {
      immediate: true,
      handler: function handler() {
        this.resetState();
        this.fetchEditData(this.$route.params.id);
      }
    }
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('ResguardosPcsSingle', ['fetchEditData', 'updateData', 'resetState', 'setFolio', 'setFecha', 'setResponsable', 'setEquipo', 'setNota', 'insertPdfFile', 'removePdfFile'])), {}, {
    updateFolio: function updateFolio(e) {
      this.setFolio(e.target.value);
    },
    updateFecha: function updateFecha(e) {
      this.setFecha(e.target.value);
    },
    updateResponsable: function updateResponsable(value) {
      this.setResponsable(value);
    },
    updateEquipo: function updateEquipo(value) {
      this.setEquipo(value);
    },
    updateNota: function updateNota(e) {
      this.setNota(e.target.value);
    },
    getRoute: function getRoute(name) {
      return "".concat(axios.defaults.baseURL).concat(name, "/media");
    },
    submitForm: function submitForm() {
      var _this = this;

      this.updateData().then(function () {
        _this.$router.push({
          name: 'resguardos_pcs.index'
        });

        _this.$eventHub.$emit('update-success');
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/ResguardosPcs/Edit.vue?vue&type=template&id=1cd0645d&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/ResguardosPcs/Edit.vue?vue&type=template&id=1cd0645d& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
                        _vm._s(_vm.$t("global.edit")) +
                        "\n              "
                    ),
                    _c("strong", [
                      _vm._v(
                        _vm._s(_vm.$t("cruds.resguardosPc.title_singular"))
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
                            "has-items": _vm.entry.folio,
                            "is-focused": _vm.activeField == "folio"
                          }
                        },
                        [
                          _c("label", { staticClass: "bmd-label-floating" }, [
                            _vm._v(
                              _vm._s(_vm.$t("cruds.resguardosPc.fields.folio"))
                            )
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: { type: "text" },
                            domProps: { value: _vm.entry.folio },
                            on: {
                              input: _vm.updateFolio,
                              focus: function($event) {
                                return _vm.focusField("folio")
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
                            "has-items": _vm.entry.fecha,
                            "is-focused": _vm.activeField == "fecha"
                          }
                        },
                        [
                          _c(
                            "label",
                            { staticClass: "bmd-label-floating required" },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.$t("cruds.resguardosPc.fields.fecha")
                                )
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("datetime-picker", {
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              picker: "date",
                              value: _vm.entry.fecha,
                              required: ""
                            },
                            on: {
                              input: _vm.updateFecha,
                              focus: function($event) {
                                return _vm.focusField("fecha")
                              },
                              blur: _vm.clearFocus
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
                            "has-items": _vm.entry.responsable_id !== null,
                            "is-focused": _vm.activeField == "responsable"
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
                                    "cruds.resguardosPc.fields.responsable"
                                  )
                                )
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("v-select", {
                            key: "responsable-field",
                            attrs: {
                              name: "responsable",
                              label: "nombre",
                              value: _vm.entry.responsable_id,
                              options: _vm.lists.responsable,
                              reduce: function(entry) {
                                return entry.id
                              }
                            },
                            on: {
                              input: _vm.updateResponsable,
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
                                  return _vm.focusField("responsable")
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
                            "has-items": _vm.entry.equipo_id !== null,
                            "is-focused": _vm.activeField == "equipo"
                          }
                        },
                        [
                          _c(
                            "label",
                            { staticClass: "bmd-label-floating required" },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.$t("cruds.resguardosPc.fields.equipo")
                                )
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("v-select", {
                            key: "equipo-field",
                            attrs: {
                              name: "equipo",
                              label: "codigo",
                              value: _vm.entry.equipo_id,
                              options: _vm.lists.equipo,
                              reduce: function(entry) {
                                return entry.id
                              }
                            },
                            on: {
                              input: _vm.updateEquipo,
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
                                  return _vm.focusField("equipo")
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
                            "has-items": _vm.entry.nota,
                            "is-focused": _vm.activeField == "nota"
                          }
                        },
                        [
                          _c("label", { staticClass: "bmd-label-floating" }, [
                            _vm._v(
                              _vm._s(_vm.$t("cruds.resguardosPc.fields.nota"))
                            )
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: { type: "text" },
                            domProps: { value: _vm.entry.nota },
                            on: {
                              input: _vm.updateNota,
                              focus: function($event) {
                                return _vm.focusField("nota")
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
                              _vm._s(_vm.$t("cruds.resguardosPc.fields.pdf"))
                            )
                          ]),
                          _vm._v(" "),
                          _c("attachment", {
                            attrs: {
                              route: _vm.getRoute("resguardos-pcs"),
                              "collection-name": "resguardos_pc_pdf",
                              media: _vm.entry.pdf,
                              "model-id": _vm.$route.params.id,
                              "max-file-size": 7
                            },
                            on: {
                              "file-uploaded": _vm.insertPdfFile,
                              "file-removed": _vm.removePdfFile
                            }
                          })
                        ],
                        1
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
      _c("i", { staticClass: "material-icons" }, [_vm._v("edit")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/adminapp/js/cruds/ResguardosPcs/Edit.vue":
/*!************************************************************!*\
  !*** ./resources/adminapp/js/cruds/ResguardosPcs/Edit.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_1cd0645d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=1cd0645d& */ "./resources/adminapp/js/cruds/ResguardosPcs/Edit.vue?vue&type=template&id=1cd0645d&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/adminapp/js/cruds/ResguardosPcs/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_1cd0645d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_1cd0645d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/adminapp/js/cruds/ResguardosPcs/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/adminapp/js/cruds/ResguardosPcs/Edit.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/ResguardosPcs/Edit.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/ResguardosPcs/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/adminapp/js/cruds/ResguardosPcs/Edit.vue?vue&type=template&id=1cd0645d&":
/*!*******************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/ResguardosPcs/Edit.vue?vue&type=template&id=1cd0645d& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_1cd0645d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=1cd0645d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/ResguardosPcs/Edit.vue?vue&type=template&id=1cd0645d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_1cd0645d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_1cd0645d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);