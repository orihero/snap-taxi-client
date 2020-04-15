import React from 'react';
import Svg, {Path} from "react-native-svg";

function SearchIcon(props) {
    return (
        <Svg width={20.054} height={18} viewBox="0 0 20.054 18" {...props}>
            <Path
                d="M14.614 11.96l5.173 4.64a.76.76 0 010 1.157.987.987 0 01-1.289 0l-5.173-4.643a8.769 8.769 0 01-5.121 1.61c-4.531 0-8.2-3.3-8.2-7.364S3.673 0 8.2 0s8.2 3.3 8.2 7.364a6.88 6.88 0 01-1.794 4.6zM8.2 13.091c3.524 0 6.381-2.564 6.381-5.727S11.728 1.636 8.2 1.636 1.823 4.2 1.823 7.364 4.68 13.091 8.2 13.091z"
                fill="#32abe0"
            />
        </Svg>
    )
}

export default SearchIcon;