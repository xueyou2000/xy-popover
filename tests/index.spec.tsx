import React from "react";
import { render, fireEvent } from "react-testing-library";
import Popover from "../src";

describe("Popover", () => {
    test("render", () => {
        const container = document.createElement("div");
        document.body.append(container);

        const wrapper = render(
            <Popover action={["click"]} content={<span>这是一个按钮</span>} getContainer={() => container}>
                <button>按钮</button>
            </Popover>,
            { container }
        );

        const popover = container.querySelector(".xy-popover");
        expect(popover.classList.contains("xy-popover-open")).toBeFalsy();
        fireEvent.click(wrapper.getByText("按钮"));
        expect(popover.classList.contains("xy-popover-open")).toBeTruthy();
        fireEvent.click(wrapper.getByText("按钮"));
        expect(popover.classList.contains("xy-popover-open")).toBeFalsy();
    });
});
