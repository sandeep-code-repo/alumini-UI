(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Sunjray-Alumina\alumina\src\main.ts */"zUnb");


/***/ }),

/***/ "4K/k":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/config/config.service */ "L7HW");
/* harmony import */ var src_app_custom_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/custom-validators */ "lmlb");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user/user.service */ "CFL1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-tooltip-directive */ "lVl8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");












function RegistrationComponent_div_28_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Name required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_28_div_1_Template, 2, 0, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.plantName.errors.required);
} }
function RegistrationComponent_div_109_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Select Any One");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_109_div_1_Template, 2, 0, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.typ.errors.required);
} }
function RegistrationComponent_div_116_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Vendor required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_116_div_1_Template, 2, 0, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f.plantVendor.errors.required);
} }
function RegistrationComponent_div_140_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*UserId required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_140_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_140_div_1_Template, 2, 0, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.f.userName.errors.required);
} }
function RegistrationComponent_div_147_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " *Password is Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_147_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_147_div_1_Template, 2, 0, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Must be at least 8 characters! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Must contain at least 1 number! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Must contain at least 1 in Capital Case! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "i", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Must contain at least 1 Letter in Small Case! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "i", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Must contain at least 1 Special Character! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.f.password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r4.add_industry.controls["password"].hasError("required") || ctx_r4.add_industry.controls["password"].hasError("minlength") ? "text-danger" : "text-success");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.add_industry.controls["password"].hasError("required") || ctx_r4.add_industry.controls["password"].hasError("minlength") ? "cancel" : "check_circle", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r4.add_industry.controls["password"].hasError("required") || ctx_r4.add_industry.controls["password"].hasError("hasNumber") ? "text-danger" : "text-success");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.add_industry.controls["password"].hasError("required") || ctx_r4.add_industry.controls["password"].hasError("hasNumber") ? "cancel" : "check_circle", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r4.add_industry.controls["password"].hasError("required") || ctx_r4.add_industry.controls["password"].hasError("hasCapitalCase") ? "text-danger" : "text-success");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.add_industry.controls["password"].hasError("required") || ctx_r4.add_industry.controls["password"].hasError("hasCapitalCase") ? "cancel" : "check_circle", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r4.add_industry.controls["password"].hasError("required") || ctx_r4.add_industry.controls["password"].hasError("hasSmallCase") ? "text-danger" : "text-success");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.add_industry.controls["password"].hasError("required") || ctx_r4.add_industry.controls["password"].hasError("hasSmallCase") ? "cancel" : "check_circle", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r4.add_industry.controls["password"].hasError("required") || ctx_r4.add_industry.controls["password"].hasError("hasSpecialCharacters") ? "text-danger" : "text-success");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.add_industry.controls["password"].hasError("required") || ctx_r4.add_industry.controls["password"].hasError("hasSpecialCharacters") ? "cancel" : "check_circle", " ");
} }
function RegistrationComponent_div_173_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Data is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_173_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_173_div_1_Template, 2, 0, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.f.authPerson.errors.required);
} }
function RegistrationComponent_div_177_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Data is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_177_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_177_div_1_Template, 2, 0, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.f.authPersonDesig.errors.required);
} }
function RegistrationComponent_div_182_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Data is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_182_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_182_div_1_Template, 2, 0, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Must be at Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Must be at 10 Digit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.f.authoPerMob.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r7.add_industry.controls["mobNo"].hasError("hasNumber") ? "text-danger" : "text-success");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.add_industry.controls["authoPerMob"].hasError("required") || ctx_r7.add_industry.controls["authoPerMob"].hasError("hasNumber") ? "cancel" : "check_circle", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r7.add_industry.controls["authoPerMob"].hasError("minlength") ? "text-danger" : "text-success");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.add_industry.controls["authoPerMob"].hasError("required") || ctx_r7.add_industry.controls["authoPerMob"].hasError("minlength") ? "cancel" : "check_circle", " ");
} }
function RegistrationComponent_div_187_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Data is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_187_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Valid Email is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_187_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_187_div_1_Template, 2, 0, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegistrationComponent_div_187_div_2_Template, 2, 0, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.f.email.errors.pattern);
} }
function RegistrationComponent_div_201_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_206_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Must be at Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Must be at 10 Digit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r10.add_industry.controls["secdPersonMob"].hasError("hasNumber") ? "text-danger" : "text-success");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r10.add_industry.controls["secdPersonMob"].hasError("hasNumber") ? "cancel" : "check_circle", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r10.add_industry.controls["secdPersonMob"].hasError("minlength") ? "text-danger" : "text-success");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r10.add_industry.controls["secdPersonMob"].hasError("minlength") ? "cancel" : "check_circle", " ");
} }
function RegistrationComponent_div_211_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Valid Email is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_211_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_211_div_1_Template, 2, 0, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.f.secdEmail.errors.pattern);
} }
function RegistrationComponent_div_225_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Address is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_225_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_225_div_1_Template, 2, 0, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.f.street.errors.required);
} }
function RegistrationComponent_div_232_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Data is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_232_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_232_div_1_Template, 2, 0, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.f.town.errors.required);
} }
function RegistrationComponent_div_239_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Data is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_239_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_239_div_1_Template, 2, 0, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.f.district.errors.required);
} }
function RegistrationComponent_div_246_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Data is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_246_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_246_div_1_Template, 2, 0, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.f.state.errors.required);
} }
function RegistrationComponent_div_253_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Data is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_253_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_253_div_1_Template, 2, 0, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Must be at Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Must be at 10 Digit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.f.pin.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r16.add_industry.controls["pin"].hasError("hasNumber") ? "text-danger" : "text-success");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r16.add_industry.controls["pin"].hasError("hasNumber") ? "cancel" : "check_circle", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r16.add_industry.controls["pin"].hasError("minlength") ? "text-danger" : "text-success");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r16.add_industry.controls["pin"].hasError("minlength") ? "cancel" : "check_circle", " ");
} }
function RegistrationComponent_div_259_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Parameter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Analyser Make");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Analyser Model");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Analyser Serial Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Device IMEI Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Mac Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Measurment Range");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Certification");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "select", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "option", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stationparam_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", stationparam_r43.paramter);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", stationparam_r43.alyserMake);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", stationparam_r43.analyserModel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", stationparam_r43.analyserSerialNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", stationparam_r43.devidceIMEINo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", stationparam_r43.macId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", stationparam_r43.measurmentMin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", stationparam_r43.measurmentMax);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", stationparam_r43.unit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stationparam_r43.certification);
} }
function RegistrationComponent_div_259_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationComponent_div_259_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const station_r41 = ctx.$implicit; const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.editProcess(station_r41); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " EDIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Monitoring Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Station Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Process Attached");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Vendor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Latitude");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Longitude");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Measurment Principle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Remark");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "textarea", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h4", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Parameter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, RegistrationComponent_div_259_div_55_Template, 57, 10, "div", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const station_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", station_r41.stationInfo.analyzerv2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", station_r41.stationInfo.stationId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", station_r41.stationInfo.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", station_r41.stationInfo.stationVendor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", station_r41.stationInfo.latitude);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", station_r41.stationInfo.longitute);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", station_r41.stationInfo.measurementPrinciple);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", station_r41.stationInfo.remarks);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", station_r41.parameterInfo);
} }
function RegistrationComponent_div_334_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Longitude Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_334_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_334_div_1_Template, 2, 0, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.f.longitute.errors.required);
} }
function RegistrationComponent_div_339_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Measurement Principle Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_339_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_339_div_1_Template, 2, 0, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.f.measurementPrinciple.errors.required);
} }
function RegistrationComponent_div_355_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Stack Height Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_355_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_355_div_1_Template, 2, 0, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.f.stackHeight.errors.required);
} }
function RegistrationComponent_div_362_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Stack Diameter Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_362_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_362_div_1_Template, 2, 0, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21.f.stackDiameter.errors.required);
} }
function RegistrationComponent_div_369_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Stack Velocity Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_369_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_369_div_1_Template, 2, 0, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r22.f.stackVelocity.errors.required);
} }
function RegistrationComponent_div_376_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Flue Gas Discharge Rate M3/Hr Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_376_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_376_div_1_Template, 2, 0, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.f.gasDischargeRate.errors.required);
} }
function RegistrationComponent_div_381_div_63_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Parameter Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_381_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_381_div_63_div_1_Template, 2, 0, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r54.processf.i.paramter.errors.required);
} }
function RegistrationComponent_div_381_div_70_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Analyser Make Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_381_div_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_381_div_70_div_1_Template, 2, 0, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r55.f.analyserMake.errors.required);
} }
function RegistrationComponent_div_381_div_77_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Analyzer Model Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_381_div_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_381_div_77_div_1_Template, 2, 0, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r56.f.analyserModel.errors.required);
} }
function RegistrationComponent_div_381_div_84_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Analyser Serial Number Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_381_div_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_381_div_84_div_1_Template, 2, 0, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r57.f.analyserSerialNo.errors.required);
} }
function RegistrationComponent_div_381_div_89_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Device IMEI Number Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_381_div_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_381_div_89_div_1_Template, 2, 0, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r58.f.devidceIMEINo.errors.required);
} }
function RegistrationComponent_div_381_div_94_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*MAC Id Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_381_div_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_381_div_94_div_1_Template, 2, 0, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r59.f.macId.errors.required);
} }
function RegistrationComponent_div_381_div_103_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Measurment MIN Range Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_381_div_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_381_div_103_div_1_Template, 2, 0, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r60.f.measurmentMin.errors.required);
} }
function RegistrationComponent_div_381_div_106_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Measurment Max Range Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_381_div_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_381_div_106_div_1_Template, 2, 0, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r61.f.measurmentMax.errors.required);
} }
function RegistrationComponent_div_381_div_123_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Unit Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_381_div_123_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_381_div_123_div_1_Template, 2, 0, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r62.f.unit.errors.required);
} }
function RegistrationComponent_div_381_div_140_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*certification Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_381_div_140_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_381_div_140_div_1_Template, 2, 0, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r63.processf.certification.errors.required);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
const _c1 = function () { return {}; };
function RegistrationComponent_div_381_Template(rf, ctx) { if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Parameter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationComponent_div_381_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75); const i_r53 = ctx.index; const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r74.removeParameter(i_r53); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "select", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Select an Option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "pH");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Water_Temperature");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "tss");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Totalizer Flow");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Phenol");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Water_Flow");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Conductivity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "COD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Ammonia");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Camera");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Temperature");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "PM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Nickel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "NH3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "BOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Ammonical Nitrogen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "option", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "TOC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "option", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "TURBIDITY");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Effluent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "TSS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "option", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "water_Flow_2_HortiCulture");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "option", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "bod");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "option", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "TDS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "option", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Arsenic");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "option", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Flow");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, RegistrationComponent_div_381_div_63_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Analyser Make");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "input", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, RegistrationComponent_div_381_div_70_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Analyser Model");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "input", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, RegistrationComponent_div_381_div_77_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Analyser Serial Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "input", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, RegistrationComponent_div_381_div_84_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Device IMEI Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "input", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, RegistrationComponent_div_381_div_89_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Mac Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "input", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, RegistrationComponent_div_381_div_94_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Measurment Range");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "input", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](103, RegistrationComponent_div_381_div_103_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "input", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](106, RegistrationComponent_div_381_div_106_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "select", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "option", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Nm3/sec");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "LPH");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Degree");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "W/m2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](123, RegistrationComponent_div_381_div_123_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Certification");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "select", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "option", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "--Select Certification--");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "option", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "TUV");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "option", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "MCERTS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "option", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "USEPA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "option", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Others");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](140, RegistrationComponent_div_381_div_140_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r53 = ctx.index;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c0, ctx_r24.addProcesssubmitted && ctx_r24.processf.param.paramter.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.addProcesssubmitted && ctx_r24.f.paramter.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c0, ctx_r24.submitted && ctx_r24.f.analyserMake.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.submitted && ctx_r24.f.analyserMake.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c0, ctx_r24.submitted && ctx_r24.f.analyserModel.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.submitted && ctx_r24.f.analyserModel.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c0, ctx_r24.submitted && ctx_r24.f.analyserSerialNo.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.submitted && ctx_r24.f.analyserSerialNo.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.submitted && ctx_r24.f.devidceIMEINo.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.submitted && ctx_r24.f.macId.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](31, _c0, ctx_r24.submitted && ctx_r24.f.measurmentMin.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.submitted && ctx_r24.f.measurmentMin.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](33, _c0, ctx_r24.submitted && ctx_r24.f.measurmentMax.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.submitted && ctx_r24.f.measurmentMax.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](35, _c0, ctx_r24.submitted && ctx_r24.f.unit.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.submitted && ctx_r24.f.unit.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](37, _c0, ctx_r24.addProcesssubmitted && ctx_r24.processf.certification.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.addProcesssubmitted && ctx_r24.processf.certification.errors);
} }
class RegistrationComponent {
    constructor(route, userService, formBuilder, HttpClient) {
        this.route = route;
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.HttpClient = HttpClient;
        this.submitted = false;
        this.stationinfomap = [];
        this.userRole = [];
        this.role = { roleId: 0 };
    }
    ngOnInit() {
        this.processForm = this.formBuilder.group({
            stationInfo: this.formBuilder.group({
                analyzerv2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                stationId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                location: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                stationVendor: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                longitute: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                latitude: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                measurementPrinciple: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                stackHeight: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                stackDiameter: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                stackVelocity: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                gasDischargeRate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                remarks: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            }),
            parameterInfo: this.formBuilder.array([this.createParameterInfo()], [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
        // this.parameterInfo.push(this.addParameter());
        // this.parameterinfo.push(this.createParameterInfo().value)
        this.stationinfomap.push(this.processForm.value);
        this.add_industry = this.formBuilder.group({
            plantInfo: this.formBuilder.group({
                plantVendor: [''],
                plantUserName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                category: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                plantName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                plantType: [],
                roUser: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                caaqmsStation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                cemsStation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                ceqmsStation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            }),
            // role: ['',],
            userInfoMapper: this.formBuilder.group({
                userInfo: this.formBuilder.group({
                    userName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                    password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                    roleId: [''],
                    pin: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(7), src_app_custom_validators__WEBPACK_IMPORTED_MODULE_3__["CustomValidators"].patternValidator(/\d/, { hasNumber: true })]],
                    typ: [''],
                    district: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                    town: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                    street: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                    state: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                    email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
                    authPerson: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                    mobNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), src_app_custom_validators__WEBPACK_IMPORTED_MODULE_3__["CustomValidators"].patternValidator(/\d/, { hasNumber: true })]],
                    authPersonDesig: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                    secdPerson: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                    secdPersonDesig: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                    secdPersonMob: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), src_app_custom_validators__WEBPACK_IMPORTED_MODULE_3__["CustomValidators"].patternValidator(/\d/, { hasNumber: true })]],
                    secdEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
                }),
            })
        });
    }
    // get stationInfo() {
    //   return this.processForm.get('stationInfo') as FormGroup;
    // }
    get parameterInfo() {
        return this.processForm.get('parameterInfo');
    }
    addParameter() {
        this.parameterInfo.push(this.createParameterInfo());
    }
    removeParameter(index) {
        this.parameterInfo.removeAt(index);
    }
    createParameterInfo() {
        return this.formBuilder.group({
            'paramter': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'analyserMake': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'analyserModel': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'analyserSerialNo': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'devidceIMEINo': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'macId': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'measurmentMin': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'measurmentMax': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'unit': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'certification': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    }
    editProcess(editProcessObj) {
        this.processForm.patchValue({
            stationInfo: editProcessObj.stationInfo,
            parameterInfo: editProcessObj.parameterInfo,
        });
    }
    goback() {
        this.route.navigateByUrl("/regdetails");
    }
    get f() { return this.add_industry.controls; }
    get processf() { return this.processForm.controls; }
    addProcess() {
        console.log(this.processForm.controls);
        // console.log(this.processForm.get('parameterInfo'))
        //     this.addProcesssubmitted=true;
        //     if (this.processForm.invalid) {
        //          return;
        //        }
        let index = this.stationinfomap.findIndex(item => {
            return item.stationInfo.stationId == this.processForm.get('stationInfo.stationId').value;
        });
        if (this.stationinfomap.length == 1 && this.stationinfomap[0].stationInfo.stationId === "") {
            this.stationinfomap = [];
            this.stationinfomap.push(this.processForm.value);
        }
        else if (index > -1) {
            this.stationinfomap.splice(index, 1, this.processForm.value);
        }
        else {
            this.stationinfomap.push(this.processForm.value);
        }
        this.processForm.reset();
    }
    register() {
        // this.submitted=true;
        // if (this.add_industry.invalid) {
        //   return;
        // }
        this.industry = this.add_industry.value;
        if (this.add_industry.get('userInfoMapper.userInfo').status == 'INVALID')
            this.industry.regstatus = "register";
        else
            this.industry.regstatus = "register";
        this.industry.stationInfoMapper = this.stationinfomap;
        this.role.roleId = this.add_industry.get('userInfoMapper.userInfo.roleId').value;
        this.userRole.push(this.role);
        Object.assign(this.industry.userInfoMapper, { userRole: this.userRole });
        console.log(this.industry);
        const register = this.userService.registrationService(this.industry).subscribe(data => {
            if (data.apiStatus.message === 'success') {
                this.message = "Registration Successfull";
                console.log(data.apiStatus.message);
                // this.route.navigate(['/home']);
            }
            else {
                this.message = "Registration Failed";
                console.log(data);
            }
        });
    }
    stack(str) {
        if (str == "Ambient") {
            jquery__WEBPACK_IMPORTED_MODULE_4__('.xyz').css('display', 'none');
            jquery__WEBPACK_IMPORTED_MODULE_4__('#stack_123').css('display', 'none');
            this.types$ = [{ "Category": "PM10" }, { "Category": "PM2.5" },
                { "Category": "SOx" },
                { "Category": "NOx" }, { "Category": "NO" }, { "Category": "NO2" }, { "Category": "CO" }, { "Category": "CO2" }, { "Category": "Others"
                }];
        }
        else if (str == "Emission") {
            this.addProcesssubmitted = true;
            jquery__WEBPACK_IMPORTED_MODULE_4__('.xyz').css('display', 'block');
            jquery__WEBPACK_IMPORTED_MODULE_4__('#stack_123').css('display', 'block');
            this.types$ = [{ "Category": "PM" }, { "Category": "SO2" },
                { "Category": "NOx" },
                { "Category": "NO" }, { "Category": "NO2" }, { "Category": "SOx" }, { "Category": "HF" }, { "Category": "Others"
                }];
        }
        else if (str == "Effluent") {
            jquery__WEBPACK_IMPORTED_MODULE_4__('.xyz').css('display', 'none');
            jquery__WEBPACK_IMPORTED_MODULE_4__('#stack_123').css('display', 'none');
            this.types$ = [{ "Category": "BOD" }, { "Category": "COD" },
                { "Category": "TSS" },
                { "Category": "PH" }, { "Category": "Flow" }, { "Category": "Fluoride" }, { "Category": "Cr6+" }, { "Category": "NH3" }, { "Category": "Others"
                }];
        }
    }
}
RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) { return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"])); };
RegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegistrationComponent, selectors: [["app-registration"]], hostVars: 1, hostBindings: function RegistrationComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsyntheticHostProperty"]("@routerTransition", undefined);
    } }, decls: 386, vars: 111, consts: [[1, "regristartion", "container-fluid", "top", "py-2"], ["src", "assets/images/cpcb.png", 1, "logo"], [1, "text-center", "text-white"], ["type", "button", "tooltip", "Goto Back ", "id", "backbtn", 1, "mr-3", "btn", "btny", "btn-default", "buttom-prim", "buttonsToShow", 3, "click"], [1, "fa", "fa-arrow-circle-left"], [1, "container", "uk-card", "uk-card-default", "uk-card-body", "my-3"], [1, "text-center", "nbox"], [3, "formGroup"], [1, "container", "px-0"], [1, "lighter", "blue", "mt-4", "headg"], [1, "mt-3"], [1, "container", "forms", "p-4"], [1, "form2"], ["formGroupName", "plantInfo", 1, "row"], [1, "form-group", "col-sm-3", "smallpad"], [1, "name1"], ["type", "text", "formControlName", "plantName", "placeholder", "Enter Name", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "form-group", "col-sm-3", "smallpad", "opt"], ["formControlName", "category", 1, "form-control", "texbsize", 3, "ngClass"], ["selected", ""], ["value", "Non 17 categories"], ["value", "Public Location"], ["value", "Rivers"], ["value", "Iron and Steel"], ["value", "Integrated Steels", "selected", "selected"], ["value", "Sponge Iron Plants(Stand Alone)"], ["value", "Alumina Refinery"], ["value", "Automobile Tyre"], ["value", "Calcined Petroleum Coke"], ["value", "CBWTF"], ["value", "CHWTSDF"], ["value", "Ferro Alloys"], ["value", "Iron Ore Pellet"], ["value", "Refactory"], ["value", "Iron Ore Mines"], ["value", "Iron and Manganese Mines"], ["value", "Pulp and Paper"], ["value", "Coke Making"], ["value", "Power Plant"], ["value", "Sugar"], ["value", "Chemicals"], ["value", "Mines"], ["value", "Cholo Alkali"], ["value", "High Carbon Ferro Chrome/ Charge Chrome Plant"], ["value", "Copper Smelting"], ["value", "Distillery"], ["value", "Orange"], ["value", "Petroleum Refinery"], ["value", "Chromite Mining"], ["value", "Pharmaceutical"], ["value", "Mining"], ["value", "Pesticide"], ["value", "Cement"], ["value", "Dyes and Dye Intermediate"], ["value", "Chromite Mines"], ["value", "Aluminium Smelter"], ["type", "text", "placeholder", "Enter Vender", "formControlName", "plantVendor", 1, "form-control", 3, "ngClass"], ["type", "text", "formControlName", "roUser", "placeholder", "Enter Regional Office", 1, "form-control", "texbsize", 3, "ngClass"], ["type", "text", "formControlName", "caaqmsStation", "placeholder", "No. of CAAQME Structure", 1, "form-control", "texbsize", 3, "ngClass"], [1, "form-group", "col-md-3", "smallpad"], ["type", "text", "formControlName", "cemsStation", "placeholder", "No. of CEMC Structure", 1, "form-control", "texbsize", 3, "ngClass"], ["type", "text", "formControlName", "ceqmsStation", "placeholder", "No. of CEMES", 1, "form-control", "texbsize", 3, "ngClass"], ["formGroupName", "userInfoMapper", 1, "row"], ["formGroupName", "userInfo", 1, "form-group", "col-sm-3", "smallpad"], ["type", "text", "placeholder", "Enter Vender", "formControlName", "userName", 1, "form-control", 3, "ngClass"], ["type", "text", "placeholder", "Enter password", "formControlName", "password", 1, "form-control", 3, "ngClass"], ["formControlName", "roleId", 1, "form-control", "texbsize"], ["value", "select", "selected", ""], ["value", "3"], ["value", "1"], ["value", "2"], ["formGroupName", "userInfoMapper", 1, "row", "mt-3"], ["formGroupName", "userInfo", 1, "form-group", "col-sm-6", "ml-auto", "smallpad"], [2, "float", "none"], [2, "color", "red"], [1, "row"], [1, "col-sm-6"], [1, "fontpassword"], ["type", "text", "formControlName", "authPerson", "placeholder", "Enter Person Name", 1, "form-control", "texbsize1", 3, "ngClass"], ["_ngcontent-hel-c18", "", 1, "fas", "fa-user", "fa-fw"], ["style", "top: 28px;", "class", "invalid-feedback", 4, "ngIf"], [1, "col-sm-6", "nopad"], ["type", "text", "formControlName", "authPersonDesig", "placeholder", "Enter Designation", 1, "form-control", "texbsize1", 3, "ngClass"], [1, "row", "martop1", "mt-3"], ["type", "text", "formControlName", "mobNo", "placeholder", "Enter Phone No", 1, "form-control", "texbsize1", 3, "ngClass"], ["_ngcontent-hel-c18", "", 1, "fas", "fa-phone-alt", "fa-fw", 2, "color", "grey"], ["type", "text", "formControlName", "email", "placeholder", "Enter Email", 1, "form-control", "texbsize1", 3, "ngClass"], ["_ngcontent-hel-c18", "", 1, "fas", "fa-envelope", "fa-fw", 2, "color", "green"], ["type", "text", "formControlName", "secdPerson", "placeholder", "Enter Person Name", 1, "form-control", "texbsize1", "mb-2"], ["type", "text", "formControlName", "secdPersonDesig", "placeholder", "Enter Designation", 1, "form-control", "texbsize", "mb-2"], [1, "row", "martop1"], ["type", "text", "formControlName", "secdPersonMob", "placeholder", "Enter Phone No", 1, "form-control", "mb-2", "texbsize1", 3, "ngClass"], ["type", "text", "formControlName", "secdEmail", "placeholder", "Enter Email", 1, "form-control", "mb-2", "texbsize1", 3, "ngClass"], ["formGroupName", "userInfoMapper", 1, "container", "forms"], ["formGroupName", "userInfo", 1, "row", "d-flex", "justify-content-between"], [1, "form-group", "col-md-2", "smallpad"], ["rows", "3", "type", "text", "formControlName", "street", "placeholder", "Street", 1, "form-control", 3, "ngClass"], ["rows", "3", "type", "text", "formControlName", "town", "placeholder", "Town", 1, "form-control", 3, "ngClass"], ["rows", "3", "type", "text", "formControlName", "district", "placeholder", "District", 1, "form-control", 3, "ngClass"], ["rows", "3", "type", "text", "formControlName", "state", "placeholder", "State", 1, "form-control", 3, "ngClass"], ["rows", "3", "type", "text", "formControlName", "pin", "placeholder", "Pincode", 1, "form-control", 3, "ngClass"], ["type", "button", "tooltip", "Add Process Details", "autoPlacement", "true", "data-toggle", "modal", "data-target", "#addProcess", 1, "btn-mini", "btn-success"], [1, "fa", "fa-plus"], ["class", "container forms ", 4, "ngFor", "ngForOf"], [1, "container", "mt-5"], [1, "form-group", "col-md-2", "ml-2"], ["type", "button", "mat-raised-button", "", "matTooltip", "Register Data", "aria-label", "Button that displays a tooltip when focused or hovered over", "tooltip", "Register ", "data-toggle", "modal", "data-target", "#modalMessage", 1, "btn", "btns", "btn-success", 3, "click"], ["id", "modalMessage", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade", 2, "background-color", "lightblue"], ["role", "document", 1, "modal-dialog"], [1, "modal-content", 2, "background-color", "grey", "color", "white", "width", "70%"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body", 2, "font-size", "large", "text-align", "center"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-success", 2, "text-align", "center"], ["id", "addProcess", 1, "modal"], [1, "modal-dialog", "modal-dialog-scrollable"], [1, "modal-content"], [1, "modal-title", "m-0"], ["type", "button", "tooltip", "Close", "data-dismiss", "modal", 1, "close"], [1, "fa", "fa-times-circle"], [1, "modal-body"], ["formGroupName", "stationInfo"], [1, "row", "px-3"], [1, "form-group", "col-md-4", "smallpad", "opt"], ["formControlName", "analyzerv2", 1, "form-control", "texbsize", 3, "ngClass", "change"], ["value", ""], [1, "form-group", "col-md-4", "smallpad"], ["type", "text", "placeholder", "Station Name", "formControlName", "stationId", "required", "", 1, "form-control", "texbsize", 3, "ngClass"], ["type", "text", "placeholder", "Process Attached", "formControlName", "location", "required", "", 1, "form-control", "texbsize", 3, "ngClass"], ["type", "text", "placeholder", "Vendor", "formControlName", "stationVendor", "required", "", 1, "form-control", "texbsize", 3, "ngClass"], ["type", "text", "placeholder", "Latitude", "formControlName", "latitude", 1, "form-control", "texbsize", 3, "ngClass"], ["type", "text", "placeholder", "Longitude", "formControlName", "longitute", 1, "form-control", "texbsize", 3, "ngClass"], ["type", "text", "placeholder", "Measurment Principle", "formControlName", "measurementPrinciple", 1, "form-control", "texbsize", 3, "ngClass"], [1, "form-group", "col-md-6", "smallpad"], ["placeholder", "Remark", "formControlName", "remarks", 1, "form-control", "tarea", "texbsize"], ["id", "stack_123", 2, "display", "none"], [1, "header", "lighter", "blue"], ["type", "text", "placeholder", "Stack Height", "formControlName", "stackHeight", 1, "form-control", "texbsize", 3, "ngClass"], ["type", "text", "placeholder", "Stack Diameter", "formControlName", "stackDiameter", 1, "form-control", "texbsize", 3, "ngClass"], ["type", "text", "placeholder", "Stack Velocity", "formControlName", "stackVelocity", 1, "form-control", "texbsize", 3, "ngClass"], ["type", "text", "placeholder", "Flue Gas Discharge Rate M3/Hr", "formControlName", "gasDischargeRate", 1, "form-control", "texbsize", 3, "ngClass"], [1, "header", "lighter", "blue", 2, "margin", "0 0 18px 0"], ["type", "submit", "tooltip", "Add Parameter", "autoPlacement", "true", 1, "btn-mini", "btn-success", 3, "click"], ["formArrayName", "parameterInfo", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-success", "btns", "col-sm-3", 3, "click"], [1, "invalid-feedback"], [4, "ngIf"], [1, "col", 3, "ngClass"], [1, "material-icons"], [1, "invalid-feedback", 2, "top", "28px"], [1, "container", "forms"], ["type", "button", "data-toggle", "modal", "data-target", "#addProcess", 1, "d-block", "mb-4", "ml-auto", "link", "btn", "btn-info", 3, "click"], [1, "fa", "fa-pen"], [1, "form-group", "col-md-2", "smallpad", "opt"], ["type", "text", "readonly", "", 1, "form-control", "texbsize", 3, "value"], ["type", "text", "placeholder", "Station Name", "readonly", "", 1, "form-control", "texbsize", 3, "value"], ["type", "text", "placeholder", "Process Attached", "readonly", "", 1, "form-control", "texbsize", 3, "value"], ["type", "text", "placeholder", "Vendor", "readonly", "", 1, "form-control", "texbsize", 3, "value"], ["type", "text", "placeholder", "Latitude", "readonly", "", 1, "form-control", "texbsize", 3, "value"], ["type", "text", "placeholder", "Longitude", "readonly", "", 1, "form-control", "texbsize", 3, "value"], ["type", "text", "placeholder", "Measurment Principle", "readonly", "", 1, "form-control", "texbsize", 3, "value"], ["placeholder", "Remark", "readonly", "", 1, "form-control", "texbsize", "tarea", 3, "value"], [1, "header", "lighter", "blue", "inb", 2, "margin", "0 0 18px 0"], ["class", "row", 4, "ngFor", "ngForOf"], ["type", "text", "readonly", "", 1, "form-control", "texbsize1", 3, "value"], ["type", "text", "placeholder", "Analyser Make", "readonly", "", 1, "form-control", "texbsize", 3, "value"], ["type", "text", "placeholder", "Analyser Model", "readonly", "", 1, "form-control", "texbsize", 3, "value"], ["type", "text", "placeholder", "Analyser Serial Number", "readonly", "", 1, "form-control", "texbsize", 3, "value"], ["type", "text", "placeholder", "Device IMEI Number", "readonly", "", 1, "form-control", "texbsize", 3, "value"], ["type", "text", "placeholder", "Mac Id", "readonly", "", 1, "form-control", "texbsize", 3, "value"], ["type", "number", "placeholder", "min", "readonly", "", 1, "form-control", 3, "value"], ["type", "number", "placeholder", "max", "readonly", "", 1, "form-control", 2, "margin-top", "28px", 3, "value"], ["disabled", "", 1, "form-control", "texbsize"], ["value", "", "selected", ""], ["formArrayName", "parameterInfo"], [3, "formGroupName"], ["type", "submit", "tooltip", "Remove Parameter", "autoPlacement", "true", 1, "btn-mini", "btn-success", 3, "click"], [1, "fa", "fa-minus"], ["formControlName", "paramter", 1, "form-control", "texbsize1", 3, "ngClass"], ["value", "pH"], ["value", "Water_Temperature"], ["value", "tss"], ["value", "Totalizer Flow"], ["value", "Phenol"], ["value", "Water_Flow"], ["value", "Conductivity"], ["value", "COD"], ["value", "Ammonia"], ["value", "Camera"], ["value", "Temperature"], ["value", "PM"], ["value", "Nickel"], ["value", "NH3"], ["value", "BOD"], ["value", "Ammonical Nitrogen"], ["value", "TOC"], ["value", "TURBIDITY"], ["value", "Effluent"], ["value", "TSS"], ["value", "water_Flow_2_HortiCulture"], ["value", "bod"], ["value", "TDS"], ["value", "Arsenic"], ["value", "Flow"], ["type", "text", "placeholder", "Analyser Make", "formControlName", "analyserMake", 1, "form-control", "texbsize", 3, "ngClass"], ["type", "text", "placeholder", "Analyser Model", "formControlName", "analyserModel", 1, "form-control", "texbsize", 3, "ngClass"], ["type", "text", "placeholder", "Analyser Serial Number", "formControlName", "analyserSerialNo", 1, "form-control", "texbsize", 3, "ngClass"], ["type", "text", "placeholder", "Device IMEI Number", "formControlName", "devidceIMEINo", 1, "form-control", "texbsize", 3, "ngClass"], ["type", "text", "placeholder", "Mac Id", "formControlName", "macId", 1, "form-control", "texbsize", 3, "ngClass"], ["type", "number", "placeholder", "min", "formControlName", "measurmentMin", 1, "form-control", 3, "ngClass"], ["type", "number", "placeholder", "max", "formControlName", "measurmentMax", 1, "form-control", 2, "margin-top", "28px", 3, "ngClass"], ["formControlName", "unit", 1, "form-control", "texbsize", 3, "ngClass"], ["formControlName", "certification", "required", "", 1, "form-control", "texbsize", 3, "ngClass"], ["value", "TUV"], ["value", "MCERTS"], ["value", "USEPA"], ["value", "Others"]], template: function RegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Assam Pollution Control Board ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationComponent_Template_button_click_4_listener() { return ctx.goback(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " BACK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Industry Registration ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "(Integration with Central Server for Real Time Monitoring)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " General Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Industry Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, RegistrationComponent_div_28_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Industry Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Non 17 categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Public Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Rivers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Iron and Steel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Integrated Steels");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Sponge Iron Plants(Stand Alone)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Alumina Refinery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Automobile Tyre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Calcined Petroleum Coke");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "CBWTF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "CHWTSDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Ferro Alloys");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Iron Ore Pellet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Refactory");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Iron Ore Mines");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "option", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Iron and Manganese Mines");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Pulp and Paper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Coke Making");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Power Plant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Sugar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "option", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Chemicals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "option", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Mines");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Cholo Alkali");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "option", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "High Carbon Ferro Chrome/ Charge Chrome Plant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "option", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Copper Smelting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "option", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Distillery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "option", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Orange");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "option", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Petroleum Refinery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "option", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Chromite Mining");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "option", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Pharmaceutical");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "option", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Mining");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "option", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Pesticide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "option", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Cement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "option", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Dyes and Dye Intermediate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "option", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Chromite Mines");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Iron Ore Mines");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "option", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Aluminium Smelter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](109, RegistrationComponent_div_109_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Vendor ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "input", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](116, RegistrationComponent_div_116_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Regional Office");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "input", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "No.of CAAQMS stations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "input", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "No. of CEMS stations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "input", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "No. of CEQMS stations ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "input", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Plant Id(User Name) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "input", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](140, RegistrationComponent_div_140_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "input", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](147, RegistrationComponent_div_147_Template, 22, 11, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Role ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "select", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "option", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "option", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, " User ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "option", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, " SuperAdmin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "option", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, " Admin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "label", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Primary Contact ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "span", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "input", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "i", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](173, RegistrationComponent_div_173_Template, 2, 1, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "input", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](177, RegistrationComponent_div_177_Template, 2, 1, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "input", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](182, RegistrationComponent_div_182_Template, 10, 5, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "i", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "input", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](187, RegistrationComponent_div_187_Template, 3, 2, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "i", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "label", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Secondary Contact (Technical Contact Person)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "input", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "i", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "input", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](201, RegistrationComponent_div_201_Template, 2, 0, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "input", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](206, RegistrationComponent_div_206_Template, 9, 4, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "i", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "input", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](211, RegistrationComponent_div_211_Template, 2, 1, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "i", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, " Address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "Street ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "span", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "input", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](225, RegistrationComponent_div_225_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "Town ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "span", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "input", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](232, RegistrationComponent_div_232_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "District ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "span", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](238, "input", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](239, RegistrationComponent_div_239_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "State ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "span", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](245, "input", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](246, RegistrationComponent_div_246_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "Pincode ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "span", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](252, "input", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](253, RegistrationComponent_div_253_Template, 10, 5, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, " Process Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "button", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](258, "i", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](259, RegistrationComponent_div_259_Template, 56, 9, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "div", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "button", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationComponent_Template_button_click_263_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](269, "h5", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "button", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "span", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "button", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "CLOSE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "div", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "div", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "div", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "h2", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, "Process Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "button", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](285, "i", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "div", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "div", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "div", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "Monitoring Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "span", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "select", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RegistrationComponent_Template_select_change_295_listener($event) { return ctx.stack($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "option", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "Ambient");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "Emission");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "Effluent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "div", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "Station Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "span", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](309, "input", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "div", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "Process Attached");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "span", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](315, "input", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "div", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, "Vendor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "span", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](321, "input", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "div", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, "Latitude");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "span", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](327, "input", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "div", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, "Longitude");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "span", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](333, "input", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](334, RegistrationComponent_div_334_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "div", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, "Measurment Principle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](338, "input", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](339, RegistrationComponent_div_339_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "div", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "Remark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "span", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "textarea", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "div", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "h2", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](349, "Stack");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "div", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "div", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](353, "Stack Height");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](354, "input", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](355, RegistrationComponent_div_355_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "div", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, "Stack Diameter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "span", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](360, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](361, "input", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](362, RegistrationComponent_div_362_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "div", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, "Stack Velocity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "span", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](368, "input", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](369, RegistrationComponent_div_369_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "div", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](372, "Flue Gas Discharge Rate M3/Hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "span", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](374, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](375, "input", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](376, RegistrationComponent_div_376_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "h4", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](378, "Parameter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "button", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationComponent_Template_button_click_379_listener() { return ctx.addParameter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](380, "i", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](381, RegistrationComponent_div_381_Template, 141, 39, "div", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "div", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "button", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationComponent_Template_button_click_383_listener() { return ctx.addProcess(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](384, "i", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](385, " ADD PROCESS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.add_industry);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](59, _c0, ctx.submitted && ctx.f.plantName.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.plantName.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](61, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.typ.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](62, _c0, ctx.submitted && ctx.f.plantVendor.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.plantVendor.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](64, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](65, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](66, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](67, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](68, _c0, ctx.submitted && ctx.f.userName.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.userName.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](70, _c0, ctx.submitted && ctx.f.password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](72, _c0, ctx.submitted && ctx.f.authPerson.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.authPerson.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](74, _c0, ctx.submitted && ctx.f.authPersonDesig.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.authPersonDesig.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](76, _c0, ctx.submitted && ctx.f.mobNo.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.mobNo.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](78, _c0, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.secdPersonDesig.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](80, _c0, ctx.submitted && ctx.f.secdPersonMob.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.secdPersonMob.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](82, _c0, ctx.submitted && ctx.f.secdEmail.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.secdEmail.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](84, _c0, ctx.submitted && ctx.f.street.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.street.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](86, _c0, ctx.submitted && ctx.f.town.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.town.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](88, _c0, ctx.submitted && ctx.f.district.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.district.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](90, _c0, ctx.submitted && ctx.f.state.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.state.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](92, _c0, ctx.submitted && ctx.f.pin.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.pin.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stationinfomap);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.message, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.processForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](94, _c0, ctx.addProcesssubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](96, _c0, ctx.addProcesssubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](98, _c0, ctx.addProcesssubmitted && ctx.processf.location.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](100, _c0, ctx.addProcesssubmitted && ctx.processf.stationVendor.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](102, _c0, ctx.addProcesssubmitted && ctx.f.latitude.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](104, _c0, ctx.submitted && ctx.f.longitute.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.longitute.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](106, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.measurementPrinciple.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](107, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.stackHeight.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](108, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.stackDiameter.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](109, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.stackVelocity.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](110, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.gasDischargeRate.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.parameterInfo.controls);
    } }, directives: [ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["TooltipDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]], styles: ["body[_ngcontent-%COMP%]{\r\n    overflow-x: hidden !important;\r\n}\r\nh2.heading[_ngcontent-%COMP%]{font-size: 25px;\r\n    text-align: center;\r\n    color: #333;\r\n    border-bottom: 1px solid #333;\r\n    padding: 10px 50px;\r\n    margin: 0 auto;\r\n    font-weight: 600;\r\n    margin-top: 40px;\r\n}\r\nh4.heading1[_ngcontent-%COMP%]{\r\n        color: #fff;\r\nborder-bottom: 7px solid #5B5959;\r\npadding: 10px 25px;\r\nfont-size: 18px;\r\ntext-transform: uppercase;\r\nfont-weight: 600;\r\nmargin-bottom: 50px;\r\nbackground: #007BFF;\r\nborder-top-left-radius: 5px;\r\nborder-top-right-radius: 5px;\r\n    }\r\n.top[_ngcontent-%COMP%]{\r\n        background:cornflowerblue;\r\n    }\r\n.top[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n        margin: 0;\r\n        padding: 0;\r\n        font-weight: 500;\r\n    }\r\n.top[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{\r\n        width: 120px;\r\n        float: left;\r\n        position: absolute;\r\n        left: 40px;\r\n        top: 0px;\r\n        background: #fff;\r\n        padding: 5px;\r\n        z-index: 1;\r\n    }\r\n.nbox[_ngcontent-%COMP%] {\r\n        width: 80%;\r\n        margin: 0 auto 15px auto;\r\n        padding: 15px;\r\n        border: 3px solid #2d3188;\r\n    }\r\n.nbox[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]\r\n    {\r\n        font-weight: 500;\r\n        color: #2d3188;\r\n        margin: 0;\r\n        padding: 0;\r\n        font-size: 24px;\r\n        line-height: 28px;\r\n    }\r\n.nbox[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n        font-weight: 300;\r\n        color: rgb(145, 145, 145);\r\n        font-size: 18px;\r\n    }\r\nheader.blue[_ngcontent-%COMP%] {\r\n        border-bottom-color: #d5e3ef;\r\n    }\r\n.headings[_ngcontent-%COMP%]{\r\n        font-size: 24px;\r\n        color: #2d3188;\r\n    }\r\n.btny[_ngcontent-%COMP%]  {\r\n        background: #fff;\r\n        color: #2d3188;\r\n        padding: 7px 15px;\r\n        line-height: 15px;\r\n        margin: 0;\r\n        transition: .5s all linear;\r\n        position: absolute;\r\n        right: 90px;\r\n        top: 9px;\r\n        font-size: 14px;\r\n    }\r\n.btny[_ngcontent-%COMP%]:hover {\r\n        background: #2f2f91;\r\n        color: #fff;\r\n        margin: 0 0 5px 0px;\r\n    }\r\n.col[_ngcontent-%COMP%]\r\n    {\r\n   font-size: 12px;\r\n    }\r\n.header[_ngcontent-%COMP%] {\r\n        line-height: 28px;\r\n        padding: 5px;\r\n        border-bottom: 1px solid #BCD2C4;\r\n        display: block;\r\n        width: 100%;\r\n        margin: 10px 5px 30px 5px !important;\r\n    }\r\n.blue[_ngcontent-%COMP%] {\r\n        color: #fbc33e  !important;\r\nfont-size: 20px;\r\nfont-weight: 400 !important;\r\n    }\r\n.lighter[_ngcontent-%COMP%] {\r\n        font-weight: lighter;\r\n    }\r\nh4[_ngcontent-%COMP%] {\r\n        font-size: 18px;\r\n        font-weight: bold;\r\n    }\r\n.mainbox[_ngcontent-%COMP%]{\r\n        float:left;\r\n        width:100%;\r\n        margin-top:0px;\r\n        padding: 25px;\r\nborder: 2px solid rgb(255, 251, 251);\r\n    }\r\n.form-control.texbsize[_ngcontent-%COMP%]{\r\n        padding: 7px 8px;\r\n        font-size:12px;\r\n        color: #797777  !important;\r\n    }\r\n.form-control.texbsize1[_ngcontent-%COMP%]{\r\n        padding: 7px 5px 7px 25px !important;\r\n    }\r\n.form-group[_ngcontent-%COMP%]   .tarea[_ngcontent-%COMP%] {\r\n        padding: 10px !important;\r\n        line-height: 8px;\r\n    }\r\ninput[type=number][_ngcontent-%COMP%]{\r\n        height: 35px !important;\r\n        margin-top: -1px;\r\n    }\r\nlabel.name1[_ngcontent-%COMP%]{\r\n        font-size: 14px;\r\n        color: #313030;\r\n        float:left;\r\n        text-align: left;\r\n    }\r\nlabel.name1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n        color: red;\r\n    }\r\n.forms[_ngcontent-%COMP%] {\r\n        background: #edf8f1;\r\n        padding: 30px 40px !important;\r\n        box-shadow: 1px 1px 3px 2px #bdb9b994;\r\n    }\r\nselect.form-control[_ngcontent-%COMP%]{\r\n        \r\n        -moz-appearance: none;\r\n        position: relative;\r\n        background: transparent;\r\n    }\r\n.opt[_ngcontent-%COMP%]{\r\n        position: relative;\r\n    }\r\n.opt[_ngcontent-%COMP%]::before{\r\n        position: absolute;\r\n        content: \"\";\r\n        width: 7px;\r\n        border-right: 2px solid #2D3188;\r\n        height: 7px;\r\n        right: 12px;\r\n        top: 70%;\r\n        border-bottom: 2px solid #2D3188;\r\n        transform: translateY(-70%) rotate(45deg);\r\n        z-index: 100;\r\n    }\r\n.form-control[_ngcontent-%COMP%]{\r\n    display: block;\r\n    width: 100%;\r\n    padding: 5px .55rem !important;\r\n    font-size: 12px !important;\r\n    line-height: 0;\r\n    color: #495057;\r\n    background: transparent;\r\n    border: 1px solid #ced4da;\r\n    border-radius: .25rem;\r\n    height: 35px !important;\r\n}\r\n.invalid-feedback[_ngcontent-%COMP%] {\r\n    top: 55px;\r\n}\r\n.inb[_ngcontent-%COMP%]{\r\n    color: #7a8fb0 !important;\r\n}\r\n.blued[_ngcontent-%COMP%]\r\n{\r\n    color: #2d3188 !important;\r\n    border-bottom: 1px solid #2d3188 !important;\r\n}\r\n.form-control[_ngcontent-%COMP%]:focus {\r\n        box-shadow: none;\r\n        border:1px solid #2f2f91;\r\n    }\r\n.btn.btn-primary.martop[_ngcontent-%COMP%]{\r\n        margin-top:25px;\r\n    }\r\n.martop1[_ngcontent-%COMP%]{margin-top:8px;}\r\n.smallpad[_ngcontent-%COMP%]{    \r\n        padding-right: 5px;\r\n        padding-left: 5px;\r\n    }\r\n\r\nselect.form-control[_ngcontent-%COMP%]:not([size]):not([multiple]){\r\n        height: calc(2.10rem + 0px);\r\n    }\r\n.headg[_ngcontent-%COMP%]{\r\n        position: relative;\r\n        border-bottom: 1px solid #fbc33e ;\r\n        font-size: 24px;\r\n        padding: 10px 0;\r\n        width: 100%;\r\n        display: flex;\r\n        align-items: center;\r\n    }\r\n.modal-dialog[_ngcontent-%COMP%] {\r\n        max-width: 600px !important;\r\n    }\r\n.fontpassword[_ngcontent-%COMP%] { \r\n        position: relative; \r\n    }\r\n.fontpassword[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{ \r\n        position: absolute;\r\n        left: 5px;\r\n        top: 11px;\r\n        color: #0f95ab;\r\n        font-size: 12px; \r\n    }\r\n.btns[_ngcontent-%COMP%]\r\n{\r\n    padding: 5px ;\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n    width: 100%;\r\n    text-transform: uppercase;\r\n    background: #5bc45b;\r\n    border-color: #5bc45b;\r\n    transition: .5s all linear;\r\n}\r\n.btns[_ngcontent-%COMP%]:focus\r\n{\r\n    box-shadow: none !important;\r\n}\r\n.btns[_ngcontent-%COMP%]:hover\r\n{\r\n    background: #009432 !important;\r\n    border-color: #009439 !important;\r\n}\r\n.btn-mini[_ngcontent-%COMP%]  {\r\n    box-shadow: none;\r\n    border: none;\r\n    padding: 0px;\r\n    margin: 0px 0 0px 10px;\r\n    background: #5bc45b;\r\n    font-size: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    line-height: 0;\r\n}\r\n.btn-mini[_ngcontent-%COMP%]:hover\r\n{\r\n    background: #009432 !important;\r\n    border-color: #009439 !important;\r\n}\r\n.div80[_ngcontent-%COMP%]{\r\n    margin: 0 auto;\r\n    width: 80%;\r\n}\r\n.modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\r\n    padding: 0px !important;\r\n    margin: 5px !important;\r\n    width: 25px;\r\n    height: 25px;\r\n    line-height: 0;\r\n    background: #f00;\r\n    color: #fff;\r\n    transition: .3s all linear;\r\n    font-size: 18px;\r\n}\r\n.modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]:hover {\r\n    transform: rotate(180deg);\r\n    background: rgb(255, 255, 255);\r\n    color: #f00;\r\n}\r\ninput[_ngcontent-%COMP%]:read-only {\r\n    background-color: #e0f6fb;\r\n    border-color: #9ae3b5;\r\n    cursor: not-allowed;\r\n  }\r\ntextarea[_ngcontent-%COMP%]:read-only {\r\n    background-color: #e0f6fb;\r\n    border-color: #9ae3b5;\r\n    cursor: not-allowed;\r\n  }\r\ntextarea[_ngcontent-%COMP%]:-moz-read-only {\r\n    background-color: #e0f6fb;\r\n    border-color: #9ae3b5;\r\n    cursor: not-allowed;\r\n  }\r\nselect[_ngcontent-%COMP%]:disabled  {\r\n    background-color: #e0f6fb;\r\n    border-color: #9ae3b5;\r\n    cursor: not-allowed;\r\n  }\r\n@media only screen and (max-width: 768px){\r\n    .logo[_ngcontent-%COMP%] {\r\n        width: 90px !important;\r\n        float: none !important;\r\n        position: relative !important;\r\n        display: block;\r\n        margin: 0 auto !important;\r\n        padding: 5px !important;\r\n        border-radius: 45px;\r\n        left: 0 !important;\r\n        top: 0 !important;\r\n    }\r\n    .ml-5[_ngcontent-%COMP%], .ml-1[_ngcontent-%COMP%]{\r\n        margin-left:0 !important;\r\n    }\r\n    .nbox[_ngcontent-%COMP%], .div80[_ngcontent-%COMP%]{\r\n        width: 95%;\r\n    }\r\n    .btny[_ngcontent-%COMP%]{\r\n        position: static !important;\r\n        display: block;\r\n        margin: 8px auto 0 auto !important;\r\n    }\r\n    .top[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n        margin: 5px 0;\r\n        font-size: 23px;\r\n    }\r\n    .headg[_ngcontent-%COMP%]{\r\n        padding: 15px !important;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBQ0EsV0FBVyxlQUFlO0lBQ3RCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUNJO1FBQ0ksV0FBVztBQUNuQixnQ0FBZ0M7QUFDaEMsa0JBQWtCO0FBQ2xCLGVBQWU7QUFDZix5QkFBeUI7QUFDekIsZ0JBQWdCO0FBQ2hCLG1CQUFtQjtBQUNuQixtQkFBbUI7QUFDbkIsMkJBQTJCO0FBQzNCLDRCQUE0QjtJQUN4QjtBQUNBO1FBQ0kseUJBQXlCO0lBQzdCO0FBQ0E7UUFDSSxTQUFTO1FBQ1QsVUFBVTtRQUNWLGdCQUFnQjtJQUNwQjtBQUNBO1FBQ0ksWUFBWTtRQUNaLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLFFBQVE7UUFDUixnQkFBZ0I7UUFDaEIsWUFBWTtRQUNaLFVBQVU7SUFDZDtBQUNBO1FBQ0ksVUFBVTtRQUNWLHdCQUF3QjtRQUN4QixhQUFhO1FBQ2IseUJBQXlCO0lBQzdCO0FBQ0E7O1FBRUksZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCxTQUFTO1FBQ1QsVUFBVTtRQUNWLGVBQWU7UUFDZixpQkFBaUI7SUFDckI7QUFDQTtRQUNJLGdCQUFnQjtRQUNoQix5QkFBeUI7UUFDekIsZUFBZTtJQUNuQjtBQUVBO1FBQ0ksNEJBQTRCO0lBQ2hDO0FBQ0E7UUFDSSxlQUFlO1FBQ2YsY0FBYztJQUNsQjtBQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLFNBQVM7UUFDVCwwQkFBMEI7UUFDMUIsa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxRQUFRO1FBQ1IsZUFBZTtJQUNuQjtBQUNBO1FBQ0ksbUJBQW1CO1FBQ25CLFdBQVc7UUFDWCxtQkFBbUI7SUFDdkI7QUFDQTs7R0FFRCxlQUFlO0lBQ2Q7QUFDQTtRQUNJLGlCQUFpQjtRQUNqQixZQUFZO1FBQ1osZ0NBQWdDO1FBQ2hDLGNBQWM7UUFDZCxXQUFXO1FBQ1gsb0NBQW9DO0lBQ3hDO0FBQ0E7UUFDSSwwQkFBMEI7QUFDbEMsZUFBZTtBQUNmLDJCQUEyQjtJQUN2QjtBQUNBO1FBQ0ksb0JBQW9CO0lBQ3hCO0FBQ0E7UUFDSSxlQUFlO1FBQ2YsaUJBQWlCO0lBQ3JCO0FBR0E7UUFDSSxVQUFVO1FBQ1YsVUFBVTtRQUNWLGNBQWM7UUFDZCxhQUFhO0FBQ3JCLG9DQUFvQztJQUNoQztBQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCwwQkFBMEI7SUFDOUI7QUFDQTtRQUNJLG9DQUFvQztJQUN4QztBQUNBO1FBQ0ksd0JBQXdCO1FBQ3hCLGdCQUFnQjtJQUNwQjtBQUNBO1FBQ0ksdUJBQXVCO1FBQ3ZCLGdCQUFnQjtJQUNwQjtBQUNBO1FBQ0ksZUFBZTtRQUNmLGNBQWM7UUFDZCxVQUFVO1FBQ1YsZ0JBQWdCO0lBQ3BCO0FBQ0E7UUFDSSxVQUFVO0lBQ2Q7QUFDQTtRQUNJLG1CQUFtQjtRQUNuQiw2QkFBNkI7UUFDN0IscUNBQXFDO0lBQ3pDO0FBQ0E7UUFDSSw4QkFBOEI7UUFDOUIscUJBQXFCO1FBQ3JCLGtCQUFrQjtRQUNsQix1QkFBdUI7SUFDM0I7QUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxVQUFVO1FBQ1YsK0JBQStCO1FBQy9CLFdBQVc7UUFDWCxXQUFXO1FBQ1gsUUFBUTtRQUNSLGdDQUFnQztRQUNoQyx5Q0FBeUM7UUFDekMsWUFBWTtJQUNoQjtBQUNKO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsMEJBQTBCO0lBQzFCLGNBQWM7SUFDZCxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxTQUFTO0FBQ2I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBOztJQUVJLHlCQUF5QjtJQUN6QiwyQ0FBMkM7QUFDL0M7QUFDSTtRQUNJLGdCQUFnQjtRQUNoQix3QkFBd0I7SUFDNUI7QUFDQTtRQUNJLGVBQWU7SUFDbkI7QUFDQSxTQUFTLGNBQWMsQ0FBQztBQUN4QjtRQUNJLGtCQUFrQjtRQUNsQixpQkFBaUI7SUFDckI7QUFDQSw0QkFBNEI7QUFDNUI7UUFDSSwyQkFBMkI7SUFDL0I7QUFDQTtRQUNJLGtCQUFrQjtRQUNsQixpQ0FBaUM7UUFDakMsZUFBZTtRQUNmLGVBQWU7UUFDZixXQUFXO1FBQ1gsYUFBYTtRQUNiLG1CQUFtQjtJQUN2QjtBQUNBO1FBQ0ksMkJBQTJCO0lBQy9CO0FBRUE7UUFDSSxrQkFBa0I7SUFDdEI7QUFFQTtRQUNJLGtCQUFrQjtRQUNsQixTQUFTO1FBQ1QsU0FBUztRQUNULGNBQWM7UUFDZCxlQUFlO0lBQ25CO0FBQ0o7O0lBRUksYUFBYTtJQUNiLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLDBCQUEwQjtBQUM5QjtBQUNBOztJQUVJLDJCQUEyQjtBQUMvQjtBQUNBOztJQUVJLDhCQUE4QjtJQUM5QixnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztBQUNsQjtBQUNBOztJQUVJLDhCQUE4QjtJQUM5QixnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLGNBQWM7SUFDZCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCwwQkFBMEI7SUFDMUIsZUFBZTtBQUNuQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLDhCQUE4QjtJQUM5QixXQUFXO0FBQ2Y7QUFPRTtJQUNFLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsbUJBQW1CO0VBQ3JCO0FBQ0E7SUFDRSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLG1CQUFtQjtFQUNyQjtBQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixtQkFBbUI7RUFDckI7QUFDQTtJQUNFLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsbUJBQW1CO0VBQ3JCO0FBR0Y7SUFDSTtRQUNJLHNCQUFzQjtRQUN0QixzQkFBc0I7UUFDdEIsNkJBQTZCO1FBQzdCLGNBQWM7UUFDZCx5QkFBeUI7UUFDekIsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQixrQkFBa0I7UUFDbEIsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSx3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksMkJBQTJCO1FBQzNCLGNBQWM7UUFDZCxrQ0FBa0M7SUFDdEM7SUFDQTtRQUNJLGFBQWE7UUFDYixlQUFlO0lBQ25CO0lBQ0E7UUFDSSx3QkFBd0I7SUFDNUI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW4gIWltcG9ydGFudDtcclxufVxyXG5oMi5oZWFkaW5ne2ZvbnQtc2l6ZTogMjVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzM7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDUwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcbiAgICBoNC5oZWFkaW5nMXtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuYm9yZGVyLWJvdHRvbTogN3B4IHNvbGlkICM1QjU5NTk7XHJcbnBhZGRpbmc6IDEwcHggMjVweDtcclxuZm9udC1zaXplOiAxOHB4O1xyXG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5mb250LXdlaWdodDogNjAwO1xyXG5tYXJnaW4tYm90dG9tOiA1MHB4O1xyXG5iYWNrZ3JvdW5kOiAjMDA3QkZGO1xyXG5ib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbmJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICB9XHJcbiAgICAudG9we1xyXG4gICAgICAgIGJhY2tncm91bmQ6Y29ybmZsb3dlcmJsdWU7XHJcbiAgICB9XHJcbiAgICAudG9wIGgxIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgLnRvcCAubG9nb3tcclxuICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDQwcHg7XHJcbiAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgIH1cclxuICAgIC5uYm94IHtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvIDE1cHggYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICMyZDMxODg7XHJcbiAgICB9XHJcbiAgICAubmJveCBoMlxyXG4gICAge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgY29sb3I6ICMyZDMxODg7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgfVxyXG4gICAgLm5ib3ggaDIgc3BhbntcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMTQ1LCAxNDUsIDE0NSk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGhlYWRlci5ibHVlIHtcclxuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZDVlM2VmO1xyXG4gICAgfVxyXG4gICAgLmhlYWRpbmdze1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICBjb2xvcjogIzJkMzE4ODtcclxuICAgIH1cclxuICAgIC5idG55ICB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBjb2xvcjogIzJkMzE4ODtcclxuICAgICAgICBwYWRkaW5nOiA3cHggMTVweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogLjVzIGFsbCBsaW5lYXI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiA5MHB4O1xyXG4gICAgICAgIHRvcDogOXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICAgIC5idG55OmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMmYyZjkxO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIG1hcmdpbjogMCAwIDVweCAwcHg7XHJcbiAgICB9XHJcbiAgICAuY29sXHJcbiAgICB7XHJcbiAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICAgIC5oZWFkZXIge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0JDRDJDNDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDEwcHggNXB4IDMwcHggNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuYmx1ZSB7XHJcbiAgICAgICAgY29sb3I6ICNmYmMzM2UgICFpbXBvcnRhbnQ7XHJcbmZvbnQtc2l6ZTogMjBweDtcclxuZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmxpZ2h0ZXIge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgfVxyXG4gICAgaDQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIC5tYWluYm94e1xyXG4gICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOjBweDtcclxuICAgICAgICBwYWRkaW5nOiAyNXB4O1xyXG5ib3JkZXI6IDJweCBzb2xpZCByZ2IoMjU1LCAyNTEsIDI1MSk7XHJcbiAgICB9XHJcbiAgICAuZm9ybS1jb250cm9sLnRleGJzaXple1xyXG4gICAgICAgIHBhZGRpbmc6IDdweCA4cHg7XHJcbiAgICAgICAgZm9udC1zaXplOjEycHg7XHJcbiAgICAgICAgY29sb3I6ICM3OTc3NzcgICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuZm9ybS1jb250cm9sLnRleGJzaXplMXtcclxuICAgICAgICBwYWRkaW5nOiA3cHggNXB4IDdweCAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuZm9ybS1ncm91cCAudGFyZWEge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgICBsaW5lLWhlaWdodDogOHB4O1xyXG4gICAgfVxyXG4gICAgaW5wdXRbdHlwZT1udW1iZXJde1xyXG4gICAgICAgIGhlaWdodDogMzVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0xcHg7XHJcbiAgICB9XHJcbiAgICBsYWJlbC5uYW1lMXtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6ICMzMTMwMzA7XHJcbiAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgbGFiZWwubmFtZTEgc3BhbntcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgfVxyXG4gICAgLmZvcm1zIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZWRmOGYxO1xyXG4gICAgICAgIHBhZGRpbmc6IDMwcHggNDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IDJweCAjYmRiOWI5OTQ7XHJcbiAgICB9XHJcbiAgICBzZWxlY3QuZm9ybS1jb250cm9se1xyXG4gICAgICAgIC8qIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgKi9cclxuICAgICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG4gICAgLm9wdHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbiAgICAub3B0OjpiZWZvcmV7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgd2lkdGg6IDdweDtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMkQzMTg4O1xyXG4gICAgICAgIGhlaWdodDogN3B4O1xyXG4gICAgICAgIHJpZ2h0OiAxMnB4O1xyXG4gICAgICAgIHRvcDogNzAlO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMkQzMTg4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNzAlKSByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgIH1cclxuLmZvcm0tY29udHJvbHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA1cHggLjU1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG4gICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbiAgICBoZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcclxufVxyXG4uaW52YWxpZC1mZWVkYmFjayB7XHJcbiAgICB0b3A6IDU1cHg7XHJcbn1cclxuLmluYntcclxuICAgIGNvbG9yOiAjN2E4ZmIwICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJsdWVkXHJcbntcclxuICAgIGNvbG9yOiAjMmQzMTg4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzJkMzE4OCAhaW1wb3J0YW50O1xyXG59XHJcbiAgICAuZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIGJvcmRlcjoxcHggc29saWQgIzJmMmY5MTtcclxuICAgIH1cclxuICAgIC5idG4uYnRuLXByaW1hcnkubWFydG9we1xyXG4gICAgICAgIG1hcmdpbi10b3A6MjVweDtcclxuICAgIH1cclxuICAgIC5tYXJ0b3Axe21hcmdpbi10b3A6OHB4O31cclxuICAgIC5zbWFsbHBhZHsgICAgXHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgfVxyXG4gICAgLyogLm5vcGFke3BhZGRpbmctbGVmdDowO30gKi9cclxuICAgIHNlbGVjdC5mb3JtLWNvbnRyb2w6bm90KFtzaXplXSk6bm90KFttdWx0aXBsZV0pe1xyXG4gICAgICAgIGhlaWdodDogY2FsYygyLjEwcmVtICsgMHB4KTtcclxuICAgIH1cclxuICAgIC5oZWFkZ3tcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmYmMzM2UgO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLm1vZGFsLWRpYWxvZyB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA2MDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZm9udHBhc3N3b3JkIHsgXHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyBcclxuICAgIH0gXHJcbiAgICAgIFxyXG4gICAgLmZvbnRwYXNzd29yZCBpeyBcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogNXB4O1xyXG4gICAgICAgIHRvcDogMTFweDtcclxuICAgICAgICBjb2xvcjogIzBmOTVhYjtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7IFxyXG4gICAgfSBcclxuLmJ0bnNcclxue1xyXG4gICAgcGFkZGluZzogNXB4IDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNWJjNDViO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNWJjNDViO1xyXG4gICAgdHJhbnNpdGlvbjogLjVzIGFsbCBsaW5lYXI7XHJcbn1cclxuLmJ0bnM6Zm9jdXNcclxue1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi5idG5zOmhvdmVyXHJcbntcclxuICAgIGJhY2tncm91bmQ6ICMwMDk0MzIgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogIzAwOTQzOSAhaW1wb3J0YW50O1xyXG59XHJcbi5idG4tbWluaSAge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogMHB4IDAgMHB4IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNWJjNDViO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMDtcclxufVxyXG4uYnRuLW1pbmk6aG92ZXJcclxue1xyXG4gICAgYmFja2dyb3VuZDogIzAwOTQzMiAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDA5NDM5ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmRpdjgwe1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcbi5tb2RhbC1oZWFkZXIgLmNsb3NlIHtcclxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiA1cHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0cmFuc2l0aW9uOiAuM3MgYWxsIGxpbmVhcjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4ubW9kYWwtaGVhZGVyIC5jbG9zZTpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgY29sb3I6ICNmMDA7XHJcbn1cclxuaW5wdXQ6LW1vei1yZWFkLW9ubHkgeyAvKiBGb3IgRmlyZWZveCAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZjZmYjtcclxuICAgIGJvcmRlci1jb2xvcjogIzlhZTNiNTtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0OnJlYWQtb25seSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBmNmZiO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjOWFlM2I1O1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICB9XHJcbiAgdGV4dGFyZWE6cmVhZC1vbmx5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGY2ZmI7XHJcbiAgICBib3JkZXItY29sb3I6ICM5YWUzYjU7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gIH1cclxuICB0ZXh0YXJlYTotbW96LXJlYWQtb25seSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBmNmZiO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjOWFlM2I1O1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICB9XHJcbiAgc2VsZWN0OmRpc2FibGVkICB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBmNmZiO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjOWFlM2I1O1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICB9XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCl7XHJcbiAgICAubG9nbyB7XHJcbiAgICAgICAgd2lkdGg6IDkwcHggIWltcG9ydGFudDtcclxuICAgICAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNDVweDtcclxuICAgICAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubWwtNSwgLm1sLTF7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLm5ib3gsIC5kaXY4MHtcclxuICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgfVxyXG4gICAgLmJ0bnl7XHJcbiAgICAgICAgcG9zaXRpb246IHN0YXRpYyAhaW1wb3J0YW50O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogOHB4IGF1dG8gMCBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAudG9wIGgxIHtcclxuICAgICAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIH1cclxuICAgIC5oZWFkZ3tcclxuICAgICAgICBwYWRkaW5nOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iXX0= */"], data: { animation: [Object(_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-registration',
                templateUrl: './registration.component.html',
                styleUrls: ['./registration.component.css'],
                animations: [Object(_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()],
                host: { '[@routerTransition]': '' }
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "6+dj":
/*!************************************************************!*\
  !*** ./src/app/forgetpassword/forgetpassword.component.ts ***!
  \************************************************************/
/*! exports provided: ForgetpasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetpasswordComponent", function() { return ForgetpasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_custom_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/custom-validators */ "lmlb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-tooltip-directive */ "lVl8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function ForgetpasswordComponent_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Email required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ForgetpasswordComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ForgetpasswordComponent_div_18_div_1_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.Password.errors.required);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class ForgetpasswordComponent {
    constructor(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.Password = "";
        this.submitted = false;
    }
    goback() {
        this.router.navigate(['/login']);
    }
    SendEmail() {
        this.submitted = true;
        if (this.addpassword.invalid) {
        }
        else {
            alert("Please Check Your Email ..");
            this.router.navigate(['./']);
        }
    }
    clear(input) {
        input.value = ''; // null should work too, but as the type ov the value is string I like to use ''
    }
    get f() { return this.addpassword.controls; }
    ngOnInit() {
        this.addpassword = this.formBuilder.group({
            Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, src_app_custom_validators__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].patternValidator(/\d/, { hasNumber: true }), src_app_custom_validators__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].patternValidator(/[A-Z]/, { hasCapitalCase: true }), src_app_custom_validators__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].patternValidator(/[a-z]/, { hasSmallCase: true }), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]
            ],
        });
    }
}
ForgetpasswordComponent.ɵfac = function ForgetpasswordComponent_Factory(t) { return new (t || ForgetpasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ForgetpasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForgetpasswordComponent, selectors: [["app-forgetpassword"]], decls: 25, vars: 5, consts: [[1, "limiter", 2, "background-image", "url('assets/images/bg-201.jpg')"], [1, "fog-container"], [1, "fog-img", "fog-img-first"], [1, "fog-img", "fog-img-second"], [1, "container"], [1, "row"], [1, "container-login100"], [1, "wrap-login100"], ["onsubmit", "return myfun()", 3, "formGroup", "ngSubmit"], ["type", "button", "tooltip", "Goto Back ", "id", "backbtn", 1, "btn", "btny", "btn-default", "buttom-prim", "buttonsToShow", 3, "click"], [1, "fa", "fa-arrow-circle-left"], ["_ngcontent-ash-c2", "", 1, "login-label"], [1, "from-group", "marbot"], [1, "fontpassword"], [1, "form-group"], ["formControlName", "Password", "name", "password", "id", "password", "type", "text", "placeholder", "Enter Your Email", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "password", "id", "passwords", "placeholder", "New Password", 1, "form-control"], ["type", "password", "id", "passwords", "placeholder", "Confirm Password", 1, "form-control"], [1, "btn", "btn-suc", "d-block", "mx-auto", "mt-3", "btn-success"], [1, "invalid-feedback"], [4, "ngIf"]], template: function ForgetpasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ForgetpasswordComponent_Template_form_ngSubmit_9_listener() { return ctx.SendEmail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgetpasswordComponent_Template_button_click_10_listener() { return ctx.goback(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Forgot Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ForgetpasswordComponent_div_18_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addpassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.submitted && ctx.f.Password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.Password.errors);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_4__["TooltipDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".limiter[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    position: relative;\r\n    height: 100vh;\r\n    background-position: center bottom !important;\r\n    background-repeat: no-repeat !important;\r\n    background-size: cover !important;\r\n}\r\n.fog-container[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    z-index: 1;\r\n}\r\n.fog-img[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    height: 100vh;\r\n    width: 300vw;\r\n    z-index: 2;\r\n  }\r\n.fog-img-first[_ngcontent-%COMP%] {\r\n    background: url('fog-1.png');\r\n    background-repeat: repeat-x;\r\n    background-size: contain;\r\n    background-position: center;\r\n    animation: fog 60s linear infinite;\r\n  }\r\n.fog-img-second[_ngcontent-%COMP%] {\r\n    background: url('fog-2.png');\r\n    background-repeat: repeat-x;\r\n    background-size: contain;\r\n    background-position: center;\r\n    animation: fog 30s linear infinite;\r\n  }\r\n@keyframes fog {\r\n    0% {\r\n      transform: translate3d(0, 0, 0);\r\n    }\r\n  \r\n    100% {\r\n      transform: translate3d(-200vw, 0, 0);\r\n    }\r\n  }\r\n.container-login100[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    min-height: 100vh;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 0px;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n    position: relative;\r\n    z-index: 1;\r\n    float: right;\r\n}\r\n.container-login100[_ngcontent-%COMP%]::before {\r\n\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    z-index: -1;\r\n    width: 0%;\r\n    height: 0%;\r\n    top: 0;\r\n    float: right;\r\n    background-color: rgba(255,255,255,0.9);\r\n\r\n}\r\n.login-label[_ngcontent-ash-c2][_ngcontent-%COMP%] {\r\n    color: #2f2f91;\r\n    text-align: center;\r\n    font-size: large;\r\n}\r\n.btn-login[_ngcontent-ash-c2][_ngcontent-%COMP%] {\r\n    padding: 7px 50px;\r\n}\r\n.btn-primary[_ngcontent-%COMP%] {\r\n    background-color: #2f2f91;\r\n    color: #fff;\r\n    border: 1px solid transparent;\r\n}\r\n.btny[_ngcontent-%COMP%] {\r\n    background: #a6a6ff;\r\n    color: #2d3188;\r\n    padding: 10px;\r\n    line-height: 15px;\r\n    margin: 0 0 5px 0px;\r\n    transition: .5s all linear;\r\n}\r\n.btny[_ngcontent-%COMP%]:hover {\r\n    background: #2f2f91;\r\n    color: #fff;\r\n    padding: 10px;\r\n    line-height: 15px;\r\n    margin: 0 0 5px 0px;\r\n}\r\n.wrap-login100[_ngcontent-%COMP%] {\r\n    float: right;\r\n    width: 100%;\r\n    max-width: 400px;\r\n    border-radius: 5px;\r\n    overflow: hidden;\r\n    padding: 35px;\r\n    background: #ffffff;\r\n    background: linear-gradient(top, #7579ff, #b224ef);\r\n    \r\n}\r\n.login100-form[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n.logo-img[_ngcontent-dac-c2][_ngcontent-%COMP%] {\r\n    width: 20px;\r\n    padding-bottom: 2rem;\r\n}\r\n.login100-form-logo[_ngcontent-%COMP%] {\r\n    font-size: 60px;\r\n    color: #333333;\r\n    display: flex;\r\n    justify-content: right;\r\n    align-items: right;\r\n    width: 120px;\r\n    height: 120px;\r\n    border-radius: 50%;\r\n    background-color: #fff;\r\n    margin: 0 auto;\r\n}\r\n.login100-form-title[_ngcontent-%COMP%] {\r\n    font-family: Open sans;\r\n    font-size: 22px;\r\n    color: #fff;\r\n    line-height: 1.2;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    display: block;\r\n}\r\n.p-b-34[_ngcontent-%COMP%] {\r\n    padding-bottom: 34px;\r\n}\r\n.p-t-27[_ngcontent-%COMP%] {\r\n    padding-top: 27px;\r\n}\r\n.marbot[_ngcontent-%COMP%]{\r\n   margin-bottom: 30px;\r\n}\r\n.form-control[_ngcontent-%COMP%]{\r\n    padding: 15px;\r\n    font-size: 14px;\r\n    color: #1f1717;\r\n    margin: 15px auto;\r\n}\r\n.form-control[_ngcontent-%COMP%]:focus {\r\n    background-color: #fff;\r\n    border: 1px solid #2f2f91 !important;\r\n    box-shadow: none!important;\r\n}\r\n.stretch[_ngcontent-%COMP%] {\r\n    width:100%;\r\n    height:100%;\r\n}\r\nlabel.color[_ngcontent-%COMP%]{color:#fff;}\r\n.btn.btn-default.style[_ngcontent-%COMP%]{\r\n    width:112px;\r\n    margin-top: 25px;\r\nborder-radius: 25px;\r\nmargin-bottom: 15px;\r\ntransition:1s ease all;\r\n}\r\n.btn.btn-default.style[_ngcontent-%COMP%]:hover{\r\n    background:#5710cb;\r\n    color:#fff;\r\n}\r\n.btn-suc[_ngcontent-%COMP%]\r\n{\r\n    padding: 5px 25px;\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n    text-transform: uppercase;\r\n    background: #5bc45b;\r\n    border-color: #5bc45b;\r\n    transition: .5s all linear;\r\n}\r\n.btn-suc[_ngcontent-%COMP%]:focus\r\n{\r\n    box-shadow: none !important;\r\n}\r\n.btn-suc[_ngcontent-%COMP%]:hover\r\n{\r\n    background: #009432 !important;\r\n    border-color: #009439 !important;\r\n}\r\na.txt1[_ngcontent-%COMP%]{\r\n    text-decoration:none;\r\n    color:#007bff;\r\n    transition:1s ease all;\r\n    cursor: pointer;\r\n}\r\na[_ngcontent-%COMP%]:hover.txt1{\r\n    color:#0c0c0c;\r\n}\r\n.fontpassword[_ngcontent-%COMP%] { \r\n    position: relative; \r\n}\r\n.fontpassword[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{ \r\n    position: absolute; \r\n    left: 15px; \r\n    top:46px; \r\n    color: gray; \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ2V0cGFzc3dvcmQvZm9yZ2V0cGFzc3dvcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYiw2Q0FBNkM7SUFDN0MsdUNBQXVDO0lBQ3ZDLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osVUFBVTtFQUNaO0FBQ0Y7SUFDSSw0QkFBZ0Q7SUFDaEQsMkJBQTJCO0lBQzNCLHdCQUF3QjtJQUN4QiwyQkFBMkI7SUFDM0Isa0NBQWtDO0VBQ3BDO0FBRUE7SUFDRSw0QkFBZ0Q7SUFDaEQsMkJBQTJCO0lBQzNCLHdCQUF3QjtJQUN4QiwyQkFBMkI7SUFDM0Isa0NBQWtDO0VBQ3BDO0FBRUE7SUFDRTtNQUNFLCtCQUErQjtJQUNqQzs7SUFFQTtNQUNFLG9DQUFvQztJQUN0QztFQUNGO0FBRUY7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBS2pCLGFBQWE7SUFDYixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBRUE7O0lBRUksV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCxVQUFVO0lBQ1YsTUFBTTtJQUNOLFlBQVk7SUFDWix1Q0FBdUM7O0FBRTNDO0FBQ0E7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQiwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrREFBa0Q7SUFDbEQsK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7SUFDWCxvQkFBb0I7QUFDeEI7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBS2QsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7R0FDRyxtQkFBbUI7QUFDdEI7QUFDQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLG9DQUFvQztJQUNwQywwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7QUFDQSxZQUFZLFVBQVUsQ0FBQztBQUN2QjtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEIsbUJBQW1CO0FBQ25CLG1CQUFtQjtBQUNuQixzQkFBc0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7QUFDQTs7SUFFSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQiwwQkFBMEI7QUFDOUI7QUFDQTs7SUFFSSwyQkFBMkI7QUFDL0I7QUFDQTs7SUFFSSw4QkFBOEI7SUFDOUIsZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsUUFBUTtJQUNSLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdldHBhc3N3b3JkL2ZvcmdldHBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGltaXRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBib3R0b20gIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxufVxyXG4uZm9nLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcbi5mb2ctaW1nIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMzAwdnc7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxuLmZvZy1pbWctZmlyc3Qge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9mb2ctMS5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBhbmltYXRpb246IGZvZyA2MHMgbGluZWFyIGluZmluaXRlO1xyXG4gIH1cclxuICBcclxuICAuZm9nLWltZy1zZWNvbmQge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9mb2ctMi5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBhbmltYXRpb246IGZvZyAzMHMgbGluZWFyIGluZmluaXRlO1xyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGZvZyB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAxMDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjAwdncsIDAsIDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbi5jb250YWluZXItbG9naW4xMDAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5jb250YWluZXItbG9naW4xMDA6OmJlZm9yZSB7XHJcblxyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICB3aWR0aDogMCU7XHJcbiAgICBoZWlnaHQ6IDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjkpO1xyXG5cclxufVxyXG4ubG9naW4tbGFiZWxbX25nY29udGVudC1hc2gtYzJdIHtcclxuICAgIGNvbG9yOiAjMmYyZjkxO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG4uYnRuLWxvZ2luW19uZ2NvbnRlbnQtYXNoLWMyXSB7XHJcbiAgICBwYWRkaW5nOiA3cHggNTBweDtcclxufVxyXG4uYnRuLXByaW1hcnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJmMmY5MTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmJ0bnkge1xyXG4gICAgYmFja2dyb3VuZDogI2E2YTZmZjtcclxuICAgIGNvbG9yOiAjMmQzMTg4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgbWFyZ2luOiAwIDAgNXB4IDBweDtcclxuICAgIHRyYW5zaXRpb246IC41cyBhbGwgbGluZWFyO1xyXG59XHJcbi5idG55OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMyZjJmOTE7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgIG1hcmdpbjogMCAwIDVweCAwcHg7XHJcbn1cclxuLndyYXAtbG9naW4xMDAge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBhZGRpbmc6IDM1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvcCwgIzc1NzlmZiwgI2IyMjRlZik7XHJcbiAgICAvKiBib3JkZXI6IDVweCBzb2xpZCAjZjNmMWY3OyAqL1xyXG59XHJcbi5sb2dpbjEwMC1mb3JtIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5sb2dvLWltZ1tfbmdjb250ZW50LWRhYy1jMl0ge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxuLmxvZ2luMTAwLWZvcm0tbG9nbyB7XHJcbiAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICBjb2xvcjogIzMzMzMzMztcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xyXG4gICAgYWxpZ24taXRlbXM6IHJpZ2h0O1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4ubG9naW4xMDAtZm9ybS10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBzYW5zO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5wLWItMzQge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDM0cHg7XHJcbn1cclxuLnAtdC0yNyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjdweDtcclxufVxyXG4ubWFyYm90e1xyXG4gICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcbi5mb3JtLWNvbnRyb2x7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMxZjE3MTc7XHJcbiAgICBtYXJnaW46IDE1cHggYXV0bztcclxufVxyXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMmYyZjkxICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lIWltcG9ydGFudDtcclxufVxyXG4uc3RyZXRjaCB7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbn1cclxubGFiZWwuY29sb3J7Y29sb3I6I2ZmZjt9XHJcbi5idG4uYnRuLWRlZmF1bHQuc3R5bGV7XHJcbiAgICB3aWR0aDoxMTJweDtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbmJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbm1hcmdpbi1ib3R0b206IDE1cHg7XHJcbnRyYW5zaXRpb246MXMgZWFzZSBhbGw7XHJcbn1cclxuLmJ0bi5idG4tZGVmYXVsdC5zdHlsZTpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6IzU3MTBjYjtcclxuICAgIGNvbG9yOiNmZmY7XHJcbn1cclxuLmJ0bi1zdWNcclxue1xyXG4gICAgcGFkZGluZzogNXB4IDI1cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGJhY2tncm91bmQ6ICM1YmM0NWI7XHJcbiAgICBib3JkZXItY29sb3I6ICM1YmM0NWI7XHJcbiAgICB0cmFuc2l0aW9uOiAuNXMgYWxsIGxpbmVhcjtcclxufVxyXG4uYnRuLXN1Yzpmb2N1c1xyXG57XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJ0bi1zdWM6aG92ZXJcclxue1xyXG4gICAgYmFja2dyb3VuZDogIzAwOTQzMiAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDA5NDM5ICFpbXBvcnRhbnQ7XHJcbn1cclxuYS50eHQxe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICBjb2xvcjojMDA3YmZmO1xyXG4gICAgdHJhbnNpdGlvbjoxcyBlYXNlIGFsbDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5hOmhvdmVyLnR4dDF7XHJcbiAgICBjb2xvcjojMGMwYzBjO1xyXG59XHJcbi5mb250cGFzc3dvcmQgeyBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXHJcbn0gXHJcbiAgXHJcbi5mb250cGFzc3dvcmQgaXsgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgbGVmdDogMTVweDsgXHJcbiAgICB0b3A6NDZweDsgXHJcbiAgICBjb2xvcjogZ3JheTsgXHJcbn0gIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgetpasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forgetpassword',
                templateUrl: './forgetpassword.component.html',
                styleUrls: ['./forgetpassword.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "6mwT":
/*!****************************************************!*\
  !*** ./src/app/regdetails/regdetails.component.ts ***!
  \****************************************************/
/*! exports provided: RegdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegdetailsComponent", function() { return RegdetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/config/config.service */ "L7HW");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user/user.service */ "CFL1");
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-tooltip-directive */ "lVl8");










const ELEMENT_DATA = [
    { id: '1', name: 'Hydrogen', address: 'bbsr', category: 'H' },
    { id: '2', name: 'Hydrogen1', address: 'bbsr1', category: 'H1' },
    { id: '3', name: 'Hydrogen2', address: 'bbsr2', category: 'H2' },
    { id: '4', name: 'Hydrogen3', address: 'bbsr3', category: 'H' },
    { id: '5', name: 'Hydrogen4', address: 'bbsr4', category: 'H' },
];
class RegdetailsComponent {
    constructor(formBuilder, router, userService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
        this.studentDetail = [];
        this.div1 = false;
        this.tab = false;
        this.dataSource = [];
        this.displayedColumns = ['id', 'name', 'address', 'category', 'regionalOfc', 'status'];
        this.no = 0;
        this.regdetails = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _services_config_config_service__WEBPACK_IMPORTED_MODULE_2__["ValidationService"].emailValidator]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _services_config_config_service__WEBPACK_IMPORTED_MODULE_2__["ValidationService"].passwordValidator]]
        });
    }
    set matSort(sort) {
        if (!this.dataSource.sort) {
            this.dataSource.sort = sort;
        }
    }
    ngAfterViewInit() {
        // this.dataSource.sort = this.sort;
    }
    ngOnInit() {
        const regdata = this.userService.display(this.regdetails.value).subscribe(data => {
            debugger;
            this.dataSource = data;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
        });
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    goback() {
        this.router.navigate(['/regdetails']);
    }
    regpage(lbl) {
        if (lbl == "0") {
            alert('Already Registerd Successfully');
        }
        else {
            this.router.navigate(['/registration']);
        }
    }
    displaydata() {
        const regdata = this.userService.display(this.regdetails.value).subscribe(data => {
            debugger;
            if (data.status !== "") {
                this.div1 = true;
                //	window.localStorage.setItem('token', data.result.token);
                this.router.navigate(['/regdetails']);
                // alert(status);
                this.studentDetail = data;
                // alert(this.studentDetail);
            }
            else {
                //this.invalidLogin = true;
                //	alert('data is'+data);
                //	console.log(data);
            }
        });
    }
}
RegdetailsComponent.ɵfac = function RegdetailsComponent_Factory(t) { return new (t || RegdetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"])); };
RegdetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegdetailsComponent, selectors: [["app-regdetails"]], viewQuery: function RegdetailsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.matSort = _t.first);
    } }, decls: 189, vars: 0, consts: [[1, "regristartion", "container-fluid", "top", "py-2"], ["src", "assets/images/cpcb.png", 1, "logo"], [1, "text-center", "text-white"], [1, "container", "uk-card", "uk-card-default", "uk-card-body", "my-3"], [1, "text-center", "nbox"], [1, "div80"], ["type", "button", "tooltip", "Goto Back ", 1, "float-left", "btn", "btny", "btn-default", "buttom-prim", "buttonsToShow"], [1, "fa", "fa-arrow-circle-left"], [1, "clearfix"], [1, "row", "py-3", "px-3"], [1, "text-right"], [1, "control-label", "pl-0", 2, "padding", "5px", "padding-bottom", "5px"], [1, "form-group", "col-sm-3", "smallpad", "opt", 2, "float", "left"], [1, "form-control", "texbsize"], ["selected", ""], [1, "form-group", "col-sm-2", "smallpad"], ["type", "submit", 1, "btn", "btns", "btn-success", "ml-1", 3, "click"], ["_ngcontent-hel-c18", "", 1, "fas", "fa-user", "fa-fw"], [1, "form-group", "ml-auto", "col-sm-2", "p-0", "ml-5"], ["type", "submit", 1, "btn", "btns", "btn-success", 3, "click"], [1, "row", "my-3"], [1, "col-sm-3", "pl-0"], [1, "py-2"], [1, "col-sm-3", "ml-auto"], ["type", "text", "placeholder", "Search", 1, "form-control"], [1, "table-responsive"], [1, "table21", "table", "table-hover", "table-bordered", "table-striped"], ["scope", "col"], [1, "d-flex", "just"], [1, "sort"], [1, "fa", "fa-sort"], ["scope", "row"], ["data-toggle", "modal", "data-target", "#exampleModal", 1, "btn", "btns", "btn-success", "d-block", "mx-auto"], [1, "pagination", "pagination-sm", "justify-content-end"], [1, "page-item"], ["href", "#", 1, "page-link"], [1, "fa", "fa-angle-left"], [1, "fa", "fa-angle-right"], ["src", "assets/images/data.svg", 1, "img-fluid"], ["id", "exampleModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-body"], [1, "text-center"], [1, "modal-footer", "py-1", 2, "background-color", "#f2f2f2"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"]], template: function RegdetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Assam Pollution Control Board ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Industry Registration ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "(Integration with Central Server for Real Time Monitoring)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Industry Category :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Integrated Steel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Pulp & Paper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Coke Making");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Almunium Smelter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Power Plant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Sugar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Chemical ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Mines");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegdetailsComponent_Template_button_click_42_listener() { return ctx.displaydata(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Show");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegdetailsComponent_Template_button_click_46_listener() { return ctx.regpage(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "New Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Showing 1 to 5 of 5 entries");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "table", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " No. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " NAME ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " ADDRESS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " CATEGORY ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " RegionalOfc ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "M/s Bhubaneswar Power Pvt. Limited");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "At-Anantapur,Po- Dhurusia, Cuttack, Pin-754027 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Power Plant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Cuttack ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "M/s. Bhusan Energy Ltd. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "At- Ganthigadia, PO- Nuahat, Via- Banarpal, Dist - Angul -759128 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Power plant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Angul ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "M/s. FACOR Power Ltd. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "At- D.P. nagar, Po - Randia, Dist - Bhadrak - 765135 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "power plant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Balasore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "M/s. FACOR Power Ltd. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "At- D.P. nagar, Po - Randia, Dist - Bhadrak - 765135 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "power plant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Balasore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "M/s. FACOR Power Ltd. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "At- D.P. nagar, Po - Randia, Dist - Bhadrak - 765135 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "power plant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Balasore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "ul", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "li", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "li", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "li", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "li", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "li", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "h2", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Already Registered Successfully...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "OK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_7__["TooltipDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: ["h2.heading[_ngcontent-%COMP%]{font-size: 25px;\r\n    text-align: center;\r\n    color: #333;\r\n    border-bottom: 1px solid #333;\r\n    padding: 10px 50px;\r\n    margin: 0 auto;\r\n    font-weight: 600;\r\n    margin-top: 40px;\r\n}\r\n.top[_ngcontent-%COMP%]{\r\n    background:cornflowerblue;\r\n}\r\n.top[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    font-weight: 500;\r\n}\r\n.top[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{\r\n    width: 120px;\r\n    float: left;\r\n    position: absolute;\r\n    left: 40px;\r\n    top: 0px;\r\n    background: #fff;\r\n    padding: 5px;\r\n    z-index: 1;\r\n}\r\n.nbox[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n    margin: 0 auto;\r\n    padding: 15px;\r\n    border: 3px solid #2d3188;\r\n}\r\n.nbox[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]\r\n{\r\n    font-weight: 500;\r\n    color: #2d3188;\r\n    margin: 0;\r\n    padding: 0;\r\n    font-size: 24px;\r\n    line-height: 28px;\r\n}\r\n.nbox[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    font-weight: 300;\r\n    color: rgb(145, 145, 145);\r\n    font-size: 18px;\r\n}\r\n.row[_ngcontent-%COMP%] {\r\n    \r\n}\r\n.btns[_ngcontent-%COMP%]{\r\n    color: #fff;\r\n    background-color: #1e7e34;\r\n    border-color: #1c7430;\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n    padding: 5px 20px;\r\n    width: 100%;\r\n}\r\ntable[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n.row[_ngcontent-%COMP%]\r\n  {\r\n      padding-left: 20px;\r\n\r\n  }\r\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\r\n    color: black;\r\n  }\r\nh4.heading1[_ngcontent-%COMP%]{\r\n        color: #fff;\r\nborder-bottom: 7px solid #5B5959;\r\npadding: 10px 25px;\r\nfont-size: 18px;\r\ntext-transform: uppercase;\r\nfont-weight: 600;\r\nmargin-bottom: 50px;\r\nbackground: #007BFF;\r\nborder-top-left-radius: 5px;\r\nborder-top-right-radius: 5px;\r\n    }\r\n.mainbox[_ngcontent-%COMP%]{\r\n        width:100%;\r\n        margin-top:15px;\r\n        padding: 25px;\r\nborder: 2px solid #ccc;\r\n    }\r\n.form-control.texbsize[_ngcontent-%COMP%]{\r\n        padding: 7px 8px;\r\n        font-size:12px;\r\n    }\r\n.form-control.texbsize1[_ngcontent-%COMP%]{\r\n        padding: 7px 5px 7px 25px;\r\n        font-size:12px;\r\n    }\r\ntable[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n      }\r\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\r\n        color: black;\r\n      }\r\nlabel.name1[_ngcontent-%COMP%]{\r\n        font-size: 14px;\r\n        color: #666\r\n    }\r\n.btn.btn-primary.martop[_ngcontent-%COMP%]{\r\n        margin-top:25px;\r\n    }\r\n.martop1[_ngcontent-%COMP%]{margin-top:8px;}\r\n.smallpad[_ngcontent-%COMP%]{    \r\n        padding-right: 5px;\r\n        padding-left: 5px;\r\n    }\r\n.nopad[_ngcontent-%COMP%]{padding-left:0;}\r\nselect.form-control[_ngcontent-%COMP%]:not([size]):not([multiple]){\r\n        height: calc(2.10rem + 0px);\r\n    }\r\n.fontpassword[_ngcontent-%COMP%] { \r\n        position: relative; \r\n    }\r\n.fontpassword[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{ \r\n        position: absolute;\r\n        left: 5px;\r\n        top: 11px;\r\n        color: #0f95ab;\r\n        font-size: 12px; \r\n    }\r\n.btns[_ngcontent-%COMP%]\r\n{\r\n    padding: 5px;\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n    text-transform: uppercase;\r\n    background: #5bc45b;\r\n    border-color: #5bc45b;\r\n    transition: .5s all linear;\r\n}\r\n.btns[_ngcontent-%COMP%]:focus\r\n{\r\n    box-shadow: none !important;\r\n}\r\n.btns[_ngcontent-%COMP%]:hover\r\n{\r\n    background: #009432 !important;\r\n    border-color: #009439 !important;\r\n}\r\n.btny[_ngcontent-%COMP%] {\r\n    background: #a6a6ff;\r\n    color: #2d3188;\r\n    padding: 10px;\r\n    line-height: 15px;\r\n    margin: 0px 3px 13px 0px;\r\n    transition: .5s all linear;\r\n}\r\n.btny[_ngcontent-%COMP%]:hover {\r\n    background: #2f2f91;\r\n    color: #fff;\r\n}\r\nselect.form-control[_ngcontent-%COMP%]{\r\n    -webkit-appearance: none;\r\n       -moz-appearance: none;\r\n            appearance: none;\r\n    -ms-appearance:none ;\r\n    position: relative;\r\n    background: transparent;\r\n}\r\n.opt[_ngcontent-%COMP%]{\r\n    position: relative;\r\n}\r\n.opt[_ngcontent-%COMP%]::before{\r\n    position: absolute;\r\n    content: \"\";\r\n    width: 10px;\r\n    border-right: 1px solid #2D3188;\r\n    height: 10px;\r\n    right: 16px;\r\n    top: 50%;\r\n    border-bottom: 1px solid #2D3188;\r\n    transform: translateY(-50%) rotate(45deg);\r\n    z-index: 100;\r\n}\r\n.form-control[_ngcontent-%COMP%]{\r\n    padding: 15px;\r\n    font-size: 14px;\r\n    color: #1f1717;\r\n    margin: 0 auto;\r\n}\r\n.form-control[_ngcontent-%COMP%]:focus {\r\n    background-color: #fff;\r\n    border: 1px solid #2f2f91 !important;\r\n    box-shadow: none!important;\r\n}\r\n.mat-sort-header-content[_ngcontent-%COMP%]{\r\n    \r\n    font-size: 14px !important;\r\n    font-weight: 600!important;\r\n    color: #2a2c60!important;\r\n}\r\n.div80[_ngcontent-%COMP%]{\r\n    margin: 0 auto;\r\n    width: 80%;\r\n}\r\n.table22[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 100%;\r\n    font-size: 16px;\r\n    font-weight: 590;\r\n    color: #2d3188;\r\n}\r\n.mat-sort-header-container[_ngcontent-%COMP%] {\r\n        justify-content: center;\r\n}\r\ntable.dataTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{\r\n    padding: 10px 18px;\r\n    border-bottom: 1px solid #111111;\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    color: #3b3b66;\r\n    background: #a6a6ff;\r\n}\r\n@media only screen and (max-width: 768px){\r\n    .logo[_ngcontent-%COMP%] {\r\n        width: 90px !important;\r\n        float: none !important;\r\n        position: relative !important;\r\n        display: block;\r\n        margin: 0 auto !important;\r\n        padding: 5px !important;\r\n        border-radius: 45px;\r\n        left: 0 !important;\r\n        top: 0 !important;\r\n    }\r\n    .ml-5[_ngcontent-%COMP%], .ml-1[_ngcontent-%COMP%]{\r\n        margin-left:0 !important;\r\n    }\r\n    .nbox[_ngcontent-%COMP%], .div80[_ngcontent-%COMP%]{\r\n        width: 95%;\r\n    }\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnZGV0YWlscy9yZWdkZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBVyxlQUFlO0lBQ3RCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFFBQVE7SUFDUixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFVBQVU7QUFDZDtBQUNBO0lBQ0ksVUFBVTtJQUNWLGNBQWM7SUFDZCxhQUFhO0lBQ2IseUJBQXlCO0FBQzdCO0FBQ0E7O0lBRUksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxTQUFTO0lBQ1QsVUFBVTtJQUNWLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjtBQUNBO0lBQ0k7Ozs7OzswQkFNc0I7QUFDMUI7QUFDQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztFQUNiO0FBQ0E7O01BRUksa0JBQWtCOztFQUV0QjtBQUNBO0lBQ0UsWUFBWTtFQUNkO0FBRUU7UUFDSSxXQUFXO0FBQ25CLGdDQUFnQztBQUNoQyxrQkFBa0I7QUFDbEIsZUFBZTtBQUNmLHlCQUF5QjtBQUN6QixnQkFBZ0I7QUFDaEIsbUJBQW1CO0FBQ25CLG1CQUFtQjtBQUNuQiwyQkFBMkI7QUFDM0IsNEJBQTRCO0lBQ3hCO0FBQ0E7UUFDSSxVQUFVO1FBQ1YsZUFBZTtRQUNmLGFBQWE7QUFDckIsc0JBQXNCO0lBQ2xCO0FBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsY0FBYztJQUNsQjtBQUNBO1FBQ0kseUJBQXlCO1FBQ3pCLGNBQWM7SUFDbEI7QUFDQTtRQUNJLFdBQVc7TUFDYjtBQUVBO1FBQ0UsWUFBWTtNQUNkO0FBRUY7UUFDSSxlQUFlO1FBQ2Y7SUFDSjtBQUNBO1FBQ0ksZUFBZTtJQUNuQjtBQUNBLFNBQVMsY0FBYyxDQUFDO0FBQ3hCO1FBQ0ksa0JBQWtCO1FBQ2xCLGlCQUFpQjtJQUNyQjtBQUNBLE9BQU8sY0FBYyxDQUFDO0FBQ3RCO1FBQ0ksMkJBQTJCO0lBQy9CO0FBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7QUFFQTtRQUNJLGtCQUFrQjtRQUNsQixTQUFTO1FBQ1QsU0FBUztRQUNULGNBQWM7UUFDZCxlQUFlO0lBQ25CO0FBQ0o7O0lBRUksWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsMEJBQTBCO0FBQzlCO0FBQ0E7O0lBRUksMkJBQTJCO0FBQy9CO0FBQ0E7O0lBRUksOEJBQThCO0lBQzlCLGdDQUFnQztBQUNwQztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4QiwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLHdCQUFnQjtPQUFoQixxQkFBZ0I7WUFBaEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLCtCQUErQjtJQUMvQixZQUFZO0lBQ1osV0FBVztJQUNYLFFBQVE7SUFDUixnQ0FBZ0M7SUFDaEMseUNBQXlDO0lBQ3pDLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsY0FBYztJQUNkLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixvQ0FBb0M7SUFDcEMsMEJBQTBCO0FBQzlCO0FBQ0E7O0lBRUksMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQix3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLGNBQWM7SUFDZCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBQ0E7UUFDUSx1QkFBdUI7QUFDL0I7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQ0FBZ0M7SUFDaEMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSTtRQUNJLHNCQUFzQjtRQUN0QixzQkFBc0I7UUFDdEIsNkJBQTZCO1FBQzdCLGNBQWM7UUFDZCx5QkFBeUI7UUFDekIsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQixrQkFBa0I7UUFDbEIsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSx3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLFVBQVU7SUFDZDs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL3JlZ2RldGFpbHMvcmVnZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIuaGVhZGluZ3tmb250LXNpemU6IDI1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMzO1xyXG4gICAgcGFkZGluZzogMTBweCA1MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG4udG9we1xyXG4gICAgYmFja2dyb3VuZDpjb3JuZmxvd2VyYmx1ZTtcclxufVxyXG4udG9wIGgxIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi50b3AgLmxvZ297XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDQwcHg7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcbi5uYm94IHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMmQzMTg4O1xyXG59XHJcbi5uYm94IGgyXHJcbntcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzJkMzE4ODtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxufVxyXG4ubmJveCBoMiBzcGFue1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGNvbG9yOiByZ2IoMTQ1LCAxNDUsIDE0NSk7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLnJvdyB7XHJcbiAgICAvKiBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC1tcy1mbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMDBweDsgKi9cclxufVxyXG4uYnRuc3tcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlN2UzNDtcclxuICAgIGJvcmRlci1jb2xvcjogIzFjNzQzMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAucm93XHJcbiAge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcblxyXG4gIH1cclxuICB0aC5tYXQtc29ydC1oZWFkZXItc29ydGVkIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcblxyXG4gICAgaDQuaGVhZGluZzF7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbmJvcmRlci1ib3R0b206IDdweCBzb2xpZCAjNUI1OTU5O1xyXG5wYWRkaW5nOiAxMHB4IDI1cHg7XHJcbmZvbnQtc2l6ZTogMThweDtcclxudGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuZm9udC13ZWlnaHQ6IDYwMDtcclxubWFyZ2luLWJvdHRvbTogNTBweDtcclxuYmFja2dyb3VuZDogIzAwN0JGRjtcclxuYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG5ib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG4gICAgLm1haW5ib3h7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOjE1cHg7XHJcbiAgICAgICAgcGFkZGluZzogMjVweDtcclxuYm9yZGVyOiAycHggc29saWQgI2NjYztcclxuICAgIH1cclxuICAgIC5mb3JtLWNvbnRyb2wudGV4YnNpemV7XHJcbiAgICAgICAgcGFkZGluZzogN3B4IDhweDtcclxuICAgICAgICBmb250LXNpemU6MTJweDtcclxuICAgIH1cclxuICAgIC5mb3JtLWNvbnRyb2wudGV4YnNpemUxe1xyXG4gICAgICAgIHBhZGRpbmc6IDdweCA1cHggN3B4IDI1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOjEycHg7XHJcbiAgICB9XHJcbiAgICB0YWJsZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHRoLm1hdC1zb3J0LWhlYWRlci1zb3J0ZWQge1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgIGxhYmVsLm5hbWUxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogIzY2NlxyXG4gICAgfVxyXG4gICAgLmJ0bi5idG4tcHJpbWFyeS5tYXJ0b3B7XHJcbiAgICAgICAgbWFyZ2luLXRvcDoyNXB4O1xyXG4gICAgfVxyXG4gICAgLm1hcnRvcDF7bWFyZ2luLXRvcDo4cHg7fVxyXG4gICAgLnNtYWxscGFkeyAgICBcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICB9XHJcbiAgICAubm9wYWR7cGFkZGluZy1sZWZ0OjA7fVxyXG4gICAgc2VsZWN0LmZvcm0tY29udHJvbDpub3QoW3NpemVdKTpub3QoW211bHRpcGxlXSl7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDIuMTByZW0gKyAwcHgpO1xyXG4gICAgfVxyXG4gICAgLmZvbnRwYXNzd29yZCB7IFxyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXHJcbiAgICB9IFxyXG4gICAgICBcclxuICAgIC5mb250cGFzc3dvcmQgaXsgXHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDVweDtcclxuICAgICAgICB0b3A6IDExcHg7XHJcbiAgICAgICAgY29sb3I6ICMwZjk1YWI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4OyBcclxuICAgIH0gXHJcbi5idG5zXHJcbntcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgYmFja2dyb3VuZDogIzViYzQ1YjtcclxuICAgIGJvcmRlci1jb2xvcjogIzViYzQ1YjtcclxuICAgIHRyYW5zaXRpb246IC41cyBhbGwgbGluZWFyO1xyXG59XHJcbi5idG5zOmZvY3VzXHJcbntcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4uYnRuczpob3ZlclxyXG57XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA5NDMyICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMDk0MzkgIWltcG9ydGFudDtcclxufVxyXG4uYnRueSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYTZhNmZmO1xyXG4gICAgY29sb3I6ICMyZDMxODg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICBtYXJnaW46IDBweCAzcHggMTNweCAwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAuNXMgYWxsIGxpbmVhcjtcclxufVxyXG4uYnRueTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMmYyZjkxO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuc2VsZWN0LmZvcm0tY29udHJvbHtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbXMtYXBwZWFyYW5jZTpub25lIDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5vcHR7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLm9wdDo6YmVmb3Jle1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzJEMzE4ODtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIHJpZ2h0OiAxNnB4O1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzJEMzE4ODtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoNDVkZWcpO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG59XHJcbi5mb3JtLWNvbnRyb2x7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMxZjE3MTc7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMmYyZjkxICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lIWltcG9ydGFudDtcclxufVxyXG4ubWF0LXNvcnQtaGVhZGVyLWNvbnRlbnR7XHJcbiAgICBcclxuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMCFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzJhMmM2MCFpbXBvcnRhbnQ7XHJcbn1cclxuLmRpdjgwe1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcbi50YWJsZTIyIHRoZWFkIHRyIHRoIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1OTA7XHJcbiAgICBjb2xvcjogIzJkMzE4ODtcclxufVxyXG4ubWF0LXNvcnQtaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxudGFibGUuZGF0YVRhYmxlIHRoZWFkIHRoe1xyXG4gICAgcGFkZGluZzogMTBweCAxOHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMxMTExMTE7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICMzYjNiNjY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYTZhNmZmO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KXtcclxuICAgIC5sb2dvIHtcclxuICAgICAgICB3aWR0aDogOTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZsb2F0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0NXB4O1xyXG4gICAgICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICB0b3A6IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5tbC01LCAubWwtMXtcclxuICAgICAgICBtYXJnaW4tbGVmdDowICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubmJveCwgLmRpdjgwe1xyXG4gICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICB9XHJcbiAgICBcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegdetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-regdetails',
                templateUrl: './regdetails.component.html',
                styleUrls: ['./regdetails.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }]; }, { matSort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"]]
        }] }); })();


/***/ }),

/***/ "9ans":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */



class AuthService {
    constructor(router) {
        this.router = router;
    }
    canActivate(route, state) {
        if (localStorage.getItem('userData')) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





class HomeComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    logout() {
        this.router.navigate(['/login']);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 364, vars: 0, consts: [["id", "wrapper"], ["id", "content-wrapper", 1, "d-flex", "flex-column"], ["id", "content"], [1, "navbar", "navbar-expand", "navbar-light", "bg-white", "topbar", "static-top", "shadow"], ["id", "sidebarToggleTop", 1, "btn", "btn-link", "d-md-none", "rounded-circle", "mr-3"], [1, "fa", "fa-bars"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", "dropdown", "no-arrow"], ["href", "#", "id", "userDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], [1, "mr-2", "d-none", "d-lg-inline", "text-gray-600", "small"], ["aria-labelledby", "userDropdown", 1, "dropdown-menu", "dropdown-menu-right", "shadow", "animated--grow-in"], ["href", "#", 1, "dropdown-item"], [1, "fas", "fa-user", "fa-sm", "fa-fw", "mr-2", "text-gray-400"], [1, "fas", "fa-cogs", "fa-sm", "fa-fw", "mr-2", "text-gray-400"], [1, "dropdown-divider"], [1, "nav-item"], ["href", "#", 1, "nav-link"], [1, "nav-item", "dropdown", "no-arrow", "mx-1"], ["href", "#", "id", "alertsDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], [1, "fas", "fa-bell", "fa-fw"], [1, "badge", "badge-danger", "badge-counter"], ["aria-labelledby", "alertsDropdown", 1, "dropdown-list", "dropdown-menu", "dropdown-menu-right", "shadow", "animated--grow-in"], [1, "dropdown-header"], ["href", "#", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "mr-3"], [1, "icon-circle", "bg-primary"], [1, "fas", "fa-file-alt", "text-white"], [1, "small", "text-gray-500"], [1, "font-weight-bold"], [1, "icon-circle", "bg-success"], [1, "fas", "fa-donate", "text-white"], [1, "icon-circle", "bg-warning"], [1, "fas", "fa-exclamation-triangle", "text-white"], ["href", "#", 1, "dropdown-item", "text-center", "small", "text-gray-500"], ["href", "#", "id", "messagesDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], [1, "fas", "fa-envelope", "fa-fw"], ["aria-labelledby", "messagesDropdown", 1, "dropdown-list", "dropdown-menu", "dropdown-menu-right", "shadow", "animated--grow-in"], [1, "dropdown-list-image", "mr-3"], ["src", "https://source.unsplash.com/fn_BT9fwg_E/60x60", "alt", "", 1, "rounded-circle"], [1, "status-indicator", "bg-success"], [1, "text-truncate"], ["src", "https://source.unsplash.com/AU4VPcFN4LE/60x60", "alt", "", 1, "rounded-circle"], [1, "status-indicator"], ["src", "https://source.unsplash.com/CS2uCrpNzJY/60x60", "alt", "", 1, "rounded-circle"], [1, "status-indicator", "bg-warning"], ["src", "https://source.unsplash.com/Mv9hjnEUHR4/60x60", "alt", "", 1, "rounded-circle"], [1, "topbar-divider", "d-none", "d-sm-block"], ["src", "https://source.unsplash.com/QAB-WJcbgJk/60x60", 1, "img-profile", "rounded-circle"], ["href", "#", "data-toggle", "modal", "data-target", "#logoutModal", 1, "dropdown-item"], [1, "fas", "fa-sign-out-alt", "fa-sm", "fa-fw", "mr-2", "text-gray-400"], [3, "click"], [1, "navbar", "navbar-expand-md", "navbar-dark", "bg-dark", 2, "margin-bottom", "35px"], [1, "container-fluid"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "fa", "fa-map-marker"], ["href", "#", 1, "fa", "fa-globe", "shutdown"], ["href", "#", 1, "fa", "fa-calendar", "purple"], ["href", "#", 1, "fa", "fa-hourglass-start", "fa-spin", "pink"], [1, "row"], [1, "col-md-9"], [1, "col-xl-4", "col-md-6", "mb-4"], [1, "h-100", "py-2"], [1, "card-body"], [1, "row", "no-gutters", "align-items-center"], [1, "col", "mr-6", "text-center"], [1, "roundbox"], [1, "roundbox2"], ["type", "button", 1, "btn", "btn-dark"], ["type", "button", 1, "btn", "btn-outline-dark"], [1, "card-body", "bg1"], [1, "col", "mr-2"], [1, "col-md-3"], [1, "col-xl-12", "col-md-12", "mb-4"], [1, "sear"], [1, "d-none", "d-sm-inline-block", "form-inline", "mr-auto", "ml-md-3", "my-2", "my-md-0", "mw-100", "navbar-search", 2, "margin-left", "0 !important", "width", "100%", "border", "1px solid #ccc", "border-radius", "5px"], [1, "input-group"], ["type", "text", "placeholder", "Search for...", "aria-label", "Search", "aria-describedby", "basic-addon2", 1, "form-control", "bg-light", "border-0", "small"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-primary"], [1, "fas", "fa-search", "fa-sm"], [1, "heighf"], [1, "card-body", "bg1", "desi"], [1, "innbox"], [1, "sticky-footer", "bg-white"], [1, "container", "my-auto"], [1, "copyright", "text-center", "my-auto"], ["href", "#page-top", 1, "scroll-to-top", "rounded"], [1, "fas", "fa-angle-up"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Site Summery ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Detailed Dashboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Live Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Site Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Map View ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Regulator Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Analyzer Parameter &Diagnostics Page ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Data Availability Stringest Report ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Dinamic Limit Values ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Exceedances Count Report ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Schelduled Report ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Industry Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " RealTime Report ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Average Report ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Custom Report ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Exceedance Report ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Calibration Report ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Calibration Setup Report ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Calibration Logs Report ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Calibration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " Calibration Logs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " Calibration History ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " Station Wise Remote Calibration ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Work Flow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " Work Flow ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " Completed Work Flow ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "3+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "h6", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " Alerts Center ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "December 12, 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "A new monthly report is ready to download!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "December 7, 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " $290.29 has been deposited into your account! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "December 2, 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, " Spending Alert: We've noticed unusually high spending for your account. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Show All Alerts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "h6", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, " Message Center ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Hi there! I am wondering if you can help me with a problem I've been having.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Emily Fowler \u00B7 58m");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "I have the photos that you ordered last month, how would you like them sent to you?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Jae Chun \u00B7 1d");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Last month's report looks great, I am very happy with the progress so far, keep up the good work!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Morgan Alvarez \u00B7 2d");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Chicken the Dog \u00B7 2w");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "Read More Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "hi, Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, " Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, " Settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_213_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, " Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, " M/s. Hindalco Industries Ltd.(CPP) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "nav", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "span", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "Hirakud ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](229, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "Odisha ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "POWER PLANT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](235, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "Data fetched at: 28-Sep-2020 07:55 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, " Monitoring Stations 9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, " Total Parameters Monitored 38 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "COD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "16.95");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "mg/i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "Standard 100 mg/i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "(15 minutes Average)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "Quick Range");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "button", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "Daily");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "button", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "Weekly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "button", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "Monthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](271, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "Total Exceedances");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "87.08");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "Data Availability(%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "form", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](298, "input", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "button", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](301, "i", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "EQMS_1 BOD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, " 6.66 mg/l ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, " Standard - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, " 100mg/l ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, " NearAdminBuilding CO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "0.31 mg/m3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, "Standard - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, " 2mg/m3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, " Near_132KVSwitchyard_Unit_4-5 CO 1.26 mg/m3 Standard - 2mg/m3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](336, " Near_132KVSwitchyardUnit_1-2-3 CO 0.25 mg/m3 Standard - 2mg/m3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "EQMS 1 BOD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, "b41mg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "Standard - 10mg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, "EQMS 1 BOD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, "b41mg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](356, "Standard - 10mg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "footer", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](361, "Copyright \u00A9 Your Website 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "a", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](363, "i", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "CFL1":
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */





class UserService {
    constructor(httpclient) {
        this.httpclient = httpclient;
        //  headers = { 'content-type': 'application/json'}  
        this.baseurl_login = "https://cors-anywhere.herokuapp.com/http://117.211.75.160:8086/alumini/login/}";
        this.baseurl_show_list = "https://cors-anywhere.herokuapp.com/http://117.211.75.160:8086/alumini/show/power plant";
        this.baseurl_insert = "https://cors-anywhere.herokuapp.com/http://117.211.75.160:8086/alumini/employees/";
        this.baseurl_register = "https://cors-anywhere.herokuapp.com/http://117.211.75.160:8086/rest/api/register";
    }
    registrationService(industry) {
        const headers = { 'content-type': 'application/json' };
        const body = JSON.stringify(industry);
        return this.httpclient.post(this.baseurl_register, body, {
            'headers': headers
        });
    }
    login(login) {
        const headers = { 'content-type': 'application/json' };
        const body = JSON.stringify(login);
        //alert(body);
        return this.httpclient.post('https://cors-anywhere.herokuapp.com/http://117.211.75.160:8080/alumini/login/', body, {
            'headers': headers
        });
    }
    display(data) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('content-type', 'application/json')
            .set('Access-Control-Allow-Origin', '*')
            .set('Access-Control-Allow-Methods', 'get')
            .set('Access-Control-Allow-Headers', '*')
            .set('Access-Control-Allow-Credentials', 'true');
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append('id:', '1');
        return this.httpclient.get(this.baseurl_show_list, {
            'headers': headers
        });
    }
    insert(plant) {
        const headers = { 'content-type': 'application/json' };
        const body = JSON.stringify(plant);
        console.log(body);
        alert(body);
        return this.httpclient.post(this.baseurl_insert, {
            "userName": "hindalco",
            "plantInfo": {
                "plantId": 2,
                "password": "ttt",
                "pin": "755007",
                "plantNm": "hindolc",
                "typ": "company",
                "district": "ctc",
                "town": "ctc",
                "street": "badam badi",
                "state": "odisha",
                "email": "aa@gmail.com",
                "web": "hindolc.com",
                "zonal": "ctc",
                "grdId": "12345",
                "timeStamp": "2020-09-22",
                "authPerson": "jayashree",
                "authoPerMob": "7008480987",
                "authPersonDesig": "developer",
                "cpcbUser": "jaya",
                "cpcbUserEmail": "jaya@gmail.com",
                "cpcbUserMob": "998789876",
                "cpcbUsr2": "jatan",
                "cpcbUserEmail2": "jatan@gmail.com",
                "cpcbUserMob2": "87654321",
                "latLong": "34",
                "connected": "456",
                "deptEmail": "jatan123@gmail.com",
                "category": "power plant",
                "plantName": "yyyy",
                "analyzerCount": "123",
                "HQOEmail": "jatan345@gmail.com",
                "inletUrl": "hhtp//jatan@gmail.com",
                "outletUrl": "http//jatan345.il.com",
                "roUser": "jatan678@gmail.com",
                "roUserEmail": "jayashree234@gmail.com",
                "roUserMob": "7865432123",
                "plantSlug": "yyyy",
                "authReq": "hgtyh",
                "stationCount": "678",
                "plantVendor": "hnbjy",
                "caaqmsStation": "76543",
                "cemsStation": "6789876",
                "ceqmsStation": "6754321",
                "secdPersonDesig": "rrrrr",
                "secdPersonMob": "765432134",
                "secdEmail": "jsitam@gmail.com"
            },
            "stationInfo": {
                "stationId": 2,
                "analyzer": "ffffff",
                "analyzerv2": "gggggg",
                "location": "bbbsr",
                "installDt": "2020-09-02",
                "token": "ddffgdhtgsaerre",
                "macNo": "ytggvdctrf",
                "stationNo": "45678765",
                "stnType": "dfrgth",
                "hasThresold": "23456",
                "stationVendor": "cccccc",
                "latitude": "45",
                "longitute": "87",
                "measurementPrinciple": "fgdhgh",
                "stackHeight": "yujhgfd",
                "stackDiameter": "rfgttt",
                "stackVelocity": "tgrrgfrdgv",
                "gasDischargeRate": "rrr",
                "remarks": "wwwwwwwwwwww",
                "parameterInfo": [
                    {
                        "paramter": "er4eftggg",
                        "analyserMake": "fff",
                        "analyserModel": "vvvv",
                        "analyserSerialNo": "gggg",
                        "devidceIMEINo": "hhhh",
                        "macId": "yyyyy",
                        "measurmentRange": "iiii",
                        "Unit": "iiii"
                    },
                    {
                        "paramter": "ppppppppppppppp",
                        "analyserMake": "ffedrf",
                        "analyserModel": "vvvffddv",
                        "analyserSerialNo": "ggsssgg",
                        "devidceIMEINo": "hhssahh",
                        "macId": "yyyaassyy",
                        "measurmentRange": "iissddii",
                        "Unit": "erf"
                    }
                ]
            }
        }, { 'headers': headers });
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "FcQ7":
/*!**************************!*\
  !*** ./src/app/login.ts ***!
  \**************************/
/*! exports provided: Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
class Login {
    constructor() {
        this.username = "hindalco";
        this.password = "hindalco@123";
    }
}


/***/ }),

/***/ "L7HW":
/*!***************************************************!*\
  !*** ./src/app/services/config/config.service.ts ***!
  \***************************************************/
/*! exports provided: ConfigService, ValidationService, routerTransition, slideToLeft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return ValidationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerTransition", function() { return routerTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToLeft", function() { return slideToLeft; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */



class ConfigService {
    constructor() {
        this.apiURL = 'http://localhost/saNG4-Demo-App/api/';
    }
}
ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(); };
ConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConfigService, factory: ConfigService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();
class ValidationService {
    static emailValidator(control) {
        // RFC 2822 compliant regex
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        }
        else {
            return { 'invalidEmailAddress': true };
        }
    }
    static passwordValidator(control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        }
        else {
            return { 'invalidPassword': true };
        }
    }
    static checkLimit(min, max) {
        return (c) => {
            if (c.value && (isNaN(c.value) || c.value < min || c.value > max)) {
                return { 'range': true };
            }
            return null;
        };
    }
}
function routerTransition() {
    return slideToLeft();
}
function slideToLeft() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)', position: 'fixed', width: '100%' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)', position: 'fixed', width: '100%' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }))
        ])
    ]);
}


/***/ }),

/***/ "OFdH":
/*!*****************************************************!*\
  !*** ./src/app/services/student/student.service.ts ***!
  \*****************************************************/
/*! exports provided: StudentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentService", function() { return StudentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */


class StudentService {
    constructor() { }
    // Get all students list via API or any data storage
    getAllStudents() {
        let studentList;
        if (localStorage.getItem('students') && localStorage.getItem('students') !== '') {
            studentList = {
                code: 200,
                message: 'Students List Fetched Successfully',
                data: JSON.parse(localStorage.getItem('students'))
            };
        }
        else {
            studentList = {
                code: 200,
                message: 'Students List Fetched Successfully',
                data: JSON.parse(localStorage.getItem('students'))
            };
        }
        return studentList;
    }
    doRegisterStudent(data, index) {
        const studentList = JSON.parse(localStorage.getItem('students'));
        let returnData;
        console.log('index', index);
        if (index != null) {
            for (let i = 0; i < studentList.length; i++) {
                if (index !== i && studentList[i].email === data.email) {
                    returnData = {
                        code: 503,
                        message: 'Email Address Already In Use',
                        data: null
                    };
                    return returnData;
                }
            }
            studentList[index] = data;
            localStorage.setItem('students', JSON.stringify(studentList));
            returnData = {
                code: 200,
                message: 'Student Successfully Updated',
                data: JSON.parse(localStorage.getItem('students'))
            };
        }
        else {
            data.id = this.generateRandomID();
            for (let i = 0; i < studentList.length; i++) {
                if (studentList[i].email === data.email) {
                    returnData = {
                        code: 503,
                        message: 'Email Address Already In Use',
                        data: null
                    };
                    return returnData;
                }
            }
            studentList.unshift(data);
            localStorage.setItem('students', JSON.stringify(studentList));
            returnData = {
                code: 200,
                message: 'Student Successfully Added',
                data: JSON.parse(localStorage.getItem('students'))
            };
        }
        return returnData;
    }
    deleteStudent(index) {
        const studentList = JSON.parse(localStorage.getItem('students'));
        studentList.splice(index, 1);
        localStorage.setItem('students', JSON.stringify(studentList));
        const returnData = {
            code: 200,
            message: 'Student Successfully Deleted',
            data: JSON.parse(localStorage.getItem('students'))
        };
        return returnData;
    }
    getStudentDetails(index) {
        const studentList = JSON.parse(localStorage.getItem('students'));
        const returnData = {
            code: 200,
            message: 'Student Details Fetched',
            studentData: studentList[index]
        };
        return returnData;
    }
    generateRandomID() {
        const x = Math.floor((Math.random() * Math.random() * 9999));
        return x;
    }
}
StudentService.ɵfac = function StudentService_Factory(t) { return new (t || StudentService)(); };
StudentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StudentService, factory: StudentService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/auth/auth.service */ "9ans");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/user/user.service */ "CFL1");
/* harmony import */ var _services_student_student_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/student/student.service */ "OFdH");
/* harmony import */ var _index_app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index/app.component */ "zXb4");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./registration/registration.component */ "4K/k");
/* harmony import */ var _regdetails_regdetails_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./regdetails/regdetails.component */ "6mwT");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _plant_info_plant_info_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./plant-info/plant-info.component */ "qTIV");
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng2-tooltip-directive */ "lVl8");
/* harmony import */ var _forgetpassword_forgetpassword_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./forgetpassword/forgetpassword.component */ "6+dj");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./help/help.component */ "i2qR");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");


// Modules




//import { ToastrModule } from 'ngx-toastr';
// Services



// Pipes
//import { FilterPipe } from './pipes/filter.pipe';
//import { PhonePipe } from './pipes/phone.pipe';
// Components















// enableProdMode();
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_index_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"], _services_student_student_service__WEBPACK_IMPORTED_MODULE_8__["StudentService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"],
            ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_18__["TooltipModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__["NgbModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__["MatPaginatorModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_index_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
        _registration_registration_component__WEBPACK_IMPORTED_MODULE_13__["RegistrationComponent"],
        _regdetails_regdetails_component__WEBPACK_IMPORTED_MODULE_14__["RegdetailsComponent"],
        _plant_info_plant_info_component__WEBPACK_IMPORTED_MODULE_17__["PlantInfoComponent"],
        _forgetpassword_forgetpassword_component__WEBPACK_IMPORTED_MODULE_19__["ForgetpasswordComponent"],
        _help_help_component__WEBPACK_IMPORTED_MODULE_20__["HelpComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"],
        ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_18__["TooltipModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__["NgbModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__["MatPaginatorModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _index_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                    _registration_registration_component__WEBPACK_IMPORTED_MODULE_13__["RegistrationComponent"],
                    _regdetails_regdetails_component__WEBPACK_IMPORTED_MODULE_14__["RegdetailsComponent"],
                    _plant_info_plant_info_component__WEBPACK_IMPORTED_MODULE_17__["PlantInfoComponent"],
                    _forgetpassword_forgetpassword_component__WEBPACK_IMPORTED_MODULE_19__["ForgetpasswordComponent"],
                    _help_help_component__WEBPACK_IMPORTED_MODULE_20__["HelpComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"],
                    ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_18__["TooltipModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__["NgbModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__["MatPaginatorModule"]
                ],
                providers: [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"], _services_student_student_service__WEBPACK_IMPORTED_MODULE_8__["StudentService"]],
                bootstrap: [_index_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "i2qR":
/*!****************************************!*\
  !*** ./src/app/help/help.component.ts ***!
  \****************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-tooltip-directive */ "lVl8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function HelpComponent_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Username required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HelpComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HelpComponent_div_18_div_1_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.username.errors.required);
} }
function HelpComponent_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Email required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HelpComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HelpComponent_div_21_div_1_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.email.errors.required);
} }
function HelpComponent_div_24_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Contactno required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HelpComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HelpComponent_div_24_div_1_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f.contactno.errors.required);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class HelpComponent {
    constructor(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.email = "";
        this.username = "";
        this.contact_no = "";
        this.query = "";
        this.submitted = false;
    }
    clear(input) {
        input.value = ''; // null should work too, but as the type ov the value is string I like to use ''
    }
    goback() {
        this.router.navigate(['/login']);
    }
    get f() { return this.addhelp.controls; }
    ngOnInit() {
        this.addhelp = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            contactno: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            query: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    }
    SendEmail() {
        this.submitted = true;
        if (this.addhelp.invalid) {
        }
        else {
            alert("Please Check Your Email ..");
            this.router.navigate(['./']);
        }
    }
}
HelpComponent.ɵfac = function HelpComponent_Factory(t) { return new (t || HelpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HelpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HelpComponent, selectors: [["app-help"]], decls: 29, vars: 13, consts: [[1, "limiter", 2, "background-image", "url('assets/images/bg-201.jpg')"], [1, "fog-container"], [1, "fog-img", "fog-img-first"], [1, "fog-img", "fog-img-second"], [1, "container"], [1, "row"], [1, "container-login100"], [1, "wrap-login100"], [3, "formGroup", "ngSubmit"], ["type", "button", "tooltip", "Goto Back ", "id", "backbtn", 1, "btn", "btny", "btn-default", "buttom-prim", "buttonsToShow", 3, "click"], [1, "fa", "fa-arrow-circle-left"], ["_ngcontent-ash-c2", "", 1, "login-label"], [1, "from-group", "marbot"], [1, "fontpassword"], [1, "form-group"], ["formControlName", "username", "name", "Username", "id", "Username", "type", "text", "placeholder", "Enter Your Name", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["formControlName", "email", "name", "Email", "id", "Email", "type", "text", "placeholder", "Enter Your Email", 1, "form-control", 3, "ngClass"], ["formControlName", "contact_no", "name", "ContactNo", "id", "ContactNo", "type", "text", "placeholder", "Enter Your ContactNo", 1, "form-control", 3, "ngClass"], ["placeholder", "Enter Your Query", 1, "form-control"], [1, "btn", "btn-suc", "d-block", "ml-auto", "btn-success"], [1, "invalid-feedback"], [4, "ngIf"]], template: function HelpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function HelpComponent_Template_form_ngSubmit_9_listener() { return ctx.SendEmail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HelpComponent_Template_button_click_10_listener() { return ctx.goback(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Write Your Query");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, HelpComponent_div_18_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, HelpComponent_div_21_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, HelpComponent_div_24_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "textarea", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Submit Your Query");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addhelp);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.submitted && ctx.f.username.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.username.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.submitted && ctx.f.contactno.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.contactno.errors);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_3__["TooltipDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".limiter[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    position: relative;\r\n    height: 100vh;\r\n    background-position: center bottom !important;\r\n    background-repeat: no-repeat !important;\r\n    background-size: cover !important;\r\n}\r\n.fog-container[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    z-index: 1;\r\n}\r\n.fog-img[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    height: 100vh;\r\n    width: 300vw;\r\n    z-index: 2;\r\n  }\r\n.fog-img-first[_ngcontent-%COMP%] {\r\n    background: url('fog-1.png');\r\n    background-repeat: repeat-x;\r\n    background-size: contain;\r\n    background-position: center;\r\n    animation: fog 60s linear infinite;\r\n  }\r\n.fog-img-second[_ngcontent-%COMP%] {\r\n    background: url('fog-2.png');\r\n    background-repeat: repeat-x;\r\n    background-size: contain;\r\n    background-position: center;\r\n    animation: fog 30s linear infinite;\r\n  }\r\n@keyframes fog {\r\n    0% {\r\n      transform: translate3d(0, 0, 0);\r\n    }\r\n  \r\n    100% {\r\n      transform: translate3d(-200vw, 0, 0);\r\n    }\r\n  }\r\n.container-login100[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    min-height: 100vh;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 0px;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n    position: relative;\r\n    z-index: 1;\r\n    float: right;\r\n}\r\n.container-login100[_ngcontent-%COMP%]::before {\r\n\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    z-index: -1;\r\n    width: 0%;\r\n    height: 0%;\r\n    top: 0;\r\n    float: right;\r\n    background-color: rgba(255,255,255,0.9);\r\n\r\n}\r\n.login-label[_ngcontent-ash-c2][_ngcontent-%COMP%] {\r\n    color: #2f2f91;\r\n    text-align: center;\r\n    font-size: large;\r\n}\r\n.btn-login[_ngcontent-ash-c2][_ngcontent-%COMP%] {\r\n    padding: 7px 50px;\r\n}\r\n.btn-primary[_ngcontent-%COMP%] {\r\n    background-color: #366cb0;\r\n    color: #fff;\r\n    border: 1px solid transparent;\r\n}\r\n.wrap-login100[_ngcontent-%COMP%] {\r\n    margin: 25px auto;\r\n    width: 100%;\r\n    max-width: 400px;\r\n    border-radius: 5px;\r\n    overflow: hidden;\r\n    padding: 35px;\r\n    background: #ffffff;\r\n}\r\n.btny[_ngcontent-%COMP%] {\r\n    background: #a6a6ff;\r\n    color: #2d3188;\r\n    padding: 10px;\r\n    line-height: 15px;\r\n    margin: 0 0 5px 0px;\r\n    transition: .5s all linear;\r\n}\r\n.btny[_ngcontent-%COMP%]:hover {\r\n    background: #2f2f91;\r\n    color: #fff;\r\n    padding: 10px;\r\n    line-height: 15px;\r\n    margin: 0 0 5px 0px;\r\n}\r\n.login100-form[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n.logo-img[_ngcontent-dac-c2][_ngcontent-%COMP%] {\r\n    width: 20px;\r\n    padding-bottom: 2rem;\r\n}\r\n.login100-form-logo[_ngcontent-%COMP%] {\r\n    font-size: 60px;\r\n    color: #333333;\r\n    display: flex;\r\n    justify-content: right;\r\n    align-items: right;\r\n    width: 120px;\r\n    height: 120px;\r\n    border-radius: 50%;\r\n    background-color: #fff;\r\n    margin: 0 auto;\r\n}\r\n.login100-form-title[_ngcontent-%COMP%] {\r\n    font-family: Open sans;\r\n    font-size: 22px;\r\n    color: #fff;\r\n    line-height: 1.2;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    display: block;\r\n}\r\n.p-b-34[_ngcontent-%COMP%] {\r\n    padding-bottom: 34px;\r\n}\r\n.p-t-27[_ngcontent-%COMP%] {\r\n    padding-top: 27px;\r\n}\r\n.marbot[_ngcontent-%COMP%]{\r\n   margin-bottom: 30px;\r\n}\r\n.form-control[_ngcontent-%COMP%]{\r\n    padding: 15px;\r\n    font-size: 14px;\r\n    color: #1f1717;\r\n    margin: 15px auto;\r\n}\r\n.form-control[_ngcontent-%COMP%]:focus {\r\n    background-color: #fff;\r\n    border: 1px solid #2f2f91 !important;\r\n    box-shadow: none!important;\r\n}\r\n.btn-suc[_ngcontent-%COMP%]\r\n{\r\n    padding: 5px 25px;\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n    text-transform: uppercase;\r\n    background: #5bc45b;\r\n    border-color: #5bc45b;\r\n    transition: .5s all linear;\r\n}\r\n.btn-suc[_ngcontent-%COMP%]:focus\r\n{\r\n    box-shadow: none !important;\r\n}\r\n.btn-suc[_ngcontent-%COMP%]:hover\r\n{\r\n    background: #009432 !important;\r\n    border-color: #009439 !important;\r\n}\r\n.stretch[_ngcontent-%COMP%] {\r\n    width:100%;\r\n    height:100%;\r\n}\r\nlabel.color[_ngcontent-%COMP%]{color:#fff;}\r\n.btn.btn-default.style[_ngcontent-%COMP%]{\r\n    width:112px;\r\n    margin-top: 25px;\r\nborder-radius: 25px;\r\nmargin-bottom: 15px;\r\ntransition:1s ease all;\r\n}\r\n.btn.btn-default.style[_ngcontent-%COMP%]:hover{\r\n    background:#5710cb;\r\n    color:#fff;\r\n}\r\na.txt1[_ngcontent-%COMP%]{\r\n    text-decoration:none;\r\n    color:#007bff;\r\n    transition:1s ease all;\r\n    cursor: pointer;\r\n}\r\na[_ngcontent-%COMP%]:hover.txt1{\r\n    color:#0c0c0c;\r\n}\r\n.fontpassword[_ngcontent-%COMP%] { \r\n    position: relative; \r\n}\r\n.fontpassword[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{ \r\n    position: absolute; \r\n    left: 15px; \r\n    top:46px; \r\n    color: gray; \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVscC9oZWxwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsNkNBQTZDO0lBQzdDLHVDQUF1QztJQUN2QyxpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWTtJQUNaLFVBQVU7RUFDWjtBQUNGO0lBQ0ksNEJBQWdEO0lBQ2hELDJCQUEyQjtJQUMzQix3QkFBd0I7SUFDeEIsMkJBQTJCO0lBQzNCLGtDQUFrQztFQUNwQztBQUVBO0lBQ0UsNEJBQWdEO0lBQ2hELDJCQUEyQjtJQUMzQix3QkFBd0I7SUFDeEIsMkJBQTJCO0lBQzNCLGtDQUFrQztFQUNwQztBQUVBO0lBQ0U7TUFDRSwrQkFBK0I7SUFDakM7O0lBRUE7TUFDRSxvQ0FBb0M7SUFDdEM7RUFDRjtBQUVGO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUtqQixhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUVBOztJQUVJLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsVUFBVTtJQUNWLE1BQU07SUFDTixZQUFZO0lBQ1osdUNBQXVDOztBQUUzQztBQUNBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQiwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztJQUNYLG9CQUFvQjtBQUN4QjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFLZCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtHQUNHLG1CQUFtQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsb0NBQW9DO0lBQ3BDLDBCQUEwQjtBQUM5QjtBQUNBOztJQUVJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLDBCQUEwQjtBQUM5QjtBQUNBOztJQUVJLDJCQUEyQjtBQUMvQjtBQUNBOztJQUVJLDhCQUE4QjtJQUM5QixnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7QUFDQSxZQUFZLFVBQVUsQ0FBQztBQUN2QjtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEIsbUJBQW1CO0FBQ25CLG1CQUFtQjtBQUNuQixzQkFBc0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixRQUFRO0lBQ1IsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvaGVscC9oZWxwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGltaXRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBib3R0b20gIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxufVxyXG4uZm9nLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcbi5mb2ctaW1nIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMzAwdnc7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxuLmZvZy1pbWctZmlyc3Qge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9mb2ctMS5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBhbmltYXRpb246IGZvZyA2MHMgbGluZWFyIGluZmluaXRlO1xyXG4gIH1cclxuICBcclxuICAuZm9nLWltZy1zZWNvbmQge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9mb2ctMi5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBhbmltYXRpb246IGZvZyAzMHMgbGluZWFyIGluZmluaXRlO1xyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGZvZyB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAxMDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjAwdncsIDAsIDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbi5jb250YWluZXItbG9naW4xMDAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5jb250YWluZXItbG9naW4xMDA6OmJlZm9yZSB7XHJcblxyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICB3aWR0aDogMCU7XHJcbiAgICBoZWlnaHQ6IDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjkpO1xyXG5cclxufVxyXG4ubG9naW4tbGFiZWxbX25nY29udGVudC1hc2gtYzJdIHtcclxuICAgIGNvbG9yOiAjMmYyZjkxO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG4uYnRuLWxvZ2luW19uZ2NvbnRlbnQtYXNoLWMyXSB7XHJcbiAgICBwYWRkaW5nOiA3cHggNTBweDtcclxufVxyXG4uYnRuLXByaW1hcnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM2NmNiMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuLndyYXAtbG9naW4xMDAge1xyXG4gICAgbWFyZ2luOiAyNXB4IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZzogMzVweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbn1cclxuLmJ0bnkge1xyXG4gICAgYmFja2dyb3VuZDogI2E2YTZmZjtcclxuICAgIGNvbG9yOiAjMmQzMTg4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgbWFyZ2luOiAwIDAgNXB4IDBweDtcclxuICAgIHRyYW5zaXRpb246IC41cyBhbGwgbGluZWFyO1xyXG59XHJcbi5idG55OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMyZjJmOTE7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgIG1hcmdpbjogMCAwIDVweCAwcHg7XHJcbn1cclxuLmxvZ2luMTAwLWZvcm0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmxvZ28taW1nW19uZ2NvbnRlbnQtZGFjLWMyXSB7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xyXG59XHJcblxyXG4ubG9naW4xMDAtZm9ybS1sb2dvIHtcclxuICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogcmlnaHQ7XHJcbiAgICBhbGlnbi1pdGVtczogcmlnaHQ7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5sb2dpbjEwMC1mb3JtLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIHNhbnM7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLnAtYi0zNCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzRweDtcclxufVxyXG4ucC10LTI3IHtcclxuICAgIHBhZGRpbmctdG9wOiAyN3B4O1xyXG59XHJcbi5tYXJib3R7XHJcbiAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuLmZvcm0tY29udHJvbHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzFmMTcxNztcclxuICAgIG1hcmdpbjogMTVweCBhdXRvO1xyXG59XHJcbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyZjJmOTEgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUhaW1wb3J0YW50O1xyXG59XHJcbi5idG4tc3VjXHJcbntcclxuICAgIHBhZGRpbmc6IDVweCAyNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNWJjNDViO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNWJjNDViO1xyXG4gICAgdHJhbnNpdGlvbjogLjVzIGFsbCBsaW5lYXI7XHJcbn1cclxuLmJ0bi1zdWM6Zm9jdXNcclxue1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi5idG4tc3VjOmhvdmVyXHJcbntcclxuICAgIGJhY2tncm91bmQ6ICMwMDk0MzIgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogIzAwOTQzOSAhaW1wb3J0YW50O1xyXG59XHJcbi5zdHJldGNoIHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxufVxyXG5sYWJlbC5jb2xvcntjb2xvcjojZmZmO31cclxuLmJ0bi5idG4tZGVmYXVsdC5zdHlsZXtcclxuICAgIHdpZHRoOjExMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuYm9yZGVyLXJhZGl1czogMjVweDtcclxubWFyZ2luLWJvdHRvbTogMTVweDtcclxudHJhbnNpdGlvbjoxcyBlYXNlIGFsbDtcclxufVxyXG4uYnRuLmJ0bi1kZWZhdWx0LnN0eWxlOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDojNTcxMGNiO1xyXG4gICAgY29sb3I6I2ZmZjtcclxufVxyXG5hLnR4dDF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgIGNvbG9yOiMwMDdiZmY7XHJcbiAgICB0cmFuc2l0aW9uOjFzIGVhc2UgYWxsO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbmE6aG92ZXIudHh0MXtcclxuICAgIGNvbG9yOiMwYzBjMGM7XHJcbn1cclxuLmZvbnRwYXNzd29yZCB7IFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyBcclxufSBcclxuICBcclxuLmZvbnRwYXNzd29yZCBpeyBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgICBsZWZ0OiAxNXB4OyBcclxuICAgIHRvcDo0NnB4OyBcclxuICAgIGNvbG9yOiBncmF5OyBcclxufSAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-help',
                templateUrl: './help.component.html',
                styleUrls: ['./help.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "lmlb":
/*!**************************************!*\
  !*** ./src/app/custom-validators.ts ***!
  \**************************************/
/*! exports provided: CustomValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomValidators", function() { return CustomValidators; });
class CustomValidators {
    static patternValidator(regex, error) {
        return (control) => {
            if (!control.value) {
                // if control is empty return no error
                return null;
            }
            // test the value of the control against the regexp supplied
            const valid = regex.test(control.value);
            // if true, return no error (no error), else return error passed in the second parameter
            return valid ? null : error;
        };
    }
    static passwordMatchValidator(control) {
        const password = control.get('password').value; // get password from our password form control
        const confirmPassword = control.get('confirmPassword').value; // get password from our confirmPassword form control
        // compare is the password math
        if (password !== confirmPassword) {
            // if they don't match, set an error in our confirmPassword form control
            control.get('confirmPassword').setErrors({ NoPassswordMatch: true });
        }
    }
}


/***/ }),

/***/ "qTIV":
/*!****************************************************!*\
  !*** ./src/app/plant-info/plant-info.component.ts ***!
  \****************************************************/
/*! exports provided: PlantInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlantInfoComponent", function() { return PlantInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PlantInfoComponent {
    constructor() { }
    ngOnInit() {
    }
}
PlantInfoComponent.ɵfac = function PlantInfoComponent_Factory(t) { return new (t || PlantInfoComponent)(); };
PlantInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlantInfoComponent, selectors: [["app-plant-info"]], decls: 2, vars: 0, template: function PlantInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "plant-info works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYW50LWluZm8vcGxhbnQtaW5mby5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlantInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-plant-info',
                templateUrl: './plant-info.component.html',
                styleUrls: ['./plant-info.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _forgetpassword_forgetpassword_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgetpassword/forgetpassword.component */ "6+dj");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registration/registration.component */ "4K/k");
/* harmony import */ var _regdetails_regdetails_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./regdetails/regdetails.component */ "6mwT");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/auth/auth.service */ "9ans");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./help/help.component */ "i2qR");











// Parent Routes
const routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        canActivate: [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]],
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]
    },
    {
        path: 'regdetails',
        component: _regdetails_regdetails_component__WEBPACK_IMPORTED_MODULE_5__["RegdetailsComponent"]
    },
    {
        path: 'help',
        component: _help_help_component__WEBPACK_IMPORTED_MODULE_8__["HelpComponent"]
    },
    {
        path: 'registration',
        component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"]
    },
    {
        path: 'add',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'forgetpassword',
        component: _forgetpassword_forgetpassword_component__WEBPACK_IMPORTED_MODULE_3__["ForgetpasswordComponent"]
    },
    {
        path: '**',
        redirectTo: ''
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/login */ "FcQ7");
/* harmony import */ var _services_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/config/config.service */ "L7HW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user/user.service */ "CFL1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-tooltip-directive */ "lVl8");
/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */










function LoginComponent_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Username required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_20_div_1_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.Username.errors.required);
} }
function LoginComponent_div_23_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Password required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_23_div_1_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.Password.errors.required);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class LoginComponent {
    constructor(formBuilder, router, userService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
        this.login = new src_app_login__WEBPACK_IMPORTED_MODULE_2__["Login"]();
        this.Username = "";
        this.Password = "";
        this.submitted = false;
    }
    clear(input) {
        input.value = ''; // null should work too, but as the type ov the value is string I like to use ''
    }
    get f() { return this.loginForm.controls; }
    // Check if user already logged in
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            Username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    }
    help() {
        this.router.navigate(['/help']);
    }
    forgetpasswordpage() {
        this.router.navigate(['/forgetpassword']);
    }
    regipage() {
        this.router.navigate(['/regdetails']);
    }
    // Initicate login
    homego() {
        this.submitted = true;
        if (this.loginForm.invalid) {
            //alert(this.login.username+this.login.password);
            if (this.Username == "hindalco" && this.Password == "hindalco@123") {
                //	this.router.navigate(['/home']);
            }
            else {
                alert('Wrong Username And Password');
                return false;
            }
            const login = this.userService.login(this.login).subscribe(data => {
                //alert(data.apiStatus.message);
                if (data.apiStatus.message === 'success') {
                    //	window.localStorage.setItem('token', data.result.token);
                    this.router.navigate(['/home']);
                    //alert(data.status);
                }
                else {
                    //this.invalidLogin = true;
                    //alert('data is'+stringify(data.data));
                    console.log(data);
                }
            });
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], hostVars: 1, hostBindings: function LoginComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsyntheticHostProperty"]("@routerTransition", undefined);
    } }, decls: 40, vars: 11, consts: [[1, "limiter", 2, "background", "url('assets/images/bg-201.jpg')"], [1, "fog-container"], [1, "fog-img", "fog-img-first"], [1, "fog-img", "fog-img-second"], [1, "container"], [1, "row"], [1, "container-login100"], [1, "wrap-login100"], [3, "formGroup", "ngSubmit"], [2, "text-align", "center"], ["_ngcontent-hle-c2", "", "alt", "", "src", "assets/images/assam.svg", 2, "width", "30mm", "text-align", "center"], ["_ngcontent-ash-c2", "", 1, "login-label"], [1, "fontpassword"], [1, "marbot"], [1, "form-group"], ["formControlName", "Username", "type", "text", "name", "Username", "id", "Username", "placeholder", "Username", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["class", "invalid-feedback", 4, "ngIf"], [1, "form-group", "mt-3"], ["formControlName", "Password", "type", "password", "id", "Password", "name", "Password", "placeholder", "Password", "id", "Password", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], [1, "btn", "mt-3", "btn-login", "btn-primary", "w-100"], [1, "txt1", 3, "click"], ["_ngcontent-ash-c2", "", 1, "fa", "fa-info-circle", 2, "padding-right", "6px"], ["_ngcontent-ash-c2", "", "href", "javascript:void(0);", "tooltip", "Forgot Password", 2, "text-align", "right", "float", "right", 3, "click"], [1, "txt1", "d-block", 3, "click"], ["href", "login/demo.pdf", "target", "_blank", 1, "txt1", "d-block"], [1, "text-center"], [1, "invalid-feedback"], [4, "ngIf"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_9_listener() { return ctx.homego(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_19_listener($event) { return ctx.login.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, LoginComponent_div_20_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_22_listener($event) { return ctx.login.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, LoginComponent_div_23_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Log in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_28_listener() { return ctx.help(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "em", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Help?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_31_listener() { return ctx.forgetpasswordpage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Forgot Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_35_listener() { return ctx.regipage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Click here for Industry Registrations ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Click here to view the API Document ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.login.username)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.submitted && ctx.f.Username.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.Username.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.login.password)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.submitted && ctx.f.Password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.Password.errors);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_7__["TooltipDirective"]], styles: [".limiter[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    position: relative;\r\n    height: 100vh;\r\n    background-position: center bottom !important;\r\n    background-repeat: no-repeat !important;\r\n    background-size: cover !important;\r\n    \r\n}\r\n.fog-container[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    z-index: 1;\r\n}\r\n.fog-img[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    height: 100vh;\r\n    width: 300vw;\r\n    z-index: 2;\r\n  }\r\n.fog-img-first[_ngcontent-%COMP%] {\r\n    background: url('fog-1.png');\r\n    background-repeat: repeat-x;\r\n    background-size: contain;\r\n    background-position: center;\r\n    animation: fog 60s linear infinite;\r\n  }\r\n.fog-img-second[_ngcontent-%COMP%] {\r\n    background: url('fog-2.png');\r\n    background-repeat: repeat-x;\r\n    background-size: contain;\r\n    background-position: center;\r\n    animation: fog 30s linear infinite;\r\n  }\r\n@keyframes fog {\r\n    0% {\r\n      transform: translate3d(0, 0, 0);\r\n    }\r\n  \r\n    100% {\r\n      transform: translate3d(-200vw, 0, 0);\r\n    }\r\n  }\r\n.container-login100[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    min-height: 100vh;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 0px;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n    position: relative;\r\n    z-index: 1;\r\n    float: right;\r\n}\r\n.container-login100[_ngcontent-%COMP%]::before {\r\n\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    z-index: -1;\r\n    width: 0%;\r\n    height: 0%;\r\n    top: 0;\r\n    float: right;\r\n    background-color: rgba(255,255,255,0.9);\r\n\r\n}\r\n.login-label[_ngcontent-ash-c2][_ngcontent-%COMP%] {\r\n    color: #2f2f91;\r\n    text-align: center;\r\n    font-size: large;\r\n}\r\n.btn-login[_ngcontent-ash-c2][_ngcontent-%COMP%] {\r\n    padding: 7px 50px;\r\n}\r\n.btn-primary[_ngcontent-%COMP%] {\r\n    background-color: #2f2f91;\r\n    color: #fff;\r\n    border: 1px solid transparent;\r\n}\r\n.wrap-login100[_ngcontent-%COMP%] {\r\n    margin: 25px auto;\r\n    width: 100%;\r\n    max-width: 400px;\r\n    border-radius: 5px;\r\n    overflow: hidden;\r\n    padding: 35px;\r\n    background: #ffffff;\r\n    position: relative;\r\n    \r\n}\r\n\r\n.login100-form[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n.logo-img[_ngcontent-dac-c2][_ngcontent-%COMP%] {\r\n    width: 20px;\r\n    padding-bottom: 2rem;\r\n}\r\n.login100-form-logo[_ngcontent-%COMP%] {\r\n    font-size: 60px;\r\n    color: #333333;\r\n    display: flex;\r\n    justify-content: right;\r\n    align-items: right;\r\n    width: 120px;\r\n    height: 120px;\r\n    border-radius: 50%;\r\n    background-color: #fff;\r\n    margin: 0 auto;\r\n}\r\n.login100-form-title[_ngcontent-%COMP%] {\r\n    font-family: Open sans;\r\n    font-size: 22px;\r\n    color: #fff;\r\n    line-height: 1.2;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    display: block;\r\n}\r\n.p-b-34[_ngcontent-%COMP%] {\r\n    padding-bottom: 34px;\r\n}\r\n.p-t-27[_ngcontent-%COMP%] {\r\n    padding-top: 27px;\r\n}\r\n.marbot[_ngcontent-%COMP%]{\r\n   \r\n}\r\n.form-control[_ngcontent-%COMP%]{\r\n    padding: 15px;\r\n    font-size: 14px;\r\n    color: #1f1717;\r\n}\r\n.form-control[_ngcontent-%COMP%]:focus {\r\n    background-color: #fff;\r\n    border: 1px solid #2f2f91 !important;\r\n    box-shadow: none!important;\r\n}\r\n.stretch[_ngcontent-%COMP%] {\r\n    width:100%;\r\n    height:100%;\r\n}\r\nlabel.color[_ngcontent-%COMP%]{color:#fff;}\r\n.btn.btn-default.style[_ngcontent-%COMP%]{\r\n    width:112px;\r\n    margin-top: 25px;\r\nborder-radius: 25px;\r\nmargin-bottom: 15px;\r\ntransition:1s ease all;\r\n}\r\n.btn.btn-default.style[_ngcontent-%COMP%]:hover{\r\n    background:#5710cb;\r\n    color:#fff;\r\n}\r\na.txt1[_ngcontent-%COMP%]{\r\n    text-decoration:none;\r\n    color:#007bff;\r\n    transition:1s ease all;\r\n    cursor: pointer;\r\n}\r\na[_ngcontent-%COMP%]:hover.txt1{\r\n    color:#0c0c0c;\r\n}\r\n.fontpassword[_ngcontent-%COMP%] { \r\n    position: relative; \r\n}\r\n.fontpassword[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{ \r\n    position: absolute; \r\n    left: 15px; \r\n    top:46px; \r\n    color: gray; \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYiw2Q0FBNkM7SUFDN0MsdUNBQXVDO0lBQ3ZDLGlDQUFpQzs7QUFFckM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWTtJQUNaLFVBQVU7RUFDWjtBQUNGO0lBQ0ksNEJBQWdEO0lBQ2hELDJCQUEyQjtJQUMzQix3QkFBd0I7SUFDeEIsMkJBQTJCO0lBQzNCLGtDQUFrQztFQUNwQztBQUVBO0lBQ0UsNEJBQWdEO0lBQ2hELDJCQUEyQjtJQUMzQix3QkFBd0I7SUFDeEIsMkJBQTJCO0lBQzNCLGtDQUFrQztFQUNwQztBQUVBO0lBQ0U7TUFDRSwrQkFBK0I7SUFDakM7O0lBRUE7TUFDRSxvQ0FBb0M7SUFDdEM7RUFDRjtBQUVGO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUtqQixhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUVBOztJQUVJLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsVUFBVTtJQUNWLE1BQU07SUFDTixZQUFZO0lBQ1osdUNBQXVDOztBQUUzQztBQUNBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0ErQkc7QUFDSDtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztJQUNYLG9CQUFvQjtBQUN4QjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFLZCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtHQUNHLHlCQUF5QjtBQUM1QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsb0NBQW9DO0lBQ3BDLDBCQUEwQjtBQUM5QjtBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZjtBQUNBLFlBQVksVUFBVSxDQUFDO0FBQ3ZCO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtBQUNwQixtQkFBbUI7QUFDbkIsbUJBQW1CO0FBQ25CLHNCQUFzQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFFBQVE7SUFDUixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpbWl0ZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgYm90dG9tICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgICBcclxufVxyXG4uZm9nLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcbi5mb2ctaW1nIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMzAwdnc7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxuLmZvZy1pbWctZmlyc3Qge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9mb2ctMS5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBhbmltYXRpb246IGZvZyA2MHMgbGluZWFyIGluZmluaXRlO1xyXG4gIH1cclxuICBcclxuICAuZm9nLWltZy1zZWNvbmQge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9mb2ctMi5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBhbmltYXRpb246IGZvZyAzMHMgbGluZWFyIGluZmluaXRlO1xyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGZvZyB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAxMDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjAwdncsIDAsIDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbi5jb250YWluZXItbG9naW4xMDAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5jb250YWluZXItbG9naW4xMDA6OmJlZm9yZSB7XHJcblxyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICB3aWR0aDogMCU7XHJcbiAgICBoZWlnaHQ6IDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjkpO1xyXG5cclxufVxyXG4ubG9naW4tbGFiZWxbX25nY29udGVudC1hc2gtYzJdIHtcclxuICAgIGNvbG9yOiAjMmYyZjkxO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG4uYnRuLWxvZ2luW19uZ2NvbnRlbnQtYXNoLWMyXSB7XHJcbiAgICBwYWRkaW5nOiA3cHggNTBweDtcclxufVxyXG4uYnRuLXByaW1hcnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJmMmY5MTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuLndyYXAtbG9naW4xMDAge1xyXG4gICAgbWFyZ2luOiAyNXB4IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZzogMzVweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvKiBvdmVyZmxvdzogaGlkZGVuOyAqL1xyXG59XHJcbi8qIC53cmFwLWxvZ2luMTAwOjpiZWZvcmUgIHtcclxuICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgYmFja2dyb3VuZDogI2M2ZjRmZjRmO1xyXG4gICAgd2lkdGg6IDI1MCU7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBsZWZ0OiAtNDYwcHg7XHJcbiAgICB0b3A6IC0xMDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRyYW5zaXRpb246IC41cyBhbGwgbGluZWFyO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTI1ZGVnKSBzY2FsZSgxKTtcclxufVxyXG5cclxuLndyYXAtbG9naW4xMDA6OmFmdGVyICB7XHJcbiAgICBjb250ZW50OiBcIiBcIjtcclxuICAgIGJhY2tncm91bmQ6ICNjNmY0ZmY0ZjtcclxuICAgIHdpZHRoOiAyNTAlO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbGVmdDogLTQ2MHB4O1xyXG4gICAgYm90dG9tOiAtMjAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0cmFuc2l0aW9uOiAuNXMgYWxsIGxpbmVhcjtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0yNWRlZykgc2NhbGUoMSk7XHJcbn1cclxuLndyYXAtbG9naW4xMDA6aG92ZXI6OmJlZm9yZSAge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTI1ZGVnKSBzY2FsZSgxLjUpO1xyXG4gICAgdG9wOiAxNDAlO1xyXG59XHJcblxyXG4ud3JhcC1sb2dpbjEwMDpob3Zlcjo6YWZ0ZXIgIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0yNWRlZykgc2NhbGUoMS41KTtcclxuICAgIGJvdHRvbTogMTQwJTtcclxufSAqL1xyXG4ubG9naW4xMDAtZm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4ubG9nby1pbWdbX25nY29udGVudC1kYWMtYzJdIHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbi5sb2dpbjEwMC1mb3JtLWxvZ28ge1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcclxuICAgIGFsaWduLWl0ZW1zOiByaWdodDtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuLmxvZ2luMTAwLWZvcm0tdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gc2FucztcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4ucC1iLTM0IHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzNHB4O1xyXG59XHJcbi5wLXQtMjcge1xyXG4gICAgcGFkZGluZy10b3A6IDI3cHg7XHJcbn1cclxuLm1hcmJvdHtcclxuICAgLyogbWFyZ2luLWJvdHRvbTogMzBweDsgKi9cclxufVxyXG4uZm9ybS1jb250cm9se1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjMWYxNzE3O1xyXG59XHJcbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyZjJmOTEgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3RyZXRjaCB7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbn1cclxubGFiZWwuY29sb3J7Y29sb3I6I2ZmZjt9XHJcbi5idG4uYnRuLWRlZmF1bHQuc3R5bGV7XHJcbiAgICB3aWR0aDoxMTJweDtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbmJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbm1hcmdpbi1ib3R0b206IDE1cHg7XHJcbnRyYW5zaXRpb246MXMgZWFzZSBhbGw7XHJcbn1cclxuLmJ0bi5idG4tZGVmYXVsdC5zdHlsZTpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6IzU3MTBjYjtcclxuICAgIGNvbG9yOiNmZmY7XHJcbn1cclxuYS50eHQxe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICBjb2xvcjojMDA3YmZmO1xyXG4gICAgdHJhbnNpdGlvbjoxcyBlYXNlIGFsbDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5hOmhvdmVyLnR4dDF7XHJcbiAgICBjb2xvcjojMGMwYzBjO1xyXG59XHJcbi5mb250cGFzc3dvcmQgeyBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXHJcbn0gXHJcbiAgXHJcbi5mb250cGFzc3dvcmQgaXsgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgbGVmdDogMTVweDsgXHJcbiAgICB0b3A6NDZweDsgXHJcbiAgICBjb2xvcjogZ3JheTsgXHJcbn0gIl19 */"], data: { animation: [Object(_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__["routerTransition"])()] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css'],
                animations: [Object(_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__["routerTransition"])()],
                host: { '[@routerTransition]': '' }
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zXb4":
/*!****************************************!*\
  !*** ./src/app/index/app.component.ts ***!
  \****************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */



class AppComponent {
    constructor() {
        this.title = 'Student Management By Sangwin Gawande';
        // Add few students for initial listing
        this.studentsList = [
            {
                id: 1,
                first_name: "Sangwin",
                last_name: "Gawande",
                email: "sangwin@yopmail.com",
                phone: 9503733178,
                department: "Science"
            },
            {
                id: 2,
                first_name: "Oman",
                last_name: "Umir",
                email: "oman@yopmail.com",
                phone: 8574889658,
                department: "Commerce"
            },
            {
                id: 3,
                first_name: "Tina",
                last_name: "Dillon",
                email: "tina@yopmail.com",
                phone: 7485889658,
                department: "Science"
            },
            {
                id: 4,
                first_name: "John",
                last_name: "Doe",
                email: "john@yopmail.com",
                phone: 9685589748,
                department: "Arts"
            },
            {
                id: 5,
                first_name: "Peter",
                last_name: "Parker",
                email: "peter@yopmail.com",
                phone: 8595856547,
                department: "Engineering"
            }
        ];
        // Save students to localStorage
        localStorage.setItem('students', JSON.stringify(this.studentsList));
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kZXgvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGlEQUFpRDs7O0FBR2pELGlEQUFpRCIsImZpbGUiOiJzcmMvYXBwL2luZGV4L2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKkNyZWF0ZWQgQnkgOiBTYW5nd2luIEdhd2FuZGUgKGh0dHA6Ly9zYW5ndy5pbikqL1xuXG5cbi8qQ3JlYXRlZCBCeSA6IFNhbmd3aW4gR2F3YW5kZSAoaHR0cDovL3Nhbmd3LmluKSovXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map