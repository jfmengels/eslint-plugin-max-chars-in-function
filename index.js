'use strict';

var brackets = 2;
function functionLength(node) {
  var firstCharPosition = node.body.range[0];
  var lastCharPosition = node.body.range[1];
  return lastCharPosition - firstCharPosition - brackets;
}

function reportFunctionTooLong(context, node) {
  var length = functionLength(node);
  if (length > 600) {
    context.report({
      node: node,
      message: 'function body is too long, it should be <= 600 chars long, but is ' + length + ' chars long.'
    });
  }
}

module.exports = {
  rules: {
    'max-chars-in-func': function(context) {
      var doReportFunctionTooLong = reportFunctionTooLong.bind(null, context);
      return {
        FunctionDeclaration: doReportFunctionTooLong,
        FunctionExpression: doReportFunctionTooLong
      }
    }
  },
  rulesConfig: {
    'max-chars-in-func': 2
  }
}
