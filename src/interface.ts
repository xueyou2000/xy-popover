import { TriggerProps } from "xy-trigger/es/interface";

export interface PopoverProps extends TriggerProps {
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
