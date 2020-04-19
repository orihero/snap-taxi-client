import * as React from "react"
import Svg, {G, Path} from "react-native-svg"

function StarIcon(props) {
    return (
        <Svg
            data-name="Group 10127"
            width={12.536}
            height={12.014}
            viewBox="0 0 12.536 12.014"
            {...props}
        >
            <G data-name="Group 10122">
                <Path
                    data-name="Path 2609"
                    d="M12.501 4.535a.665.665 0 00-.574-.458l-3.618-.329L6.878.399a.666.666 0 00-1.225 0L4.222 3.747l-3.619.329a.667.667 0 00-.378 1.166l2.735 2.4-.806 3.553a.665.665 0 00.991.72l3.121-1.865 3.12 1.865a.666.666 0 00.991-.72L9.57 7.642l2.735-2.4a.667.667 0 00.2-.708zm0 0"
                    fill={props.color || "#cacacf"}
                />
            </G>
        </Svg>
    )
}

export default StarIcon
