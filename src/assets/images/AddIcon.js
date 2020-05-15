import React from 'react';
import Svg, {Path} from "react-native-svg";

const AddIcon = ({color = "#2c2e30", ...restProps} ) => {
    return (
        <Svg width={16} height={16} viewBox="0 0 16 16" {...restProps}>
            <Path
                data-name="Union 36"
                d="M6.5 14.5v-5h-5a1.5 1.5 0 010-3h5v-5a1.5 1.5 0 113 0v5h5a1.5 1.5 0 010 3h-5v5a1.5 1.5 0 11-3 0z"
                fill={color}
            />
        </Svg>
    );
};

export default AddIcon;