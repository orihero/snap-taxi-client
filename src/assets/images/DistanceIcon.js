import * as React from "react"
import Svg, { Defs, LinearGradient, Stop, G, Path } from "react-native-svg"

function DistanceIcon(props) {
    return (
        <Svg width={23.842} height={19.559} viewBox="0 0 23.842 19.559" {...props}>
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
                data-name="Group 10284"
                transform="translate(.5 -31.5)"
                stroke="rgba(0,0,0,0)"
                fill="url(#prefix__a)"
            >
                <Path
                    data-name="Path 2981"
                    d="M5 44.849a.717.717 0 00.531-.237C5.985 44.1 9.993 39.561 9.993 37A5 5 0 000 37c0 2.564 4.009 7.105 4.466 7.615a.717.717 0 00.534.234zm0-11.421A3.573 3.573 0 018.566 37c0 1.361-2.01 4.2-3.569 6.049C3.438 41.2 1.428 38.359 1.428 37A3.573 3.573 0 015 33.428z"
                />
                <Path
                    data-name="Path 2982"
                    d="M7.138 36.996a2.141 2.141 0 10-2.141 2.141 2.144 2.144 0 002.141-2.141zm-2.855 0a.714.714 0 11.714.714.715.715 0 01-.714-.714z"
                />
                <Path
                    data-name="Path 2983"
                    d="M17.849 32a5 5 0 00-5 5c0 2.564 4.009 7.105 4.466 7.615a.714.714 0 001.062 0c.457-.51 4.466-5.051 4.466-7.615a5 5 0 00-4.994-5zm0 11.046c-1.559-1.849-3.569-4.687-3.569-6.049a3.569 3.569 0 017.138 0c-.003 1.36-2.013 4.203-3.569 6.049z"
                />
                <Path
                    data-name="Path 2984"
                    d="M17.845 34.855a2.141 2.141 0 102.141 2.141 2.144 2.144 0 00-2.141-2.141zm0 2.855a.714.714 0 11.714-.714.715.715 0 01-.714.714z"
                />
                <Path
                    data-name="Path 2985"
                    d="M4.996 46.276a2.141 2.141 0 102.01 2.855h8.829a2.141 2.141 0 100-1.428H7.007a2.138 2.138 0 00-2.011-1.427zm0 2.855a.714.714 0 11.714-.714.715.715 0 01-.714.714zm12.849-1.428a.714.714 0 11-.714.714.715.715 0 01.714-.713z"
                />
            </G>
        </Svg>
    )
}

export default DistanceIcon
