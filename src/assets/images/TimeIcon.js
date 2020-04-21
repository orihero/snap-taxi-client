import * as React from "react"
import Svg, { Defs, LinearGradient, Stop, G, Path } from "react-native-svg"

function TimeIcon(props) {
    return (
        <Svg width={19} height={19} viewBox="0 0 19 19" {...props}>
            <Defs>
                <LinearGradient
                    id="prefix__a"
                    x1={0.5}
                    y1={0.5}
                    x2={0.145}
                    gradientUnits="objectBoundingBox"
                >
                    <Stop offset={0} stopColor="#575f6b" />
                    <Stop offset={1} stopColor="#2c3036" />
                </LinearGradient>
            </Defs>
            <G
                data-name="Group 10848"
                transform="translate(-113.5 -203.5)"
                stroke="rgba(0,0,0,0)"
                fill="url(#prefix__a)"
            >
                <Path
                    data-name="Path 2977"
                    d="M130.106 208.736a.75.75 0 00-.348 1A7.424 7.424 0 01130.5 213a7.5 7.5 0 11-7.5-7.5 7.41 7.41 0 014.656 1.618.75.75 0 10.933-1.174A9 9 0 10132 213a8.908 8.908 0 00-.892-3.915.749.749 0 00-1-.348zm0 0"
                />
                <Path
                    data-name="Path 2978"
                    d="M123 207a.75.75 0 00-.75.75V213a.75.75 0 00.75.75h3.75a.75.75 0 000-1.5h-3v-4.5a.75.75 0 00-.75-.75zm0 0"
                />
            </G>
        </Svg>
    )
}

export default TimeIcon
