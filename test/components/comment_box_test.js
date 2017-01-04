import { renderComponent, expect } from "../test_helper";
import CommentBox from "../../src/components/comment_box";

describe("CommentBox Tests", () => {
	let component = null;
	beforeEach(() => {
		component = renderComponent(CommentBox);
	});
	
	describe("- general tests", () => {
		it("has the correct class", () => {
			expect(component).to.have.class("comment-box");
		});

		it("has a text area", () => {
			expect(component.find("textarea")).to.exist;
		});

		it("has a button", () => {
			expect(component.find("button")).to.exist;
		});
	});	

	describe("- entering some text", () => {
		beforeEach(() => {
			component.find("textarea").simulate("change", "new comment");
		});

		it("shows that text is the text area", () => {
			expect(component.find("textarea")).to.have.value("new comment");
		});
	
		it("when submitted, clears the input", () => {});
	});
	
});