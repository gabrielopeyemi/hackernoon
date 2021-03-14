"use strict";
exports.__esModule = true;
var react_1 = require("react");
var hn_logo_png_1 = require("../images/logo/hn-logo.png");
var index_1 = require("../assets/Styles/index");
var Button_1 = require("../components/Button");
var config_1 = require("../config");
var Input_1 = require("../components/Input");
function Header(props) {
    var darkMode = props.darkMode, handleDarkMode = props.handleDarkMode;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(index_1.Nav, { style: { backgroundColor: config_1.primaryColor } },
            react_1["default"].createElement(index_1.NavLeft, null,
                react_1["default"].createElement("img", { style: { width: '280px' }, src: hn_logo_png_1["default"], alt: 'logo' })),
            react_1["default"].createElement(index_1.NavRight, null,
                react_1["default"].createElement(index_1.NavLink, null,
                    react_1["default"].createElement(Input_1.Input, null)),
                react_1["default"].createElement(index_1.NavLink, null,
                    react_1["default"].createElement(Button_1.Button, { title: 'Start Writing', Outline: true })),
                react_1["default"].createElement(index_1.NavLink, null,
                    react_1["default"].createElement(Button_1.Button, { title: 'Log in', Outline: false })),
                react_1["default"].createElement(index_1.NavLink, null,
                    react_1["default"].createElement(index_1.IconButton, { onClick: handleDarkMode },
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement("i", { style: {
                                    fontSize: '30px'
                                }, className: darkMode ? 'fas fa-moon' : 'fas fa-sun' }))))))));
}
exports["default"] = Header;
