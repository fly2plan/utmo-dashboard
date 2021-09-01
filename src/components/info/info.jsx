import React from "react";
import { Tooltip } from "react-bootstrap";

const Info = React.forwardRef(
    ({ children, show: _, ...props }, ref) => {
        return (
            <Tooltip ref={ref} {...props}>
                {children}
            </Tooltip>
        );
    }
)

export default Info