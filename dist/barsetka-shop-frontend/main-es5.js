(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/akluzok/workspace/barsetka-shop-frontend/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0PS2":
    /*!**************************************************!*\
      !*** ./src/app/main-page/main-page.component.ts ***!
      \**************************************************/

    /*! exports provided: MainPageComponent */

    /***/
    function PS2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainPageComponent", function () {
        return MainPageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _categories_categories_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../categories/categories.component */
      "IhOl");

      var MainPageComponent = /*#__PURE__*/function () {
        function MainPageComponent() {
          _classCallCheck(this, MainPageComponent);
        }

        _createClass(MainPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MainPageComponent;
      }();

      MainPageComponent.ɵfac = function MainPageComponent_Factory(t) {
        return new (t || MainPageComponent)();
      };

      MainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MainPageComponent,
        selectors: [["app-main-page"]],
        decls: 5,
        vars: 0,
        consts: [["id", "header", 1, "text-bottom"], ["id", "description", 1, "bg-dark", "pt-3"], [1, "text-center", "text-white", "text-description", "px-2", "px-md-5", "pb-5"]],
        template: function MainPageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \uD83D\uDC5D\u041D\u0430\u0439\u043A\u0440\u0430\u0449\u0456 \u0430\u043A\u0441\u0435\u0441\u0443\u0430\u0440\u0438 \u0432 Barsetka.shop \uD83D\uDCBC\uD83C\uDF92 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-categories");
          }
        },
        directives: [_categories_categories_component__WEBPACK_IMPORTED_MODULE_1__["CategoriesComponent"]],
        styles: ["section#header[_ngcontent-%COMP%] {\n\theight: 70vmin;\n\tbackground-image: url('3.jpg');\n\tbackground-position: top;\n\tbackground-size: cover;\n}\n\nsection#description[_ngcontent-%COMP%] {\n\tmin-height: 23vmin;\n\tfont-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsY0FBYztDQUNkLDhCQUE0RDtDQUM1RCx3QkFBd0I7Q0FDeEIsc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGVBQWU7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uI2hlYWRlciB7XG5cdGhlaWdodDogNzB2bWluO1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvbWFpbi1wYWdlLzMuanBnJyk7XG5cdGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcblx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuc2VjdGlvbiNkZXNjcmlwdGlvbiB7XG5cdG1pbi1oZWlnaHQ6IDIzdm1pbjtcblx0Zm9udC1zaXplOiAyNHB4O1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainPageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-main-page',
            templateUrl: './main-page.component.html',
            styleUrls: ['./main-page.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "1JYN":
    /*!************************************************************!*\
      !*** ./src/app/administration/administration.component.ts ***!
      \************************************************************/

    /*! exports provided: AdministrationComponent */

    /***/
    function JYN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdministrationComponent", function () {
        return AdministrationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../_service/user.service */
      "TxWL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function AdministrationComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var adminItem_r69 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/administration/", adminItem_r69.link, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](adminItem_r69.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](adminItem_r69.description);
        }
      }

      var AdministrationComponent = /*#__PURE__*/function () {
        function AdministrationComponent(userService) {
          _classCallCheck(this, AdministrationComponent);

          this.userService = userService;
          this.adminItems = [{
            name: "Категорії",
            description: "додати або змінити товарні категорії",
            link: "categories"
          }, {
            name: "Товари",
            description: "додати або змінити товари",
            link: "products"
          }];
        }

        _createClass(AdministrationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.userService.getCurrentUser().subscribe(function (u) {
              return _this.admin = u;
            });
          }
        }]);

        return AdministrationComponent;
      }();

      AdministrationComponent.ɵfac = function AdministrationComponent_Factory(t) {
        return new (t || AdministrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]));
      };

      AdministrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AdministrationComponent,
        selectors: [["app-administration"]],
        decls: 8,
        vars: 2,
        consts: [["id", "administration", 1, "bg-light"], [1, "container"], [1, "text-dark", "text-center", "pt-3"], [1, "text-center", "text-dark", "pt-1", "pb-3"], [1, "row"], ["class", "col-sm-12 col-md-3 px-3 pb-3", 4, "ngFor", "ngForOf"], [1, "col-sm-12", "col-md-3", "px-3", "pb-3"], [1, "card"], [1, "card-body"], [3, "routerLink"], [1, "card-title"], [1, "card-text", "text-muted"]],
        template: function AdministrationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0410\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0443\u0432\u0430\u043D\u043D\u044F \u0441\u0430\u0439\u0442\u0443");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AdministrationComponent_div_7_Template, 8, 3, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u041F\u0440\u0438\u0432\u0456\u0442 ", ctx.admin.firstName, "\uD83D\uDC4B");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.adminItems);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
        styles: ["section#administration[_ngcontent-%COMP%] {\n  min-height: 85vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYXRpb24vYWRtaW5pc3RyYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmF0aW9uL2FkbWluaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uI2FkbWluaXN0cmF0aW9uIHtcbiAgbWluLWhlaWdodDogODV2aDtcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdministrationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-administration',
            templateUrl: './administration.component.html',
            styleUrls: ['./administration.component.css']
          }]
        }], function () {
          return [{
            type: _service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "24n0":
    /*!*********************************!*\
      !*** ./src/app/app-settings.ts ***!
      \*********************************/

    /*! exports provided: AppSettings */

    /***/
    function n0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppSettings", function () {
        return AppSettings;
      });

      var AppSettings = function AppSettings() {
        _classCallCheck(this, AppSettings);
      };

      AppSettings.INSTA_LINK = '';
      /***/
    },

    /***/
    "2TwG":
    /*!**********************************************!*\
      !*** ./src/app/_service/category.service.ts ***!
      \**********************************************/

    /*! exports provided: CategoryService */

    /***/
    function TwG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoryService", function () {
        return CategoryService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _api_endpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../api-endpoints */
      "Cqkl");

      var httpOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
          'Content-Type': 'application/json',
          'Origin': 'http://localhost:4200'
        })
      };

      var CategoryService = /*#__PURE__*/function () {
        function CategoryService(http) {
          _classCallCheck(this, CategoryService);

          this.http = http;
          this.categoriesUrl = _api_endpoints__WEBPACK_IMPORTED_MODULE_2__["APIEndpoints"].CATEGORIES;
        }

        _createClass(CategoryService, [{
          key: "getAll",
          value: function getAll() {
            return this.http.get(this.categoriesUrl);
          }
        }, {
          key: "getById",
          value: function getById(id) {
            return this.http.get(this.categoriesUrl + '/' + id);
          }
        }, {
          key: "getAllProducts",
          value: function getAllProducts(id) {
            return this.http.get(this.categoriesUrl + '/' + id + '/products');
          }
        }, {
          key: "save",
          value: function save(cat) {
            return this.http.post(this.categoriesUrl, cat);
          }
        }, {
          key: "update",
          value: function update(cat) {
            return this.http.put(this.categoriesUrl, cat);
          }
        }, {
          key: "deleteById",
          value: function deleteById(catId) {
            return this.http["delete"]("".concat(this.categoriesUrl, "/").concat(catId));
          }
        }]);

        return CategoryService;
      }();

      CategoryService.ɵfac = function CategoryService_Factory(t) {
        return new (t || CategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      CategoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CategoryService,
        factory: CategoryService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "4s4Y":
    /*!************************************!*\
      !*** ./src/app/_model/severity.ts ***!
      \************************************/

    /*! exports provided: Severity */

    /***/
    function s4Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Severity", function () {
        return Severity;
      });

      var Severity;

      (function (Severity) {
        Severity[Severity["INFO"] = 0] = "INFO";
      })(Severity || (Severity = {}));
      /***/

    },

    /***/
    "6bh7":
    /*!**********************************************!*\
      !*** ./src/app/_helpers/http-interceptor.ts ***!
      \**********************************************/

    /*! exports provided: HttpInterceptorService */

    /***/
    function bh7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpInterceptorService", function () {
        return HttpInterceptorService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../_service */
      "OWlh");
      /* harmony import */


      var _service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../_service/user.service */
      "TxWL");

      var HttpInterceptorService = /*#__PURE__*/function () {
        function HttpInterceptorService(authenticationService, userService) {
          _classCallCheck(this, HttpInterceptorService);

          this.authenticationService = authenticationService;
          this.userService = userService;
        }

        _createClass(HttpInterceptorService, [{
          key: "intercept",
          value: function intercept(req, next) {
            var authReq = req;
            this.authenticationService.getCurrentAuthentication().subscribe(function (data) {
              if (data) {
                authReq = req.clone({
                  headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer ".concat(data.token)
                  })
                });
              }
            });
            return next.handle(authReq);
          }
        }]);

        return HttpInterceptorService;
      }();

      HttpInterceptorService.ɵfac = function HttpInterceptorService_Factory(t) {
        return new (t || HttpInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]));
      };

      HttpInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: HttpInterceptorService,
        factory: HttpInterceptorService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HttpInterceptorService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], function () {
          return [{
            type: _service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
          }, {
            type: _service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "BsnK":
    /*!************************************************!*\
      !*** ./src/app/about-us/about-us.component.ts ***!
      \************************************************/

    /*! exports provided: AboutUsComponent */

    /***/
    function BsnK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function () {
        return AboutUsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AboutUsComponent = /*#__PURE__*/function () {
        function AboutUsComponent() {
          _classCallCheck(this, AboutUsComponent);
        }

        _createClass(AboutUsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AboutUsComponent;
      }();

      AboutUsComponent.ɵfac = function AboutUsComponent_Factory(t) {
        return new (t || AboutUsComponent)();
      };

      AboutUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AboutUsComponent,
        selectors: [["app-about-us"]],
        decls: 20,
        vars: 0,
        consts: [["id", "about-us", 1, "bg-dark", "py-5", "px-sm-0", "px-md-5"], [1, "container", "text-white", "text-justify", "px-5"], [1, "row"], [1, "col-sm-12", "col-md-6", "my-auto"], [1, "text-center"], [1, "col-sm-12", "col-md-6"], ["src", "../../assets/images/about-us/4.jpg", 1, "img-fluid", "rounded"], [1, "d-none", "d-md-inline", "col-sm-12", "col-md-6"], ["src", "../../assets/images/about-us/5.jpg", 1, "img-fluid", "rounded"], [1, "d-inline", "d-md-none", "col-sm-12", "col-md-6"]],
        template: function AboutUsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041F\u0440\u043E \u043D\u0430\u0441:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u0417\u0434\u0440\u0430\u0441\u0442\u0432\u0443\u0439\u0442\u0435, \u0412\u0430\u0441 \u0432\u0456\u0442\u0430\u0454 \u0456\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u043C\u0430\u0433\u0430\u0437\u0438\u043D Barsetka. \u041C\u0438 \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u0456\u0437\u0443\u0454\u043C\u0441\u044F \u043D\u0430 \u044F\u043A\u043E\u0441\u0442\u0456, \u0437\u0440\u0443\u0447\u043D\u043E\u0441\u0442\u0456, \u043F\u043E\u0432\u0430\u0437\u0456 \u0434\u043E \u043A\u043B\u0456\u0454\u043D\u0442\u0430. \u041D\u0430\u0434\u0430\u0454\u043C\u043E \u0448\u0438\u0440\u043E\u043A\u0438\u0439 \u0441\u043F\u0435\u043A\u0442\u0440 \u043A\u0440\u0430\u0441\u0438, \u0435\u043B\u0435\u0433\u0430\u043D\u0442\u043D\u043E\u0441\u0442\u0456. \u0412\u0441\u0435 \u0442\u043E\u043C\u0443, \u0449\u043E \u043F\u0440\u043E\u0434\u0430\u0454\u043C\u043E \u0437\u0440\u0443\u0447\u043D\u0456, \u043D\u0430\u0434\u0456\u0439\u043D\u0456 \u0440\u044E\u043A\u0437\u0430\u043A\u0438, \u0441\u0443\u043C\u043A\u0438, \u0431\u0430\u043D\u0430\u043D\u043A\u0438, \u0433\u0430\u043C\u0430\u043D\u0446\u0456, \u043A\u043B\u0430\u0442\u0447\u0456. \u041A\u043E\u0436\u0435\u043D \u0440\u0430\u0437 \u043A\u043E\u043B\u0438 \u0412\u0438 \u043D\u0430\u0442\u0438\u0441\u043A\u0430\u0454\u0442\u0435 \u201C\u041A\u0443\u043F\u0438\u0442\u0438\u201D \u043C\u0438 \u0440\u043E\u0437\u0443\u043C\u0456\u0454\u043C\u043E, \u0449\u043E \u0440\u043E\u0431\u0438\u043C\u043E \u043B\u044E\u0434\u0435\u0439 \u0449\u0430\u0441\u043B\u0438\u0432\u0456\u0448\u0438\u043C\u0438. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u041D\u0430\u0448\u0430 \u0446\u0456\u043B\u044C:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " \u0411\u0443\u0442\u0438 \u043A\u043E\u0440\u0438\u0441\u043D\u0438\u043C\u0438 \u2013 \u043D\u0430\u0448\u0430 \u0433\u043E\u043B\u043E\u0432\u043D\u0430 \u0446\u0456\u043B\u044C. \u041C\u0438 \u0432\u0456\u0440\u0438\u043C\u043E, \u0449\u043E \u0441\u0443\u043C\u043A\u0438 \u0456\u0441\u043D\u0443\u044E\u0442\u044C \u0434\u043B\u044F \u043F\u043E\u043B\u0435\u0433\u0448\u0435\u043D\u043D\u044F \u0436\u0438\u0442\u0442\u044F, \u0430 \u043C\u0438 \u0434\u043B\u044F \u0442\u043E\u0433\u043E \u0449\u043E\u0431 \u0457\u0445 \u0437\u043D\u0430\u0439\u0442\u0438. \u041C\u0438 \u0434\u043E\u043F\u043E\u043C\u0430\u0433\u0430\u0454\u043C\u043E \u0437\u043D\u0430\u0439\u0442\u0438 \u0441\u0430\u043C\u0435 \u0442\u0435, \u0449\u043E \u0412\u0430\u043C \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u043E \u0437 \u043C\u0456\u043D\u0456\u043C\u0430\u043B\u044C\u043D\u043E\u044E \u0442\u0440\u0430\u0442\u043E\u044E \u0434\u043E\u0440\u043E\u0433\u043E\u0446\u0456\u043D\u043D\u043E\u0433\u043E \u0447\u0430\u0441\u0443. \u041C\u0438 \u043D\u0430\u0437\u0430\u0432\u0436\u0434\u0438 \u043F\u043E\u0437\u0431\u0430\u0432\u0438\u043C\u043E \u043D\u0430\u0448\u0438\u0445 \u043F\u043E\u043A\u0443\u043F\u0446\u0456\u0432 \u0432\u0456\u0434 \u043D\u0435\u043F\u0440\u0438\u0454\u043C\u043D\u0438\u0445 \u043A\u043E\u043C\u043F\u0440\u043E\u043C\u0456\u0441\u0456\u0432 \u0442\u0430 \u0437\u0440\u043E\u0431\u0438\u043C\u043E \u0457\u0445 \u0449\u0430\u0441\u043B\u0438\u0432\u0456\u0448\u0438\u043C\u0438 \u0432\u0436\u0435 \u0437\u0430\u0440\u0430\u0437. \u041C\u0438 \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u0456 \u0449\u043E\u0431 \u0437\u0434\u0456\u0439\u0441\u043D\u044E\u0432\u0430\u0442\u0438 \u0412\u0430\u0448\u0456 \u043C\u0440\u0456\u0457 \u043B\u0435\u0433\u043A\u043E! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutUsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-about-us',
            templateUrl: './about-us.component.html',
            styleUrls: ['./about-us.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "Cqkl":
    /*!**********************************!*\
      !*** ./src/app/api-endpoints.ts ***!
      \**********************************/

    /*! exports provided: APIEndpoints */

    /***/
    function Cqkl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "APIEndpoints", function () {
        return APIEndpoints;
      });

      var APIEndpoints = function APIEndpoints() {
        _classCallCheck(this, APIEndpoints);
      }; // public static BASE = 'http://localhost:8080/api';


      APIEndpoints.BASE = 'https://barsetka-server.herokuapp.com/api';
      APIEndpoints.CATEGORIES = APIEndpoints.BASE + '/categories';
      APIEndpoints.PRODUCTS = APIEndpoints.BASE + '/products';
      APIEndpoints.CITIES = APIEndpoints.BASE + '/cities';
      APIEndpoints.DELIVERIES = APIEndpoints.BASE + '/deliveries';
      APIEndpoints.AUTH = APIEndpoints.BASE + '/signin';
      APIEndpoints.LOGOUT = APIEndpoints.BASE + '/logout';
      APIEndpoints.LOGS = APIEndpoints.BASE + '/logs';
      /***/
    },

    /***/
    "Hujq":
    /*!**********************************************************************************************!*\
      !*** ./src/app/category-details-administration/category-details-administration.component.ts ***!
      \**********************************************************************************************/

    /*! exports provided: CategoryDetailsAdministrationComponent */

    /***/
    function Hujq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoryDetailsAdministrationComponent", function () {
        return CategoryDetailsAdministrationComponent;
      });
      /* harmony import */


      var _model_category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../_model/category */
      "aDtp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _service_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../_service/category.service */
      "2TwG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function CategoryDetailsAdministrationComponent_div_14_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " \u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u044F \u0434\u043E\u0434\u0430\u043D\u0430 \u2116");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r31.cat.id);
        }
      }

      function CategoryDetailsAdministrationComponent_div_14_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " \u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u044F \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u0430 \u2116");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r32.cat.id);
        }
      }

      function CategoryDetailsAdministrationComponent_div_14_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u041F\u043E\u043C\u0438\u043B\u043A\u0430. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function CategoryDetailsAdministrationComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CategoryDetailsAdministrationComponent_div_14_div_1_Template, 5, 1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CategoryDetailsAdministrationComponent_div_14_div_2_Template, 5, 1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CategoryDetailsAdministrationComponent_div_14_div_3_Template, 3, 0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r30.create);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r30.create);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r30.err);
        }
      }

      var CategoryDetailsAdministrationComponent = /*#__PURE__*/function () {
        function CategoryDetailsAdministrationComponent(categoryService, route) {
          _classCallCheck(this, CategoryDetailsAdministrationComponent);

          this.categoryService = categoryService;
          this.route = route;
        }

        _createClass(CategoryDetailsAdministrationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            var path = this.route.snapshot.paramMap.get('categoryId');

            if (path === 'new') {
              this.create = true;
              this.cat = new _model_category__WEBPACK_IMPORTED_MODULE_0__["Category"]();
            } else {
              this.categoryService.getById(+path).subscribe(function (cat) {
                return _this2.cat = cat;
              });
            }
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this3 = this;

            this.submitted = true;

            if (this.cat.id > 0) {
              this.create = false;
            }

            if (this.create) {
              this.categoryService.save(this.cat).subscribe(function (res) {
                _this3.err = false;
                _this3.cat = res;
              });
            } else {
              this.categoryService.update(this.cat).subscribe(function (res) {
                _this3.err = false;
              }, function (err) {
                console.log(err);
                _this3.err = false;
              });
            }
          }
        }]);

        return CategoryDetailsAdministrationComponent;
      }();

      CategoryDetailsAdministrationComponent.ɵfac = function CategoryDetailsAdministrationComponent_Factory(t) {
        return new (t || CategoryDetailsAdministrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
      };

      CategoryDetailsAdministrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: CategoryDetailsAdministrationComponent,
        selectors: [["app-category-details-administration"]],
        decls: 15,
        vars: 3,
        consts: [[1, "bg-secondary"], [1, "container"], [1, "form-group"], ["for", "exampleInputEmail1"], ["type", "text", "id", "exampleInputEmail1", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "emailHelp", 1, "form-text", "text-muted"], ["for", "description"], ["type", "text", "id", "description", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", "my-3", 3, "click"], ["class", "pb-3", 4, "ngIf"], [1, "pb-3"], ["class", "alert alert-success", "role", "alert", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-success"], [1, "fa", "fa-check-circle"], [1, "text-bold"], [1, "alert", "alert-danger"], [1, "fa", "fa-times-circle"]],
        template: function CategoryDetailsAdministrationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u041D\u0430\u0437\u0432\u0430:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CategoryDetailsAdministrationComponent_Template_input_ngModelChange_5_listener($event) {
              return ctx.cat.name = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "small", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u041E\u0431\u043E\u0432'\u044F\u0437\u043A\u043E\u0432\u0435 \u043F\u043E\u043B\u0435.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u041E\u043F\u0438\u0441:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CategoryDetailsAdministrationComponent_Template_input_ngModelChange_11_listener($event) {
              return ctx.cat.description = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CategoryDetailsAdministrationComponent_Template_button_click_12_listener() {
              return ctx.submit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, CategoryDetailsAdministrationComponent_div_14_Template, 4, 3, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.cat.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.cat.description);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
        styles: [".alert[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcnktZGV0YWlscy1hZG1pbmlzdHJhdGlvbi9jYXRlZ29yeS1kZXRhaWxzLWFkbWluaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0FBQ1giLCJmaWxlIjoic3JjL2FwcC9jYXRlZ29yeS1kZXRhaWxzLWFkbWluaXN0cmF0aW9uL2NhdGVnb3J5LWRldGFpbHMtYWRtaW5pc3RyYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGVydCB7XG4gIG1hcmdpbjogMDtcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CategoryDetailsAdministrationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-category-details-administration',
            templateUrl: './category-details-administration.component.html',
            styleUrls: ['./category-details-administration.component.css']
          }]
        }], function () {
          return [{
            type: _service_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "IhOl":
    /*!****************************************************!*\
      !*** ./src/app/categories/categories.component.ts ***!
      \****************************************************/

    /*! exports provided: CategoriesComponent */

    /***/
    function IhOl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function () {
        return CategoriesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _service_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../_service/category.service */
      "2TwG");
      /* harmony import */


      var _service_log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../_service/log.service */
      "OK7I");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function CategoriesComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sorry currently no categories available...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CategoriesComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var cat_r41 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/categories/", cat_r41.id, "/products");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cat_r41.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cat_r41.description);
        }
      }

      var CategoriesComponent = /*#__PURE__*/function () {
        function CategoriesComponent(categoryService, logService) {
          _classCallCheck(this, CategoriesComponent);

          this.categoryService = categoryService;
          this.logService = logService;
        }

        _createClass(CategoriesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.categoryService.getAll().subscribe(function (data) {
              return _this4.categories = data;
            }, function (error) {
              return console.log(error);
            });
          }
        }]);

        return CategoriesComponent;
      }();

      CategoriesComponent.ɵfac = function CategoriesComponent_Factory(t) {
        return new (t || CategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_log_service__WEBPACK_IMPORTED_MODULE_2__["LogService"]));
      };

      CategoriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CategoriesComponent,
        selectors: [["app-categories"]],
        decls: 5,
        vars: 2,
        consts: [["id", "categories", 1, "py-3", "px-2", "px-lg-5"], [1, "container-fluid", "text-center"], ["class", "text-white", 4, "ngIf"], [1, "row", "d-flex", "justify-content-center"], ["class", "col-sm-4 col-lg-3 mb-3", 4, "ngFor", "ngForOf"], [1, "text-white"], [1, "col-sm-4", "col-lg-3", "mb-3"], [1, "card"], [1, "card-body"], [3, "routerLink"], [1, "card-title"], [1, "card-text"]],
        template: function CategoriesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CategoriesComponent_div_2_Template, 2, 0, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CategoriesComponent_div_4_Template, 8, 3, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.categories || ctx.categories.length == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
        styles: ["section#categories[_ngcontent-%COMP%] {\n\tbackground-image: url('1.jpg');\n\tbackground-size: cover;\n\tbackground-color: rgba(41, 43, 44, .7);\n\tmin-height: 85vh;\n}\n\ndiv.card[_ngcontent-%COMP%] {\n\tbackground-color: rgba(255, 255, 255, .5);\n\tmin-height: 40vmin;\n\tmin-width: 20vmax;\n}\n\n.category-name[_ngcontent-%COMP%] {\n\tfont-size: 28px;\n\tcolor: rgba(255, 255, 255, .8);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyw4QkFBNkQ7Q0FDN0Qsc0JBQXNCO0NBQ3RCLHNDQUFzQztDQUN0QyxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyx5Q0FBeUM7Q0FDekMsa0JBQWtCO0NBQ2xCLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZiw4QkFBOEI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9jYXRlZ29yaWVzL2NhdGVnb3JpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24jY2F0ZWdvcmllcyB7XG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9jYXRlZ29yaWVzLzEuanBnJyk7XG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDEsIDQzLCA0NCwgLjcpO1xuXHRtaW4taGVpZ2h0OiA4NXZoO1xufVxuXG5kaXYuY2FyZCB7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpO1xuXHRtaW4taGVpZ2h0OiA0MHZtaW47XG5cdG1pbi13aWR0aDogMjB2bWF4O1xufVxuXG4uY2F0ZWdvcnktbmFtZSB7XG5cdGZvbnQtc2l6ZTogMjhweDtcblx0Y29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjgpO1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoriesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-categories',
            templateUrl: './categories.component.html',
            styleUrls: ['./categories.component.css']
          }]
        }], function () {
          return [{
            type: _service_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"]
          }, {
            type: _service_log_service__WEBPACK_IMPORTED_MODULE_2__["LogService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "MeDL":
    /*!*********************************************!*\
      !*** ./src/app/_service/product.service.ts ***!
      \*********************************************/

    /*! exports provided: ProductService */

    /***/
    function MeDL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductService", function () {
        return ProductService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _api_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../api-endpoints */
      "Cqkl");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var ProductService = /*#__PURE__*/function () {
        function ProductService(http) {
          _classCallCheck(this, ProductService);

          this.http = http;
          this.productsUrl = _api_endpoints__WEBPACK_IMPORTED_MODULE_1__["APIEndpoints"].PRODUCTS;
        }

        _createClass(ProductService, [{
          key: "getById",
          value: function getById(id) {
            return this.http.get(this.productsUrl + '/' + id);
          }
        }, {
          key: "save",
          value: function save(prod) {
            return this.http.post(this.productsUrl, prod);
          }
        }, {
          key: "update",
          value: function update(prod) {
            return this.http.put(this.productsUrl, prod);
          }
        }, {
          key: "deleteById",
          value: function deleteById(prid) {
            return this.http["delete"]("".concat(this.productsUrl, "/").concat(prid));
          }
        }]);

        return ProductService;
      }();

      ProductService.ɵfac = function ProductService_Factory(t) {
        return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ProductService,
        factory: ProductService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "OK7I":
    /*!*****************************************!*\
      !*** ./src/app/_service/log.service.ts ***!
      \*****************************************/

    /*! exports provided: LogService */

    /***/
    function OK7I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogService", function () {
        return LogService;
      });
      /* harmony import */


      var _api_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../api-endpoints */
      "Cqkl");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var LogService = /*#__PURE__*/function () {
        function LogService(http) {
          _classCallCheck(this, LogService);

          this.http = http;
          this.logUrl = _api_endpoints__WEBPACK_IMPORTED_MODULE_0__["APIEndpoints"].LOGS;
        }

        _createClass(LogService, [{
          key: "save",
          value: function save(log) {
            return this.http.post(this.logUrl, log);
          }
        }]);

        return LogService;
      }();

      LogService.ɵfac = function LogService_Factory(t) {
        return new (t || LogService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      LogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: LogService,
        factory: LogService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LogService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "OWlh":
    /*!***********************************!*\
      !*** ./src/app/_service/index.ts ***!
      \***********************************/

    /*! exports provided: CartService, AuthenticationService, GeographyService */

    /***/
    function OWlh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./cart.service */
      "elDE");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CartService", function () {
        return _cart_service__WEBPACK_IMPORTED_MODULE_0__["CartService"];
      });
      /* harmony import */


      var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./authentication.service */
      "tZZt");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
        return _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"];
      });
      /* harmony import */


      var _geography_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./geography.service */
      "uDmA");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "GeographyService", function () {
        return _geography_service__WEBPACK_IMPORTED_MODULE_2__["GeographyService"];
      });
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./navbar/navbar.component */
      "kWWo");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./footer/footer.component */
      "fp1T");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'barsetka-shop-frontend';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 3,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
          }
        },
        directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "TpFj":
    /*!***********************************!*\
      !*** ./src/app/_model/product.ts ***!
      \***********************************/

    /*! exports provided: Product */

    /***/
    function TpFj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Product", function () {
        return Product;
      });

      var Product = function Product() {
        _classCallCheck(this, Product);

        this.photoUrls = [''];
      };
      /***/

    },

    /***/
    "TxWL":
    /*!******************************************!*\
      !*** ./src/app/_service/user.service.ts ***!
      \******************************************/

    /*! exports provided: UserService */

    /***/
    function TxWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return UserService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var UserService = /*#__PURE__*/function () {
        function UserService() {
          _classCallCheck(this, UserService);
        }

        _createClass(UserService, [{
          key: "getCurrentUser",
          value: function getCurrentUser() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(JSON.parse(localStorage.getItem('currentUser')));
          }
        }, {
          key: "saveCurrentUser",
          value: function saveCurrentUser(currentUser) {
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
          }
        }]);

        return UserService;
      }();

      UserService.ɵfac = function UserService_Factory(t) {
        return new (t || UserService)();
      };

      UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: UserService,
        factory: UserService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "UDs1":
    /*!***************************************************!*\
      !*** ./src/app/_service/delivery-item.service.ts ***!
      \***************************************************/

    /*! exports provided: DeliveryItemService */

    /***/
    function UDs1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeliveryItemService", function () {
        return DeliveryItemService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _api_endpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../api-endpoints */
      "Cqkl");

      var httpOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
          'Content-Type': 'application/json',
          'Origin': 'http://localhost:4200'
        })
      };

      var DeliveryItemService = /*#__PURE__*/function () {
        function DeliveryItemService(http) {
          _classCallCheck(this, DeliveryItemService);

          this.http = http;
          this.deliveriesUrl = _api_endpoints__WEBPACK_IMPORTED_MODULE_2__["APIEndpoints"].DELIVERIES;
        }

        _createClass(DeliveryItemService, [{
          key: "addNewItem",
          value: function addNewItem(item) {
            return this.http.post(this.deliveriesUrl, item);
          }
        }]);

        return DeliveryItemService;
      }();

      DeliveryItemService.ɵfac = function DeliveryItemService_Factory(t) {
        return new (t || DeliveryItemService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      DeliveryItemService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: DeliveryItemService,
        factory: DeliveryItemService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeliveryItemService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _helpers_http_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./_helpers/http-interceptor */
      "6bh7");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./navbar/navbar.component */
      "kWWo");
      /* harmony import */


      var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./main-page/main-page.component */
      "0PS2");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./footer/footer.component */
      "fp1T");
      /* harmony import */


      var _categories_categories_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./categories/categories.component */
      "IhOl");
      /* harmony import */


      var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./about-us/about-us.component */
      "BsnK");
      /* harmony import */


      var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./contacts/contacts.component */
      "iZNs");
      /* harmony import */


      var _products_products_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./products/products.component */
      "ziXE");
      /* harmony import */


      var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./product-details/product-details.component */
      "ylPK");
      /* harmony import */


      var _delivery_form_delivery_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./delivery-form/delivery-form.component */
      "uGZk");
      /* harmony import */


      var _user_cart_user_cart_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./user-cart/user-cart.component */
      "urJg");
      /* harmony import */


      var _administration_administration_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./administration/administration.component */
      "1JYN");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./login/login.component */
      "vtpD");
      /* harmony import */


      var _categories_administration_categories_administration_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./categories-administration/categories-administration.component */
      "adhq");
      /* harmony import */


      var _category_details_administration_category_details_administration_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./category-details-administration/category-details-administration.component */
      "Hujq");
      /* harmony import */


      var _products_administration_products_administration_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./products-administration/products-administration.component */
      "ck6K");
      /* harmony import */


      var _product_details_administration_product_details_administration_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./product-details-administration/product-details-administration.component */
      "paOv");
      /* harmony import */


      var _geolocation_interceptor_geolocation_interceptor_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./geolocation-interceptor/geolocation-interceptor.component */
      "pfiG");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
          useClass: _helpers_http_interceptor__WEBPACK_IMPORTED_MODULE_1__["HttpInterceptorService"],
          multi: true
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_8__["MainPageComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _categories_categories_component__WEBPACK_IMPORTED_MODULE_10__["CategoriesComponent"], _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_11__["AboutUsComponent"], _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_12__["ContactsComponent"], _products_products_component__WEBPACK_IMPORTED_MODULE_13__["ProductsComponent"], _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_14__["ProductDetailsComponent"], _delivery_form_delivery_form_component__WEBPACK_IMPORTED_MODULE_15__["DeliveryFormComponent"], _user_cart_user_cart_component__WEBPACK_IMPORTED_MODULE_16__["UserCartComponent"], _administration_administration_component__WEBPACK_IMPORTED_MODULE_17__["AdministrationComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"], _categories_administration_categories_administration_component__WEBPACK_IMPORTED_MODULE_19__["CategoriesAdministrationComponent"], _category_details_administration_category_details_administration_component__WEBPACK_IMPORTED_MODULE_20__["CategoryDetailsAdministrationComponent"], _products_administration_products_administration_component__WEBPACK_IMPORTED_MODULE_21__["ProductsAdministrationComponent"], _product_details_administration_product_details_administration_component__WEBPACK_IMPORTED_MODULE_22__["ProductDetailsAdministrationComponent"], _geolocation_interceptor_geolocation_interceptor_component__WEBPACK_IMPORTED_MODULE_23__["GeolocationInterceptorComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_8__["MainPageComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _categories_categories_component__WEBPACK_IMPORTED_MODULE_10__["CategoriesComponent"], _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_11__["AboutUsComponent"], _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_12__["ContactsComponent"], _products_products_component__WEBPACK_IMPORTED_MODULE_13__["ProductsComponent"], _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_14__["ProductDetailsComponent"], _delivery_form_delivery_form_component__WEBPACK_IMPORTED_MODULE_15__["DeliveryFormComponent"], _user_cart_user_cart_component__WEBPACK_IMPORTED_MODULE_16__["UserCartComponent"], _administration_administration_component__WEBPACK_IMPORTED_MODULE_17__["AdministrationComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"], _categories_administration_categories_administration_component__WEBPACK_IMPORTED_MODULE_19__["CategoriesAdministrationComponent"], _category_details_administration_category_details_administration_component__WEBPACK_IMPORTED_MODULE_20__["CategoryDetailsAdministrationComponent"], _products_administration_products_administration_component__WEBPACK_IMPORTED_MODULE_21__["ProductsAdministrationComponent"], _product_details_administration_product_details_administration_component__WEBPACK_IMPORTED_MODULE_22__["ProductDetailsAdministrationComponent"], _geolocation_interceptor_geolocation_interceptor_component__WEBPACK_IMPORTED_MODULE_23__["GeolocationInterceptorComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]],
            providers: [{
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
              useClass: _helpers_http_interceptor__WEBPACK_IMPORTED_MODULE_1__["HttpInterceptorService"],
              multi: true
            }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "aDtp":
    /*!************************************!*\
      !*** ./src/app/_model/category.ts ***!
      \************************************/

    /*! exports provided: Category */

    /***/
    function aDtp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Category", function () {
        return Category;
      });

      var Category = function Category() {
        _classCallCheck(this, Category);
      };
      /***/

    },

    /***/
    "adhq":
    /*!**********************************************************************************!*\
      !*** ./src/app/categories-administration/categories-administration.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: CategoriesAdministrationComponent */

    /***/
    function adhq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoriesAdministrationComponent", function () {
        return CategoriesAdministrationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _service_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../_service/category.service */
      "2TwG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function CategoriesAdministrationComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u270D\uFE0F \u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoriesAdministrationComponent_div_8_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

            var cat_r36 = ctx.$implicit;

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r37["delete"](cat_r36);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u274C \u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var cat_r36 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cat_r36.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cat_r36.description, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/administration/categories/", cat_r36.id, "");
        }
      }

      function CategoriesAdministrationComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041F\u043E\u043C\u0438\u043B\u043A\u0430. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var CategoriesAdministrationComponent = /*#__PURE__*/function () {
        function CategoriesAdministrationComponent(categoryService) {
          _classCallCheck(this, CategoriesAdministrationComponent);

          this.categoryService = categoryService;
          this.categories = [];
        }

        _createClass(CategoriesAdministrationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.categoryService.getAll().subscribe(function (cats) {
              return _this5.categories = cats;
            });
          }
        }, {
          key: "delete",
          value: function _delete(cat) {
            var _this6 = this;

            this.categories = this.categories.filter(function (c) {
              return c.id !== cat.id;
            });
            this.categoryService.deleteById(cat.id).subscribe(function (res) {
              return _this6.deleted = true;
            }, function (err) {
              return _this6.err = err;
            });
          }
        }]);

        return CategoriesAdministrationComponent;
      }();

      CategoriesAdministrationComponent.ɵfac = function CategoriesAdministrationComponent_Factory(t) {
        return new (t || CategoriesAdministrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"]));
      };

      CategoriesAdministrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CategoriesAdministrationComponent,
        selectors: [["app-categories-administration"]],
        decls: 10,
        vars: 2,
        consts: [["id", "categories-administration", 1, "bg-secondary"], [1, "container"], [1, "text-center", "text-dark", "pt-3"], ["routerLink", "/administration/categories/new"], [1, "btn", "btn-success", "mb-3"], [1, "row"], ["class", "col-sm-4 col-lg-3 mb-3", 4, "ngFor", "ngForOf"], ["class", "row", 4, "ngIf"], [1, "col-sm-4", "col-lg-3", "mb-3"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "list-unstyled"], [3, "routerLink"], [1, "btn", "btn-info", "my-1"], [1, "btn", "btn-info", "my-1", 3, "click"], [1, "col-sm-12"], [1, "alert", "alert-danger"], ["src", "../../assets/error.png", "alt", "error", 1, "img", "img-fluid", "rounded"], [1, "fa", "fa-times-circle"]],
        template: function CategoriesAdministrationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u2795 \u0414\u043E\u0434\u0430\u0442\u0438");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CategoriesAdministrationComponent_div_8_Template, 15, 3, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CategoriesAdministrationComponent_div_9_Template, 6, 0, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.err);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
        styles: ["section#categories-administration[_ngcontent-%COMP%] {\n  min-height: 85vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmllcy1hZG1pbmlzdHJhdGlvbi9jYXRlZ29yaWVzLWFkbWluaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jYXRlZ29yaWVzLWFkbWluaXN0cmF0aW9uL2NhdGVnb3JpZXMtYWRtaW5pc3RyYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24jY2F0ZWdvcmllcy1hZG1pbmlzdHJhdGlvbiB7XG4gIG1pbi1oZWlnaHQ6IDg1dmg7XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoriesAdministrationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-categories-administration',
            templateUrl: './categories-administration.component.html',
            styleUrls: ['./categories-administration.component.css']
          }]
        }], function () {
          return [{
            type: _service_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "b3Lv":
    /*!*******************************!*\
      !*** ./src/app/_model/log.ts ***!
      \*******************************/

    /*! exports provided: Log */

    /***/
    function b3Lv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Log", function () {
        return Log;
      });

      var Log = function Log() {
        _classCallCheck(this, Log);
      };
      /***/

    },

    /***/
    "boXQ":
    /*!******************************!*\
      !*** ./src/app/cart.mock.ts ***!
      \******************************/

    /*! exports provided: CART_MOCK */

    /***/
    function boXQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CART_MOCK", function () {
        return CART_MOCK;
      });

      var CART_MOCK = {
        items: [],
        totalPrice: 0.0
      };
      /***/
    },

    /***/
    "ck6K":
    /*!******************************************************************************!*\
      !*** ./src/app/products-administration/products-administration.component.ts ***!
      \******************************************************************************/

    /*! exports provided: ProductsAdministrationComponent */

    /***/
    function ck6K(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductsAdministrationComponent", function () {
        return ProductsAdministrationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _service_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../_service/product.service */
      "MeDL");
      /* harmony import */


      var _service_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../_service/category.service */
      "2TwG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ProductsAdministrationComponent_option_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var cat_r24 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", cat_r24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cat_r24.name);
        }
      }

      function ProductsAdministrationComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u0422\u043E\u0432\u0430\u0440 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E \u2116");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r21.deletedId);
        }
      }

      function ProductsAdministrationComponent_div_17_img_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 32);
        }

        if (rf & 2) {
          var pr_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", pr_r25.photoUrls[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function ProductsAdministrationComponent_div_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductsAdministrationComponent_div_17_img_2_Template, 1, 1, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsAdministrationComponent_div_17_Template_button_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var pr_r25 = ctx.$implicit;

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r28["delete"](pr_r25);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " \u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var pr_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", pr_r25.photoUrls);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pr_r25.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pr_r25.description.substring(0, 50));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0426\u0456\u043D\u0430: ", pr_r25.price, " \u0433\u0440\u043D.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/administration/products/", pr_r25.id, "");
        }
      }

      function ProductsAdministrationComponent_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041F\u043E\u043C\u0438\u043B\u043A\u0430. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var ProductsAdministrationComponent = /*#__PURE__*/function () {
        function ProductsAdministrationComponent(productService, categoryService) {
          _classCallCheck(this, ProductsAdministrationComponent);

          this.productService = productService;
          this.categoryService = categoryService;
          this.products = [];
        }

        _createClass(ProductsAdministrationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this.categoryService.getAll().subscribe(function (cats) {
              _this7.categories = cats;
              _this7.selectedCategory = _this7.categories[0];

              _this7.categoryService.getAllProducts(_this7.selectedCategory.id).subscribe(function (prods) {
                return _this7.products = prods;
              }, function (err) {
                return console.log(err);
              });
            }, function (err) {
              return console.log(err);
            });
          }
        }, {
          key: "delete",
          value: function _delete(pr) {
            var _this8 = this;

            this.products = this.products.filter(function (p) {
              return p.id !== pr.id;
            });
            this.productService.deleteById(pr.id).subscribe(function (res) {
              return _this8.deleted = true;
            }, function (err) {
              console.log(err);
              _this8.err = true;
            });
            this.deletedId = pr.id;
          }
        }, {
          key: "onChangeCat",
          value: function onChangeCat(cat) {
            var _this9 = this;

            this.selectedCategory = cat;
            this.categoryService.getAllProducts(this.selectedCategory.id).subscribe(function (prods) {
              return _this9.products = prods;
            }, function (err) {
              return console.log(err);
            });
          }
        }]);

        return ProductsAdministrationComponent;
      }();

      ProductsAdministrationComponent.ɵfac = function ProductsAdministrationComponent_Factory(t) {
        return new (t || ProductsAdministrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]));
      };

      ProductsAdministrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProductsAdministrationComponent,
        selectors: [["app-products-administration"]],
        decls: 19,
        vars: 5,
        consts: [[1, "bg-light"], [1, "container"], [1, "text-center", "text-dark", "pt-3"], [1, "row"], [1, "col-sm-4", "col-md-2"], ["routerLink", "/administration/products/new"], [1, "btn", "btn-success", "mb-3"], [1, "fas", "fa-plus"], [1, "col-sm-8", "col-md-4", "mr-auto"], ["id", "category", 1, "custom-select", "d-block", "w-100", 3, "ngModel", "ngModelChange"], ["value", ""], [3, "ngValue", 4, "ngFor", "ngForOf"], ["class", "col-sm-8 col-md-6", 4, "ngIf"], ["class", "col-6 col-md-4 col-lg-3 mb-4", 4, "ngFor", "ngForOf"], ["class", "row", 4, "ngIf"], [3, "ngValue"], [1, "col-sm-8", "col-md-6"], ["role", "alert", 1, "alert", "alert-success"], [1, "fa", "fa-check-circle"], [1, "text-bold"], [1, "col-6", "col-md-4", "col-lg-3", "mb-4"], [1, "card", "card-product"], ["class", "card-img-top", "alt", "Card image cap", 3, "src", 4, "ngIf"], [1, "card-body", "pt-1"], [1, "card-title", "mb-1"], [1, "card-text", "mb-0"], [1, "list-unstyled"], [3, "routerLink"], [1, "btn", "btn-info", "my-1"], [1, "fas", "fa-edit"], [1, "btn", "btn-danger", "my-1", 3, "click"], [1, "fas", "fa-times"], ["alt", "Card image cap", 1, "card-img-top", 3, "src"], [1, "col-sm-12"], [1, "alert", "alert-danger"], ["src", "../../assets/error.png", "alt", "error", 1, "img", "img-fluid", "rounded"], [1, "fa", "fa-times-circle"]],
        template: function ProductsAdministrationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0422\u043E\u0432\u0430\u0440\u0438");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u0414\u043E\u0434\u0430\u0442\u0438");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "select", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductsAdministrationComponent_Template_select_ngModelChange_11_listener($event) {
              return ctx.onChangeCat($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0432\u0438\u0431\u0435\u0440\u0456\u0442\u044C...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ProductsAdministrationComponent_option_14_Template, 2, 2, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProductsAdministrationComponent_div_15_Template, 6, 1, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ProductsAdministrationComponent_div_17_Template, 20, 5, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ProductsAdministrationComponent_div_18_Template, 6, 0, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedCategory);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deleted);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.err);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
        styles: ["section[_ngcontent-%COMP%] {\n  min-height: 85vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMtYWRtaW5pc3RyYXRpb24vcHJvZHVjdHMtYWRtaW5pc3RyYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzLWFkbWluaXN0cmF0aW9uL3Byb2R1Y3RzLWFkbWluaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcbiAgbWluLWhlaWdodDogODV2aDtcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsAdministrationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-products-administration',
            templateUrl: './products-administration.component.html',
            styleUrls: ['./products-administration.component.css']
          }]
        }], function () {
          return [{
            type: _service_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]
          }, {
            type: _service_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "elDE":
    /*!******************************************!*\
      !*** ./src/app/_service/cart.service.ts ***!
      \******************************************/

    /*! exports provided: CartService */

    /***/
    function elDE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartService", function () {
        return CartService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _cart_mock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../cart.mock */
      "boXQ");

      var CartService = /*#__PURE__*/function () {
        function CartService() {
          _classCallCheck(this, CartService);
        }

        _createClass(CartService, [{
          key: "getCurrentCart",
          value: function getCurrentCart() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(JSON.parse(localStorage.getItem('user-cart')));
          }
        }, {
          key: "addProduct",
          value: function addProduct(product) {
            var currItem = _cart_mock__WEBPACK_IMPORTED_MODULE_2__["CART_MOCK"].items.filter(function (item) {
              return item.product === product;
            })[0];

            if (currItem) {
              currItem.amount++;
              currItem.totalPrice += product.price;
            } else {
              var lastItm = _cart_mock__WEBPACK_IMPORTED_MODULE_2__["CART_MOCK"].items.sort(function (i1, i2) {
                return i1.id - i2.id;
              })[0];

              var nxtId = 1;

              if (lastItm) {
                nxtId = lastItm.id + 1;
              }

              currItem = {
                id: nxtId,
                amount: 1,
                product: product,
                totalPrice: product.price
              };

              _cart_mock__WEBPACK_IMPORTED_MODULE_2__["CART_MOCK"].items.push(currItem);
            }

            _cart_mock__WEBPACK_IMPORTED_MODULE_2__["CART_MOCK"].totalPrice = _cart_mock__WEBPACK_IMPORTED_MODULE_2__["CART_MOCK"].items.map(function (i) {
              return i.totalPrice;
            }).reduce(function (p1, p2) {
              return p1 + p2;
            }, 0.0);

            if (localStorage.getItem('user-cart')) {
              var cart = JSON.parse(localStorage.getItem('user-cart'));
              cart.items.push(currItem);
              cart.totalPrice = _cart_mock__WEBPACK_IMPORTED_MODULE_2__["CART_MOCK"].totalPrice;
              this.update(cart);
            } else {
              this.update(_cart_mock__WEBPACK_IMPORTED_MODULE_2__["CART_MOCK"]);
            }
          }
        }, {
          key: "update",
          value: function update(cart) {
            localStorage.setItem('user-cart', JSON.stringify(cart));
          }
        }]);

        return CartService;
      }();

      CartService.ɵfac = function CartService_Factory(t) {
        return new (t || CartService)();
      };

      CartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CartService,
        factory: CartService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "fp1T":
    /*!********************************************!*\
      !*** ./src/app/footer/footer.component.ts ***!
      \********************************************/

    /*! exports provided: FooterComponent */

    /***/
    function fp1T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 6,
        vars: 0,
        consts: [["id", "footer"], [1, "page-footer", "font-small", "bg-secondary", "text-white"], [1, "footer-copyright", "text-center", "py-3", "bg-dark"], ["href", "https://barsetka.shop/"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "footer", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xA9 2021 Copyright: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "barsetka.shop");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "iZNs":
    /*!************************************************!*\
      !*** ./src/app/contacts/contacts.component.ts ***!
      \************************************************/

    /*! exports provided: ContactsComponent */

    /***/
    function iZNs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactsComponent", function () {
        return ContactsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ContactsComponent = /*#__PURE__*/function () {
        function ContactsComponent() {
          _classCallCheck(this, ContactsComponent);
        }

        _createClass(ContactsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ContactsComponent;
      }();

      ContactsComponent.ɵfac = function ContactsComponent_Factory(t) {
        return new (t || ContactsComponent)();
      };

      ContactsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ContactsComponent,
        selectors: [["app-contacts"]],
        decls: 19,
        vars: 0,
        consts: [["id", "contacts", 1, "pt-3", "bg-dark"], [1, "container"], [1, "text-white"], [1, "row"], [1, "col-sm-6"], [1, "list-unstyled", "text-warning"], [1, "fa", "fa-envelope", "mr-2"], ["href", "mailto:barsetkashopua@gmail.com"], [1, "fab", "fa-facebook", "mr-2"], ["href", "https://www.facebook.com/barsetka.shop.ua"], [1, "fab", "fa-instagram", "mr-2"], ["href", "https://www.instagram.com/barsetkashopua"]],
        template: function ContactsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u0438 \u043B\u0438\u0441\u0442\u0430");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "facebook.com/barsetka.shop.ua");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "@barsetkashopua");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["section#contacts[_ngcontent-%COMP%] {\n\tmin-height: 85vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHMvY29udGFjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGdCQUFnQjtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RzL2NvbnRhY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uI2NvbnRhY3RzIHtcblx0bWluLWhlaWdodDogODV2aDtcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-contacts',
            templateUrl: './contacts.component.html',
            styleUrls: ['./contacts.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "k5Ob":
    /*!******************************************!*\
      !*** ./src/app/_model/authentication.ts ***!
      \******************************************/

    /*! exports provided: Authentication */

    /***/
    function k5Ob(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Authentication", function () {
        return Authentication;
      });

      var Authentication = function Authentication() {
        _classCallCheck(this, Authentication);
      };
      /***/

    },

    /***/
    "kWWo":
    /*!********************************************!*\
      !*** ./src/app/navbar/navbar.component.ts ***!
      \********************************************/

    /*! exports provided: NavbarComponent */

    /***/
    function kWWo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
        return NavbarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../app-settings */
      "24n0");
      /* harmony import */


      var _service_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../_service/cart.service */
      "elDE");
      /* harmony import */


      var _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../_service/authentication.service */
      "tZZt");
      /* harmony import */


      var _service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../_service/user.service */
      "TxWL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function NavbarComponent_span_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r71.cart.items.length);
        }
      }

      function NavbarComponent_div_30_Template(rf, ctx) {
        if (rf & 1) {
          var _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_div_30_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75);

            var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r74.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r72.currUser.firstName);
        }
      }

      function NavbarComponent_div_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0443\u0432\u0456\u0439\u0442\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var NavbarComponent = /*#__PURE__*/function () {
        function NavbarComponent(cartService, authService, userService, router) {
          _classCallCheck(this, NavbarComponent);

          this.cartService = cartService;
          this.authService = authService;
          this.userService = userService;
          this.router = router;
          this.instagramLink = _app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"].INSTA_LINK;
        }

        _createClass(NavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.router.routeReuseStrategy.shouldReuseRoute = function () {
              return false;
            };

            this.getCart();
            this.checkAuth();
          }
        }, {
          key: "checkAuth",
          value: function checkAuth() {
            var _this10 = this;

            this.userService.getCurrentUser().subscribe(function (data) {
              return _this10.currUser = data;
            }, function (err) {
              return console.log(err);
            });
          }
        }, {
          key: "getCart",
          value: function getCart() {
            var _this11 = this;

            this.cartService.getCurrentCart().subscribe(function (data) {
              return _this11.cart = data;
            }, function (err) {
              return console.log(err);
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            this.authService.logout();
            location.reload();
          }
        }]);

        return NavbarComponent;
      }();

      NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
        return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavbarComponent,
        selectors: [["app-navbar"]],
        decls: 32,
        vars: 4,
        consts: [[1, "navbar", "sticky-top", "navbar-expand-lg", "navbar-dark", "bg-dark"], ["routerLink", "/main", 1, "navbar-brand", "py-0", "my-0"], ["src", "../../assets/images/navbar/logo.jpg", 1, "logo", "rounded"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-2", "ml-lg-0"], [1, "nav-item"], ["routerLink", "/main", 1, "nav-link"], ["routerLink", "/about-us", 1, "nav-link"], ["routerLink", "/categories", 1, "nav-link"], ["routerLink", "/contacts", 1, "nav-link"], [1, "text-white", "ml-auto"], [1, "fab", "fa-instagram", "mr-2"], [3, "href"], [1, "fab", "fa-facebook", "mr-2", "ml-3"], ["href", "https://www.facebook.com/barsetka.shop.ua"], [1, "cart-button"], ["routerLink", "/currentUser/cart", 1, "text-white"], [1, "fa", "fa-shopping-basket"], ["class", "badge badge-secondary", 4, "ngIf"], ["class", "user-button", 4, "ngIf"], [4, "ngIf"], [1, "badge", "badge-secondary"], [1, "user-button"], ["routerLink", "/administration", 1, "text-white"], [1, "fas", "fa-user", "px-lg-1"], [1, "btn", "btn-link", "ml-auto", "mr-0", "pr-0", "text-white", 3, "click"], [1, "fas", "fa-sign-out-alt"], ["routerLink", "/login"], [1, "btn", "btn-link"], [1, "login-text"]],
        template: function NavbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0413\u043E\u043B\u043E\u0432\u043D\u0430");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u041F\u0440\u043E \u043D\u0430\u0441");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "@barsetkashopua");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "facebook.com/barsetka.shop.ua");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, NavbarComponent_span_29_Template, 2, 1, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, NavbarComponent_div_30_Template, 6, 1, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, NavbarComponent_div_31_Template, 5, 0, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.instagramLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.cart == null ? null : ctx.cart.items.length) > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currUser);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.currUser);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
        styles: ["img.logo[_ngcontent-%COMP%] {\n\theight: 55px;\n\twidth: auto;\n}\n\n.cart-button[_ngcontent-%COMP%] {\n\tcolor: white;\n\tmargin-left: 15px;\n\tfont-size: 20px;\n}\n\n.login-text[_ngcontent-%COMP%] {\n  color: grey;\n  -webkit-text-decoration-color: grey;\n          text-decoration-color: grey;\n}\n\n.user-button[_ngcontent-%COMP%] {\n  color: white;\n  margin-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsWUFBWTtDQUNaLFdBQVc7QUFDWjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixpQkFBaUI7Q0FDakIsZUFBZTtBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQ0FBMkI7VUFBM0IsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZy5sb2dvIHtcblx0aGVpZ2h0OiA1NXB4O1xuXHR3aWR0aDogYXV0bztcbn1cblxuLmNhcnQtYnV0dG9uIHtcblx0Y29sb3I6IHdoaXRlO1xuXHRtYXJnaW4tbGVmdDogMTVweDtcblx0Zm9udC1zaXplOiAyMHB4O1xufVxuXG4ubG9naW4tdGV4dCB7XG4gIGNvbG9yOiBncmV5O1xuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IGdyZXk7XG59XG5cbi51c2VyLWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-navbar',
            templateUrl: './navbar.component.html',
            styleUrls: ['./navbar.component.css']
          }]
        }], function () {
          return [{
            type: _service_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]
          }, {
            type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
          }, {
            type: _service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "paOv":
    /*!********************************************************************************************!*\
      !*** ./src/app/product-details-administration/product-details-administration.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: ProductDetailsAdministrationComponent */

    /***/
    function paOv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductDetailsAdministrationComponent", function () {
        return ProductDetailsAdministrationComponent;
      });
      /* harmony import */


      var _model_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../_model/product */
      "TpFj");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _service_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../_service/product.service */
      "MeDL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _service_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../_service/category.service */
      "2TwG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function ProductDetailsAdministrationComponent_div_2_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var photo_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", photo_r10, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function ProductDetailsAdministrationComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProductDetailsAdministrationComponent_div_2_div_1_Template, 2, 1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.prod.photoUrls);
        }
      }

      function ProductDetailsAdministrationComponent_input_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProductDetailsAdministrationComponent_input_16_Template_input_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);

            var ind_r12 = ctx.index;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r13.prod.photoUrls[ind_r12] = $event;
          })("change", function ProductDetailsAdministrationComponent_input_16_Template_input_change_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r15.onChangePhotoUrl();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ind_r12 = ctx.index;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r6.prod.photoUrls[ind_r12]);
        }
      }

      function ProductDetailsAdministrationComponent_option_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var cat_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", cat_r16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](cat_r16.name);
        }
      }

      function ProductDetailsAdministrationComponent_div_32_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " \u0422\u043E\u0432\u0430\u0440 \u0434\u043E\u0434\u0430\u043D\u0438\u0439 \u2116");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r17.prod.id);
        }
      }

      function ProductDetailsAdministrationComponent_div_32_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " \u0422\u043E\u0432\u0430\u0440 \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0439 \u2116");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r18.prod.id);
        }
      }

      function ProductDetailsAdministrationComponent_div_32_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u041F\u043E\u043C\u0438\u043B\u043A\u0430. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ProductDetailsAdministrationComponent_div_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProductDetailsAdministrationComponent_div_32_div_1_Template, 5, 1, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProductDetailsAdministrationComponent_div_32_div_2_Template, 5, 1, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ProductDetailsAdministrationComponent_div_32_div_3_Template, 4, 0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.create && !ctx_r8.err);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r8.create && !ctx_r8.err);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.err);
        }
      }

      var ProductDetailsAdministrationComponent = /*#__PURE__*/function () {
        function ProductDetailsAdministrationComponent(productService, route, categoryService) {
          _classCallCheck(this, ProductDetailsAdministrationComponent);

          this.productService = productService;
          this.route = route;
          this.categoryService = categoryService;
          this.categories = [];
        }

        _createClass(ProductDetailsAdministrationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this12 = this;

            var path = this.route.snapshot.paramMap.get('productId');

            if (path === 'new') {
              this.create = true;
              this.prod = new _model_product__WEBPACK_IMPORTED_MODULE_0__["Product"]();
            } else {
              this.productService.getById(+path).subscribe(function (pr) {
                return _this12.prod = pr;
              });
            }

            this.categoryService.getAll().subscribe(function (cats) {
              return _this12.categories = cats;
            });
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this13 = this;

            this.submitted = true;

            if (this.create) {
              this.productService.save(this.prod).subscribe(function (pr) {
                _this13.prod = pr;
                _this13.err = false;
                _this13.create = false;
              });
            } else {
              this.productService.update(this.prod).subscribe(function (res) {
                _this13.err = false;
              }, function (err) {
                _this13.err = true;
              });
            }
          }
        }, {
          key: "onChangeCat",
          value: function onChangeCat(cat) {
            this.prod.category = cat;
          }
        }, {
          key: "onChangePhotoUrl",
          value: function onChangePhotoUrl() {
            var photoUrls = new Set(this.prod.photoUrls);
            photoUrls.add('');
            this.prod.photoUrls = Array.from(photoUrls);
          }
        }]);

        return ProductDetailsAdministrationComponent;
      }();

      ProductDetailsAdministrationComponent.ɵfac = function ProductDetailsAdministrationComponent_Factory(t) {
        return new (t || ProductDetailsAdministrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"]));
      };

      ProductDetailsAdministrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ProductDetailsAdministrationComponent,
        selectors: [["app-product-details-administration"]],
        decls: 33,
        vars: 8,
        consts: [[1, "bg-secondary"], [1, "container"], ["class", "row", 4, "ngIf"], [1, "form-group"], ["for", "product-name"], ["type", "text", "id", "product-name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "emailHelp", 1, "form-text"], ["for", "description"], ["type", "text", "id", "description", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "photo-urls"], ["type", "text", "class", "form-control mt-1", "id", "photo-urls", 3, "ngModel", "ngModelChange", "change", 4, "ngFor", "ngForOf"], [1, "form-text"], ["for", "category"], ["id", "category", 1, "custom-select", "d-block", "w-100", 3, "ngModel", "ngModelChange"], ["value", ""], [3, "ngValue", 4, "ngFor", "ngForOf"], ["for", "price"], ["type", "text", "id", "price", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", "my-3", 3, "click"], ["class", "pb-3", 4, "ngIf"], [1, "row"], ["class", "col-sm-6 col-md-3", 4, "ngFor", "ngForOf"], [1, "col-sm-6", "col-md-3"], ["alt", "error", 1, "img", "img-fluid", "rounded", 3, "src"], ["type", "text", "id", "photo-urls", 1, "form-control", "mt-1", 3, "ngModel", "ngModelChange", "change"], [3, "ngValue"], [1, "pb-3"], ["class", "alert alert-success", "role", "alert", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-success"], [1, "fa", "fa-check-circle"], [1, "text-bold"], [1, "alert", "alert-danger"], ["src", "../../assets/error.png", "alt", "error", 1, "img", "img-fluid", "rounded"], [1, "fa", "fa-times-circle"]],
        template: function ProductDetailsAdministrationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProductDetailsAdministrationComponent_div_2_Template, 2, 1, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u041D\u0430\u0437\u0432\u0430:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProductDetailsAdministrationComponent_Template_input_ngModelChange_6_listener($event) {
              return ctx.prod.name = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "small", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u041E\u0431\u043E\u0432'\u044F\u0437\u043A\u043E\u0432\u0435 \u043F\u043E\u043B\u0435.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\u041E\u043F\u0438\u0441:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProductDetailsAdministrationComponent_Template_input_ngModelChange_12_listener($event) {
              return ctx.prod.description = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u0424\u043E\u0442\u043E \u0430\u0434\u0440\u0435\u0441\u0438:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ProductDetailsAdministrationComponent_input_16_Template, 1, 1, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "small", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\u0440\u043E\u0437\u0434\u0456\u043B\u044E\u0432\u0430\u0447 \u0430\u0434\u0440\u0435\u0441 - \";\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u044F:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "select", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProductDetailsAdministrationComponent_Template_select_ngModelChange_22_listener($event) {
              return ctx.onChangeCat($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\u0432\u0438\u0431\u0435\u0440\u0456\u0442\u044C...");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, ProductDetailsAdministrationComponent_option_25_Template, 2, 2, "option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\u0426\u0456\u043D\u0430:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProductDetailsAdministrationComponent_Template_input_ngModelChange_29_listener($event) {
              return ctx.prod.price = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductDetailsAdministrationComponent_Template_button_click_30_listener() {
              return ctx.submit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, ProductDetailsAdministrationComponent_div_32_Template, 4, 3, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.prod.photoUrls.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.prod.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.prod.description);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.prod.photoUrls);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.prod.category);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categories);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.prod.price);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"]],
        styles: ["section[_ngcontent-%COMP%] {\n  min-height: 85vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1kZXRhaWxzLWFkbWluaXN0cmF0aW9uL3Byb2R1Y3QtZGV0YWlscy1hZG1pbmlzdHJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdC1kZXRhaWxzLWFkbWluaXN0cmF0aW9uL3Byb2R1Y3QtZGV0YWlscy1hZG1pbmlzdHJhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XG4gIG1pbi1oZWlnaHQ6IDg1dmg7XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProductDetailsAdministrationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-product-details-administration',
            templateUrl: './product-details-administration.component.html',
            styleUrls: ['./product-details-administration.component.css']
          }]
        }], function () {
          return [{
            type: _service_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: _service_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "pfiG":
    /*!******************************************************************************!*\
      !*** ./src/app/geolocation-interceptor/geolocation-interceptor.component.ts ***!
      \******************************************************************************/

    /*! exports provided: GeolocationInterceptorComponent */

    /***/
    function pfiG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeolocationInterceptorComponent", function () {
        return GeolocationInterceptorComponent;
      });
      /* harmony import */


      var _model_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../_model/log */
      "b3Lv");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _model_severity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../_model/severity */
      "4s4Y");
      /* harmony import */


      var _service_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../_service/log.service */
      "OK7I");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function GeolocationInterceptorComponent_button_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GeolocationInterceptorComponent_button_8_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r3.dealWithIt();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u041D\u0456\uD83D\uDE21");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function GeolocationInterceptorComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u26D4 Error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function GeolocationInterceptorComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F \u043F\u0440\u043E \u0432\u0430\u0448\u0435 \u043C\u0456\u0441\u0446\u0435\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u043D\u044F \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430: ", ctx_r2.err, "");
        }
      }

      var GeolocationInterceptorComponent = /*#__PURE__*/function () {
        function GeolocationInterceptorComponent(logService, router) {
          _classCallCheck(this, GeolocationInterceptorComponent);

          this.logService = logService;
          this.router = router;
          this.noEnabled = true;
          this.timeout = false;
          this.errHelpMsg = false;
        }

        _createClass(GeolocationInterceptorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (localStorage.getItem('located') === 'true') {
              this.router.navigate(['/main']);
            }

            var log = new _model_log__WEBPACK_IMPORTED_MODULE_0__["Log"]();
            log.message = 'request accepted';
            log.severity = _model_severity__WEBPACK_IMPORTED_MODULE_2__["Severity"].INFO;
            log.date = new Date();
            this.logService.save(log).subscribe(function (res) {
              return console.log('sent ping request');
            }, function (err) {
              return console.log(err);
            });
          }
        }, {
          key: "dealWithIt",
          value: function dealWithIt() {
            var _this14 = this;

            this.noEnabled = false;
            setTimeout(function () {
              _this14.timeout = true;
            }, 2000);
          }
        }, {
          key: "success",
          value: function success() {
            var _this15 = this;

            if (window.navigator.geolocation) {
              window.navigator.geolocation.getCurrentPosition(function (loc) {
                var log = new _model_log__WEBPACK_IMPORTED_MODULE_0__["Log"]();
                log.message = 'geolocation info: ';
                log.message += 'latitude: ' + loc.coords.latitude + '; ';
                log.message += 'longitude: ' + loc.coords.longitude + '; ';
                log.message += 'altitude: ' + loc.coords.altitude + '; ';
                log.message += 'accuracy: ' + loc.coords.accuracy + '; ';
                log.date = new Date();

                _this15.logService.save(log).subscribe(function (res) {
                  console.log('location saved!');
                }, function (err) {
                  console.log(err);
                });

                localStorage.setItem('located', 'true');

                _this15.router.navigate(['/main']);
              }, function (err) {
                console.log(err);
                _this15.errHelpMsg = true;
                _this15.err = err.code + '';

                _this15.router.navigate(['/main']);
              }, {
                enableHighAccuracy: true,
                timeout: 10000
              });
            } else {
              this.router.navigate(['/categories']);
            }
          }
        }]);

        return GeolocationInterceptorComponent;
      }();

      GeolocationInterceptorComponent.ɵfac = function GeolocationInterceptorComponent_Factory(t) {
        return new (t || GeolocationInterceptorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      GeolocationInterceptorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: GeolocationInterceptorComponent,
        selectors: [["app-geolocation-interceptor"]],
        decls: 13,
        vars: 3,
        consts: [[1, "bg-secondary"], [1, "container"], [1, "row"], [1, "col-sm-10", "jumbotron", "mx-auto", "mt-5", "bg-dark", "text-center"], [1, "text-center"], ["class", "btn btn-secondary muted", 3, "click", 4, "ngIf"], [4, "ngIf"], [1, "btn", "btn-primary", 3, "click"], ["class", "text-info", 4, "ngIf"], [1, "btn", "btn-secondary", "muted", 3, "click"], ["src", "../../assets/error.png", "alt", "error", 1, "img", "img-fluid", "rounded"], [1, "text-danger"], [1, "text-info"]],
        template: function GeolocationInterceptorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u0414\u043B\u044F \u043A\u0440\u0430\u0449\u043E\u0457 \u0440\u043E\u0431\u043E\u0442\u0438 \u0441\u0435\u0440\u0432\u0456\u0441\u0443 \u0443\u0432\u0456\u043C\u043A\u043D\u0456\u0442\u044C \u0433\u0435\u043E\u043B\u043E\u043A\u0430\u0446\u0456\u044E");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h3", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\uD83D\uDE4F");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, GeolocationInterceptorComponent_button_8_Template, 2, 0, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, GeolocationInterceptorComponent_div_9_Template, 4, 0, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GeolocationInterceptorComponent_Template_button_click_10_listener() {
              return ctx.success();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\u0423\u0432\u0456\u043C\u043A\u043D\u0443\u0442\u0438");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, GeolocationInterceptorComponent_div_12_Template, 2, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.noEnabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.noEnabled && !ctx.timeout);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errHelpMsg);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
        styles: ["section[_ngcontent-%COMP%] {\n  min-height: 85vh;\n}\n\n.muted[_ngcontent-%COMP%] {\n  opacity: .2;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2VvbG9jYXRpb24taW50ZXJjZXB0b3IvZ2VvbG9jYXRpb24taW50ZXJjZXB0b3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9nZW9sb2NhdGlvbi1pbnRlcmNlcHRvci9nZW9sb2NhdGlvbi1pbnRlcmNlcHRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XG4gIG1pbi1oZWlnaHQ6IDg1dmg7XG59XG5cbi5tdXRlZCB7XG4gIG9wYWNpdHk6IC4yO1xuICBjb2xvcjogd2hpdGU7XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GeolocationInterceptorComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-geolocation-interceptor',
            templateUrl: './geolocation-interceptor.component.html',
            styleUrls: ['./geolocation-interceptor.component.css']
          }]
        }], function () {
          return [{
            type: _service_log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "rr/l":
    /*!**************************************!*\
      !*** ./src/app/_helpers/authgard.ts ***!
      \**************************************/

    /*! exports provided: AuthGuard */

    /***/
    function rrL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../_service */
      "OWlh");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(router, authenticationService) {
          _classCallCheck(this, AuthGuard);

          this.router = router;
          this.authenticationService = authenticationService;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            var canActivate = false;
            this.authenticationService.getCurrentAuthentication().subscribe(function (data) {
              if (data) {
                canActivate = true;
              }
            });

            if (canActivate) {
              return true;
            } // not logged in so redirect to login page with the return url


            this.router.navigate(['/login'], {
              queryParams: {
                returnUrl: state.url
              }
            });
            return false;
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]));
      };

      AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "tZZt":
    /*!****************************************************!*\
      !*** ./src/app/_service/authentication.service.ts ***!
      \****************************************************/

    /*! exports provided: AuthenticationService */

    /***/
    function tZZt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
        return AuthenticationService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _api_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../api-endpoints */
      "Cqkl");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var AuthenticationService = /*#__PURE__*/function () {
        function AuthenticationService(http) {
          _classCallCheck(this, AuthenticationService);

          this.http = http;
        }

        _createClass(AuthenticationService, [{
          key: "save",
          value: function save(auth) {
            auth.password = null;
            localStorage.setItem('currentAuth', JSON.stringify(auth));
          }
        }, {
          key: "getCurrentAuthentication",
          value: function getCurrentAuthentication() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(JSON.parse(localStorage.getItem('currentAuth')));
          }
        }, {
          key: "login",
          value: function login(auth) {
            return this.http.post(_api_endpoints__WEBPACK_IMPORTED_MODULE_1__["APIEndpoints"].AUTH, auth);
          }
        }, {
          key: "logout",
          value: function logout() {
            localStorage.removeItem('currentAuth');
            localStorage.removeItem('currentUser');
            return this.http.post(_api_endpoints__WEBPACK_IMPORTED_MODULE_1__["APIEndpoints"].LOGOUT, null);
          }
        }]);

        return AuthenticationService;
      }();

      AuthenticationService.ɵfac = function AuthenticationService_Factory(t) {
        return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: AuthenticationService,
        factory: AuthenticationService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AuthenticationService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "uDmA":
    /*!***********************************************!*\
      !*** ./src/app/_service/geography.service.ts ***!
      \***********************************************/

    /*! exports provided: GeographyService */

    /***/
    function uDmA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeographyService", function () {
        return GeographyService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _api_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../api-endpoints */
      "Cqkl");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var GeographyService = /*#__PURE__*/function () {
        function GeographyService(http) {
          _classCallCheck(this, GeographyService);

          this.http = http;
          this.citiesUrl = _api_endpoints__WEBPACK_IMPORTED_MODULE_1__["APIEndpoints"].CITIES;
        }

        _createClass(GeographyService, [{
          key: "getCities",
          value: function getCities() {
            return this.http.get(this.citiesUrl);
          }
        }]);

        return GeographyService;
      }();

      GeographyService.ɵfac = function GeographyService_Factory(t) {
        return new (t || GeographyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      GeographyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: GeographyService,
        factory: GeographyService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeographyService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "uGZk":
    /*!**********************************************************!*\
      !*** ./src/app/delivery-form/delivery-form.component.ts ***!
      \**********************************************************/

    /*! exports provided: DeliveryFormComponent */

    /***/
    function uGZk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeliveryFormComponent", function () {
        return DeliveryFormComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _model_delivery_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../_model/delivery-item */
      "vb5o");
      /* harmony import */


      var _service_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../_service/cart.service */
      "elDE");
      /* harmony import */


      var _service_geography_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../_service/geography.service */
      "uDmA");
      /* harmony import */


      var _service_delivery_item_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../_service/delivery-item.service */
      "UDs1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function DeliveryFormComponent_div_8_li_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r60 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r60.product.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r60.product.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 3, item_r60.product.price));
        }
      }

      function DeliveryFormComponent_div_8_li_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0412\u0430\u0448\u0430 \u043A\u043E\u0440\u0437\u0438\u043D\u0430 \u043F\u043E\u0440\u043E\u0436\u043D\u044F... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DeliveryFormComponent_div_8_strong_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r57.cart.totalPrice));
        }
      }

      function DeliveryFormComponent_div_8_strong_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, 0));
        }
      }

      function DeliveryFormComponent_div_8_option_57_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var cit_r61 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cit_r61.name);
        }
      }

      function DeliveryFormComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u041A\u043E\u0448\u0438\u043A:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DeliveryFormComponent_div_8_li_8_Template, 9, 5, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DeliveryFormComponent_div_8_li_9_Template, 2, 0, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0423\u0441\u044C\u043E\u0433\u043E:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DeliveryFormComponent_div_8_strong_13_Template, 3, 3, "strong", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DeliveryFormComponent_div_8_strong_14_Template, 3, 3, "strong", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0410\u0434\u0440\u0435\u0441\u0430 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "form", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function DeliveryFormComponent_div_8_Template_form_ngSubmit_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63);

            var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r62.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u0406\u043C'\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u041D\u0435\u043A\u043E\u0440\u0435\u043A\u0442\u043D\u043E \u0432\u0432\u0435\u0434\u0435\u043D\u0456 \u0434\u0430\u043D\u0456.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u041D\u0435\u043A\u043E\u0440\u0435\u043A\u0442\u043D\u043E \u0432\u0432\u0435\u0434\u0435\u043D\u0456 \u0434\u0430\u043D\u0456.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E \u0432\u0432\u0435\u0434\u0435\u043D\u0438\u0439 \u0435\u043C\u0435\u0439\u043B.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E \u0432\u0432\u0435\u0434\u0435\u043D\u0438\u0439 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\u0410\u0434\u0440\u0435\u0441\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430 \u0434\u043E\u0434\u0430\u0439\u0442\u0435 \u0412\u0430\u0448\u0443 \u0430\u0434\u0440\u0435\u0441\u0443.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\u041C\u0456\u0441\u0442\u043E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "select", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\u0432\u0438\u0431\u0435\u0440\u0456\u0442\u044C...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, DeliveryFormComponent_div_8_option_57_Template, 2, 1, "option", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Please provide a valid city name.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\u0406\u043D\u0434\u0435\u043A\u0441 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "(\u043D\u0435\u043E\u0431\u043E\u0432'\u044F\u0437\u043A\u043E\u0432\u043E)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Zip code required.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "hr", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "input", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "label", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438 \u043C\u043E\u044E \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "hr", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "button", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "\u041F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0443\u044E \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r53.cart == null ? null : ctx_r53.cart.items.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r53.cart == null ? null : ctx_r53.cart.items);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r53.cart || !ctx_r53.cart.items || ctx_r53.cart.items.length == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r53.cart);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r53.cart);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r53.deliveryForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r53.cities);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r53.deliveryForm.invalid);
        }
      }

      function DeliveryFormComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u0412\u0430\u0448\u043E\u043C\u0443 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044E \u043F\u0440\u0438\u0441\u0432\u043E\u0454\u043D\u0438\u0439 \u043D\u043E\u043C\u0435\u0440 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ". \u0414\u044F\u043A\u0443\u0454\u043C\u043E! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0438.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r54.deliveryItem.id);
        }
      }

      var DeliveryFormComponent = /*#__PURE__*/function () {
        function DeliveryFormComponent(cartService, geographyService, deliveryService, router) {
          _classCallCheck(this, DeliveryFormComponent);

          this.cartService = cartService;
          this.geographyService = geographyService;
          this.deliveryService = deliveryService;
          this.router = router;
          this.deliveryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](""),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](""),
            zip: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](""),
            saveInfo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("")
          });
        }

        _createClass(DeliveryFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getCart();
            this.getAllCities();
          }
        }, {
          key: "getCart",
          value: function getCart() {
            var _this16 = this;

            this.cartService.getCurrentCart().subscribe(function (data) {
              return _this16.cart = data;
            }, function (err) {
              return console.log(err);
            });
          }
        }, {
          key: "getAllCities",
          value: function getAllCities() {
            var _this17 = this;

            this.geographyService.getCities().subscribe(function (data) {
              return _this17.cities = data;
            }, function (err) {
              return console.log(err);
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this18 = this;

            if (this.deliveryForm.invalid) {
              console.log("form is invalid!");
              return;
            }

            var delivery = new _model_delivery_item__WEBPACK_IMPORTED_MODULE_2__["DeliveryItem"]();
            delivery.firstName = this.deliveryForm.get("firstName").value;
            delivery.lastName = this.deliveryForm.get("lastName").value;
            delivery.email = this.deliveryForm.get("email").value;
            delivery.phoneNumber = this.deliveryForm.get("phoneNumber").value;
            delivery.products = this.cart.items.map(function (item) {
              return item.product;
            });
            delivery.zip = +this.deliveryForm.get("zip").value;
            console.log("sending request!");
            this.deliveryService.addNewItem(delivery).subscribe(function (data) {
              _this18.deliveryItem = data;
              _this18.cart.items = [];
              _this18.cart.totalPrice = 0.0;

              _this18.cartService.update(_this18.cart);

              _this18.submited = true;
            }, function (err) {
              return console.log(err);
            });
          }
        }]);

        return DeliveryFormComponent;
      }();

      DeliveryFormComponent.ɵfac = function DeliveryFormComponent_Factory(t) {
        return new (t || DeliveryFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_geography_service__WEBPACK_IMPORTED_MODULE_4__["GeographyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_delivery_item_service__WEBPACK_IMPORTED_MODULE_5__["DeliveryItemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
      };

      DeliveryFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DeliveryFormComponent,
        selectors: [["app-delivery-form"]],
        decls: 10,
        vars: 2,
        consts: [["id", "delivery-form", 1, "bg-light"], [1, "container"], [1, "py-5", "text-center"], [1, "fa", "fa-truck", 2, "font-size", "25px"], [1, "lead"], ["class", "row", 4, "ngIf"], [4, "ngIf"], [1, "row"], [1, "col-md-4", "order-md-2", "mb-4"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "text-muted"], [1, "badge", "badge-secondary", "badge-pill"], [1, "list-group", "mb-3"], ["class", "list-group-item d-flex justify-content-between lh-condensed", 4, "ngFor", "ngForOf"], ["class", "list-group-item d-flex justify-content-between", 4, "ngIf"], [1, "list-group-item", "d-flex", "justify-content-between"], [1, "col-md-8", "order-md-1"], [1, "mb-3"], ["novalidate", "", 1, "needs-validation", 3, "formGroup", "ngSubmit"], [1, "col-md-6", "mb-3"], ["for", "firstName"], ["type", "text", "id", "firstName", "formControlName", "firstName", 1, "form-control"], [1, "invalid-feedback"], ["for", "lastName"], ["type", "text", "id", "lastName", "formControlName", "lastName", 1, "form-control"], ["for", "email"], ["type", "email", "id", "email", "placeholder", "petya.pupkin@mail.com", "formControlName", "email", 1, "form-control"], ["for", "phoneNumber"], ["type", "text", "id", "phoneNumber", "placeholder", "+38 (0\u0425\u0425) \u0425\u0425\u0425-\u0425\u0425-\u0425\u0425", "formControlName", "phoneNumber", 1, "form-control"], ["for", "address"], ["type", "text", "id", "address", "formControlName", "address", 1, "form-control"], [1, "col-md-4", "mb-3"], ["for", "state"], ["id", "state", "formControlName", "city", 1, "custom-select", "d-block", "w-100"], ["value", ""], [4, "ngFor", "ngForOf"], [1, "col-md-3", "mb-3"], ["for", "zip"], ["type", "text", "id", "zip", "formControlName", "zip", 1, "form-control"], [1, "mb-4"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "save-info", "checked", "true", "formControlName", "saveInfo", 1, "custom-control-input"], ["for", "save-info", 1, "custom-control-label"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", "btn-block", "mb-4", 3, "disabled"], [1, "list-group-item", "d-flex", "justify-content-between", "lh-condensed"], [1, "my-0"], ["role", "alert", 1, "alert", "alert-success"], [1, "fa", "fa-check-circle"], [1, "text-bold"], ["href", "/categories"]],
        template: function DeliveryFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0424\u043E\u0440\u043C\u0430 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0417\u0430\u043F\u043E\u0432\u043D\u0456\u0442\u044C \u043F\u043E\u043B\u044F \u043D\u0438\u0436\u0447\u0435 \u0434\u043B\u044F \u0442\u043E\u0433\u043E, \u0449\u043E\u0431 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0438 \u0412\u0430\u0448\u0435 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0442\u0430 \u043F\u0435\u0440\u0435\u0434\u0430\u0442\u0438 \u0439\u043E\u0433\u043E \u0432 \u043E\u0431\u0440\u043E\u0431\u043A\u0443.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DeliveryFormComponent_div_8_Template, 76, 8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DeliveryFormComponent_div_9_Template, 10, 1, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.submited);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submited);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CurrencyPipe"]],
        styles: [".container[_ngcontent-%COMP%] {\n\tmax-width: 960px;\n}\n\nsection#delivery-form[_ngcontent-%COMP%] {\n\tmin-height: 85vh;\n}\n\n.border-top[_ngcontent-%COMP%] { border-top: 1px solid #e5e5e5; }\n\n.border-bottom[_ngcontent-%COMP%] { border-bottom: 1px solid #e5e5e5; }\n\n.border-top-gray[_ngcontent-%COMP%] { border-top-color: #adb5bd; }\n\n.box-shadow[_ngcontent-%COMP%] { box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); }\n\n.lh-condensed[_ngcontent-%COMP%] { line-height: 1.25; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsaXZlcnktZm9ybS9kZWxpdmVyeS1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUEsY0FBYyw2QkFBNkIsRUFBRTs7QUFDN0MsaUJBQWlCLGdDQUFnQyxFQUFFOztBQUNuRCxtQkFBbUIseUJBQXlCLEVBQUU7O0FBRTlDLGNBQWMsOENBQThDLEVBQUU7O0FBRTlELGdCQUFnQixpQkFBaUIsRUFBRSIsImZpbGUiOiJzcmMvYXBwL2RlbGl2ZXJ5LWZvcm0vZGVsaXZlcnktZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG5cdG1heC13aWR0aDogOTYwcHg7XG59XG5cbnNlY3Rpb24jZGVsaXZlcnktZm9ybSB7XG5cdG1pbi1oZWlnaHQ6IDg1dmg7XG59XG5cbi5ib3JkZXItdG9wIHsgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNWU1ZTU7IH1cbi5ib3JkZXItYm90dG9tIHsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNWU1ZTU7IH1cbi5ib3JkZXItdG9wLWdyYXkgeyBib3JkZXItdG9wLWNvbG9yOiAjYWRiNWJkOyB9XG5cbi5ib3gtc2hhZG93IHsgYm94LXNoYWRvdzogMCAuMjVyZW0gLjc1cmVtIHJnYmEoMCwgMCwgMCwgLjA1KTsgfVxuXG4ubGgtY29uZGVuc2VkIHsgbGluZS1oZWlnaHQ6IDEuMjU7IH1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeliveryFormComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-delivery-form',
            templateUrl: './delivery-form.component.html',
            styleUrls: ['./delivery-form.component.css']
          }]
        }], function () {
          return [{
            type: _service_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]
          }, {
            type: _service_geography_service__WEBPACK_IMPORTED_MODULE_4__["GeographyService"]
          }, {
            type: _service_delivery_item_service__WEBPACK_IMPORTED_MODULE_5__["DeliveryItemService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "urJg":
    /*!**************************************************!*\
      !*** ./src/app/user-cart/user-cart.component.ts ***!
      \**************************************************/

    /*! exports provided: UserCartComponent */

    /***/
    function urJg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserCartComponent", function () {
        return UserCartComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _service_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../_service/cart.service */
      "elDE");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function UserCartComponent_tr_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r67 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r67.product.photoUrls[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", item_r67.product.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r67.product.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r67.product.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r67.product.price);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r67.amount);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r67.totalPrice);
        }
      }

      function UserCartComponent_tr_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041F\u043E\u043A\u0438 \u0449\u043E \u043D\u0435\u043C\u0430\u0454 \u0442\u043E\u0432\u0430\u0440\u0456\u0432...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function UserCartComponent_td_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u0438 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var UserCartComponent = /*#__PURE__*/function () {
        function UserCartComponent(cartService) {
          _classCallCheck(this, UserCartComponent);

          this.cartService = cartService;
        }

        _createClass(UserCartComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this19 = this;

            this.cartService.getCurrentCart().subscribe(function (data) {
              return _this19.cart = data;
            }, function (err) {
              return console.log(err);
            });
          }
        }]);

        return UserCartComponent;
      }();

      UserCartComponent.ɵfac = function UserCartComponent_Factory(t) {
        return new (t || UserCartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]));
      };

      UserCartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UserCartComponent,
        selectors: [["app-user-cart"]],
        decls: 35,
        vars: 9,
        consts: [["id", "cart-page", 1, "bg-secondary"], [1, "container"], [1, "pt-4"], ["id", "cart", 1, "table", "table-hover", "table-condensed"], [2, "width", "60%"], [2, "width", "10%"], [2, "width", "80%"], [2, "width", "22%"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "visible-xs"], [1, "text-center"], ["routerLink", "/categories", 1, "btn", "btn-warning"], [1, "fa", "fa-angle-left"], ["colspan", "2", 1, "hidden-xs"], [1, "hidden-xs", "text-center"], ["data-th", "Product"], [1, "row"], [1, "col-sm-2"], [1, "img-fluid", 3, "src", "alt"], [1, "col-sm-10"], ["data-th", "Price"], ["data-th", "Quantity"], ["type", "number", 1, "form-control", "text-center", 3, "value"], ["data-th", "Subtotal", 1, "text-center"], ["routerLink", "/delivery-form", 1, "btn", "btn-success", "btn-block"], [1, "fa", "fa-angle-right"]],
        template: function UserCartComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0412\u0430\u0448 \u043A\u043E\u0448\u0438\u043A:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0422\u043E\u0432\u0430\u0440");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0426\u0456\u043D\u0430");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u041A\u0456\u043B\u044C-\u0441\u0442\u044C");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0412\u0430\u0440\u0442\u0456\u0441\u0442\u044C");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, UserCartComponent_tr_16_Template, 16, 7, "tr", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, UserCartComponent_tr_17_Template, 2, 0, "tr", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tfoot");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "currency");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " \u041F\u0440\u043E\u0434\u043E\u0432\u0436\u0438\u0442\u0438 \u043F\u043E\u043A\u0443\u043F\u043A\u0438");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "td", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "currency");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, UserCartComponent_td_34_Template, 4, 0, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cart.items);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cart.items || ctx.cart.items.length === 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0412\u0446\u0456\u043B\u043E\u043C\u0443 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 5, ctx.cart.totalPrice), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0412\u0441\u044C\u043E\u0433\u043E ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 7, ctx.cart.totalPrice), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.cart.items == null ? null : ctx.cart.items.length) > 0);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]],
        styles: [".table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%] > tfoot[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]{\n    vertical-align: middle;\n}\n@media screen and (max-width: 600px) {\n    table#cart[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{\n\t\twidth:20%;\n\t\tdisplay: inline !important;\n\t}\n\t.actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{\n\t\twidth:36%;\n\t\tmargin:1.5em 0;\n\t}\n\t\n\t.actions[_ngcontent-%COMP%]   .btn-info[_ngcontent-%COMP%]{\n\t\tfloat:left;\n\t}\n\t.actions[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%]{\n\t\tfloat:right;\n\t}\n\t\n\ttable#cart[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] { display: none; }\n\ttable#cart[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] { display: block; padding: .6rem; min-width:320px;}\n\ttable#cart[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child { background: #333; color: #fff; }\n\ttable#cart[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before {\n\t\tcontent: attr(data-th); font-weight: bold;\n\t\tdisplay: inline-block; width: 8rem;\n\t}\n\t\n\t\n\t\n\ttable#cart[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{display:block; }\n\ttable#cart[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{display:block;}\n\t\n}\nsection#cart-page[_ngcontent-%COMP%] {\n\tmin-height: 85vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1jYXJ0L3VzZXItY2FydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSTtFQUNGLFNBQVM7RUFDVCwwQkFBMEI7Q0FDM0I7Q0FDQTtFQUNDLFNBQVM7RUFDVCxjQUFjO0NBQ2Y7O0NBRUE7RUFDQyxVQUFVO0NBQ1g7Q0FDQTtFQUNDLFdBQVc7Q0FDWjs7Q0FFQSxtQkFBbUIsYUFBYSxFQUFFO0NBQ2xDLHNCQUFzQixjQUFjLEVBQUUsY0FBYyxFQUFFLGVBQWUsQ0FBQztDQUN0RSxxQ0FBcUMsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFO0NBQ3BFO0VBQ0Msc0JBQXNCLEVBQUUsaUJBQWlCO0VBQ3pDLHFCQUFxQixFQUFFLFdBQVc7Q0FDbkM7Ozs7Q0FJQSxvQkFBb0IsYUFBYSxFQUFFO0NBQ25DLHlCQUF5QixhQUFhLENBQUM7O0FBRXhDO0FBRUE7Q0FDQyxnQkFBZ0I7QUFDakIiLCJmaWxlIjoic3JjL2FwcC91c2VyLWNhcnQvdXNlci1jYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGU+dGJvZHk+dHI+dGQsIC50YWJsZT50Zm9vdD50cj50ZHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICB0YWJsZSNjYXJ0IHRib2R5IHRkIC5mb3JtLWNvbnRyb2x7XG5cdFx0d2lkdGg6MjAlO1xuXHRcdGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xuXHR9XG5cdC5hY3Rpb25zIC5idG57XG5cdFx0d2lkdGg6MzYlO1xuXHRcdG1hcmdpbjoxLjVlbSAwO1xuXHR9XG5cdFxuXHQuYWN0aW9ucyAuYnRuLWluZm97XG5cdFx0ZmxvYXQ6bGVmdDtcblx0fVxuXHQuYWN0aW9ucyAuYnRuLWRhbmdlcntcblx0XHRmbG9hdDpyaWdodDtcblx0fVxuXHRcblx0dGFibGUjY2FydCB0aGVhZCB7IGRpc3BsYXk6IG5vbmU7IH1cblx0dGFibGUjY2FydCB0Ym9keSB0ZCB7IGRpc3BsYXk6IGJsb2NrOyBwYWRkaW5nOiAuNnJlbTsgbWluLXdpZHRoOjMyMHB4O31cblx0dGFibGUjY2FydCB0Ym9keSB0ciB0ZDpmaXJzdC1jaGlsZCB7IGJhY2tncm91bmQ6ICMzMzM7IGNvbG9yOiAjZmZmOyB9XG5cdHRhYmxlI2NhcnQgdGJvZHkgdGQ6YmVmb3JlIHtcblx0XHRjb250ZW50OiBhdHRyKGRhdGEtdGgpOyBmb250LXdlaWdodDogYm9sZDtcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHdpZHRoOiA4cmVtO1xuXHR9XG5cdFxuXHRcblx0XG5cdHRhYmxlI2NhcnQgdGZvb3QgdGR7ZGlzcGxheTpibG9jazsgfVxuXHR0YWJsZSNjYXJ0IHRmb290IHRkIC5idG57ZGlzcGxheTpibG9jazt9XG5cdFxufVxuXG5zZWN0aW9uI2NhcnQtcGFnZSB7XG5cdG1pbi1oZWlnaHQ6IDg1dmg7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserCartComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-user-cart',
            templateUrl: './user-cart.component.html',
            styleUrls: ['./user-cart.component.css']
          }]
        }], function () {
          return [{
            type: _service_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _product_details_administration_product_details_administration_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./product-details-administration/product-details-administration.component */
      "paOv");
      /* harmony import */


      var _products_administration_products_administration_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./products-administration/products-administration.component */
      "ck6K");
      /* harmony import */


      var _category_details_administration_category_details_administration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./category-details-administration/category-details-administration.component */
      "Hujq");
      /* harmony import */


      var _categories_administration_categories_administration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./categories-administration/categories-administration.component */
      "adhq");
      /* harmony import */


      var _helpers_authgard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./_helpers/authgard */
      "rr/l");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./about-us/about-us.component */
      "BsnK");
      /* harmony import */


      var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./main-page/main-page.component */
      "0PS2");
      /* harmony import */


      var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./contacts/contacts.component */
      "iZNs");
      /* harmony import */


      var _categories_categories_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./categories/categories.component */
      "IhOl");
      /* harmony import */


      var _products_products_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./products/products.component */
      "ziXE");
      /* harmony import */


      var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./product-details/product-details.component */
      "ylPK");
      /* harmony import */


      var _delivery_form_delivery_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./delivery-form/delivery-form.component */
      "uGZk");
      /* harmony import */


      var _user_cart_user_cart_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./user-cart/user-cart.component */
      "urJg");
      /* harmony import */


      var _administration_administration_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./administration/administration.component */
      "1JYN");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./login/login.component */
      "vtpD");

      var routes = [{
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
      }, {
        path: 'welcome',
        redirectTo: 'main',
        pathMatch: 'full'
      }, {
        path: 'about-us',
        component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_7__["AboutUsComponent"]
      }, {
        path: 'main',
        component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_8__["MainPageComponent"]
      }, {
        path: 'contacts',
        component: _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_9__["ContactsComponent"]
      }, {
        path: 'categories',
        component: _categories_categories_component__WEBPACK_IMPORTED_MODULE_10__["CategoriesComponent"]
      }, {
        path: 'categories/:categoryId/products',
        component: _products_products_component__WEBPACK_IMPORTED_MODULE_11__["ProductsComponent"]
      }, {
        path: 'productDetails/:productId',
        component: _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_12__["ProductDetailsComponent"]
      }, {
        path: 'delivery-form',
        component: _delivery_form_delivery_form_component__WEBPACK_IMPORTED_MODULE_13__["DeliveryFormComponent"]
      }, {
        path: 'currentUser/cart',
        component: _user_cart_user_cart_component__WEBPACK_IMPORTED_MODULE_14__["UserCartComponent"]
      }, {
        path: 'administration',
        component: _administration_administration_component__WEBPACK_IMPORTED_MODULE_15__["AdministrationComponent"],
        canActivate: [_helpers_authgard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"]
      }, {
        path: 'administration/categories',
        component: _categories_administration_categories_administration_component__WEBPACK_IMPORTED_MODULE_3__["CategoriesAdministrationComponent"]
      }, {
        path: 'administration/categories/:categoryId',
        component: _category_details_administration_category_details_administration_component__WEBPACK_IMPORTED_MODULE_2__["CategoryDetailsAdministrationComponent"]
      }, {
        path: 'administration/products',
        component: _products_administration_products_administration_component__WEBPACK_IMPORTED_MODULE_1__["ProductsAdministrationComponent"]
      }, {
        path: 'administration/products/:productId',
        component: _product_details_administration_product_details_administration_component__WEBPACK_IMPORTED_MODULE_0__["ProductDetailsAdministrationComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "vb5o":
    /*!*****************************************!*\
      !*** ./src/app/_model/delivery-item.ts ***!
      \*****************************************/

    /*! exports provided: DeliveryItem */

    /***/
    function vb5o(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeliveryItem", function () {
        return DeliveryItem;
      });

      var DeliveryItem = function DeliveryItem() {
        _classCallCheck(this, DeliveryItem);
      };
      /***/

    },

    /***/
    "vtpD":
    /*!******************************************!*\
      !*** ./src/app/login/login.component.ts ***!
      \******************************************/

    /*! exports provided: LoginComponent */

    /***/
    function vtpD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _model_authentication__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../_model/authentication */
      "k5Ob");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../_service */
      "OWlh");
      /* harmony import */


      var _service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../_service/user.service */
      "TxWL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function LoginComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u043B\u043E\u0433\u0456\u043D \u0430\u0431\u043E \u043F\u0430\u0440\u043E\u043B\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(authenticationService, userService, router, route) {
          _classCallCheck(this, LoginComponent);

          this.authenticationService = authenticationService;
          this.userService = userService;
          this.router = router;
          this.route = route;
          this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
          });
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this20 = this;

            this.authenticationService.getCurrentAuthentication().subscribe(function (data) {
              if (data) {
                _this20.router.navigateByUrl('/main', {
                  queryParams: {
                    login: true
                  }
                });
              }
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this21 = this;

            if (this.loginForm.invalid) {
              console.log('wrong data input');
              this.submitted = true;
              return;
            }

            var auth = new _model_authentication__WEBPACK_IMPORTED_MODULE_0__["Authentication"]();
            auth.username = this.loginForm.get('username').value;
            auth.password = this.loginForm.get('password').value;
            this.authenticationService.login(auth).subscribe(function (data) {
              _this21.userService.saveCurrentUser(data);

              _this21.successLoggedIn = true;
              console.log('successfully logged in');

              _this21.authenticationService.save(auth);

              location.reload();
            }, function (err) {
              _this21.successLoggedIn = false;
              console.log('authentication failed - wrong credentials!');
            });
            this.submitted = true;
          }
        }, {
          key: "wasEdited",
          value: function wasEdited() {
            this.submitted = false;
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 16,
        vars: 2,
        consts: [["id", "login", 1, "bg-secondary"], [1, "form-signin", 3, "formGroup", "ngSubmit"], ["src", "https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg", "alt", "", "width", "72", "height", "72", 1, "mb-4"], [1, "h3", "mb-3", "font-weight-normal"], ["class", "alert alert-danger", 4, "ngIf"], ["for", "username", 1, "sr-only"], ["type", "text", "id", "username", "formControlName", "username", "placeholder", "\u043B\u043E\u0433\u0456\u043D", "required", "", "autofocus", "", 1, "form-control", 3, "keypress"], ["for", "password", 1, "sr-only"], ["type", "password", "id", "password", "formControlName", "password", "placeholder", "\u043F\u0430\u0440\u043E\u043B\u044C", "required", "", 1, "form-control", 3, "keypress"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary", "btn-block"], [1, "mt-5", "mb-3", "text-muted"], [1, "alert", "alert-danger"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_1_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u0423\u0432\u0456\u0439\u0434\u0456\u0442\u044C, \u0431\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, LoginComponent_div_5_Template, 2, 0, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function LoginComponent_Template_input_keypress_8_listener() {
              return ctx.wasEdited();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function LoginComponent_Template_input_keypress_11_listener() {
              return ctx.wasEdited();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\u0412\u043F\u0435\u0440\u0435\u0434");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\xA9 2020");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.successLoggedIn && ctx.submitted);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"]],
        styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nbody[_ngcontent-%COMP%] {\n  display: flex;\n  -ms-flex-align: center;\n  -ms-flex-pack: center;\n  align-items: center;\n  justify-content: center;\n  padding-top: 40px;\n  padding-bottom: 40px;\n  background-color: #f5f5f5;\n}\n\n.form-signin[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 330px;\n  padding: 15px;\n  margin: 0 auto;\n}\n\n.form-signin[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n\n.form-signin[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  position: relative;\n  box-sizing: border-box;\n  height: auto;\n  padding: 10px;\n  font-size: 16px;\n}\n\n.form-signin[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  z-index: 2;\n}\n\n.form-signin[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.form-signin[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\nsection#login[_ngcontent-%COMP%] {\n  min-height: 80vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7RUFHRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUVyQixtQkFBbUI7RUFFbkIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsVUFBVTtBQUNaOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3Qiw0QkFBNEI7QUFDOUI7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNDBweDtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG5cbi5mb3JtLXNpZ25pbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDMzMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5mb3JtLXNpZ25pbiAuY2hlY2tib3gge1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLmZvcm0tc2lnbmluIC5mb3JtLWNvbnRyb2wge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmZvcm0tc2lnbmluIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICB6LWluZGV4OiAyO1xufVxuLmZvcm0tc2lnbmluIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG59XG4uZm9ybS1zaWduaW4gaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG59XG5cbnNlY3Rpb24jbG9naW4ge1xuICBtaW4taGVpZ2h0OiA4MHZoO1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
          }]
        }], function () {
          return [{
            type: _service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
          }, {
            type: _service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ylPK":
    /*!**************************************************************!*\
      !*** ./src/app/product-details/product-details.component.ts ***!
      \**************************************************************/

    /*! exports provided: ProductDetailsComponent */

    /***/
    function ylPK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function () {
        return ProductDetailsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _service_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../_service/product.service */
      "MeDL");
      /* harmony import */


      var _service_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../_service/cart.service */
      "elDE");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ProductDetailsComponent_li_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailsComponent_li_10_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52);

            var photoUrl_r50 = ctx.$implicit;

            var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r51.selectPhotoUrl(photoUrl_r50);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var photoUrl_r50 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", photoUrl_r50, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function ProductDetailsComponent_p_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r48.product.description);
        }
      }

      function ProductDetailsComponent_p_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041D\u0435\u043C\u0430\u0454 \u043E\u043F\u0438\u0441\u0443...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var ProductDetailsComponent = /*#__PURE__*/function () {
        function ProductDetailsComponent(productService, cartService, route) {
          _classCallCheck(this, ProductDetailsComponent);

          this.productService = productService;
          this.cartService = cartService;
          this.route = route;
        }

        _createClass(ProductDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getProduct();
          }
        }, {
          key: "getProduct",
          value: function getProduct() {
            var _this22 = this;

            var productId = +this.route.snapshot.paramMap.get('productId');
            this.productService.getById(productId).subscribe(function (product) {
              _this22.product = product;
              _this22.selectedPhotoUrl = product.photoUrls[0];
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "selectPhotoUrl",
          value: function selectPhotoUrl(photoUrl) {
            this.selectedPhotoUrl = photoUrl;
          }
        }, {
          key: "addToCart",
          value: function addToCart(product) {
            this.cartService.addProduct(product);
          }
        }]);

        return ProductDetailsComponent;
      }();

      ProductDetailsComponent.ɵfac = function ProductDetailsComponent_Factory(t) {
        return new (t || ProductDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
      };

      ProductDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProductDetailsComponent,
        selectors: [["app-product-detail"]],
        decls: 36,
        vars: 8,
        consts: [["id", "product-detail", 1, "bg-secondary"], [1, "container"], [1, "row"], [1, "col-sm-12", "col-md-5", "mt-5"], [1, "col-sm-12"], [1, "img", "img-fluid", "rounded", 3, "src", "alt"], [1, "list-unstyled", "list-inline", "mt-lg-3"], ["class", "list-inline-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-sm-12", "col-md-7", "mt-md-5"], [1, "col-sm-12", "pb-sm-2"], [1, "text-xs"], [1, "col-sm-12", "col-md-6"], [1, "text-info"], [1, "col-sm-12", "col-md-6", "text-sm-center"], ["routerLink", "/delivery-form"], [1, "btn", "btn-info", "btn-md", 3, "click"], [1, "fas", "fa-shopping-cart"], [1, "pt-sm-2"], [4, "ngIf"], ["class", "text-xs", 4, "ngIf"], [1, "list-inline-item", 3, "click"], [1, "btn", "btn-link"], [1, "small-image", "rounded", 3, "src"]],
        template: function ProductDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProductDetailsComponent_li_10_Template, 3, 1, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailsComponent_Template_button_click_27_listener() {
              return ctx.addToCart(ctx.product);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " \u041A\u0443\u043F\u0438\u0442\u0438 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h4", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u041E\u043F\u0438\u0441:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ProductDetailsComponent_p_34_Template, 2, 1, "p", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ProductDetailsComponent_p_35_Template, 2, 0, "p", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.selectedPhotoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "The photo of ", ctx.product.name, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.product.photoUrls);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0410\u0440\u0442\u0438\u043A\u0443\u043B: ", ctx.product.id, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.product.price, " \u0433\u0440\u043D.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product.description);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.product.description);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
        styles: ["section#product-detail[_ngcontent-%COMP%] {\n\tmin-height: 85vh;\n}\n\n.small-image[_ngcontent-%COMP%] {\n\theight: 30px;\n\twidth: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLFdBQVc7QUFDWiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtZGV0YWlscy9wcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24jcHJvZHVjdC1kZXRhaWwge1xuXHRtaW4taGVpZ2h0OiA4NXZoO1xufVxuXG4uc21hbGwtaW1hZ2Uge1xuXHRoZWlnaHQ6IDMwcHg7XG5cdHdpZHRoOiAzMHB4O1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDetailsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-product-detail',
            templateUrl: './product-details.component.html',
            styleUrls: ['./product-details.component.css']
          }]
        }], function () {
          return [{
            type: _service_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]
          }, {
            type: _service_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "ziXE":
    /*!************************************************!*\
      !*** ./src/app/products/products.component.ts ***!
      \************************************************/

    /*! exports provided: ProductsComponent */

    /***/
    function ziXE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductsComponent", function () {
        return ProductsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _service_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../_service/product.service */
      "MeDL");
      /* harmony import */


      var _service_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../_service/category.service */
      "2TwG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ProductsComponent_div_5_img_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 17);
        }

        if (rf & 2) {
          var pr_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", pr_r44.photoUrls[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function ProductsComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductsComponent_div_5_img_2_Template, 1, 1, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u041A\u0443\u043F\u0438\u0442\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var pr_r44 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", pr_r44.photoUrls);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pr_r44.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pr_r44.description.substring(0, 50));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 5, pr_r44.price, "UAH"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/productDetails/", pr_r44.id, "");
        }
      }

      function ProductsComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\uD83E\uDD37\u200D\u2640\uFE0F \u041D\u0435\u043C\u0430\u0454 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0456\u0432 \u0432 \u0434\u0430\u043D\u0456\u0439 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var ProductsComponent = /*#__PURE__*/function () {
        function ProductsComponent(productService, categoryService, route) {
          _classCallCheck(this, ProductsComponent);

          this.productService = productService;
          this.categoryService = categoryService;
          this.route = route;
        }

        _createClass(ProductsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadCategory();
            this.loadProducts();
          }
        }, {
          key: "loadCategory",
          value: function loadCategory() {
            var _this23 = this;

            var categoryId = +this.route.snapshot.paramMap.get('categoryId');
            this.categoryService.getById(categoryId).subscribe(function (cat) {
              return _this23.category = cat;
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "loadProducts",
          value: function loadProducts() {
            var _this24 = this;

            var categoryId = +this.route.snapshot.paramMap.get('categoryId');
            this.categoryService.getAllProducts(categoryId).subscribe(function (products) {
              return _this24.products = products;
            }, function (error) {
              return console.log(error);
            });
          }
        }]);

        return ProductsComponent;
      }();

      ProductsComponent.ɵfac = function ProductsComponent_Factory(t) {
        return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
      };

      ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProductsComponent,
        selectors: [["app-products"]],
        decls: 7,
        vars: 3,
        consts: [["id", "products", 1, "bg-light", "text-dark", "pb-3", "pt-3"], [1, "container"], [1, "category-name", "text-dark"], [1, "row"], ["class", "col-6 col-md-4 col-lg-3 mb-4", 4, "ngFor", "ngForOf"], ["class", "col-12", 4, "ngIf"], [1, "col-6", "col-md-4", "col-lg-3", "mb-4"], [1, "card", "card-product"], ["class", "card-img-top", "alt", "Card image cap", 3, "src", 4, "ngIf"], [1, "card-body", "pt-1"], [1, "card-title", "mb-1"], [1, "card-text", "mb-0"], [1, "list-unstyled"], [1, "list-inline-item", "mt-0"], [1, "text-info", "price"], [3, "routerLink"], [1, "btn", "btn-secondary", "px-5"], ["alt", "Card image cap", 1, "card-img-top", 3, "src"], [1, "col-12"], [1, "text-white", "text-xss"]],
        template: function ProductsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProductsComponent_div_5_Template, 17, 8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProductsComponent_div_6_Template, 3, 0, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.category == null ? null : ctx.category.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.products.length == 0);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]],
        styles: ["section#products[_ngcontent-%COMP%] {\n\tmin-height: 85vh;\n}\n\n.price[_ngcontent-%COMP%] {\n\tfont-size: 1.8rem;\n}\n\n.card-product[_ngcontent-%COMP%] {\n\tmin-height: 100%;\n}\n\n@media only screen and (max-width: 768px) {\n\t.price[_ngcontent-%COMP%] {\n\t\tfont-size: 1rem;\n\t}\n\n\t.card-title[_ngcontent-%COMP%] {\n\t\tfont-size: 1.2rem;\n\t}\n\n\t.card-product[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n\t\tpadding: 10px;\n\t}\n\n\t.card-text[_ngcontent-%COMP%] {\n\t\tfont-size: 0.7rem;\n\t}\n\n\t.card-product[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n\t\tpadding: 5px !important;\n\t\t\n\t\tmargin: 0px;\n\t}\n}\n\n.category-name[_ngcontent-%COMP%] {\n\tfont-size: 28px;\n\tcolor: rgba(255, 255, 255, .8);\n}\n\n\n\n@media only screen and (min-width: 600px) {\n\t\n}\n\n\n\n@media only screen and (min-width: 768px) {\n\t\n}\n\n\n\n@media only screen and (min-width: 992px) {\n\t.card-product[_ngcontent-%COMP%] {\n\t\topacity: .8;\n\t}\n\n\t.card-product[_ngcontent-%COMP%]:hover {\n\t\topacity: 1;\n\t\tborder-width: 1px;\n\t\tborder-color: green;\n\t}\t\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDO0VBQ0MsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLGlCQUFpQjtDQUNsQjs7Q0FFQTtFQUNDLGFBQWE7Q0FDZDs7Q0FFQTtFQUNDLGlCQUFpQjtDQUNsQjs7Q0FFQTtFQUNDLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsV0FBVztDQUNaO0FBQ0Q7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsOEJBQThCO0FBQy9COztBQUVBLG9FQUFvRTs7QUFDcEU7O0FBRUE7O0FBRUEscURBQXFEOztBQUNyRDs7QUFFQTs7QUFFQSxtREFBbUQ7O0FBQ25EO0NBQ0M7RUFDQyxXQUFXO0NBQ1o7O0NBRUE7RUFDQyxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtDQUNwQjtBQUNEIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24jcHJvZHVjdHMge1xuXHRtaW4taGVpZ2h0OiA4NXZoO1xufVxuXG4ucHJpY2Uge1xuXHRmb250LXNpemU6IDEuOHJlbTtcbn1cblxuLmNhcmQtcHJvZHVjdCB7XG5cdG1pbi1oZWlnaHQ6IDEwMCU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcblx0LnByaWNlIHtcblx0XHRmb250LXNpemU6IDFyZW07XG5cdH1cblxuXHQuY2FyZC10aXRsZSB7XG5cdFx0Zm9udC1zaXplOiAxLjJyZW07XG5cdH1cblxuXHQuY2FyZC1wcm9kdWN0IC5jYXJkLWJvZHkge1xuXHRcdHBhZGRpbmc6IDEwcHg7XG5cdH1cblxuXHQuY2FyZC10ZXh0IHtcblx0XHRmb250LXNpemU6IDAuN3JlbTtcblx0fVxuXG5cdC5jYXJkLXByb2R1Y3QgLmJ0bi1zZWNvbmRhcnkge1xuXHRcdHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xuXHRcdC8qd2lkdGggOyovXG5cdFx0bWFyZ2luOiAwcHg7XG5cdH1cbn1cblxuLmNhdGVnb3J5LW5hbWUge1xuXHRmb250LXNpemU6IDI4cHg7XG5cdGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC44KTtcbn1cblxuLyogU21hbGwgZGV2aWNlcyAocG9ydHJhaXQgdGFibGV0cyBhbmQgbGFyZ2UgcGhvbmVzLCA2MDBweCBhbmQgdXApICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG5cdFxufVxuXG4vKiBNZWRpdW0gZGV2aWNlcyAobGFuZHNjYXBlIHRhYmxldHMsIDc2OHB4IGFuZCB1cCkgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcblx0XG59XG5cbi8qIExhcmdlIGRldmljZXMgKGxhcHRvcHMvZGVza3RvcHMsIDk5MnB4IGFuZCB1cCkgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcblx0LmNhcmQtcHJvZHVjdCB7XG5cdFx0b3BhY2l0eTogLjg7XG5cdH1cblxuXHQuY2FyZC1wcm9kdWN0OmhvdmVyIHtcblx0XHRvcGFjaXR5OiAxO1xuXHRcdGJvcmRlci13aWR0aDogMXB4O1xuXHRcdGJvcmRlci1jb2xvcjogZ3JlZW47XG5cdH1cdFxufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-products',
            templateUrl: './products.component.html',
            styleUrls: ['./products.component.css']
          }]
        }], function () {
          return [{
            type: _service_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]
          }, {
            type: _service_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map