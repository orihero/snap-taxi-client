import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function CancelIcon(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={14}
      viewBox="0 0 14 14"
      {...props}>
      <Path
        d="M14 1.41L12.59 0 7 5.59 1.41 0 0 1.41 5.59 7 0 12.59 1.41 14 7 8.41 12.59 14 14 12.59 8.41 7z"
        fill="#1c1c1e"
        data-name="Icon/close"
      />
    </Svg>
  );
}

export default CancelIcon;
