"use strict";
const rule_1 = require("./rule");
const plugin = {
    rules: {
        'explicit-generics': rule_1.explicitGenerics,
    },
};
module.exports = plugin;
