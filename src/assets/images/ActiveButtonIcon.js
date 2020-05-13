import * as React from "react"
import Svg, { Defs, ClipPath, Rect, G } from "react-native-svg"

function ActiveButtonIcon(props) {
    return (
        <Svg width={56} height={56} viewBox="0 0 56 56" {...props}>
            <Defs>
                <ClipPath id="prefix__a">
                    <Rect
                        width={56}
                        height={56}
                        rx={28}
                        fill="none"
                        stroke="#707070"
                        transform="translate(360 255.517)"
                    />
                </ClipPath>
            </Defs>
            <G data-name="Group 10208">
                <G
                    data-name="Component 2 \u2013 pressed button"
                    transform="translate(-360 -255.517)"
                    clipPath="url(#prefix__a)"
                    fill="none"
                >
                    <G transform="translate(348.8 245.335)" stroke="#fff" strokeWidth={4}>
                        <Rect width={65} height={65} rx={32.5} stroke="none" />
                        <Rect x={2} y={2} width={61} height={61} rx={30.5} />
                    </G>
                    <G
                        transform="translate(360 255.517)"
                        stroke="rgba(88,108,138,0.5)"
                        strokeWidth={3}
                    >
                        <Rect width={65} height={65} rx={32.5} stroke="none" />
                        <Rect x={1.5} y={1.5} width={62} height={62} rx={31} />
                    </G>
                </G>
            </G>
        </Svg>
    )
}

export default ActiveButtonIcon
