"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Related = void 0;
/* eslint-disable array-callback-return */
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var Card_1 = require("../components/Card");
var Heading_1 = require("../components/Heading");
exports.Related = function (props) {
    return (react_1["default"].createElement("div", { style: {
            marginTop: '40px'
        } },
        react_1["default"].createElement(Heading_1.Heading, null, "Related"),
        react_1["default"].createElement(Body, null,
            react_1["default"].createElement("div", { className: "row" }, props.data.slice(1).map(function (relatedStorie, i) {
                // console.log(relatedStorie);
                return (react_1["default"].createElement("div", { className: "col-sm-12 col-md-6 col-lg-4", key: i, style: { display: relatedStorie.id ? 'block' : 'none' } },
                    react_1["default"].createElement(Card_1.Card, { data: relatedStorie, color: props.color })));
            })))));
};
var Body = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-top: 30px;\n  margin-bottom: 30px;\n"], ["\n  margin-top: 30px;\n  margin-bottom: 30px;\n"])));
var templateObject_1;
