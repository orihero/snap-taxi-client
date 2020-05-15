import * as React from "react"
import Svg, { Defs, LinearGradient, Stop, G, Path } from "react-native-svg"

function EmptyWalletIcon(props) {
    return (
        <Svg width={21.507} height={19.352} viewBox="0 0 21.507 19.352" {...props}>
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
                data-name="Group 10283"
                transform="translate(-113.5 -224.5)"
                stroke="rgba(0,0,0,0)"
                fill="url(#prefix__a)"
            >
                <Path
                    data-name="Path 2979"
                    d="M132.486 227.554a2.772 2.772 0 00-2.76-2.554h-12.957a2.772 2.772 0 00-2.769 2.769v12.813a2.772 2.772 0 002.769 2.769h14.968a2.772 2.772 0 002.769-2.769v-10.363a2.774 2.774 0 00-2.021-2.666zm-15.717-1.26h12.957a1.478 1.478 0 011.44 1.156h-14.4a2.751 2.751 0 00-1.475.427v-.108a1.477 1.477 0 011.475-1.475zm14.968 15.764h-14.968a1.477 1.477 0 01-1.475-1.475v-10.364a1.477 1.477 0 011.475-1.476h14.968a1.477 1.477 0 011.476 1.476v2.257h-4.125a2.964 2.964 0 100 5.929h4.125v2.177a1.477 1.477 0 01-1.475 1.475zm1.475-4.946h-4.125a1.671 1.671 0 010-3.341h4.125zm0 0"
                />
                <Path
                    data-name="Path 2980"
                    d="M130.002 235.49a.673.673 0 11-.673-.673.674.674 0 01.673.673zm0 0"
                />
            </G>
        </Svg>
    )
}

export default EmptyWalletIcon
