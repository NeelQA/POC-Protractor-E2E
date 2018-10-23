import * as chromedriver from "chromedriver";
import { Config } from "protractor";

import * as chai from "chai";
import chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);

export const config: Config = {
    specs: ["./tests/**/*.spec.js"],
    directConnect: true,
    chromeDriver: chromedriver.path,
    capabilities: {
        browserName: "chrome",
        chromeOptions: {
            args: [
                "--disable-gpu",
                "--window-size=1440,900",
            ],
        },
    },
    framework: "mocha",
    mochaOpts: {
        reporter: "mocha-jenkins-reporter",
        slow: 2000,
        timeout: 12000,
    },

    plugins: [
        { path: "./plugins/sync.js" },
    ],
};
