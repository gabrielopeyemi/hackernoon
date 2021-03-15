"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
function Title(props) {
    return (react_1["default"].createElement(TitleDiv, null, props.data));
}
exports["default"] = Title;
var TitleDiv = styled_components_1["default"].h1(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    grid-column: 1 / -1;\n    text-align: center;\n    font-size: 2.5em;\n    letter-spacing: 0px;\n    font-family: \"IBM Plex Mono\", monospace;\n    line-height: 1.4;\n    margin: 0.67em 0px;\n    margin: 0px;\n    padding-top: 30px;\n    font-weight: 800;\n"], ["\n    grid-column: 1 / -1;\n    text-align: center;\n    font-size: 2.5em;\n    letter-spacing: 0px;\n    font-family: \"IBM Plex Mono\", monospace;\n    line-height: 1.4;\n    margin: 0.67em 0px;\n    margin: 0px;\n    padding-top: 30px;\n    font-weight: 800;\n"])));
var templateObject_1;
