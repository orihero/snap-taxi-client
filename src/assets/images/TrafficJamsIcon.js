import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function TrafficJamsIcon({color = '#32abe0', ...restProps}) {
    return (
        <Svg width={30.041} height={30.041} viewBox="0 0 30.041 30.041" {...restProps}>
            <G data-name="Group 10761" fill={color}>
                <Path
                    data-name="Path 12464"
                    d="M30.041 17.661h-2.065l-1.76-5.281h-6.8V5.339h-2L15.657 0H3.823l-1.76 5.339H0v8.8h1.819v3.52H7.1v-3.52h6.7l-1.173 3.52H10.62v8.8h1.76v3.579h5.281v-3.579h5.281v3.579h5.281v-3.579h1.819zM5.1 1.76h9.288l1.18 3.579H3.916zm.244 14.14h-1.76v-1.76h1.76zm-3.579-3.52V7.1h15.9v5.281zm13.895 1.76h9.293l1.173 3.52H14.481zm.246 14.14h-1.76v-1.819h1.76zm10.561 0H24.7v-1.819h1.76zm1.819-3.579h-15.9V19.42h15.9zm0 0"
                />
                <Path data-name="Rectangle 1919" d="M14.14 21.181h1.76v1.76h-1.76z" />
                <Path data-name="Rectangle 1920" d="M24.702 21.181h1.76v1.76h-1.76z" />
                <Path
                    data-name="Rectangle 1921"
                    d="M17.661 21.181h5.281v1.76h-5.281z"
                />
                <Path data-name="Rectangle 1922" d="M3.579 8.86h1.76v1.76h-1.76z" />
                <Path data-name="Rectangle 1923" d="M14.14 8.86h1.76v1.76h-1.76z" />
                <Path data-name="Rectangle 1924" d="M7.1 8.86h5.281v1.76H7.1z" />
            </G>
        </Svg>
    )
}

export default TrafficJamsIcon
