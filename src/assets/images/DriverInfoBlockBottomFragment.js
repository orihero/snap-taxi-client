import * as React from "react"
import Svg, {Defs, ClipPath, Path, G} from "react-native-svg"
import Colors from "../styles/Colors";

function DriverInfoBlockBottomFragment(props) {
    return (
        <Svg width={63} height={14} viewBox="0 0 63 14" {...props}>
            <Defs>
                <ClipPath id="prefix__a">
                    <Path
                        data-name="Rectangle 1999"
                        transform="translate(7466 4914)"
                        fill="none"
                        d="M0 0h63v14H0z"
                    />
                </ClipPath>
            </Defs>
            <G
                data-name="Mask Group 4"
                transform="translate(-7466 -4914)"
                clipPath="url(#prefix__a)"
            >
                <G data-name="Group 10204">
                    <G data-name="Path 2824" fill="#fbf9f9">
                        <Path d="M7497.46 4926h-.089c-4.643-.008-9.146-.682-13.385-2.002a42.075 42.075 0 01-9.597-4.363c-5.054-3.121-7.636-6.238-7.662-6.269l-.3-.366H7340c-3.74 0-7.255-1.456-9.9-4.1a13.908 13.908 0 01-4.1-9.9v-44c0-3.74 1.456-7.255 4.1-9.9a13.908 13.908 0 019.9-4.1h313c3.74 0 7.255 1.456 9.9 4.1a13.908 13.908 0 014.1 9.9v44c0 3.74-1.456 7.255-4.1 9.9a13.909 13.909 0 01-9.9 4.1h-125.057l-.3.381c-.025.031-2.56 3.199-7.534 6.32a40.423 40.423 0 01-9.42 4.332c-4.172 1.305-8.623 1.967-13.229 1.967z" />
                        <Path
                            d="M7340 4842a12.915 12.915 0 00-9.192 3.808A12.915 12.915 0 007327 4855v44c0 3.472 1.352 6.737 3.808 9.192A12.915 12.915 0 007340 4912h126.901l.6.732c.024.03 2.5 3.017 7.414 6.052a41.072 41.072 0 009.368 4.26c4.143 1.29 8.548 1.948 13.09 1.956h.087c4.484 0 8.815-.64 12.873-1.904a39.443 39.443 0 009.17-4.194c4.853-3.032 7.332-6.112 7.354-6.14l.594-.762H7653c3.472 0 6.737-1.352 9.192-3.808A12.915 12.915 0 007666 4899v-44c0-3.472-1.352-6.737-3.808-9.192A12.915 12.915 0 007653 4842h-313m0-2h313c8.284 0 15 6.716 15 15v44c0 8.284-6.716 15-15 15h-124.572s-10.236 13-30.968 13h-.09c-20.794-.038-31.416-13-31.416-13H7340c-8.284 0-15-6.716-15-15v-44c0-8.284 6.716-15 15-15z"
                            fill="#fff"
                        />
                    </G>
                </G>
            </G>
        </Svg>
    )
}

export default DriverInfoBlockBottomFragment
