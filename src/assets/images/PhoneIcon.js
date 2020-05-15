import React from "react"
import Svg,{Path} from "react-native-svg";

function PhoneIcon(props) {
    return (
        <Svg width={16.266} height={28} viewBox="0 0 16.266 28" {...props}>
            <Path
                d="M14.375 0H1.891A1.9 1.9 0 000 1.891v24.218A1.9 1.9 0 001.891 28h12.484a1.9 1.9 0 001.891-1.891V1.891A1.9 1.9 0 0014.375 0zM6.137 1.363h3.992a.229.229 0 110 .457H6.137a.229.229 0 110-.457zm2 25.692a.945.945 0 11.945-.946.943.943 0 01-.945.946zm6.816-2.555H1.316V3h13.633zm0 0"
                fill="#323637"
            />
        </Svg>
    )
}

export default PhoneIcon
