import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function AcceptCallIcon({color = '#232323', ...restProps}) {
    return (
        <Svg width={25.443} height={26.385} viewBox="0 0 25.443 26.385" {...restProps}>
            <G data-name="Group 10847">
                <Path
                    data-name="Path 2610"
                    d="M22.44 16.356a13.136 13.136 0 01-4.125-.657 1.886 1.886 0 00-1.834.387l-2.6 1.964a14.376 14.376 0 01-6.464-6.462l1.906-2.534a1.87 1.87 0 00.46-1.895 13.154 13.154 0 01-.66-4.132A1.859 1.859 0 007.265 1.17H3.017A1.859 1.859 0 001.16 3.027a21.3 21.3 0 0021.28 21.28 1.859 1.859 0 001.856-1.856v-4.238a1.859 1.859 0 00-1.856-1.857z"
                    fill={color}
                    stroke="rgba(0,0,0,0)"
                />
                <Path
                    data-name="Line 4"
                    fill="none"
                    stroke={color}
                    strokeWidth={2}
                    d="M24.722.692l-24 25"
                />
            </G>
        </Svg>
    )
}

export default AcceptCallIcon