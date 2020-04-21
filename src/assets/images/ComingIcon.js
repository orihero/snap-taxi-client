import * as React from "react"
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg"

function ComingIcon(props) {
    return (
        <Svg width={17.231} height={27.844} viewBox="0 0 17.231 27.844" {...props}>
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
            <Path
                data-name="Path 2826"
                d="M137.364 15.661a2.5 2.5 0 10-2.5-2.5 2.5 2.5 0 002.5 2.5zm-4.682 4.245l-3.434 17.6h2.622l2.185-9.988 2.684 2.5v7.491h2.5v-9.425l-2.56-2.56.749-3.746a8.712 8.712 0 006.8 3.246v-2.5a6.4 6.4 0 01-5.431-3.059l-1.186-2a2.435 2.435 0 00-2.123-1.186 2.5 2.5 0 00-.936.187L128 19.157v5.868h2.5v-4.182l2.185-.936"
                transform="translate(-127.5 -10.167)"
                stroke="rgba(0,0,0,0)"
                fill="url(#prefix__a)"
            />
        </Svg>
    )
}

export default ComingIcon
