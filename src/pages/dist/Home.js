"use strict";
exports.__esModule = true;
/* eslint-disable react-hooks/rules-of-hooks */
var react_1 = require("react");
var Footer_1 = require("../Layout/Footer");
var Header_1 = require("../Layout/Header");
var MainOne_1 = require("./../Layout/MainOne");
var database_1 = require("./../database");
var Title_1 = require("../Layout/Title");
var MainImg_1 = require("../Layout/MainImg");
var HeroOne_1 = require("../Layout/HeroOne");
var HeroTwo_1 = require("../Layout/HeroTwo");
var HeroThree_1 = require("../Layout/HeroThree");
var Related_1 = require("../Layout/Related");
var Tags_1 = require("../Layout/Tags");
var Bottom_1 = require("../Layout/Bottom");
var color_1 = require("../assets/color");
function Home() {
    var _a = react_1.useState(true), darkMode = _a[0], setDarkmode = _a[1];
    var handleDarkMode = function () {
        setDarkmode(!darkMode);
    };
    var handleNavbar = function () {
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Header_1["default"], { title: database_1.Data.title, style: { margin: 0 }, darkMode: darkMode, handleDarkMode: handleDarkMode, handleNavbar: handleNavbar }),
        react_1["default"].createElement("div", { style: { backgroundColor: darkMode ? color_1.darkColor : color_1.lightColor, margin: 0, color: darkMode ? color_1.lightColor : color_1.darkColor } },
            react_1["default"].createElement("div", { className: 'container', style: { paddingTop: 100 } },
                react_1["default"].createElement(Title_1["default"], { data: database_1.Data.title }),
                react_1["default"].createElement(MainOne_1["default"], { data: database_1.Data }),
                react_1["default"].createElement(MainImg_1.MainImg, { data: database_1.Data.mainImage }),
                react_1["default"].createElement(HeroOne_1.HeroOne, { data: database_1.Data.profile, main: database_1.Data.markup }),
                react_1["default"].createElement(HeroTwo_1["default"], null),
                react_1["default"].createElement(HeroThree_1.HeroThree, { link: database_1.Data.profile.adLink, data: database_1.Data.profile }),
                react_1["default"].createElement(Related_1.Related, { data: database_1.Data.relatedStories, color: darkMode }),
                react_1["default"].createElement(Tags_1.Tags, { data: database_1.Data.tags }),
                react_1["default"].createElement(Bottom_1.Bottom, null))),
        react_1["default"].createElement(Footer_1.Footer, null)));
}
exports["default"] = Home;
