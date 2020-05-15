import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function CardIcon({color="#323637", ...restPops}) {
    return (
        <Svg width={30.009} height={22.569} viewBox="0 0 30.009 22.569" {...restPops}>
            <G data-name="Group 10846" fill={color}>
                <G data-name="Group 10845">
                    <Path
                        data-name="Path 12588"
                        d="M27.263 7.207H11.678a2.756 2.756 0 00-2.746 2.746v9.87a2.756 2.756 0 002.746 2.746h15.584a2.756 2.756 0 002.746-2.746v-9.87a2.748 2.748 0 00-2.746-2.746zm1.268 12.654a1 1 0 01-1 1H11.647a1 1 0 01-1-1v-6.945h17.879zm0-9.561h-17.88v-.377a1 1 0 011-1h15.888a1 1 0 011 1zm0 0"
                    />
                    <Path
                        data-name="Path 12589"
                        d="M11.48 5.512h9.666L19.18 1.529A2.751 2.751 0 0015.494.286L1.53 7.186a2.752 2.752 0 00-1.243 3.686l4.379 8.85a2.751 2.751 0 003.185 1.435 4.136 4.136 0 01-.581-2.121V9.728a4.222 4.222 0 014.212-4.218zm0 0"
                    />
                </G>
                <Path
                    data-name="Path 12590"
                    d="M13.465 19.785a1.759 1.759 0 001.348-.625 1.781 1.781 0 100-2.313 1.779 1.779 0 10-1.348 2.938zm0 0"
                />
            </G>
        </Svg>
    )
}

export default CardIcon
