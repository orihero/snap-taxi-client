import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SmokeIcon({color="#000", ...restPops}) {
    return (
        <Svg width={24} height={20.53} viewBox="0 0 24 20.53" {...restPops}>
            <Path
                fill={color}
                data-name="Path 3513"
                d="M0 16.907h18v3.626H0zm22.2 0H24v3.626h-1.8zm-3 0H21v3.626h-1.8zm1.02-9.987A4.045 4.045 0 0017.4 0v1.812a2.234 2.234 0 010 4.468v1.812a4.833 4.833 0 014.8 4.915V15.7H24V13a6.713 6.713 0 00-3.78-6.081zm-3.387 2.977H15v.006a2.393 2.393 0 01-2.22-2.415A2.129 2.129 0 0115 5.375V3.563a4.046 4.046 0 000 8.091v-.006h1.833a2.325 2.325 0 012.367 2.485v1.57H21v-1.99a3.993 3.993 0 00-4.167-3.816z"
            />
        </Svg>
    )
}

export default SmokeIcon
