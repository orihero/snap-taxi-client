import React from 'react';
import Svg, {Path} from "react-native-svg";

const CloudIcon = ({width, height, style}) => {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 109 60.582"
             style={{...style, position: 'absolute'}}>
            <Path
                fill='#fff'
                fill-rule='evenodd'
                opacity='0.1'
                d="M1179.342,303.6a15.491,15.491,0,0,0,0,30.981h71.522a21.959,21.959,0,1,0-12.555-39.954,30.249,30.249,0,0,0-58.919,8.975h-.048"
                transform="translate(-1163.852 -273.994)"
            />
        </Svg>
    );
};

export default CloudIcon;