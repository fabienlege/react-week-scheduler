"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DayHeader() {
  return _react2.default.createElement(
    "thead",
    null,
    _react2.default.createElement(
      "tr",
      null,
      _react2.default.createElement("th", null),
      _react2.default.createElement(
        "th",
        null,
        _react2.default.createElement(
          "span",
          { className: "long" },
          "Lundi"
        ),
        _react2.default.createElement(
          "span",
          { className: "short" },
          "Lun"
        )
      ),
      _react2.default.createElement(
        "th",
        null,
        _react2.default.createElement(
          "span",
          { className: "long" },
          "Mardi"
        ),
        _react2.default.createElement(
          "span",
          { className: "short" },
          "Mar"
        )
      ),
      _react2.default.createElement(
        "th",
        null,
        _react2.default.createElement(
          "span",
          { className: "long" },
          "Mercredi"
        ),
        _react2.default.createElement(
          "span",
          { className: "short" },
          "Mer"
        )
      ),
      _react2.default.createElement(
        "th",
        null,
        _react2.default.createElement(
          "span",
          { className: "long" },
          "Jeudi"
        ),
        _react2.default.createElement(
          "span",
          { className: "short" },
          "Jeu"
        )
      ),
      _react2.default.createElement(
        "th",
        null,
        _react2.default.createElement(
          "span",
          { className: "long" },
          "Vendredi"
        ),
        _react2.default.createElement(
          "span",
          { className: "short" },
          "Ven"
        )
      ),
      _react2.default.createElement(
        "th",
        null,
        _react2.default.createElement(
          "span",
          { className: "long" },
          "Samedi"
        ),
        _react2.default.createElement(
          "span",
          { className: "short" },
          "Sam"
        )
      ),
      _react2.default.createElement(
        "th",
        null,
        _react2.default.createElement(
          "span",
          { className: "long" },
          "Dimanche"
        ),
        _react2.default.createElement(
          "span",
          { className: "short" },
          "Dim"
        )
      )
    )
  );
}

exports.default = DayHeader;