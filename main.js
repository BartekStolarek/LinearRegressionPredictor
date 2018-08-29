(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class='title'>\n    <div class=\"row\">\n      <h2 class=\"center\">Linear Regression Predictor</h2>\n    </div>\n    <div class=\"row\">\n        <p class=\"center\">A Machine Learning and TensorFlow solution for predicting linear values.</p>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div class=\"row\">\n        <div class='table-container'>\n          <data-table (onValuesChange)=\"updateDataset($event)\" [data]=\"data\"></data-table>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-8\">\n      <div class=\"row\">\n        <graph-data [data]=\"data\"></graph-data>\n      </div>\n      <div class=\"row\">\n        <div class='center'>\n          <prediction [data]=\"data\"></prediction>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        this.data = [
            { x: 100, y: 5 },
            { x: 110, y: 5.3 },
            { x: 120, y: 6.3 },
            { x: 130, y: 6.7 },
            { x: 140, y: 7.1 },
            { x: 150, y: 8 },
            { x: 160, y: 8.7 }
        ];
    };
    AppComponent.prototype.updateDataset = function (data) {
        this.data = data;
        this.data = this.data.slice();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/data-table/data-table.component */ "./src/app/components/data-table/data-table.component.ts");
/* harmony import */ var _components_graph_graph_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/graph/graph.component */ "./src/app/components/graph/graph.component.ts");
/* harmony import */ var _components_prediction_prediction_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/prediction/prediction.component */ "./src/app/components/prediction/prediction.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_4__["DataTableComponent"],
                _components_graph_graph_component__WEBPACK_IMPORTED_MODULE_5__["GraphComponent"],
                _components_prediction_prediction_component__WEBPACK_IMPORTED_MODULE_6__["PredictionComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/data-table/data-table.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/data-table/data-table.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table>\r\n    <tr>\r\n        <th><input type='text' value='X [km/h]' class='title-input'></th>\r\n        <th><input type='text' value='Y [l]' class='title-input'></th>\r\n    </tr>\r\n    <tr *ngFor=\"let item of data; let i = index\">\r\n        <th><input type='number' value={{data[i].x}} (change)=\"changeValues($event, i, 'x')\"></th>\r\n        <th><input type='number' value={{data[i].y}} (change)=\"changeValues($event, i, 'y')\"></th>\r\n    </tr>\r\n</table>\r\n<p class=\"alert alert-info\">An example table: Skoda Octavia fuel usage on a highway.</p>\r\n"

/***/ }),

/***/ "./src/app/components/data-table/data-table.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/data-table/data-table.component.ts ***!
  \***************************************************************/
/*! exports provided: DataTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableComponent", function() { return DataTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataTableComponent = /** @class */ (function () {
    function DataTableComponent() {
        this.onValuesChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    DataTableComponent.prototype.changeValues = function (event, index, xy) {
        try {
            this.data[index][xy] = parseFloat(event.target.value);
            this.onValuesChange.emit(this.data);
        }
        catch (err) {
            console.log("This value is incorrect.");
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DataTableComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DataTableComponent.prototype, "onValuesChange", void 0);
    DataTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'data-table',
            template: __webpack_require__(/*! ./data-table.component.html */ "./src/app/components/data-table/data-table.component.html")
        })
    ], DataTableComponent);
    return DataTableComponent;
}());



/***/ }),

/***/ "./src/app/components/graph/graph.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/graph/graph.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id='graph-content'></div>\r\n"

/***/ }),

/***/ "./src/app/components/graph/graph.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/graph/graph.component.ts ***!
  \*****************************************************/
/*! exports provided: GraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphComponent", function() { return GraphComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GraphComponent = /** @class */ (function () {
    function GraphComponent() {
        this.loaded = false;
    }
    GraphComponent.prototype.ngOnChanges = function (changes) {
        this.drawGraph();
    };
    GraphComponent.prototype.drawGraph = function () {
        this.loaded = false;
        var margin = { top: 50, right: 50, bottom: 50, left: 50 }, width = window.innerWidth / 1.5 - margin.left - margin.right, height = window.innerHeight / 1.5 - margin.top - margin.bottom;
        // The number of datapoints
        var n = this.data.length;
        var xScale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]()
            .domain([this.data[0].x - 10, this.data[n - 1].x])
            .range([0, width]);
        var yScale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]()
            .domain([0, Math.ceil(this.data[n - 1].y)])
            .range([height, 0]);
        var line = d3__WEBPACK_IMPORTED_MODULE_1__["line"]()
            .x(function (d, i) { return xScale(d.x); })
            .y(function (d) { return yScale(d.y); })
            .curve(d3__WEBPACK_IMPORTED_MODULE_1__["curveMonotoneX"]);
        var dataset = [];
        for (var i = 0; i < this.data.length; i++) {
            dataset.push({
                "x": this.data[i].x,
                "y": this.data[i].y
            });
        }
        //If previous graph existed- remove
        if (d3__WEBPACK_IMPORTED_MODULE_1__["select"]("#graph-content svg")) {
            d3__WEBPACK_IMPORTED_MODULE_1__["select"]("#graph-content svg").remove();
        }
        var svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"]("#graph-content").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"](xScale));
        svg.append("g")
            .attr("class", "y axis")
            .call(d3__WEBPACK_IMPORTED_MODULE_1__["axisLeft"](yScale));
        svg.append("path")
            .data([dataset])
            .attr("class", "line")
            .attr("d", line);
        svg.selectAll(".dot")
            .data(dataset)
            .enter().append("circle")
            .attr("class", "dot")
            .attr("cx", function (d, i) { return xScale(d.x); })
            .attr("cy", function (d) { return yScale(d.y); })
            .attr("r", 5);
        this.loaded = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GraphComponent.prototype, "data", void 0);
    GraphComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'graph-data',
            template: __webpack_require__(/*! ./graph.component.html */ "./src/app/components/graph/graph.component.html")
        })
    ], GraphComponent);
    return GraphComponent;
}());



/***/ }),

/***/ "./src/app/components/prediction/prediction.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/prediction/prediction.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-control\">\r\n    <label>Type <b>Y</b> value, to get predicted <b>X</b> by machine learning (in base example- \r\n        type fuel usage, to get predicted speed):</label>\r\n    <div *ngIf=\"loaded\" class=\"row\">\r\n        <input type=\"number\" class=\"predict-input\" placeholder=\"ex. 5.9\" [(ngModel)]=\"inputValue\" (change)=\"predict()\">\r\n    </div>\r\n    <div *ngIf=\"!loaded\" class=\"row border\">\r\n        <div class=\"center\">\r\n            <div class=\"training-caption\">Training model...</div>\r\n            <div class=\"loader\"></div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<p class=\"alert alert-success\">Estimated X value is: <b>{{ prediction }}</b></p>"

/***/ }),

/***/ "./src/app/components/prediction/prediction.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/prediction/prediction.component.ts ***!
  \***************************************************************/
/*! exports provided: PredictionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictionComponent", function() { return PredictionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tensorflow/tfjs */ "./node_modules/@tensorflow/tfjs/dist/tf.esm.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var PredictionComponent = /** @class */ (function () {
    function PredictionComponent() {
        this.prediction = 0.0;
        this.loaded = false;
    }
    PredictionComponent.prototype.ngOnChanges = function () {
        this.train();
    };
    PredictionComponent.prototype.train = function () {
        return __awaiter(this, void 0, void 0, function () {
            var preparedX, preparedY, xs, ys;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //Init loader
                        this.loaded = false;
                        //Define a model
                        this.linearModel = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["sequential"]();
                        this.linearModel.add(_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["layers"].dense({ units: 1, inputShape: [1] }));
                        //Prepare model
                        this.linearModel.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });
                        preparedX = this.data.map(function (val) { return val.x; });
                        preparedY = this.data.map(function (val) { return val.y; });
                        xs = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["tensor2d"](preparedY, [this.data.length, 1]);
                        ys = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["tensor2d"](preparedX, [this.data.length, 1]);
                        //Train
                        return [4 /*yield*/, this.linearModel.fit(xs, ys, { epochs: 250 })];
                    case 1:
                        //Train
                        _a.sent();
                        this.loaded = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    PredictionComponent.prototype.predict = function () {
        var output = this.linearModel.predict(_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["tensor2d"]([this.inputValue], [1, 1]));
        this.prediction = Array.from(output.dataSync())[0];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PredictionComponent.prototype, "data", void 0);
    PredictionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'prediction',
            template: __webpack_require__(/*! ./prediction.component.html */ "./src/app/components/prediction/prediction.component.html")
        })
    ], PredictionComponent);
    return PredictionComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\barte\Documents\GitHub\Linear-Predict\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map