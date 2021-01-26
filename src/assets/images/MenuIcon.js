import * as React from "react"
import Svg, {G, Path, Circle} from "react-native-svg"
import {useSelector} from "react-redux";

function MenuIcon(props) {

    const active = useSelector(state => state.user.notifications.unread);

    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={26}
            viewBox="0 0 20 22"
            {...props}
        >
            <G data-name="Group 10186" transform="translate(-16 -54)">
                <Path
                    data-name="Rectangle 175"
                    fill="none"
                    d="M16 54h16v16H16z"
                />
                <Path
                    data-name="Union 4"
                    d="M16 69v-2h8v2zm0-6v-2h16v2zm0-6v-2h16v2z"
                    fill="#2a2939"
                />
                {
                    !!active &&
                    <Circle
                        data-name="Ellipse 353"
                        cx={5.5}
                        cy={5.5}
                        r={5.5}
                        transform="translate(25 65)"
                        fill={"#32abe0"}
                    />
                }
            </G>
        </Svg>
    )
}

export default MenuIcon
