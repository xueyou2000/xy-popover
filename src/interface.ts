import { TooltipProps } from "xy-tooltip/es/interface";

export interface PopoverProps extends TooltipProps {
    /**
     * 附加类名
     */
    prefixCls?: string;
    /**
     * 标题
     */
    title?: React.ReactNode;
    /**
     * 内容
     */
    content: React.ReactNode;
}
