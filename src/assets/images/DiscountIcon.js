import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function DiscountIcon(props) {
    return (
        <Svg width={30.972} height={32.278} viewBox="0 0 30.972 32.278" {...props}>
            <G data-name="Group 10763" fill={props.color || '#32abe0'}>
                <Path
                    data-name="Path 12470"
                    d="M29.478 16.557a.945.945 0 010-.836l1.2-2.463a2.8 2.8 0 00-1.205-3.721l-2.421-1.285a.946.946 0 01-.491-.676l-.474-2.7a2.8 2.8 0 00-3.165-2.3l-2.714.384a.946.946 0 01-.8-.258L17.443.801a2.8 2.8 0 00-3.912 0l-1.972 1.9a.946.946 0 01-.8.258l-2.714-.384a2.8 2.8 0 00-3.165 2.3l-.474 2.7a.946.946 0 01-.491.676L1.498 9.537a2.8 2.8 0 00-1.209 3.721l1.2 2.463a.945.945 0 010 .836l-1.2 2.463a2.8 2.8 0 001.209 3.721l2.421 1.285a.946.946 0 01.491.676l.474 2.7a2.8 2.8 0 002.759 2.328 2.879 2.879 0 00.4-.028l2.714-.384a.946.946 0 01.8.258l1.97 1.906a2.8 2.8 0 003.912 0l1.97-1.906a.947.947 0 01.8-.258l2.714.384a2.8 2.8 0 003.165-2.3l.474-2.7a.946.946 0 01.491-.676l2.42-1.285a2.8 2.8 0 001.209-3.721zm-17.716-8.8a3.413 3.413 0 11-3.413 3.413 3.417 3.417 0 013.413-3.408zM10.001 22.94a.931.931 0 01-1.316-1.316L20.971 9.338a.931.931 0 111.316 1.316zm9.208 1.576a3.413 3.413 0 113.413-3.415 3.417 3.417 0 01-3.413 3.415z"
                />
                <Path
                    data-name="Path 12471"
                    d="M19.206 19.552a1.551 1.551 0 101.551 1.551 1.553 1.553 0 00-1.551-1.551z"
                />
                <Path
                    data-name="Path 12472"
                    d="M11.762 12.726a1.551 1.551 0 10-1.551-1.551 1.553 1.553 0 001.551 1.551z"
                />
            </G>
        </Svg>
    )
}

export default DiscountIcon
