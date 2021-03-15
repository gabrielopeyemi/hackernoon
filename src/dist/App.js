"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./index.css");
var react_router_dom_1 = require("react-router-dom");
var Home_1 = require("./pages/Home");
function App() {
    return (react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement("div", null,
            react_1["default"].createElement(react_router_dom_1.Switch, null,
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/" },
                    react_1["default"].createElement(Home_1["default"], null))))));
}
exports["default"] = App;
;
