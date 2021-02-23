//

import React from "react";

interface PropTypes {
	h: string;
	w: string;
	children: any;
}

const IconSizer = ({ h, w, children }: PropTypes) => {
	return <div style={{ height: h, width: w }}>{children}</div>;
};

export default IconSizer;
