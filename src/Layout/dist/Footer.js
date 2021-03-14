"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Footer = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var facebook_new_png_1 = require("./../images/icons/facebook-new.png");
var twitter_new_png_1 = require("./../images/icons/twitter-new.png");
var github_new_png_1 = require("./../images/icons/github-new.png");
var instagram_new_png_1 = require("./../images/icons/instagram-new.png");
var podcast_new_png_1 = require("./../images/icons/podcast-new.png");
var rss_new_png_1 = require("./../images/icons/rss-new.png");
var linkedin_new_png_1 = require("./../images/icons/linkedin-new.png");
var Styles_1 = require("../assets/Styles");
exports.Footer = function () {
    var firstFooter = [
        'Help',
        'About',
        'Start Writing',
        'Sponsor:',
        'Brand-as-Author',
        'Sitewide Billboard',
        'Ad by tag',
        'Newsletter',
        'Noonies'
    ];
    var secondFooter = [
        'Contact Us',
        'Terms',
        'Privacy',
        'Cookies',
        'Stories published yesterday',
        'Leaderboard',
        "Contributors' Club",
        'Chrome Extension',
    ];
    return (react_1["default"].createElement(Body, null,
        react_1["default"].createElement("div", { className: 'row' },
            react_1["default"].createElement("div", { className: "col-md-8" },
                react_1["default"].createElement("div", { className: "row" },
                    react_1["default"].createElement("div", { className: "col-12" }, firstFooter.map(function (footer, i) { return (react_1["default"].createElement(List, null,
                        react_1["default"].createElement(A, { href: "https://hackernoon.com/" + footer }, footer))); })),
                    react_1["default"].createElement("div", { className: "col-12" }, secondFooter.map(function (footer, i) { return (react_1["default"].createElement(List, null,
                        react_1["default"].createElement(A, { href: "https://hackernoon.com/" + footer }, footer))); })))),
            react_1["default"].createElement("div", { className: "col-md-4" },
                react_1["default"].createElement(Styles_1.IconDiv, null,
                    react_1["default"].createElement(Styles_1.Ax, { href: "https://linkedin.com/in/" + linkedin_new_png_1["default"] },
                        react_1["default"].createElement(Styles_1.Imgx, { src: linkedin_new_png_1["default"], alt: linkedin_new_png_1["default"] })),
                    react_1["default"].createElement(Styles_1.Ax, { href: "https://facebook.com/" + facebook_new_png_1["default"] },
                        react_1["default"].createElement(Styles_1.Imgx, { src: facebook_new_png_1["default"], alt: facebook_new_png_1["default"] })),
                    react_1["default"].createElement(Styles_1.Ax, { href: "https://twitter.com/" + github_new_png_1["default"] },
                        react_1["default"].createElement(Styles_1.Imgx, { src: twitter_new_png_1["default"], alt: twitter_new_png_1["default"] })),
                    react_1["default"].createElement(Styles_1.Ax, { href: "https://github.com/" + github_new_png_1["default"] },
                        react_1["default"].createElement(Styles_1.Imgx, { src: github_new_png_1["default"], alt: github_new_png_1["default"] })),
                    react_1["default"].createElement(Styles_1.Ax, { href: "https://instagram.com/" + github_new_png_1["default"] },
                        react_1["default"].createElement(Styles_1.Imgx, { src: instagram_new_png_1["default"], alt: instagram_new_png_1["default"] })),
                    react_1["default"].createElement(Styles_1.Ax, { href: "https://instagram.com/" + github_new_png_1["default"] },
                        react_1["default"].createElement(Styles_1.Imgx, { src: podcast_new_png_1["default"], alt: podcast_new_png_1["default"] })),
                    react_1["default"].createElement(Styles_1.Ax, { href: "https://instagram.com/" + github_new_png_1["default"] },
                        react_1["default"].createElement(Styles_1.Imgx, { src: rss_new_png_1["default"], alt: rss_new_png_1["default"] })))))));
};
var List = styled_components_1["default"].li(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n  margin-left: 10px;\n  margin-right: 10px;\n"], ["\n  display: inline-block;\n  margin-left: 10px;\n  margin-right: 10px;\n"])));
var Body = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: 10px\n"], ["\n  margin: 10px\n"])));
var A = styled_components_1["default"].a(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  color: #000;\n"], ["\n  color: #000;\n"])));
var templateObject_1, templateObject_2, templateObject_3;
