import * as React from "react"
import Svg, { Defs, G, Circle } from "react-native-svg"

function CurrentLocationIcon(props) {
    return (
        <Svg width={86} height={86} viewBox="0 0 86 86" {...props}>
            <Defs></Defs>
            <G data-name="\u0421\u0433\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C 10172">
                <G filter="url(#prefix__a)">
                    <G
                        data-name="\u042D\u043B\u043B\u0438\u043F\u0441 363"
                        transform="translate(32 32)"
                        fill="#fbf9f9"
                        stroke="#32abe0"
                        strokeWidth={2}
                    >
                        <Circle cx={11} cy={11} r={11} stroke="none" />
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
            </G>
        </Svg>
    )
}

export default CurrentLocationIcon;
