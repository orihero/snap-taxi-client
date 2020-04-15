import * as React from "react"
import Svg, {Path} from "react-native-svg";
function LocationIcon(props) {
    return (
        <Svg width={14.22} height={19.315} viewBox="0 0 14.22 19.315" {...props}>
            <Path
                d="M7.11 0A7.124 7.124 0 000 7.122c0 3.487 7.11 12.194 7.11 12.194s7.11-8.707 7.11-12.194A7.123 7.123 0 007.11 0zm0 14.809c-2.034-2.658-4.266-6.156-4.266-7.687a4.266 4.266 0 118.532 0c0 1.528-2.232 5.028-4.266 7.688zm0 0"
                fill="#2a2939"
            />
            <Path d="M5.439 5.886h3.344v3.35H5.439z" fill="#ffaa01" />
        </Svg>
    )
}

export default LocationIcon
