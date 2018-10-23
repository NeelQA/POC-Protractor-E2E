import { expect } from "chai";
import { browser, by, element } from "protractor";

describe("angularjs homepage todo list", function() {

    it("should add a todo", function() {
        browser.get("https://angularjs.org");

        element(by.model("todoList.todoText")).sendKeys("write first protractor test");
        element(by.css('[value="add"]')).click();

        element.all(by.repeater("todo in")).then(function(todoList) {

            expect(todoList.length.toString()).to.equal("3");

            // todoList[2].getText().then(function(text) {
            //     expect(text.add).to.equal("write first protractor test");
        });
    });
});
// });
