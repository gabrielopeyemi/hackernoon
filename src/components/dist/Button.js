"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Button = void 0;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var styled_components_1 = require("styled-components");
var config_1 = require("../config");
exports.Button = function (props) {
    return (react_1["default"].createElement(react_router_dom_1.Link, { style: { textDecoration: 'none' }, to: props.link ? props.link : '/' },
        react_1["default"].createElement(ButtonStyle, { Outline: props.Outline }, props.title)));
};
var ButtonStyle = styled_components_1["default"].button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: #fff;\n  background-color: ", ";\n  font-family: \"IBM Plex Mono\", monospace;\n  cursor: pointer;\n  padding: 0.6rem 1.2rem;\n  position: relative;\n  outline: currentcolor none medium;\n  line-height: 1.3;\n  border: ", ";\n  border-radius: 2px;\n  font-size: .9rem;\n  font-weight: bold;\n  &:hover{\n    background-color: rgb(98, 255, 134);\n  }\n  @media (max-width: 875px) {\n    display: none\n  }\n"], ["\n  color: #fff;\n  background-color: ", ";\n  font-family: \"IBM Plex Mono\", monospace;\n  cursor: pointer;\n  padding: 0.6rem 1.2rem;\n  position: relative;\n  outline: currentcolor none medium;\n  line-height: 1.3;\n  border: ", ";\n  border-radius: 2px;\n  font-size: .9rem;\n  font-weight: bold;\n  &:hover{\n    background-color: rgb(98, 255, 134);\n  }\n  @media (max-width: 875px) {\n    display: none\n  }\n"])), config_1.primaryColor, function (p) { return p.Outline ? "2px solid rgb(33, 36, 40)" : "0px solid rgb(33, 36, 40)"; });
var templateObject_1;
