"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Input = void 0;
var react_1 = require("react");
var search_new_png_1 = require("./../images/logo/search-new.png");
var styled_components_1 = require("styled-components");
var config_1 = require("../config");
exports.Input = function (props) {
    return (react_1["default"].createElement(InputStyle, null,
        react_1["default"].createElement(InputBoxStyle, { placeholder: 'Search...' }),
        react_1["default"].createElement("img", { src: search_new_png_1["default"], width: '19', height: '19', alt: 'search' })));
};
var InputStyle = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: 'center';\n  align-items: 'center';\n  text-align: 'center';\n  width: 250px;\n  outline-color:", ";\n  background-color: ", ";\n  background: rgb(0, 59, 0) none repeat scroll 0% 0%;\n  border: medium none;\n  padding: 10px 20px 10px 10px;\n  border-radius: 2px;\n  font-size: 1rem;\n  transition: all 120ms ease-in-out 0s;\n  outline-color: rgb(0, 187, 0);\n  color: ", ";\n  &::placeholder {\n    font-weight: 900;\n    color: red;\n  }\n  @media (max-width: 895px) {\n  width: 150px;\n      }\n"], ["\n  display: flex;\n  justify-content: 'center';\n  align-items: 'center';\n  text-align: 'center';\n  width: 250px;\n  outline-color:", ";\n  background-color: ", ";\n  background: rgb(0, 59, 0) none repeat scroll 0% 0%;\n  border: medium none;\n  padding: 10px 20px 10px 10px;\n  border-radius: 2px;\n  font-size: 1rem;\n  transition: all 120ms ease-in-out 0s;\n  outline-color: rgb(0, 187, 0);\n  color: ", ";\n  &::placeholder {\n    font-weight: 900;\n    color: red;\n  }\n  @media (max-width: 895px) {\n  width: 150px;\n      }\n"])), config_1.primaryColor, config_1.primaryColor, config_1.primaryColor);
var InputBoxStyle = styled_components_1["default"].input(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  background: rgb(0, 59, 0);\n  border: 0;\n  color: ", ";\n  outline: none;\n  outline-color: rgb(0, 255, 0);\n"], ["\n  width: 100%;\n  background: rgb(0, 59, 0);\n  border: 0;\n  color: ", ";\n  outline: none;\n  outline-color: rgb(0, 255, 0);\n"])), config_1.primaryColor);
var templateObject_1, templateObject_2;
// 30px
