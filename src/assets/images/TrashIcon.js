import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function TrashIcon(props) {
    return (
        <Svg width={14.286} height={18.368} viewBox="0 0 14.286 18.368" {...props}>
            <G data-name="Group 10769" fill="#dd2a1b">
                <Path
                    data-name="Path 12473"
                    d="M1.02 16.323a2.04 2.04 0 002.044 2.044h8.163a2.04 2.04 0 002.037-2.044V4.081H1.02z"
                />
                <Path
                    data-name="Path 12474"
                    d="M14.286 1.02h-3.571L9.694 0h-5.1l-1.02 1.02H.003v2.041h14.286z"
                />
            </G>
        </Svg>
    )
}

export default TrashIcon
