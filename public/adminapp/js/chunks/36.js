(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/Equipos/Index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/Equipos/Index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_Datatables_DatatableActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Datatables/DatatableActions */ "./resources/adminapp/js/components/Datatables/DatatableActions.vue");
/* harmony import */ var _components_Datatables_TranslatedHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Datatables/TranslatedHeader */ "./resources/adminapp/js/components/Datatables/TranslatedHeader.vue");
/* harmony import */ var _components_Datatables_HeaderSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Datatables/HeaderSettings */ "./resources/adminapp/js/components/Datatables/HeaderSettings.vue");
/* harmony import */ var _components_Datatables_GlobalSearch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Datatables/GlobalSearch */ "./resources/adminapp/js/components/Datatables/GlobalSearch.vue");
/* harmony import */ var _components_Datatables_DatatableSingle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Datatables/DatatableSingle */ "./resources/adminapp/js/components/Datatables/DatatableSingle.vue");
/* harmony import */ var _components_Datatables_DatatableEnum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/Datatables/DatatableEnum */ "./resources/adminapp/js/components/Datatables/DatatableEnum.vue");
/* harmony import */ var _components_Datatables_DatatableList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/Datatables/DatatableList */ "./resources/adminapp/js/components/Datatables/DatatableList.vue");
/* harmony import */ var _components_Datatables_DatatablePictures__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/Datatables/DatatablePictures */ "./resources/adminapp/js/components/Datatables/DatatablePictures.vue");
/* harmony import */ var _components_Datatables_DatatableCheckbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/Datatables/DatatableCheckbox */ "./resources/adminapp/js/components/Datatables/DatatableCheckbox.vue");
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










/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    GlobalSearch: _components_Datatables_GlobalSearch__WEBPACK_IMPORTED_MODULE_4__["default"],
    HeaderSettings: _components_Datatables_HeaderSettings__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      columns: [{
        title: 'cruds.equipo.fields.id',
        field: 'id',
        thComp: _components_Datatables_TranslatedHeader__WEBPACK_IMPORTED_MODULE_2__["default"],
        sortable: true,
        colStyle: 'width: 100px;'
      }, {
        title: 'cruds.equipo.fields.codigo',
        field: 'codigo',
        thComp: _components_Datatables_TranslatedHeader__WEBPACK_IMPORTED_MODULE_2__["default"],
        sortable: true
      }, {
        title: 'cruds.equipo.fields.owner',
        field: 'owner.name',
        thComp: _components_Datatables_TranslatedHeader__WEBPACK_IMPORTED_MODULE_2__["default"],
        tdComp: _components_Datatables_DatatableSingle__WEBPACK_IMPORTED_MODULE_5__["default"],
        sortable: true
      }, {
        title: 'cruds.equipo.fields.tipo',
        field: 'tipo',
        thComp: _components_Datatables_TranslatedHeader__WEBPACK_IMPORTED_MODULE_2__["default"],
        sortable: true,
        tdComp: _components_Datatables_DatatableEnum__WEBPACK_IMPORTED_MODULE_6__["default"]
      }, {
        title: 'cruds.equipo.fields.marca',
        field: 'marca.nombre',
        thComp: _components_Datatables_TranslatedHeader__WEBPACK_IMPORTED_MODULE_2__["default"],
        tdComp: _components_Datatables_DatatableSingle__WEBPACK_IMPORTED_MODULE_5__["default"],
        sortable: true
      }, {
        title: 'cruds.equipo.fields.modelo',
        field: 'modelo',
        thComp: _components_Datatables_TranslatedHeader__WEBPACK_IMPORTED_MODULE_2__["default"],
        sortable: true
      }, {
        title: 'cruds.equipo.fields.procesador',
        field: 'procesador.nombre',
        thComp: _components_Datatables_TranslatedHeader__WEBPACK_IMPORTED_MODULE_2__["default"],
        tdComp: _components_Datatables_DatatableSingle__WEBPACK_IMPORTED_MODULE_5__["default"],
        sortable: true
      }, {
        title: 'cruds.equipo.fields.memoria_ram',
        field: 'memoria_ram.tipo',
        thComp: _components_Datatables_TranslatedHeader__WEBPACK_IMPORTED_MODULE_2__["default"],
        tdComp: _components_Datatables_DatatableSingle__WEBPACK_IMPORTED_MODULE_5__["default"],
        sortable: true
      }, {
        title: 'cruds.equipo.fields.disco_duro',
        field: 'disco_duro.capacidad',
        thComp: _components_Datatables_TranslatedHeader__WEBPACK_IMPORTED_MODULE_2__["default"],
        tdComp: _components_Datatables_DatatableSingle__WEBPACK_IMPORTED_MODULE_5__["default"],
        sortable: true
      }, {
        title: 'cruds.equipo.fields.periferico',
        field: 'periferico.nombre',
        thComp: _components_Datatables_TranslatedHeader__WEBPACK_IMPORTED_MODULE_2__["default"],
        tdComp: _components_Datatables_DatatableList__WEBPACK_IMPORTED_MODULE_7__["default"]
      }, {
        title: 'cruds.equipo.fields.fotos',
        field: 'fotos',
        thComp: _components_Datatables_TranslatedHeader__WEBPACK_IMPORTED_MODULE_2__["default"],
        tdComp: _components_Datatables_DatatablePictures__WEBPACK_IMPORTED_MODULE_8__["default"]
      }, {
        title: 'cruds.equipo.fields.estatus',
        field: 'estatus',
        thComp: _components_Datatables_TranslatedHeader__WEBPACK_IMPORTED_MODULE_2__["default"],
        tdComp: _components_Datatables_DatatableCheckbox__WEBPACK_IMPORTED_MODULE_9__["default"],
        sortable: true
      }, {
        title: 'cruds.equipo.fields.created_at',
        field: 'created_at',
        thComp: _components_Datatables_TranslatedHeader__WEBPACK_IMPORTED_MODULE_2__["default"],
        sortable: true
      }, {
        title: 'cruds.equipo.fields.updated_at',
        field: 'updated_at',
        thComp: _components_Datatables_TranslatedHeader__WEBPACK_IMPORTED_MODULE_2__["default"],
        sortable: true
      }, {
        title: 'cruds.equipo.fields.deleted_at',
        field: 'deleted_at',
        thComp: _components_Datatables_TranslatedHeader__WEBPACK_IMPORTED_MODULE_2__["default"],
        sortable: true
      }, {
        title: 'global.actions',
        thComp: _components_Datatables_TranslatedHeader__WEBPACK_IMPORTED_MODULE_2__["default"],
        tdComp: _components_Datatables_DatatableActions__WEBPACK_IMPORTED_MODULE_1__["default"],
        visible: true,
        thClass: 'text-right',
        tdClass: 'text-right td-actions',
        colStyle: 'width: 150px;'
      }],
      query: {
        sort: 'id',
        order: 'desc',
        limit: 100,
        s: ''
      },
      xprops: {
        module: 'EquiposIndex',
        route: 'equipos',
        permission_prefix: 'equipo_'
      }
    };
  },
  beforeDestroy: function beforeDestroy() {
    this.resetState();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('EquiposIndex', ['data', 'total', 'loading'])),
  watch: {
    query: {
      handler: function handler(query) {
        this.setQuery(query);
        this.fetchIndexData();
      },
      deep: true
    }
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('EquiposIndex', ['fetchIndexData', 'setQuery', 'resetState']))
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/Equipos/Index.vue?vue&type=template&id=5ad0d32c&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/Equipos/Index.vue?vue&type=template&id=5ad0d32c& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "card" }, [
          _c(
            "div",
            { staticClass: "card-header card-header-primary card-header-icon" },
            [
              _vm._m(0),
              _vm._v(" "),
              _c("h4", { staticClass: "card-title" }, [
                _vm._v(
                  "\n            " +
                    _vm._s(_vm.$t("global.table")) +
                    "\n            "
                ),
                _c("strong", [_vm._v(_vm._s(_vm.$t("cruds.equipo.title")))])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card-body" },
            [
              _vm.$can(_vm.xprops.permission_prefix + "create")
                ? _c(
                    "router-link",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { to: { name: _vm.xprops.route + ".create" } }
                    },
                    [
                      _c("i", { staticClass: "material-icons" }, [
                        _vm._v("\n              add\n            ")
                      ]),
                      _vm._v(
                        "\n            " +
                          _vm._s(_vm.$t("global.add")) +
                          "\n          "
                      )
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default",
                  class: { disabled: _vm.loading },
                  attrs: { type: "button", disabled: _vm.loading },
                  on: { click: _vm.fetchIndexData }
                },
                [
                  _c(
                    "i",
                    {
                      staticClass: "material-icons",
                      class: { "fa-spin": _vm.loading }
                    },
                    [_vm._v("\n              refresh\n            ")]
                  ),
                  _vm._v(
                    "\n            " +
                      _vm._s(_vm.$t("global.refresh")) +
                      "\n          "
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-md-12" },
                [
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.loading,
                          expression: "loading"
                        }
                      ],
                      staticClass: "table-overlay"
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "table-overlay-container" },
                        [
                          _c("material-spinner"),
                          _vm._v(" "),
                          _c("span", [_vm._v("Loading...")])
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "datatable",
                    {
                      attrs: {
                        columns: _vm.columns,
                        data: _vm.data,
                        total: _vm.total,
                        query: _vm.query,
                        xprops: _vm.xprops,
                        HeaderSettings: false,
                        pageSizeOptions: [10, 25, 50, 100]
                      }
                    },
                    [
                      _c("global-search", {
                        staticClass: "pull-left",
                        attrs: { query: _vm.query }
                      }),
                      _vm._v(" "),
                      _c("header-settings", {
                        staticClass: "pull-right",
                        attrs: { columns: _vm.columns }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-icon" }, [
      _c("i", { staticClass: "material-icons" }, [_vm._v("assignment")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/adminapp/js/cruds/Equipos/Index.vue":
/*!*******************************************************!*\
  !*** ./resources/adminapp/js/cruds/Equipos/Index.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_5ad0d32c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=5ad0d32c& */ "./resources/adminapp/js/cruds/Equipos/Index.vue?vue&type=template&id=5ad0d32c&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/adminapp/js/cruds/Equipos/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_5ad0d32c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_5ad0d32c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/adminapp/js/cruds/Equipos/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/adminapp/js/cruds/Equipos/Index.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/Equipos/Index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/Equipos/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/adminapp/js/cruds/Equipos/Index.vue?vue&type=template&id=5ad0d32c&":
/*!**************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/Equipos/Index.vue?vue&type=template&id=5ad0d32c& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_5ad0d32c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=5ad0d32c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/Equipos/Index.vue?vue&type=template&id=5ad0d32c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_5ad0d32c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_5ad0d32c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);