import React from "react";
import Tooltip from "xy-tooltip";
import { PopoverProps } from "./interface";

export function Popover(props: PopoverProps) {
    const { prefixCls = "xy-popover", title, content, overlay, ...rest } = props;

    function renderPopover() {
        return (
            <React.Fragment>
                {title && <div className={`${prefixCls}-title`}>{title}</div>}
                <div className={`${prefixCls}-content`}>{content}</div>
            </React.Fragment>
        );
    }

    return <Tooltip {...rest} overlay={renderPopover()} offsetSize={13} prefixCls={prefixCls} />;
}

export default React.memo(Popover);
