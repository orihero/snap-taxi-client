import * as React from "react"
import Svg, {Defs, ClipPath, Path, G} from "react-native-svg"

function DriverInfoBlockBottomFragment(props) {
    return (
        <Svg width={62.583} height={13.417} viewBox="0 0 62.583 13.417" {...props}>
            <Defs>
                <ClipPath id="prefix__a">
                    <Path
                        data-name="Path 12592"
                        d="M0 0h62.583v13.417H0z"
                        transform="translate(8238.886 5306.938)"
                        fill="none"
                    />
                </ClipPath>
            </Defs>
            <G
                data-name="Mask Group 4"
                transform="translate(-8238.886 -5306.938)"
                clipPath="url(#prefix__a)"
            >
                <G data-name="Group 10204">
                    <Path
                        data-name="Path 2824"
                        d="M8113 5233h313a15 15 0 0115 15v44a15 15 0 01-15 15h-124.572s-10.265 13.038-31.059 13-31.415-13-31.415-13H8113a15 15 0 01-15-15v-44a15 15 0 0115-15z"
                        fill="#fff"
                    />
                </G>
            </G>
        </Svg>
    )
}

export default DriverInfoBlockBottomFragment
