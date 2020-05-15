import * as React from "react"
import Svg, {G, Path, ClipPath, Defs} from "react-native-svg";

function HomeIcon(props) {
    return (
        <Svg width={23.603} height={22} viewBox="0 0 23.603 22" {...props}>
            <Defs>
                <ClipPath id="prefix__a">
                    <Path fill="#323637" d="M0 0h23.603v22H0z"/>
                </ClipPath>
            </Defs>
            <G clipPath="url(#prefix__a)">
                <Path
                    fill="#323637"
                    d="M23.169 9.916l-3.571-3.571V2.219a1.351 1.351 0 00-2.7 0v1.424L14.239.984a3.554 3.554 0 00-4.912 0l-8.93 8.93a1.351 1.351 0 101.911 1.91l8.929-8.93a.8.8 0 011.093 0l8.93 8.931a1.351 1.351 0 101.911-1.91zm0 0"
                />
            </G>
            <Path
                fill="#323637"
                d="M12.251 5.46a.663.663 0 00-.938 0l-7.851 7.853a.664.664 0 00-.194.47v5.727a2.434 2.434 0 002.433 2.433H9.59V15.92h4.39v6.023h3.882a2.433 2.433 0 002.433-2.433v-5.727a.662.662 0 00-.194-.47zm0 0"
            />
        </Svg>
    )
}

export default HomeIcon
