import * as React from "react"
import {View, StyleSheet} from "react-native"
import Svg, {Defs, ClipPath, Path, G} from "react-native-svg"
import Colors from "../styles/Colors";

function BottomMenuCurve(props) {
    return (
        <View style={{
            width: props.width,
            flexDirection: 'row',
            justifyContent: 'center',
            alignSelf: 'center',
            marginBottom: -1
        }}>
            <View style={{
                height: 15.224,
                flex: 1,
                borderTopLeftRadius: 15,
                borderColor: '#fff',
                borderTopWidth: 2,
                borderLeftWidth: 2,
                backgroundColor: Colors.background
            }}/>
            <Svg width={70.508} height={15.224} viewBox="0 0 70.508 15.224">
                <View style={{position: 'absolute', backgroundColor: Colors.background, height: 15.224, left: 0, width: 1}}/>
                <View style={{position: 'absolute', backgroundColor: Colors.background, height: 15.224, right: 0, width: 1}}/>
                <Defs>
                    <ClipPath id="prefix__a">
                        <Path
                            data-name="Path 12591"
                            d="M0 0h70.508v15.224H0z"
                            transform="translate(6379.899 7382.494)"
                            fill="none"
                            stroke="#fff"
                        />
                    </ClipPath>
                </Defs>
                <G
                    data-name="Mask Group 4"
                    transform="translate(-6379.899 -7382.494)"
                    clipPath="url(#prefix__a)"
                >
                    <G data-name="Path 2971" fill={Colors.background}>
                        <Path
                            d="M6571 7619h-313c-3.74 0-7.257-1.447-9.902-4.075a13.769 13.769 0 01-4.098-9.83V7397.4c0-3.713 1.455-7.204 4.098-9.83a13.956 13.956 0 019.902-4.076h122.564c1.004.905 4.448 3.853 9.787 6.83 5.797 3.231 15 7.083 25.934 7.083h.086c10.974-.02 19.56-3.882 24.831-7.119 4.76-2.922 7.702-5.82 8.628-6.794H6571c3.74 0 7.257 1.447 9.902 4.075a13.769 13.769 0 014.098 9.831v207.694c0 3.713-1.455 7.205-4.098 9.831A13.956 13.956 0 016571 7619z"/>
                        <Path
                            d="M6571 7618c3.475 0 6.741-1.344 9.197-3.784a12.776 12.776 0 003.803-9.122V7397.4c0-3.445-1.35-6.684-3.803-9.121a12.962 12.962 0 00-9.197-3.785h-120.747c-1.213 1.228-4.113 3.936-8.528 6.646-5.38 3.304-14.146 7.246-25.353 7.266h-.087c-11.148 0-20.52-3.92-26.42-7.209-4.987-2.78-8.364-5.55-9.68-6.703H6258a12.962 12.962 0 00-9.197 3.785 12.776 12.776 0 00-3.803 9.121v207.694c0 3.445 1.35 6.685 3.803 9.122A12.962 12.962 0 006258 7618h313m0 2h-313c-8.284 0-15-6.673-15-14.906V7397.4c0-8.232 6.716-14.906 15-14.906h122.954s14.582 13.913 35.33 13.913h.085c20.794-.038 33.025-13.913 33.025-13.913H6571c8.284 0 15 6.674 15 14.906v207.694c0 8.233-6.716 14.906-15 14.906z"
                            fill='#fff'
                        />
                    </G>
                </G>
            </Svg>
            <View style={{
                height: 15.224,
                flex: 1,
                borderTopRightRadius: 15,
                borderColor: '#fff',
                borderTopWidth: 2,
                borderRightWidth: 2,
                backgroundColor: Colors.background
            }}/>
        </View>
    )
}

export default BottomMenuCurve
