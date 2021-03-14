"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.HeroOne = void 0;
var react_1 = require("react");
var index_1 = require("../assets/Styles/index");
var styled_components_1 = require("styled-components");
var twitter_new_png_1 = require("./../images/icons/twitter-new.png");
var github_new_png_1 = require("./../images/icons/github-new.png");
var Profile_1 = require("../components/Profile");
require("../assets/Styles/index.css");
exports.HeroOne = function (props) {
    var _a = props.data, bio = _a.bio, twitter = _a.twitter, github = _a.github;
    return (react_1["default"].createElement(Wrapper, null,
        react_1["default"].createElement("div", { className: 'row' },
            react_1["default"].createElement("div", { className: "col-md-2" },
                react_1["default"].createElement(Profile_1.Profile, { data: props.data }),
                react_1["default"].createElement(P, null, bio),
                react_1["default"].createElement(index_1.IconDiv, null,
                    react_1["default"].createElement(index_1.Ax, { href: "https://twitter.com/" + twitter },
                        react_1["default"].createElement(index_1.Imgx, { src: twitter_new_png_1["default"], alt: twitter_new_png_1["default"] })),
                    react_1["default"].createElement(index_1.Ax, { href: "https://github.com/" + github },
                        react_1["default"].createElement(index_1.Imgx, { src: github_new_png_1["default"], alt: github_new_png_1["default"] })))),
            react_1["default"].createElement("div", { className: 'col-md-8' },
                react_1["default"].createElement("div", { dangerouslySetInnerHTML: { __html: props.main } })),
            react_1["default"].createElement("div", { className: 'col-md-2' }))));
};
var Wrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-top: 20px;\n"], ["\n  margin-top: 20px;\n"])));
var Small = styled_components_1["default"].small(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: block;\n  margin-top: 0.5rem;\n  font-size: 0.9rem;\n  font-weight: \"IBM Plex Mono\", monospace;\n"], ["\n  display: block;\n  margin-top: 0.5rem;\n  font-size: 0.9rem;\n  font-weight: \"IBM Plex Mono\", monospace;\n"])));
var P = styled_components_1["default"].p(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-family: \"IBM Plex Sans\", sans-serif;\n  color: rgb(60, 60, 59);\n  font-size: 1.0rem;\n"], ["\n  font-family: \"IBM Plex Sans\", sans-serif;\n  color: rgb(60, 60, 59);\n  font-size: 1.0rem;\n"])));
var templateObject_1, templateObject_2, templateObject_3;
