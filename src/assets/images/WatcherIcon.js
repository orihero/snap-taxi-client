import React from 'react';
import Svg, {G, Path} from "react-native-svg";

const WatcherIcon = () => {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width="18.565" height="22.288" viewBox="0 0 18.565 22.288">
            <G transform="translate(-144.156 -203.913)">
                <G transform="translate(144.156 203.913)">
                    <G transform="translate(0 0)">
                        <Path fill='#2a2939'
                              d="M161.027,210.632l1.334-1.334-1.313-1.313-1.427,1.427a9.223,9.223,0,0,0-4.415-1.652v-1.9h1.856V204h-5.569v1.856h1.856v1.9a9.223,9.223,0,0,0-4.415,1.652l-1.427-1.427L146.2,209.3l1.334,1.334a9.283,9.283,0,1,0,13.5,0Zm-6.748,13.79A7.426,7.426,0,1,1,161.7,217a7.426,7.426,0,0,1-7.426,7.426Zm0,0"
                              transform="translate(-144.996 -204)"/>
                    </G>
                </G>
                <Path fill='#32abe0'
                      className="b" d="M214.569,332v5.569H209A5.569,5.569,0,1,0,214.569,332Zm0,0"
                      transform="translate(-61.131 -120.661)"/>
            </G>
        </Svg>
    );
};

export default WatcherIcon;