import React from "react";
import Trigger from "xy-trigger";
import { PopoverProps } from "./interface";

export function Popover(props: PopoverProps) {
    const { prefixCls = "xy-popover", placement = "top", offsetSize = 13, title, content, popup, ...rest } = props;

    function renderPopover() {
        return (
            <React.Fragment>
                <div className={`${prefixCls}-arrow`}>
                    <div className={`${prefixCls}-arrow-inner`} />
                </div>
                <div className={`${prefixCls}-inner`}>
                    {title && <div className={`${prefixCls}-title`}>{title}</div>}
                    <div className={`${prefixCls}-content`}>{content}</div>
                </div>
            </React.Fragment>
        );
    }

    return <Trigger {...rest} placement={placement} popup={renderPopover()} offsetSize={offsetSize} prefixCls={prefixCls} />;
}

export default React.memo(Popover);
