import * as React from "react"
import Svg, {
    Defs,
    LinearGradient,
    Stop,
    ClipPath,
    Path,
    G,
} from "react-native-svg"
import {View} from "react-native";

function GradientBackground(props) {
    return (
        <View pointerEvents={'none'}>
            <Svg width={985} height={200} viewBox="0 0 985 344" {...props}>
                <Defs>
                    <LinearGradient
                        id="prefix__b"
                        x1={0.5}
                        x2={0.519}
                        y2={0.396}
                        gradientUnits="objectBoundingBox"
                    >
                        <Stop offset={0} stopColor="#fff"/>
                        <Stop offset={1} stopColor="#fff" stopOpacity={0}/>
                    </LinearGradient>
                    <ClipPath id="prefix__a">
                        <Path
                            data-name="Rectangle 2001"
                            transform="translate(5333 3904)"
                            fill="none"
                            d="M0 0h985v344H0z"
                        />
                    </ClipPath>
                </Defs>
                <G
                    data-name="Mask Group 4"
                    transform="translate(-5333 -3904)"
                    clipPath="url(#prefix__a)"
                >
                    <Path
                        data-name="Gradient map"
                        transform="translate(5333 3904)"
                        fill="url(#prefix__b)"
                        d="M0 0h985v851H0z"
                    />
                </G>
            </Svg>
        </View>
    )
}

export default GradientBackground
