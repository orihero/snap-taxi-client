import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Lightning(props) {
    return (
        <Svg width={16} height={16} viewBox="0 0 24 24" {...props}>
            <Path
                fillRule="evenodd"
                fill={'red'}
                d="M13.29 9.778h6.95L7.31 24l2.37-9.778H3L15.067 0 13.29 9.778z"
            />
        </Svg>
    )
}

export default Lightning
