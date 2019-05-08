import React from "react";
import Popover from "../src";
import "./index.scss";

export default function() {
    return (
        <div>
            <div>
                <div className="demo-1">
                    <Popover title="Left 标题" content={<p className="tip">这是一段 Left 提示...</p>} placement="left">
                        <div className="box">Left</div>
                    </Popover>
                    <Popover title="Top 标题" content={<p className="tip">这是一段 Top 提示...</p>} placement="top">
                        <div className="box">Top</div>
                    </Popover>
                    <Popover title="Bottom 标题" content={<p className="tip">这是一段 Bottom 提示...</p>} placement="bottom">
                        <div className="box">Bottom</div>
                    </Popover>
                    <Popover title="Right 标题" content={<p className="tip">这是一段 Right 提示...</p>} placement="right">
                        <div className="box">Right</div>
                    </Popover>
                </div>

                <div className="demo-1">
                    <Popover title="leftTop 标题" content={<p className="tip">这是一段 leftTop 提示...</p>} placement="leftTop">
                        <div className="box">leftTop</div>
                    </Popover>
                    <Popover title="leftBottom 标题" content={<p className="tip">这是一段 leftBottom 提示...</p>} placement="leftBottom">
                        <div className="box">leftBottom</div>
                    </Popover>
                    <Popover title="rightTop 标题" content={<p className="tip">这是一段 rightTop 提示...</p>} placement="rightTop">
                        <div className="box">rightTop</div>
                    </Popover>
                    <Popover title="rightBottom 标题" content={<p className="tip">这是一段 rightBottom 提示...</p>} placement="rightBottom">
                        <div className="box">rightBottom</div>
                    </Popover>
                </div>

                <div className="demo-1">
                    <Popover title="topLeft 标题" content={<p className="tip">这是一段 topLeft 提示...</p>} placement="topLeft">
                        <div className="box">topLeft</div>
                    </Popover>
                    <Popover title="topRight 标题" content={<p className="tip">这是一段 topRight 提示...</p>} placement="topRight">
                        <div className="box">topRight</div>
                    </Popover>
                    <Popover title="bottomLeft 标题" content={<p className="tip">这是一段 bottomLeft 提示...</p>} placement="bottomLeft">
                        <div className="box">bottomLeft</div>
                    </Popover>
                    <Popover title="bottomRight 标题" content={<p className="tip">这是一段 bottomRight 提示...</p>} placement="bottomRight">
                        <div className="box">bottomRight</div>
                    </Popover>
                </div>
            </div>
        </div>
    );
}
