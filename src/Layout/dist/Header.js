"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var hn_logo_png_1 = require("../images/logo/hn-logo.png");
var index_1 = require("../assets/Styles/index");
var Button_1 = require("../components/Button");
var config_1 = require("../config");
var Input_1 = require("../components/Input");
var hn_icon_png_1 = require("../images/icons/hn-icon.png");
var styled_components_1 = require("styled-components");
function Header(props) {
    var _a = react_1.useState(true), mobileView = _a[0], setMobileView = _a[1];
    var _b = react_1.useState(false), navStatus = _b[0], setNavStatus = _b[1];
    var darkMode = props.darkMode, handleDarkMode = props.handleDarkMode, handleNavbar = props.handleNavbar;
    // console.log({navStatus})
    var middleNav = [
        'Read',
        'Top Stories',
        'Write',
        'Listen',
        'Advertise',
        'About',
        'Tech Companies',
        'Careers',
        'Sloggings'
    ];
    react_1.useEffect(function () {
        var showScroll = function () {
            if (window.scrollY >= 100) {
                console.log({ nav: true });
                setNavStatus(true);
            }
            else {
                console.log({ nav: false });
                setNavStatus(false);
            }
            console.log(window.scrollY);
        };
        showScroll();
        window.addEventListener('scroll', showScroll);
    }, []);
    var WebsiteView = function () {
        return (react_1["default"].createElement(Body, null,
            react_1["default"].createElement(index_1.Nav, { navStatus: navStatus, className: 'row', style: { backgroundColor: config_1.primaryColor } },
                react_1["default"].createElement(index_1.NavLeft, null,
                    react_1["default"].createElement(ImgW, { style: { width: '280px' }, src: hn_logo_png_1["default"], alt: 'logo' }),
                    react_1["default"].createElement(ImgM, { style: { width: '40px' }, src: hn_icon_png_1["default"], alt: 'logo' })),
                react_1["default"].createElement(index_1.NavRight, null,
                    react_1["default"].createElement(index_1.NavLink, null,
                        react_1["default"].createElement(Input_1.Input, { navStatus: navStatus })),
                    react_1["default"].createElement(index_1.NavLink, null,
                        react_1["default"].createElement(Button_1.Button, { title: 'Start Writing', Outline: true })),
                    react_1["default"].createElement(index_1.NavLink, null,
                        react_1["default"].createElement(Button_1.Button, { title: 'Log in', Outline: false })),
                    react_1["default"].createElement(index_1.NavLink, null,
                        react_1["default"].createElement(index_1.IconButton, { onClick: handleDarkMode },
                            react_1["default"].createElement("div", null,
                                react_1["default"].createElement("i", { style: {
                                        fontSize: '30px'
                                    }, className: darkMode ? 'fas fa-moon' : 'fas fa-sun' })))),
                    react_1["default"].createElement(index_1.NavLink, null,
                        react_1["default"].createElement(IconBars, { onClick: handleNavbar },
                            react_1["default"].createElement("div", null,
                                react_1["default"].createElement("i", { style: { fontSize: '30px' }, className: "fas fa-bars" })))))),
            react_1["default"].createElement(NavMiddle, { navStatus: navStatus, className: 'row' },
                react_1["default"].createElement(UL, null, middleNav.map(function (nav, i) { return (react_1["default"].createElement(Li, { key: i }, nav)); }))),
            react_1["default"].createElement(NavBottom, { navStatus: navStatus, className: 'row' },
                react_1["default"].createElement("img", { style: { width: '20px' }, src: hn_icon_png_1["default"], alt: 'logo' }),
                " ",
                props.title,
                "@codebucks")));
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(WebsiteView, null)));
}
exports["default"] = Header;
var NavBottom = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 20px 30px 20px 30px;\n  background-color: ", ";\n  color: black;\n  display: ", "\n"], ["\n  padding: 20px 30px 20px 30px;\n  background-color: ", ";\n  color: black;\n  display: ", "\n"])), config_1.primaryColor, function (p) { return p.navStatus ? 'block' : 'none'; });
var NavMiddle = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["  \ndisplay: ", ";\n  color: white;\n"], ["  \ndisplay: ", ";\n  color: white;\n"])), function (p) { return p.navStatus ? 'none' : 'flex'; });
var Body = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: fixed;\n  width: 100%;\n  z-index: 9999\n"], ["\n  position: fixed;\n  width: 100%;\n  z-index: 9999\n"])));
var ImgW = styled_components_1["default"].img(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    @media (max-width: 875px) {\n        display: none\n      }\n"], ["\n    @media (max-width: 875px) {\n        display: none\n      }\n"])));
var ImgM = styled_components_1["default"].img(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n@media (min-width: 875px) {\n    display: none;\n  }\n"], ["\n@media (min-width: 875px) {\n    display: none;\n  }\n"])));
var IconBars = styled_components_1["default"].button(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  font-size: 2.4rem;\n  color: rgb(0, 59, 0);\n  width: 60px;\n  height: 60px;\n  background-color: rgba(0, 0, 0, 0);\n  border: 0px none;\n  overflow: hidden;\n  cursor: pointer;\n  padding-right: 10px;\n  @media (min-width: 875px) {\n    display: none;\n  }\n"], ["\n  font-size: 2.4rem;\n  color: rgb(0, 59, 0);\n  width: 60px;\n  height: 60px;\n  background-color: rgba(0, 0, 0, 0);\n  border: 0px none;\n  overflow: hidden;\n  cursor: pointer;\n  padding-right: 10px;\n  @media (min-width: 875px) {\n    display: none;\n  }\n"])));
var Li = styled_components_1["default"].li(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: inline-flex;\n  margin-left: 10px;\n  margin-right: 10px;\n"], ["\n  display: inline-flex;\n  margin-left: 10px;\n  margin-right: 10px;\n"])));
var UL = styled_components_1["default"].ul(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: ", ";\n  justify-content: center;\n  align-content: center;\n  width: 100%;\n  padding: 10px;\n  background-color: #003b00;\n"], ["\n  display: ", ";\n  justify-content: center;\n  align-content: center;\n  width: 100%;\n  padding: 10px;\n  background-color: #003b00;\n"])), function (p) { return p.navStatus ? 'none' : 'flex'; });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
