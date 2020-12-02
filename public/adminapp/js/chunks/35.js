(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/Equipos/Edit.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/Equipos/Edit.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_Attachments_Attachment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Attachments/Attachment */ "./resources/adminapp/js/components/Attachments/Attachment.vue");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Attachment: _components_Attachments_Attachment__WEBPACK_IMPORTED_MODULE_1__["default"],
    ClassicEditor: _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  data: function data() {
    return {
      status: '',
      activeField: '',
      editor: _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2___default.a
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('EquiposSingle', ['entry', 'loading', 'lists'])),
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
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('EquiposSingle', ['fetchEditData', 'updateData', 'resetState', 'setCodigo', 'setOwner', 'setTipo', 'setMarca', 'setModelo', 'setProcesador', 'setMemoriaRam', 'setDiscoDuro', 'setPeriferico', 'insertFotosFile', 'removeFotosFile', 'setEstatus', 'setNota'])), {}, {
    updateCodigo: function updateCodigo(e) {
      this.setCodigo(e.target.value);
    },
    updateOwner: function updateOwner(value) {
      this.setOwner(value);
    },
    updateTipo: function updateTipo(value) {
      this.setTipo(value);
    },
    updateMarca: function updateMarca(value) {
      this.setMarca(value);
    },
    updateModelo: function updateModelo(e) {
      this.setModelo(e.target.value);
    },
    updateProcesador: function updateProcesador(value) {
      this.setProcesador(value);
    },
    updateMemoriaRam: function updateMemoriaRam(value) {
      this.setMemoriaRam(value);
    },
    updateDiscoDuro: function updateDiscoDuro(value) {
      this.setDiscoDuro(value);
    },
    updatePeriferico: function updatePeriferico(value) {
      this.setPeriferico(value);
    },
    updateEstatus: function updateEstatus(e) {
      this.setEstatus(e.target.checked);
    },
    updateNota: function updateNota(value) {
      this.setNota(value);
    },
    getRoute: function getRoute(name) {
      return "".concat(axios.defaults.baseURL).concat(name, "/media");
    },
    submitForm: function submitForm() {
      var _this = this;

      this.updateData().then(function () {
        _this.$router.push({
          name: 'equipos.index'
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/Equipos/Edit.vue?vue&type=template&id=7cae3aa0&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/Equipos/Edit.vue?vue&type=template&id=7cae3aa0& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
                      _vm._v(_vm._s(_vm.$t("cruds.equipo.title_singular")))
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
                          _c(
                            "label",
                            { staticClass: "bmd-label-floating required" },
                            [
                              _vm._v(
                                _vm._s(_vm.$t("cruds.equipo.fields.codigo"))
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: { type: "text", required: "" },
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
                            "has-items": _vm.entry.owner_id !== null,
                            "is-focused": _vm.activeField == "owner"
                          }
                        },
                        [
                          _c("label", { staticClass: "bmd-label-floating" }, [
                            _vm._v(_vm._s(_vm.$t("cruds.equipo.fields.owner")))
                          ]),
                          _vm._v(" "),
                          _c("v-select", {
                            key: "owner-field",
                            attrs: {
                              name: "owner",
                              label: "name",
                              value: _vm.entry.owner_id,
                              options: _vm.lists.owner,
                              reduce: function(entry) {
                                return entry.id
                              }
                            },
                            on: {
                              input: _vm.updateOwner,
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
                                  return _vm.focusField("owner")
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
                            "has-items": _vm.entry.tipo,
                            "is-focused": _vm.activeField == "tipo"
                          }
                        },
                        [
                          _c(
                            "label",
                            { staticClass: "bmd-label-floating required" },
                            [_vm._v(_vm._s(_vm.$t("cruds.equipo.fields.tipo")))]
                          ),
                          _vm._v(" "),
                          _c("v-select", {
                            key: "tipo-field",
                            attrs: {
                              name: "tipo",
                              value: _vm.entry.tipo,
                              options: _vm.lists.tipo,
                              reduce: function(entry) {
                                return entry.value
                              }
                            },
                            on: {
                              input: _vm.updateTipo,
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
                                  return _vm.focusField("tipo")
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
                                _vm._s(_vm.$t("cruds.equipo.fields.marca"))
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
                            _vm._v(_vm._s(_vm.$t("cruds.equipo.fields.modelo")))
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
                            "has-items": _vm.entry.procesador_id !== null,
                            "is-focused": _vm.activeField == "procesador"
                          }
                        },
                        [
                          _c(
                            "label",
                            { staticClass: "bmd-label-floating required" },
                            [
                              _vm._v(
                                _vm._s(_vm.$t("cruds.equipo.fields.procesador"))
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("v-select", {
                            key: "procesador-field",
                            attrs: {
                              name: "procesador",
                              label: "nombre",
                              value: _vm.entry.procesador_id,
                              options: _vm.lists.procesador,
                              reduce: function(entry) {
                                return entry.id
                              }
                            },
                            on: {
                              input: _vm.updateProcesador,
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
                                  return _vm.focusField("procesador")
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
                            "has-items": _vm.entry.memoria_ram_id !== null,
                            "is-focused": _vm.activeField == "memoria_ram"
                          }
                        },
                        [
                          _c(
                            "label",
                            { staticClass: "bmd-label-floating required" },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.$t("cruds.equipo.fields.memoria_ram")
                                )
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("v-select", {
                            key: "memoria_ram-field",
                            attrs: {
                              name: "memoria_ram",
                              label: "tipo",
                              value: _vm.entry.memoria_ram_id,
                              options: _vm.lists.memoria_ram,
                              reduce: function(entry) {
                                return entry.id
                              }
                            },
                            on: {
                              input: _vm.updateMemoriaRam,
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
                                  return _vm.focusField("memoria_ram")
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
                            "has-items": _vm.entry.disco_duro_id !== null,
                            "is-focused": _vm.activeField == "disco_duro"
                          }
                        },
                        [
                          _c(
                            "label",
                            { staticClass: "bmd-label-floating required" },
                            [
                              _vm._v(
                                _vm._s(_vm.$t("cruds.equipo.fields.disco_duro"))
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("v-select", {
                            key: "disco_duro-field",
                            attrs: {
                              name: "disco_duro",
                              label: "capacidad",
                              value: _vm.entry.disco_duro_id,
                              options: _vm.lists.disco_duro,
                              reduce: function(entry) {
                                return entry.id
                              }
                            },
                            on: {
                              input: _vm.updateDiscoDuro,
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
                                  return _vm.focusField("disco_duro")
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
                            "has-items": _vm.entry.periferico.length !== 0,
                            "is-focused": _vm.activeField == "periferico"
                          }
                        },
                        [
                          _c("label", { staticClass: "bmd-label-floating" }, [
                            _vm._v(
                              _vm._s(_vm.$t("cruds.equipo.fields.periferico"))
                            )
                          ]),
                          _vm._v(" "),
                          _c("v-select", {
                            key: "periferico-field",
                            attrs: {
                              name: "periferico",
                              label: "nombre",
                              value: _vm.entry.periferico,
                              options: _vm.lists.periferico,
                              closeOnSelect: false,
                              multiple: ""
                            },
                            on: {
                              input: _vm.updatePeriferico,
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
                                  return _vm.focusField("periferico")
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
                        { staticClass: "form-group" },
                        [
                          _c("label", [
                            _vm._v(_vm._s(_vm.$t("cruds.equipo.fields.fotos")))
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "form-group bmd-form-group has-items"
                            },
                            [
                              _c(
                                "label",
                                { staticClass: "bmd-label-floating" },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm.$t("cruds.equipo.fields.fotos_helper")
                                    )
                                  )
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("attachment", {
                            attrs: {
                              route: _vm.getRoute("equipos"),
                              "collection-name": "equipo_fotos",
                              media: _vm.entry.fotos,
                              "model-id": _vm.$route.params.id,
                              "max-file-size": 7,
                              component: "pictures",
                              accept: "image/*"
                            },
                            on: {
                              "file-uploaded": _vm.insertFotosFile,
                              "file-removed": _vm.removeFotosFile
                            }
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
                                _vm.$t("cruds.equipo.fields.estatus_helper")
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
                              _vm._s(_vm.$t("cruds.equipo.fields.estatus"))
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", [
                            _vm._v(_vm._s(_vm.$t("cruds.equipo.fields.nota")))
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

/***/ "./resources/adminapp/js/cruds/Equipos/Edit.vue":
/*!******************************************************!*\
  !*** ./resources/adminapp/js/cruds/Equipos/Edit.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_7cae3aa0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=7cae3aa0& */ "./resources/adminapp/js/cruds/Equipos/Edit.vue?vue&type=template&id=7cae3aa0&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/adminapp/js/cruds/Equipos/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_7cae3aa0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_7cae3aa0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/adminapp/js/cruds/Equipos/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/adminapp/js/cruds/Equipos/Edit.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/Equipos/Edit.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/Equipos/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/adminapp/js/cruds/Equipos/Edit.vue?vue&type=template&id=7cae3aa0&":
/*!*************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/Equipos/Edit.vue?vue&type=template&id=7cae3aa0& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_7cae3aa0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=7cae3aa0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/Equipos/Edit.vue?vue&type=template&id=7cae3aa0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_7cae3aa0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_7cae3aa0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);