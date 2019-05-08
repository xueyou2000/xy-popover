import React from "react";
import Popover from "../src";
import "./index.scss";
import { RadioGroup, Radio } from "xy-checkbox";
import "xy-checkbox/assets/index.css";

export default function() {
    return (
        <div>
            <Popover
                content={
                    <RadioGroup>
                        <Radio value="a">顶一下</Radio>
                        <Radio value="b">踩一下</Radio>
                    </RadioGroup>
                }
            >
                <button>操作</button>
            </Popover>
        </div>
    );
}
