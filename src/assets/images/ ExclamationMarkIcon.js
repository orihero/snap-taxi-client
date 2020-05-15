import * as React from "react"
import Svg, {Path} from "react-native-svg"

function ExclamationMarkIcon(props) {
    return (
        <Svg width={4.773} height={16.655} viewBox="0 0 4.773 16.655" {...props}>
            <Path
                data-name="Path 2975"
                d="M4.751 0l-.405 10.916H.438L.038 0zM2.392 16.655a2.391 2.391 0 01-1.7-.649 2.1 2.1 0 01-.7-1.595 2.087 2.087 0 01.7-1.585 2.391 2.391 0 011.7-.651 2.4 2.4 0 011.685.651 2.087 2.087 0 01.7 1.583 2.1 2.1 0 01-.7 1.597 2.4 2.4 0 01-1.685.649z"
                fill={props.active ? '#FFAA01' : "#c1c1cc"}
            />
        </Svg>
    )
}

export default ExclamationMarkIcon
