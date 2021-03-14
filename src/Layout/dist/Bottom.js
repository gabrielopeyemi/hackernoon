"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Bottom = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
exports.Bottom = function () {
    return (react_1["default"].createElement(Body, null,
        react_1["default"].createElement(Button, null,
            "Join Hacker Noon",
            react_1["default"].createElement("i", { className: "fad fa-glasses" })),
        react_1["default"].createElement("p", null, "Create your free account to unlock your custom reading experience.")));
};
var Button = styled_components_1["default"].button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: rgb(0, 255, 0);\n  background-color: rgb(33, 36, 40);\n  padding: 0.25em 0.5em;\n  margin-bottom: 10px;\n  border: 4px solid rgb(0, 255, 0);\n  display: inline-block;\n  font-weight: bold;\n  font-family: \"IBM Plex Mono\", monospace;\n  font-size: 2rem;\n  &:hover{\n    font-size: 3rem\n  }\n"], ["\n  color: rgb(0, 255, 0);\n  background-color: rgb(33, 36, 40);\n  padding: 0.25em 0.5em;\n  margin-bottom: 10px;\n  border: 4px solid rgb(0, 255, 0);\n  display: inline-block;\n  font-weight: bold;\n  font-family: \"IBM Plex Mono\", monospace;\n  font-size: 2rem;\n  &:hover{\n    font-size: 3rem\n  }\n"])));
var Body = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  text-align: center;\n  font-family: \"IBM Plex Mono\", monospace;\n  margin-top: 25px;\n"], ["\n  text-align: center;\n  font-family: \"IBM Plex Mono\", monospace;\n  margin-top: 25px;\n"])));
var templateObject_1, templateObject_2;
