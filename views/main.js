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

module.exports = "<!-- sidepanel for medium and large screen -->\n<div class=\"w3-sidebar w3-bar-block w3-card-4 w3-hide-small \" style=\" background-color: #2a3f54; width: 15%\" id=\"mySidebar\">\n  <a class=\"w3-bar-item w3-xlarge w3-text-white\">\n    Menu\n  </a>\n  <!-- menu dropdowns -->\n  <div>\n    <!-- sales dropdown -->\n    <div>\n      <button [ngClass]=\"{'w3-bar-item w3-button w3-text-white w3-hover-shadow' : true, 'w3-cyan' : salesDropdown}\" (click)=\"(this.salesDropdown) ? this.salesDropdown = false : this.salesDropdown = true\">\n        <fa name=\"home\"></fa>\n        Sales &nbsp;&nbsp;&nbsp;\n        <fa *ngIf=\"!salesDropdown\" name=\"caret-left\" class=\"w3-right w3-animate-bottom\"></fa>\n        <fa *ngIf=\"salesDropdown\" name=\"caret-down\" class=\"w3-right w3-animate-bottom\"></fa>\n      </button>\n      <div *ngIf=\"salesDropdown\" class=\"w3-animate-left w3-card-4\">\n        \n        <button routerLink=\"/headOfficeList\"  class=\"w3-bar-item w3-button w3-small w3-text-white\">\n          &nbsp;&nbsp;\n          <fa name=\"circle-o\" style=\"color: gray\"></fa> \n          <strong style=\"font-size:16px\"> head office list</strong>\n        </button>\n        \n        <button routerLink=\"/memberList\"  class=\"w3-bar-item w3-button w3-small w3-text-white\">\n          &nbsp;&nbsp;\n          <fa name=\"circle-o\" style=\"color: gray\"></fa> \n          <strong style=\"font-size:16px\"> member list</strong>\n        </button>\n        \n      </div>\n    </div>\n    <!-- sales dropdown end -->\n  \n    <!-- calculate dropdown -->\n    <div>\n      <button [ngClass]=\"{'w3-bar-item w3-button w3-text-white w3-hover-shadow' : true, 'w3-cyan' : calculateDropdown}\" (click)=\"(this.calculateDropdown) ? this.calculateDropdown = false : this.calculateDropdown = true\">\n        <fa name=\"cc-visa\"></fa>\n        Calculate &nbsp;&nbsp;&nbsp;\n        <fa *ngIf=\"!calculateDropdown\" name=\"caret-left\" class=\"w3-right w3-animate-bottom\"></fa>\n        <fa *ngIf=\"calculateDropdown\" name=\"caret-down\" class=\"w3-right w3-animate-bottom\"></fa>\n      </button>\n        <div *ngIf=\"calculateDropdown\" class=\"w3-animate-left w3-card-4\">\n  \n          <button routerLink=\"/calculateManage\"  class=\"w3-bar-item w3-button w3-small w3-text-white\">\n              &nbsp;&nbsp;\n              <fa name=\"circle-o\" style=\"color: gray\"></fa> \n              <strong style=\"font-size:16px\"> calculate manage</strong>\n          </button>\n  \n          <button routerLink=\"/userProfit\"  class=\"w3-bar-item w3-button w3-small w3-text-white\">\n              &nbsp;&nbsp;\n              <fa name=\"circle-o\" style=\"color: gray\"></fa> \n              <strong style=\"font-size:16px\"> user profit</strong>\n            </button>\n  \n        </div>\n    </div>\n    <!-- calculate dropdown end -->\n    \n    <!-- user dropdown -->\n    <div>\n      <button [ngClass]=\"{'w3-bar-item w3-button w3-text-white w3-hover-shadow' : true, 'w3-cyan' : userDropdown}\" (click)=\"(this.userDropdown) ? this.userDropdown = false : this.userDropdown = true\">\n        <fa name=\"android\"></fa>\n        User &nbsp;&nbsp;&nbsp;\n        <fa *ngIf=\"!userDropdown\" name=\"caret-left\" class=\"w3-right w3-animate-bottom\"></fa>\n        <fa *ngIf=\"userDropdown\" name=\"caret-down\" class=\"w3-right w3-animate-bottom\"></fa>\n      </button>\n      <div *ngIf=\"userDropdown\" class=\"w3-animate-left w3-card-4\">\n        \n            <button routerLink=\"/connectingUser\"  class=\"w3-bar-item w3-button w3-small w3-text-white\">\n              &nbsp;&nbsp;\n              <fa name=\"circle-o\" style=\"color: gray\"></fa> \n              <strong style=\"font-size:16px\"> connecting user</strong>\n            </button>\n\n            <button routerLink=\"/blackList\"  class=\"w3-bar-item w3-button w3-small w3-text-white\">\n              &nbsp;&nbsp;\n              <fa name=\"circle-o\" style=\"color: gray\"></fa> \n              <strong style=\"font-size:16px\"> black list</strong>\n            </button>\n    \n            \n            <button routerLink=\"/IPinquire\"  class=\"w3-bar-item w3-button w3-small w3-text-white\">\n                &nbsp;&nbsp;\n                <fa name=\"circle-o\" style=\"color: gray\"></fa> \n                <strong style=\"font-size:16px\"> IP inquire</strong>\n              </button>\n          </div>\n    </div>\n    <!-- user dropdown end -->\n  \n    <!-- deposit and withdraw dropdown -->\n    <div>\n      <button [ngClass]=\"{'w3-bar-item w3-button w3-text-white w3-hover-shadow' : true, 'w3-cyan' : dwDropdown}\" (click)=\"(this.dwDropdown) ? this.dwDropdown = false : this.dwDropdown = true\">\n        <fa name=\"table\"></fa>\n        Deposit &amp; Withdraw &nbsp;&nbsp;&nbsp;\n        <fa *ngIf=\"!dwDropdown\" name=\"caret-left\" class=\"w3-right w3-animate-bottom\"></fa>\n        <fa *ngIf=\"dwDropdown\" name=\"caret-down\" class=\"w3-right w3-animate-bottom\"></fa>\n      </button>\n        <div *ngIf=\"dwDropdown\" class=\"w3-animate-left w3-card-4\">\n          <button routerLink=\"/depositManagement\"  class=\"w3-bar-item w3-button w3-small w3-text-white\">\n              &nbsp;&nbsp;\n              <fa name=\"circle-o\" style=\"color: gray\"></fa> \n              <strong style=\"font-size:16px\"> deposit management</strong>\n          </button>\n  \n          <button routerLink=\"/withdrawManagement\"  class=\"w3-bar-item w3-button w3-small w3-text-white\">\n              &nbsp;&nbsp;\n              <fa name=\"circle-o\" style=\"color: gray\"></fa> \n              <strong style=\"font-size:16px\"> withdraw management</strong>\n            </button>\n          \n        </div>\n    </div>\n    <!-- deposit and withdraw end -->\n  \n    <!-- notice dropdown -->\n    <div>\n        <button [ngClass]=\"{'w3-bar-item w3-button w3-text-white w3-hover-shadow' : true, 'w3-cyan' : noticeDropdown}\" (click)=\"(this.noticeDropdown) ? this.noticeDropdown = false : this.noticeDropdown = true\">\n          <fa name=\"bell-o\"></fa>\n          Notice &nbsp;&nbsp;&nbsp;\n          <fa *ngIf=\"!noticeDropdown\" name=\"caret-left\" class=\"w3-right w3-animate-bottom\"></fa>\n          <fa *ngIf=\"noticeDropdown\" name=\"caret-down\" class=\"w3-right w3-animate-bottom\"></fa>\n        </button>\n          <div *ngIf=\"noticeDropdown\" class=\"w3-animate-left w3-card-4\">\n            \n            <button routerLink=\"/lobbyNotice\"  class=\"w3-bar-item w3-button w3-small w3-text-white\">\n                &nbsp;&nbsp;\n                <fa name=\"circle-o\" style=\"color: gray\"></fa> \n                <strong style=\"font-size:16px\"> lobby notice</strong>\n            </button>\n            \n            <button routerLink=\"/inGamingTable\"  class=\"w3-bar-item w3-button w3-small w3-text-white\">\n              &nbsp;&nbsp;\n              <fa name=\"circle-o\" style=\"color: gray\"></fa> \n              <strong style=\"font-size:16px\"> in gaming table</strong>\n            </button>\n\n            <button routerLink=\"/1on1support\"  class=\"w3-bar-item w3-button w3-small w3-text-white\">\n                &nbsp;&nbsp;\n                <fa name=\"circle-o\"  style=\"color: gray\"></fa> \n                <strong style=\"font-size:16px;\"> 1:1 support</strong>\n            </button>\n  \n  \n  \n          </div>\n    </div>\n    <!-- notice dropdown end -->\n  \n    <!-- log dropdown -->\n    <div>\n      <button [ngClass]=\"{'w3-bar-item w3-button w3-text-white w3-hover-shadow' : true, 'w3-cyan' : logDropdown}\" (click)=\"(this.logDropdown) ? this.logDropdown = false : this.logDropdown = true\">\n        <fa name=\"clone\"></fa>\n        Log &nbsp;&nbsp;&nbsp;\n        <fa *ngIf=\"!logDropdown\" name=\"caret-left\" class=\"w3-right w3-animate-bottom\"></fa>\n        <fa *ngIf=\"logDropdown\" name=\"caret-down\" class=\"w3-right w3-animate-bottom\"></fa>\n      </button>\n        <div *ngIf=\"logDropdown\" class=\"w3-animate-left w3-card-4\">\n  \n          <button routerLink=\"/gameLog\"  class=\"w3-bar-item w3-button w3-small w3-text-white\">\n              &nbsp;&nbsp;\n              <fa name=\"circle-o\"  style=\"color: gray\"></fa> \n              <strong style=\"font-size:16px;\"> game log</strong>\n          </button>\n          \n          <button routerLink=\"/jackpotLog\"  class=\"w3-bar-item w3-button w3-small w3-text-white\">\n              &nbsp;&nbsp;\n              <fa name=\"circle-o\"  style=\"color: gray\"></fa> \n              <strong style=\"font-size:16px;\"> jackpot log</strong>\n          </button>\n\n          <button routerLink=\"/transferLog\"  class=\"w3-bar-item w3-button w3-small w3-text-white\">\n              &nbsp;&nbsp;\n              <fa name=\"circle-o\"  style=\"color: gray\"></fa> \n              <strong style=\"font-size:16px;\"> transfer log</strong>\n          </button>\n\n          <button routerLink=\"/potLog\"  class=\"w3-bar-item w3-button w3-small w3-text-white\">\n              &nbsp;&nbsp;\n              <fa name=\"circle-o\"  style=\"color: gray\"></fa> \n              <strong style=\"font-size:16px;\"> pot log</strong>\n          </button>\n  \n        </div>\n    </div>\n    <!-- log dropdown end -->\n  </div>\n  <!-- menu dropdowns end -->\n  \n\n</div>\n<!-- sidepanel for medium and large screen end -->\n\n\n\n\n<div id=\"main\">\n  <!-- topbar -->\n  <div class=\"w3-bar w3-large w3-border w3-light-grey\" >\n\n    <!-- sidepanel toggle -->\n    <div class=\"w3-hide-medium w3-hide-large\">\n      <button *ngIf=\"!mobileAccordion\" class=\"w3-button w3-bar-item w3-left\" (click)=\"mobileAccordionToggle()\" style=\"color: #2a3f54\">\n        <fa name=\"bars\"></fa>\n      </button>\n      <button *ngIf=\"mobileAccordion\" class=\"w3-button w3-bar-item w3-left\" (click)=\"mobileAccordionToggle()\" style=\"color: #2a3f54\">\n        <fa name=\"times\"></fa>  \n      </button>\n    </div>\n    <!-- sidepanel toggle end -->\n\n\n    <button class=\"w3-button w3-bar-item w3-right\">\n      <fa name=\"sign-out\"></fa>\n    </button>\n\n    <a class=\" w3-bar-item w3-right\">Clyde A. Santos</a>\n\n  </div>\n  <!-- topbar end -->\n\n  <!-- sidepanel for small screens-->\n  <div *ngIf=\"mobileAccordion\" class=\"w3-animate-left w3-hide-large w3-hide-medium \" style=\"background-color: #2a3f54;\" id=\"sidepanelSmall\">\n\n    <!-- calculate -->\n    <button class=\"w3-button w3-block w3-text-white\" style=\"text-align: left\" (click)=\"(this.calculateDropdown) ? this.calculateDropdown = false : this.calculateDropdown = true\"> <fa name=\"cc-visa\"></fa> Calculate </button>\n      <div *ngIf=\"calculateDropdown\" class=\"w3-animate-left\">\n        <button routerLink=\"\"  class=\"w3-button w3-block w3-small w3-white\" style=\"text-align: left\">&nbsp;&nbsp;Calculate manage</button>\n        <button routerLink=\"\"  class=\"w3-button w3-block w3-small w3-white\" style=\"text-align: left\">&nbsp;&nbsp;User profit</button>\n      </div>\n    <!-- calculate end -->\n\n    <!-- Deposit and withdraw -->\n    <button class=\"w3-button w3-block w3-text-white\" (click)=\"(this.dwDropdown) ? this.dwDropdown = false : this.dwDropdown = true\" style=\"text-align: left\"> <fa name=\"table\"></fa>&nbsp;Deposit &amp; Withdraw</button>\n      <div *ngIf=\"dwDropdown\" class=\"w3-animate-left\">\n        <button routerLink=\"\"  class=\"w3-button w3-block w3-small w3-white\" style=\"text-align: left\" >&nbsp;&nbsp;&nbsp;&nbsp;Deposit manage</button>\n        <button routerLink=\"\"  class=\"w3-button w3-block w3-small w3-white\" style=\"text-align: left\" >&nbsp;&nbsp;&nbsp;&nbsp;Withdraw manage</button>\n      </div>\n    <!-- Deposit and withdraw end-->\n\n    <!-- log -->\n    <button class=\"w3-button w3-block w3-text-white\" (click)=\"(this.logDropdown) ? this.logDropdown = false : this.logDropdown = true\" style=\"text-align: left\"> <fa name=\"clone\"></fa> Log</button>\n      <div *ngIf=\"logDropdown\" class=\"w3-animate-left\">\n        <button routerLink=\"\"  class=\"w3-button w3-block w3-small w3-white\" style=\"text-align: left\" >&nbsp;&nbsp;&nbsp;&nbsp;Game log</button>\n        <button routerLink=\"\"  class=\"w3-button w3-block w3-small w3-white\" style=\"text-align: left\" >&nbsp;&nbsp;&nbsp;&nbsp;Transfer log</button>\n      </div>\n    <!-- log end -->\n\n    <!-- Notice -->\n    <button class=\"w3-button w3-block w3-text-white\" (click)=\"(this.noticeDropdown) ? this.noticeDropdown = false : this.noticeDropdown = true\" style=\"text-align: left\"> <fa name=\"bell-o\"></fa> Notice</button>\n      <div *ngIf=\"noticeDropdown\" class=\"w3-animate-left\">\n        <button routerLink=\"\"  class=\"w3-button w3-block w3-small w3-white\" style=\"text-align: left\" >&nbsp;&nbsp;&nbsp;&nbsp;1on1 support</button>\n        <button routerLink=\"\"  class=\"w3-button w3-block w3-small w3-white\" style=\"text-align: left\" >&nbsp;&nbsp;&nbsp;&nbsp;In gaming table</button>\n        <button routerLink=\"\"  class=\"w3-button w3-block w3-small w3-white\" style=\"text-align: left\" >&nbsp;&nbsp;&nbsp;&nbsp;Notice-lobby notice</button>\n      </div>\n    <!-- notice end -->\n\n    <!-- sales -->\n    <button class=\"w3-button w3-block w3-text-white\" (click)=\"(this.salesDropdown) ? this.salesDropdown = false : this.salesDropdown = true\" style=\"text-align: left\"> <fa name=\"home\"></fa> Sales</button>\n      <div *ngIf=\"salesDropdown\" class=\"w3-animate-left\">\n        <button routerLink=\"\"  class=\"w3-button w3-block w3-small w3-white\" style=\"text-align: left\" >&nbsp;&nbsp;&nbsp;&nbsp;Sales head office</button>\n        <button routerLink=\"\"  class=\"w3-button w3-block w3-small w3-white\" style=\"text-align: left\" >&nbsp;&nbsp;&nbsp;&nbsp;Sales member list</button>\n      </div>\n    <!-- sales end -->\n\n    <!-- user -->\n    <button class=\"w3-button w3-block w3-text-white\" (click)=\"(this.userDropdown) ? this.userDropdown = false : this.userDropdown = true\" style=\"text-align: left\"> <fa name=\"android\"></fa> User</button>\n      <div *ngIf=\"userDropdown\" class=\"w3-animate-left\">\n        <button routerLink=\"\"  class=\"w3-button w3-block w3-small w3-white\" style=\"text-align: left\" >&nbsp;&nbsp;&nbsp;User black list</button>\n        <button routerLink=\"\"  class=\"w3-button w3-block w3-small w3-white\" style=\"text-align: left\" >&nbsp;&nbsp;&nbsp;User connecting user</button>\n        <button routerLink=\"\"  class=\"w3-button w3-block w3-small w3-white\" style=\"text-align: left\" >&nbsp;&nbsp;&nbsp;User ip search</button>\n      </div>\n    <!-- user end -->\n\n  </div>\n  <!-- sidepanel for small screens end-->\n\n  <div class=\"w3-container\" style=\"margin-left: 15%\">\n    <router-outlet></router-outlet>\n  </div>\n\n</div>\n\n<script>\n</script>"

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
        this.title = 'holdem';
        this.calculateDropdown = false;
        this.dwDropdown = false;
        this.logDropdown = false;
        this.noticeDropdown = false;
        this.salesDropdown = false;
        this.userDropdown = false;
        this.sidepanelButtonActive = 'w3-cyan';
        this.mobileAccordion = true;
    }
    AppComponent.prototype.mobileAccordionToggle = function () {
        (this.mobileAccordion) ? this.mobileAccordion = false : this.mobileAccordion = true;
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_sales_head_office_list_head_office_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sales/head-office-list/head-office-list.component */ "./src/app/components/sales/head-office-list/head-office-list.component.ts");
/* harmony import */ var _components_sales_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sales/member-list/member-list.component */ "./src/app/components/sales/member-list/member-list.component.ts");
/* harmony import */ var _components_calculate_calculate_manage_calculate_manage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/calculate/calculate-manage/calculate-manage.component */ "./src/app/components/calculate/calculate-manage/calculate-manage.component.ts");
/* harmony import */ var _components_calculate_user_profit_user_profit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/calculate/user-profit/user-profit.component */ "./src/app/components/calculate/user-profit/user-profit.component.ts");
/* harmony import */ var _components_user_connecting_user_connecting_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/user/connecting-user/connecting-user.component */ "./src/app/components/user/connecting-user/connecting-user.component.ts");
/* harmony import */ var _components_user_black_list_black_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/user/black-list/black-list.component */ "./src/app/components/user/black-list/black-list.component.ts");
/* harmony import */ var _components_user_ipinquire_ipinquire_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/user/ipinquire/ipinquire.component */ "./src/app/components/user/ipinquire/ipinquire.component.ts");
/* harmony import */ var _components_deposit_withdraw_deposit_management_deposit_management_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/deposit_withdraw/deposit-management/deposit-management.component */ "./src/app/components/deposit_withdraw/deposit-management/deposit-management.component.ts");
/* harmony import */ var _components_deposit_withdraw_withdraw_management_withdraw_management_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/deposit_withdraw/withdraw-management/withdraw-management.component */ "./src/app/components/deposit_withdraw/withdraw-management/withdraw-management.component.ts");
/* harmony import */ var _components_notice_lobby_notice_lobby_notice_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/notice/lobby-notice/lobby-notice.component */ "./src/app/components/notice/lobby-notice/lobby-notice.component.ts");
/* harmony import */ var _components_notice_in_gaming_table_in_gaming_table_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/notice/in-gaming-table/in-gaming-table.component */ "./src/app/components/notice/in-gaming-table/in-gaming-table.component.ts");
/* harmony import */ var _components_notice_one_on_one_support_one_on_one_support_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/notice/one-on-one-support/one-on-one-support.component */ "./src/app/components/notice/one-on-one-support/one-on-one-support.component.ts");
/* harmony import */ var _components_log_game_log_game_log_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/log/game-log/game-log.component */ "./src/app/components/log/game-log/game-log.component.ts");
/* harmony import */ var _components_log_jackpot_log_jackpot_log_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/log/jackpot-log/jackpot-log.component */ "./src/app/components/log/jackpot-log/jackpot-log.component.ts");
/* harmony import */ var _components_log_transfer_log_transfer_log_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/log/transfer-log/transfer-log.component */ "./src/app/components/log/transfer-log/transfer-log.component.ts");
/* harmony import */ var _components_log_pot_log_pot_log_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/log/pot-log/pot-log.component */ "./src/app/components/log/pot-log/pot-log.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//defaults



//modules


//components
//sales


//calculate


//user



//deposit_withdraw


//notice



//log




var routes = [
    //sales
    { path: 'headOfficeList', component: _components_sales_head_office_list_head_office_list_component__WEBPACK_IMPORTED_MODULE_5__["HeadOfficeListComponent"] },
    { path: 'memberList', component: _components_sales_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_6__["MemberListComponent"] },
    //calculate
    { path: 'calculateManage', component: _components_calculate_calculate_manage_calculate_manage_component__WEBPACK_IMPORTED_MODULE_7__["CalculateManageComponent"] },
    { path: 'userProfit', component: _components_calculate_user_profit_user_profit_component__WEBPACK_IMPORTED_MODULE_8__["UserProfitComponent"] },
    //user
    { path: 'connectingUser', component: _components_user_connecting_user_connecting_user_component__WEBPACK_IMPORTED_MODULE_9__["ConnectingUserComponent"] },
    { path: 'blackList', component: _components_user_black_list_black_list_component__WEBPACK_IMPORTED_MODULE_10__["BlackListComponent"] },
    { path: 'IPinquire', component: _components_user_ipinquire_ipinquire_component__WEBPACK_IMPORTED_MODULE_11__["IPinquireComponent"] },
    //deposit_withdraw
    { path: 'depositManagement', component: _components_deposit_withdraw_deposit_management_deposit_management_component__WEBPACK_IMPORTED_MODULE_12__["DepositManagementComponent"] },
    { path: 'withdrawManagement', component: _components_deposit_withdraw_withdraw_management_withdraw_management_component__WEBPACK_IMPORTED_MODULE_13__["WithdrawManagementComponent"] },
    //notice
    { path: 'lobbyNotice', component: _components_notice_lobby_notice_lobby_notice_component__WEBPACK_IMPORTED_MODULE_14__["LobbyNoticeComponent"] },
    { path: 'inGamingTable', component: _components_notice_in_gaming_table_in_gaming_table_component__WEBPACK_IMPORTED_MODULE_15__["InGamingTableComponent"] },
    { path: '1on1support', component: _components_notice_one_on_one_support_one_on_one_support_component__WEBPACK_IMPORTED_MODULE_16__["OneOnOneSupportComponent"] },
    //log
    { path: 'gameLog', component: _components_log_game_log_game_log_component__WEBPACK_IMPORTED_MODULE_17__["GameLogComponent"] },
    { path: 'jackpotLog', component: _components_log_jackpot_log_jackpot_log_component__WEBPACK_IMPORTED_MODULE_18__["JackpotLogComponent"] },
    { path: 'transferLog', component: _components_log_transfer_log_transfer_log_component__WEBPACK_IMPORTED_MODULE_19__["TransferLogComponent"] },
    { path: 'potLog', component: _components_log_pot_log_pot_log_component__WEBPACK_IMPORTED_MODULE_20__["PotLogComponent"] },
    { path: '', redirectTo: '/potlog', pathMatch: 'full' }
];
Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_sales_head_office_list_head_office_list_component__WEBPACK_IMPORTED_MODULE_5__["HeadOfficeListComponent"],
                _components_sales_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_6__["MemberListComponent"],
                _components_calculate_calculate_manage_calculate_manage_component__WEBPACK_IMPORTED_MODULE_7__["CalculateManageComponent"],
                _components_calculate_user_profit_user_profit_component__WEBPACK_IMPORTED_MODULE_8__["UserProfitComponent"],
                _components_user_connecting_user_connecting_user_component__WEBPACK_IMPORTED_MODULE_9__["ConnectingUserComponent"],
                _components_user_black_list_black_list_component__WEBPACK_IMPORTED_MODULE_10__["BlackListComponent"],
                _components_user_ipinquire_ipinquire_component__WEBPACK_IMPORTED_MODULE_11__["IPinquireComponent"],
                _components_deposit_withdraw_deposit_management_deposit_management_component__WEBPACK_IMPORTED_MODULE_12__["DepositManagementComponent"],
                _components_deposit_withdraw_withdraw_management_withdraw_management_component__WEBPACK_IMPORTED_MODULE_13__["WithdrawManagementComponent"],
                _components_notice_lobby_notice_lobby_notice_component__WEBPACK_IMPORTED_MODULE_14__["LobbyNoticeComponent"],
                _components_notice_in_gaming_table_in_gaming_table_component__WEBPACK_IMPORTED_MODULE_15__["InGamingTableComponent"],
                _components_notice_one_on_one_support_one_on_one_support_component__WEBPACK_IMPORTED_MODULE_16__["OneOnOneSupportComponent"],
                _components_log_game_log_game_log_component__WEBPACK_IMPORTED_MODULE_17__["GameLogComponent"],
                _components_log_jackpot_log_jackpot_log_component__WEBPACK_IMPORTED_MODULE_18__["JackpotLogComponent"],
                _components_log_transfer_log_transfer_log_component__WEBPACK_IMPORTED_MODULE_19__["TransferLogComponent"],
                _components_log_pot_log_pot_log_component__WEBPACK_IMPORTED_MODULE_20__["PotLogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_3__["AngularFontAwesomeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/calculate/calculate-manage/calculate-manage.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/components/calculate/calculate-manage/calculate-manage.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/calculate/calculate-manage/calculate-manage.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/calculate/calculate-manage/calculate-manage.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  calculate-manage works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/calculate/calculate-manage/calculate-manage.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/calculate/calculate-manage/calculate-manage.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CalculateManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculateManageComponent", function() { return CalculateManageComponent; });
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

var CalculateManageComponent = /** @class */ (function () {
    function CalculateManageComponent() {
    }
    CalculateManageComponent.prototype.ngOnInit = function () {
    };
    CalculateManageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-calculate-manage',
            template: __webpack_require__(/*! ./calculate-manage.component.html */ "./src/app/components/calculate/calculate-manage/calculate-manage.component.html"),
            styles: [__webpack_require__(/*! ./calculate-manage.component.css */ "./src/app/components/calculate/calculate-manage/calculate-manage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CalculateManageComponent);
    return CalculateManageComponent;
}());



/***/ }),

/***/ "./src/app/components/calculate/user-profit/user-profit.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/calculate/user-profit/user-profit.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/calculate/user-profit/user-profit.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/calculate/user-profit/user-profit.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  user-profit works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/calculate/user-profit/user-profit.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/calculate/user-profit/user-profit.component.ts ***!
  \***************************************************************************/
/*! exports provided: UserProfitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfitComponent", function() { return UserProfitComponent; });
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

var UserProfitComponent = /** @class */ (function () {
    function UserProfitComponent() {
    }
    UserProfitComponent.prototype.ngOnInit = function () {
    };
    UserProfitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-profit',
            template: __webpack_require__(/*! ./user-profit.component.html */ "./src/app/components/calculate/user-profit/user-profit.component.html"),
            styles: [__webpack_require__(/*! ./user-profit.component.css */ "./src/app/components/calculate/user-profit/user-profit.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserProfitComponent);
    return UserProfitComponent;
}());



/***/ }),

/***/ "./src/app/components/deposit_withdraw/deposit-management/deposit-management.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/deposit_withdraw/deposit-management/deposit-management.component.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/deposit_withdraw/deposit-management/deposit-management.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/deposit_withdraw/deposit-management/deposit-management.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  deposit-management works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/deposit_withdraw/deposit-management/deposit-management.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/components/deposit_withdraw/deposit-management/deposit-management.component.ts ***!
  \************************************************************************************************/
/*! exports provided: DepositManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepositManagementComponent", function() { return DepositManagementComponent; });
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

var DepositManagementComponent = /** @class */ (function () {
    function DepositManagementComponent() {
    }
    DepositManagementComponent.prototype.ngOnInit = function () {
    };
    DepositManagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-deposit-management',
            template: __webpack_require__(/*! ./deposit-management.component.html */ "./src/app/components/deposit_withdraw/deposit-management/deposit-management.component.html"),
            styles: [__webpack_require__(/*! ./deposit-management.component.css */ "./src/app/components/deposit_withdraw/deposit-management/deposit-management.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DepositManagementComponent);
    return DepositManagementComponent;
}());



/***/ }),

/***/ "./src/app/components/deposit_withdraw/withdraw-management/withdraw-management.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/deposit_withdraw/withdraw-management/withdraw-management.component.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/deposit_withdraw/withdraw-management/withdraw-management.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/deposit_withdraw/withdraw-management/withdraw-management.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  withdraw-management works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/deposit_withdraw/withdraw-management/withdraw-management.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/deposit_withdraw/withdraw-management/withdraw-management.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: WithdrawManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithdrawManagementComponent", function() { return WithdrawManagementComponent; });
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

var WithdrawManagementComponent = /** @class */ (function () {
    function WithdrawManagementComponent() {
    }
    WithdrawManagementComponent.prototype.ngOnInit = function () {
    };
    WithdrawManagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-withdraw-management',
            template: __webpack_require__(/*! ./withdraw-management.component.html */ "./src/app/components/deposit_withdraw/withdraw-management/withdraw-management.component.html"),
            styles: [__webpack_require__(/*! ./withdraw-management.component.css */ "./src/app/components/deposit_withdraw/withdraw-management/withdraw-management.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WithdrawManagementComponent);
    return WithdrawManagementComponent;
}());



/***/ }),

/***/ "./src/app/components/log/game-log/game-log.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/log/game-log/game-log.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/log/game-log/game-log.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/log/game-log/game-log.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  game-log works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/log/game-log/game-log.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/log/game-log/game-log.component.ts ***!
  \***************************************************************/
/*! exports provided: GameLogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameLogComponent", function() { return GameLogComponent; });
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

var GameLogComponent = /** @class */ (function () {
    function GameLogComponent() {
    }
    GameLogComponent.prototype.ngOnInit = function () {
    };
    GameLogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game-log',
            template: __webpack_require__(/*! ./game-log.component.html */ "./src/app/components/log/game-log/game-log.component.html"),
            styles: [__webpack_require__(/*! ./game-log.component.css */ "./src/app/components/log/game-log/game-log.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GameLogComponent);
    return GameLogComponent;
}());



/***/ }),

/***/ "./src/app/components/log/jackpot-log/jackpot-log.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/log/jackpot-log/jackpot-log.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/log/jackpot-log/jackpot-log.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/log/jackpot-log/jackpot-log.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  jackpot-log works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/log/jackpot-log/jackpot-log.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/log/jackpot-log/jackpot-log.component.ts ***!
  \*********************************************************************/
/*! exports provided: JackpotLogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JackpotLogComponent", function() { return JackpotLogComponent; });
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

var JackpotLogComponent = /** @class */ (function () {
    function JackpotLogComponent() {
    }
    JackpotLogComponent.prototype.ngOnInit = function () {
    };
    JackpotLogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-jackpot-log',
            template: __webpack_require__(/*! ./jackpot-log.component.html */ "./src/app/components/log/jackpot-log/jackpot-log.component.html"),
            styles: [__webpack_require__(/*! ./jackpot-log.component.css */ "./src/app/components/log/jackpot-log/jackpot-log.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], JackpotLogComponent);
    return JackpotLogComponent;
}());



/***/ }),

/***/ "./src/app/components/log/pot-log/pot-log.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/log/pot-log/pot-log.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/log/pot-log/pot-log.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/log/pot-log/pot-log.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  pot-log works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/log/pot-log/pot-log.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/log/pot-log/pot-log.component.ts ***!
  \*************************************************************/
/*! exports provided: PotLogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PotLogComponent", function() { return PotLogComponent; });
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

var PotLogComponent = /** @class */ (function () {
    function PotLogComponent() {
    }
    PotLogComponent.prototype.ngOnInit = function () {
    };
    PotLogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pot-log',
            template: __webpack_require__(/*! ./pot-log.component.html */ "./src/app/components/log/pot-log/pot-log.component.html"),
            styles: [__webpack_require__(/*! ./pot-log.component.css */ "./src/app/components/log/pot-log/pot-log.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PotLogComponent);
    return PotLogComponent;
}());



/***/ }),

/***/ "./src/app/components/log/transfer-log/transfer-log.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/log/transfer-log/transfer-log.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/log/transfer-log/transfer-log.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/log/transfer-log/transfer-log.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  transfer-log works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/log/transfer-log/transfer-log.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/log/transfer-log/transfer-log.component.ts ***!
  \***********************************************************************/
/*! exports provided: TransferLogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferLogComponent", function() { return TransferLogComponent; });
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

var TransferLogComponent = /** @class */ (function () {
    function TransferLogComponent() {
    }
    TransferLogComponent.prototype.ngOnInit = function () {
    };
    TransferLogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transfer-log',
            template: __webpack_require__(/*! ./transfer-log.component.html */ "./src/app/components/log/transfer-log/transfer-log.component.html"),
            styles: [__webpack_require__(/*! ./transfer-log.component.css */ "./src/app/components/log/transfer-log/transfer-log.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TransferLogComponent);
    return TransferLogComponent;
}());



/***/ }),

/***/ "./src/app/components/notice/in-gaming-table/in-gaming-table.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/components/notice/in-gaming-table/in-gaming-table.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/notice/in-gaming-table/in-gaming-table.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/notice/in-gaming-table/in-gaming-table.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  in-gaming-table works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/notice/in-gaming-table/in-gaming-table.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/notice/in-gaming-table/in-gaming-table.component.ts ***!
  \********************************************************************************/
/*! exports provided: InGamingTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InGamingTableComponent", function() { return InGamingTableComponent; });
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

var InGamingTableComponent = /** @class */ (function () {
    function InGamingTableComponent() {
    }
    InGamingTableComponent.prototype.ngOnInit = function () {
    };
    InGamingTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-in-gaming-table',
            template: __webpack_require__(/*! ./in-gaming-table.component.html */ "./src/app/components/notice/in-gaming-table/in-gaming-table.component.html"),
            styles: [__webpack_require__(/*! ./in-gaming-table.component.css */ "./src/app/components/notice/in-gaming-table/in-gaming-table.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InGamingTableComponent);
    return InGamingTableComponent;
}());



/***/ }),

/***/ "./src/app/components/notice/lobby-notice/lobby-notice.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/components/notice/lobby-notice/lobby-notice.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/notice/lobby-notice/lobby-notice.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/notice/lobby-notice/lobby-notice.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  lobby-notice works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/notice/lobby-notice/lobby-notice.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/notice/lobby-notice/lobby-notice.component.ts ***!
  \**************************************************************************/
/*! exports provided: LobbyNoticeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LobbyNoticeComponent", function() { return LobbyNoticeComponent; });
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

var LobbyNoticeComponent = /** @class */ (function () {
    function LobbyNoticeComponent() {
    }
    LobbyNoticeComponent.prototype.ngOnInit = function () {
    };
    LobbyNoticeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lobby-notice',
            template: __webpack_require__(/*! ./lobby-notice.component.html */ "./src/app/components/notice/lobby-notice/lobby-notice.component.html"),
            styles: [__webpack_require__(/*! ./lobby-notice.component.css */ "./src/app/components/notice/lobby-notice/lobby-notice.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LobbyNoticeComponent);
    return LobbyNoticeComponent;
}());



/***/ }),

/***/ "./src/app/components/notice/one-on-one-support/one-on-one-support.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/components/notice/one-on-one-support/one-on-one-support.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/notice/one-on-one-support/one-on-one-support.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/notice/one-on-one-support/one-on-one-support.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  one-on-one-support works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/notice/one-on-one-support/one-on-one-support.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/notice/one-on-one-support/one-on-one-support.component.ts ***!
  \**************************************************************************************/
/*! exports provided: OneOnOneSupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneOnOneSupportComponent", function() { return OneOnOneSupportComponent; });
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

var OneOnOneSupportComponent = /** @class */ (function () {
    function OneOnOneSupportComponent() {
    }
    OneOnOneSupportComponent.prototype.ngOnInit = function () {
    };
    OneOnOneSupportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-one-on-one-support',
            template: __webpack_require__(/*! ./one-on-one-support.component.html */ "./src/app/components/notice/one-on-one-support/one-on-one-support.component.html"),
            styles: [__webpack_require__(/*! ./one-on-one-support.component.css */ "./src/app/components/notice/one-on-one-support/one-on-one-support.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OneOnOneSupportComponent);
    return OneOnOneSupportComponent;
}());



/***/ }),

/***/ "./src/app/components/sales/head-office-list/head-office-list.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/sales/head-office-list/head-office-list.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/sales/head-office-list/head-office-list.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/sales/head-office-list/head-office-list.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  head-office-list works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/sales/head-office-list/head-office-list.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/sales/head-office-list/head-office-list.component.ts ***!
  \*********************************************************************************/
/*! exports provided: HeadOfficeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadOfficeListComponent", function() { return HeadOfficeListComponent; });
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

var HeadOfficeListComponent = /** @class */ (function () {
    function HeadOfficeListComponent() {
    }
    HeadOfficeListComponent.prototype.ngOnInit = function () {
    };
    HeadOfficeListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-head-office-list',
            template: __webpack_require__(/*! ./head-office-list.component.html */ "./src/app/components/sales/head-office-list/head-office-list.component.html"),
            styles: [__webpack_require__(/*! ./head-office-list.component.css */ "./src/app/components/sales/head-office-list/head-office-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeadOfficeListComponent);
    return HeadOfficeListComponent;
}());



/***/ }),

/***/ "./src/app/components/sales/member-list/member-list.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/sales/member-list/member-list.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/sales/member-list/member-list.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/sales/member-list/member-list.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  member-list works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/sales/member-list/member-list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/sales/member-list/member-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: MemberListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberListComponent", function() { return MemberListComponent; });
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

var MemberListComponent = /** @class */ (function () {
    function MemberListComponent() {
    }
    MemberListComponent.prototype.ngOnInit = function () {
    };
    MemberListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-member-list',
            template: __webpack_require__(/*! ./member-list.component.html */ "./src/app/components/sales/member-list/member-list.component.html"),
            styles: [__webpack_require__(/*! ./member-list.component.css */ "./src/app/components/sales/member-list/member-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MemberListComponent);
    return MemberListComponent;
}());



/***/ }),

/***/ "./src/app/components/user/black-list/black-list.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/user/black-list/black-list.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/black-list/black-list.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/user/black-list/black-list.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  black-list works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/user/black-list/black-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/user/black-list/black-list.component.ts ***!
  \********************************************************************/
/*! exports provided: BlackListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlackListComponent", function() { return BlackListComponent; });
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

var BlackListComponent = /** @class */ (function () {
    function BlackListComponent() {
    }
    BlackListComponent.prototype.ngOnInit = function () {
    };
    BlackListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-black-list',
            template: __webpack_require__(/*! ./black-list.component.html */ "./src/app/components/user/black-list/black-list.component.html"),
            styles: [__webpack_require__(/*! ./black-list.component.css */ "./src/app/components/user/black-list/black-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlackListComponent);
    return BlackListComponent;
}());



/***/ }),

/***/ "./src/app/components/user/connecting-user/connecting-user.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/user/connecting-user/connecting-user.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/connecting-user/connecting-user.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/user/connecting-user/connecting-user.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  connecting-user works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/user/connecting-user/connecting-user.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/user/connecting-user/connecting-user.component.ts ***!
  \******************************************************************************/
/*! exports provided: ConnectingUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectingUserComponent", function() { return ConnectingUserComponent; });
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

var ConnectingUserComponent = /** @class */ (function () {
    function ConnectingUserComponent() {
    }
    ConnectingUserComponent.prototype.ngOnInit = function () {
    };
    ConnectingUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-connecting-user',
            template: __webpack_require__(/*! ./connecting-user.component.html */ "./src/app/components/user/connecting-user/connecting-user.component.html"),
            styles: [__webpack_require__(/*! ./connecting-user.component.css */ "./src/app/components/user/connecting-user/connecting-user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ConnectingUserComponent);
    return ConnectingUserComponent;
}());



/***/ }),

/***/ "./src/app/components/user/ipinquire/ipinquire.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/user/ipinquire/ipinquire.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/ipinquire/ipinquire.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/user/ipinquire/ipinquire.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  ipinquire works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/user/ipinquire/ipinquire.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/user/ipinquire/ipinquire.component.ts ***!
  \******************************************************************/
/*! exports provided: IPinquireComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IPinquireComponent", function() { return IPinquireComponent; });
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

var IPinquireComponent = /** @class */ (function () {
    function IPinquireComponent() {
    }
    IPinquireComponent.prototype.ngOnInit = function () {
    };
    IPinquireComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ipinquire',
            template: __webpack_require__(/*! ./ipinquire.component.html */ "./src/app/components/user/ipinquire/ipinquire.component.html"),
            styles: [__webpack_require__(/*! ./ipinquire.component.css */ "./src/app/components/user/ipinquire/ipinquire.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IPinquireComponent);
    return IPinquireComponent;
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
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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

module.exports = __webpack_require__(/*! c:\Users\Mpotech-Echo\Desktop\Projects\holdem\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map