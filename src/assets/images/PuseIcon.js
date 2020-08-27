import * as React from "react"
import Svg, {
    Defs,
    LinearGradient,
    Stop,
    G,
    Circle,
    Path,
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function PulseIcon(props) {
    return (
        <Svg width={86} height={86} viewBox="0 0 86 86" {...props}>
            <Defs>
                <LinearGradient
                    id="prefix__b"
                    x1={-0.125}
                    y1={-0.563}
                    x2={0.5}
                    y2={1}
                    gradientUnits="objectBoundingBox"
                >
                    <Stop offset={0} stopColor="#32abe0" />
                    <Stop offset={1} stopColor="#32abe0" stopOpacity={0} />
                </LinearGradient>
            </Defs>
            <G data-name="\u0421\u0433\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C 10172">
                <G filter="url(#prefix__a)">
                    <G
                        data-name="\u042D\u043B\u043B\u0438\u043F\u0441 363"
                        transform="translate(32 32)"
                        fill="#fbf9f9"
                        stroke="#32abe0"
                        strokeWidth={2}
                    >
                        {/*<Circle cx={11} cy={11} r={11} stroke="none" />*/}
                        <Circle cx={11} cy={11} r={10} fill="none" />
                    </G>
                </G>
                <G
                    data-name="\u042D\u043B\u043B\u0438\u043F\u0441 355"
                    transform="translate(18 18)"
                    fill="none"
                    stroke="#32abe0"
                    opacity={0.49}
                >
                    <Circle cx={25} cy={25} r={25} stroke="none" />
                    <Circle cx={25} cy={25} r={24.5} />
                </G>
                <G
                    data-name="\u042D\u043B\u043B\u0438\u043F\u0441 364"
                    fill="none"
                    stroke="#32abe0"
                    opacity={0.49}
                >
                    <Circle cx={43} cy={43} r={43} stroke="none" />
                    <Circle cx={43} cy={43} r={42.5} />
                </G>
                <Path
                    data-name="\u0412\u044B\u0447\u0438\u0442\u0430\u043D\u0438\u0435 1"
                    d="M-5652.5-5430.1h-.5v-42.4l.5.8 41.415-10.489a42.73 42.73 0 011.085 9.589 42.227 42.227 0 01-3.34 16.542 42.346 42.346 0 01-9.108 13.509 42.356 42.356 0 01-13.509 9.108 42.229 42.229 0 01-16.543 3.341z"
                    transform="translate(5695.5 5515.604)"
                    fill="url(#prefix__b)"
                />
            </G>
        </Svg>
    )
}

export default PulseIcon;
