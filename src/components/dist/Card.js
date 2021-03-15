"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Card = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var config_1 = require("../config");
var config_2 = require("./../config");
var color_1 = require("../assets/dist/color");
exports.Card = function (props) {
    var _a = props.data, companyName = _a.companyName, title = _a.title, mainImage = _a.mainImage, profile = _a.profile, createdAt = _a.createdAt;
    console.log({ data: props.data.profile });
    console.log('hello');
    return (react_1["default"].createElement(Body, null,
        react_1["default"].createElement(Article, { className: "card text-left", color: props.color },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement(TitleWrapper, null,
                    react_1["default"].createElement(react_1["default"].Fragment, null,
                        react_1["default"].createElement(A, { className: "card-title", color: props.color }, title)),
                    react_1["default"].createElement(Icon, { className: "fas fa-bookmark" })),
                react_1["default"].createElement(Img, { className: "card-img-top", src: mainImage, alt: mainImage }),
                react_1["default"].createElement(Tag, null,
                    react_1["default"].createElement(ALink, { href: '/' }, "Bitcoin")))),
        react_1["default"].createElement("div", { style: { backgroundColor: props.color ? color_1.darkColor : color_1.lightColor } },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement(CardFooter, null,
                    react_1["default"].createElement(Footer, { className: 'col-8', style: { marginTop: '10px', marginBottom: 10 } },
                        react_1["default"].createElement(FooterLink, { href: '/' },
                            react_1["default"].createElement(CardFooterImg, { src: 'https://firebasestorage.googleapis.com/v0/b/hackernoon-app.appspot.com/o/images%2Fwigx3JsTvDOJSxLPmAl3OdM9Xsn2-zg23uzp.jpeg?alt=media&token=20c9de74-97a4-49d4-b457-61d06d9bc04b', alt: 'icon' })),
                        react_1["default"].createElement("div", { style: {
                                marginLeft: 10
                            } },
                            react_1["default"].createElement("h3", { style: {
                                    display: 'flex',
                                    flexDirection: 'column'
                                } },
                                react_1["default"].createElement("a", { href: '/', style: {
                                        color: 'rgb(0, 255, 0)',
                                        backgroundImage: 'none',
                                        fontSize: 15,
                                        fontFamily: config_1.MainFont
                                    } },
                                    "@",
                                    profile.displayName),
                                react_1["default"].createElement("small", { style: {
                                        fontFamily: config_1.MainFont,
                                        fontSize: 14,
                                        color: props.color ? color_1.lightColor : color_1.darkColor
                                    } }, "Gabriel")))),
                    react_1["default"].createElement(FooterRight, { style: {
                            display: 'flex',
                            justifyContent: 'center'
                        }, className: 'col-4' },
                        react_1["default"].createElement("div", { style: {
                                display: 'flex',
                                flexDirection: 'column',
                                marginTop: 10,
                                marginBottom: 10,
                                float: 'right',
                                color: props.color ? color_1.lightColor : color_1.darkColor
                            } },
                            react_1["default"].createElement("small", null, "7min ago"),
                            react_1["default"].createElement("small", null, "20 min ago"))))))));
};
var Img = styled_components_1["default"].img(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 200px;\n  object-fit: cover;\n  width: 100%;\n  max-width: 100%;\n  transition: transform 200ms ease-in-out 0s;\n  cursor: pointer;\n  &:hover{\n    transform: scale(1.05);\n  }\n"], ["\n  height: 200px;\n  object-fit: cover;\n  width: 100%;\n  max-width: 100%;\n  transition: transform 200ms ease-in-out 0s;\n  cursor: pointer;\n  &:hover{\n    transform: scale(1.05);\n  }\n"])));
var Body = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  border: 1px solid #fff;\n"], ["\n  border: 1px solid #fff;\n"])));
var Article = styled_components_1["default"].article(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 0;\n  color: #fff;\n"], ["\n  background-color: ", ";\n  border-radius: 0;\n  color: #fff;\n"])), function (props) { return props.color ? color_1.darkColor : color_1.lightColor; });
var CardFooter = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  flex: 1;\n  display: flex;\n"], ["\n  flex: 1;\n  display: flex;\n"])));
var FooterRight = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin: 20;\n"], ["\n  margin: 20;\n"])));
var Footer = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    align-items: center;\n    display: flex;\n    align-content: start;\n    margin-bottom: 0px;\n    place-items: start;\n    align-items: start;\n    padding-right: 10px;\n"], ["\n    align-items: center;\n    display: flex;\n    align-content: start;\n    margin-bottom: 0px;\n    place-items: start;\n    align-items: start;\n    padding-right: 10px;\n"])));
var CardFooterImg = styled_components_1["default"].img(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  max-width: 50px;\n  object-fit: cover;\n  box-shadow: rgb(194, 202, 214) 0px 0.2em, rgb(194, 202, 214) 0px -0.2em, rgb(194, 202, 214) 0.2em 0px, rgb(194, 202, 214) -0.2em 0px;\n  border-style: none;\n"], ["\n  max-width: 50px;\n  object-fit: cover;\n  box-shadow: rgb(194, 202, 214) 0px 0.2em, rgb(194, 202, 214) 0px -0.2em, rgb(194, 202, 214) 0.2em 0px, rgb(194, 202, 214) -0.2em 0px;\n  border-style: none;\n"])));
var FooterLink = styled_components_1["default"].a(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    color: rgb(0, 255, 0);\n    background-image: none;\n    "], ["\n    color: rgb(0, 255, 0);\n    background-image: none;\n    "])));
var CardReact = styled_components_1["default"].div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  -moz-box-align: center;\n  align-items: center;\n  -moz-box-pack: end;\n  justify-content: flex-end;\n  font-family: \"IBM Plex Mono\", monospace;\n  font-size: 12.8px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  -moz-box-align: center;\n  align-items: center;\n  -moz-box-pack: end;\n  justify-content: flex-end;\n  font-family: \"IBM Plex Mono\", monospace;\n  font-size: 12.8px;\n"])));
var TitleWrapper = styled_components_1["default"].div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  display: flex;\n  margin: 15px;\n"], ["\n  display: flex;\n  margin: 15px;\n"])));
var IButton = styled_components_1["default"].button(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n opacity: 1 !important;\n"], ["\n opacity: 1 !important;\n"])));
var Icon = styled_components_1["default"].i(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  display: block;\n  font-weight: 300;\n  color: rgb(246, 247, 249);\n  margin: 10px;\n"], ["\n  display: block;\n  font-weight: 300;\n  color: rgb(246, 247, 249);\n  margin: 10px;\n"])));
var Title = styled_components_1["default"].a(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  font-family: ", ";\n  padding: 20px;\n  font-weight: 600;\n  background-color: transparent;\n  color: rgb(193, 202, 212);\n  font-size: 15px;\n"], ["\n  font-family: ", ";\n  padding: 20px;\n  font-weight: 600;\n  background-color: transparent;\n  color: rgb(193, 202, 212);\n  font-size: 15px;\n"])), config_1.MainFont);
var Tag = styled_components_1["default"].div(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  position: absolute;\n  margin: 0px;\n  right: 10px;\n  bottom: 10px;\n  z-index: 1;\n"], ["\n  position: absolute;\n  margin: 0px;\n  right: 10px;\n  bottom: 10px;\n  z-index: 1;\n"])));
var ALink = styled_components_1["default"].a(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\nfont-family: \"IBM Plex Mono\", monospace;\nbackground: rgb(246, 247, 249) none repeat scroll 0% 0%;\ncolor: rgb(60, 60, 59);\nfont-weight: bold;\ntext-decoration: none;\ndisplay: flex;\n-moz-box-align: center;\nalign-items: center;\nwidth: auto;\nline-height: 1em;\nbox-shadow: rgb(194, 202, 214) 0px 0.2em, rgb(194, 202, 214) 0px -0.2em, rgb(194, 202, 214) 0.2em 0px, rgb(194, 202, 214) -0.2em 0px;\npadding: 10px;\nfont-size: 1.2rem;\nmargin: 0px 10px 10px 0px;\ntext-decoration: none;\n&:hover{\n  background: rgb(0, 255, 0) none repeat scroll 0% 0%;\n    color: rgb(60, 60, 59);\n    box-shadow: rgb(0, 187, 0) 0px 0.2em, rgb(0, 187, 0) 0px -0.2em, rgb(0, 187, 0) 0.2em 0px, rgb(0, 187, 0) -0.2em 0px;\n    transition: all 120ms ease-in-out 0s;\n    text-decoration: none;\n\n  }\n}\n"], ["\nfont-family: \"IBM Plex Mono\", monospace;\nbackground: rgb(246, 247, 249) none repeat scroll 0% 0%;\ncolor: rgb(60, 60, 59);\nfont-weight: bold;\ntext-decoration: none;\ndisplay: flex;\n-moz-box-align: center;\nalign-items: center;\nwidth: auto;\nline-height: 1em;\nbox-shadow: rgb(194, 202, 214) 0px 0.2em, rgb(194, 202, 214) 0px -0.2em, rgb(194, 202, 214) 0.2em 0px, rgb(194, 202, 214) -0.2em 0px;\npadding: 10px;\nfont-size: 1.2rem;\nmargin: 0px 10px 10px 0px;\ntext-decoration: none;\n&:hover{\n  background: rgb(0, 255, 0) none repeat scroll 0% 0%;\n    color: rgb(60, 60, 59);\n    box-shadow: rgb(0, 187, 0) 0px 0.2em, rgb(0, 187, 0) 0px -0.2em, rgb(0, 187, 0) 0.2em 0px, rgb(0, 187, 0) -0.2em 0px;\n    transition: all 120ms ease-in-out 0s;\n    text-decoration: none;\n\n  }\n}\n"])));
var A = styled_components_1["default"].div(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n  padding: 2px 0px 1px;\n  /* background-image: linear-gradient(transparent 0%, transparent calc(50% - 9px), rgba(0, 255, 0, 0.35) calc(50% - 9px), rgba(0, 255, 0, 0.35) 100%); */\n  transition: background-position 120ms ease-in-out 0s, padding 120ms ease-in-out 0s;\n  background-size: 100% 200%;\n  background-position: 0px 0px;\n  word-break: break-word;\n  line-height: 1.4;\n  cursor: pointer;\n  letter-spacing: 0px;\n  font-family: \"IBM Plex Mono\", monospace;\n  font-weight: 900;\n  color: ", ";\n  text-decoration: underline;\n  text-decoration-color: ", ";\n  &:hover{\n    padding: 2px 0px 1px;\n    background-color: ", ";\n    transition: background-position 120ms ease-in-out 0s, padding 120ms ease-in-out 0s;\n    background-size: 100% 200%;\n    background-position: 0px 0px;\n    word-break: break-word;\n  }\n"], ["\n  padding: 2px 0px 1px;\n  /* background-image: linear-gradient(transparent 0%, transparent calc(50% - 9px), rgba(0, 255, 0, 0.35) calc(50% - 9px), rgba(0, 255, 0, 0.35) 100%); */\n  transition: background-position 120ms ease-in-out 0s, padding 120ms ease-in-out 0s;\n  background-size: 100% 200%;\n  background-position: 0px 0px;\n  word-break: break-word;\n  line-height: 1.4;\n  cursor: pointer;\n  letter-spacing: 0px;\n  font-family: \"IBM Plex Mono\", monospace;\n  font-weight: 900;\n  color: ", ";\n  text-decoration: underline;\n  text-decoration-color: ", ";\n  &:hover{\n    padding: 2px 0px 1px;\n    background-color: ", ";\n    transition: background-position 120ms ease-in-out 0s, padding 120ms ease-in-out 0s;\n    background-size: 100% 200%;\n    background-position: 0px 0px;\n    word-break: break-word;\n  }\n"])), function (p) { return p.color ? color_1.lightColor : color_1.darkColor; }, config_2.primaryColor, config_2.primaryColor);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16;
