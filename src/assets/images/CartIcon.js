import * as React from "react"
import Svg, { G, Path, Circle } from "react-native-svg"

function CartIcon(props) {
    return (
        <Svg width={21.756} height={21.756} viewBox="0 0 21.756 21.756" {...props}>
            <G
                data-name="Group 10844"
                transform="translate(-21.333 -21.333)"
                fill="#323637"
            >
                <Path
                    data-name="Path 12587"
                    d="M41.5 23.311H25.289a.484.484 0 00-.139.032l-.4-1.309a.989.989 0 00-.946-.7h-1.977a.494.494 0 00-.494.494v.989a.494.494 0 00.494.494h1.245l3.089 10.152-1.154 1.346a2.061 2.061 0 00-.451 1.934 1.966 1.966 0 001.893 1.4h14.168a.494.494 0 00.494-.494v-.989a.494.494 0 00-.494-.494H26.45l1.567-1.829a.976.976 0 00.1-.149H37.7a1.978 1.978 0 001.79-1.136l3.45-7.332a1.605 1.605 0 00.151-.677V24.9a1.592 1.592 0 00-1.591-1.589z"
                />
                <Circle
                    data-name="Ellipse 404"
                    cx={1.978}
                    cy={1.978}
                    r={1.978}
                    transform="translate(25.289 39.133)"
                />
                <Circle
                    data-name="Ellipse 405"
                    cx={1.978}
                    cy={1.978}
                    r={1.978}
                    transform="translate(37.156 39.133)"
                />
            </G>
        </Svg>
    )
}

export default CartIcon
