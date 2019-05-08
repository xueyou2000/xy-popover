import React from "react";
import Popover from "../src";
import "./index.scss";

export default function() {
    return (
        <div>
            <div className="demo3">
                <div style={{ marginLeft: "70px", whiteSpace: "nowrap" }}>
                    <Popover content="topLeft" placement="topLeft" title="这是标题">
                        <button className="btn">TL</button>
                    </Popover>
                    <Popover content="top" placement="top" title="这是标题">
                        <button className="btn">Top</button>
                    </Popover>
                    <Popover content="topRight" placement="topRight" title="这是标题">
                        <button className="btn">TR</button>
                    </Popover>
                </div>
                <div style={{ width: "70px", float: "left" }}>
                    <Popover content="leftTop" placement="leftTop" title="这是标题">
                        <button className="btn">LT</button>
                    </Popover>
                    <Popover content="left" placement="left" title="这是标题">
                        <button className="btn">Left</button>
                    </Popover>
                    <Popover content="leftBottom" placement="leftBottom" title="这是标题">
                        <button className="btn">LB</button>
                    </Popover>
                </div>
                <div style={{ width: "70px", marginLeft: "304px" }}>
                    <Popover content="rightTop" placement="rightTop" title="这是标题">
                        <button className="btn">RT</button>
                    </Popover>
                    <Popover content="right" placement="right" title="这是标题">
                        <button className="btn">Right</button>
                    </Popover>
                    <Popover content="rightBottom" placement="rightBottom" title="这是标题">
                        <button className="btn">RB</button>
                    </Popover>
                </div>
                <div style={{ marginLeft: "70px", clear: "both", whiteSpace: "nowrap" }}>
                    <Popover content="bottomLeft" placement="bottomLeft" title="这是标题">
                        <button className="btn">BL</button>
                    </Popover>
                    <Popover content="bottom" placement="bottom" title="这是标题">
                        <button className="btn">Bottom</button>
                    </Popover>
                    <Popover content="bottomRight" placement="bottomRight" title="这是标题">
                        <button className="btn">BR</button>
                    </Popover>
                </div>
            </div>
        </div>
    );
}
