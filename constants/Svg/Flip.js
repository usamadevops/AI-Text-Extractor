import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Flip = (props) => (
  <Svg
    width={26}
    height={26}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12.954 16.83c-1.076 0-1.99-.377-2.744-1.13-.754-.754-1.13-1.67-1.13-2.746s.376-1.99 1.13-2.744c.753-.754 1.668-1.13 2.744-1.13 1.077 0 1.992.376 2.745 1.13.754.753 1.13 1.668 1.13 2.744 0 1.077-.376 1.992-1.13 2.745-.753.754-1.668 1.13-2.745 1.13ZM1.33 10.37c-.366 0-.672-.124-.92-.372a1.247 1.247 0 0 1-.371-.92V3.913c0-.366.124-.673.372-.921.247-.247.553-.371.92-.371.365 0 .672.124.92.37.248.249.371.556.371.922v1.291a12.75 12.75 0 0 1 4.553-3.81 12.75 12.75 0 0 1 5.78-1.356c2.799 0 5.307.807 7.524 2.422 2.218 1.614 3.778 3.713 4.683 6.296.15.431.102.808-.146 1.13-.247.324-.619.485-1.114.485-.236 0-.473-.092-.71-.275a1.668 1.668 0 0 1-.517-.63 10.151 10.151 0 0 0-3.746-4.955c-1.765-1.26-3.756-1.89-5.974-1.89-1.851 0-3.573.457-5.166 1.372a9.84 9.84 0 0 0-3.746 3.795h2.454c.366 0 .673.123.921.37.247.248.37.555.37.921s-.123.673-.37.92a1.25 1.25 0 0 1-.92.372H1.328Zm11.625 15.5c-2.798 0-5.306-.807-7.524-2.422-2.217-1.614-3.778-3.713-4.682-6.297-.15-.43-.102-.807.146-1.13.247-.323.618-.484 1.114-.484.236 0 .473.091.71.274.237.183.409.393.517.63a10.159 10.159 0 0 0 3.745 4.957c1.766 1.26 3.757 1.889 5.974 1.889 1.852 0 3.574-.457 5.167-1.372a9.841 9.841 0 0 0 3.746-3.795h-2.454c-.366 0-.673-.124-.92-.372a1.247 1.247 0 0 1-.372-.92c0-.366.124-.673.372-.92.247-.248.554-.371.92-.371h5.166c.366 0 .673.123.92.37.248.248.372.555.372.921v5.167c0 .366-.124.673-.372.92a1.247 1.247 0 0 1-.92.372c-.366 0-.672-.124-.92-.372a1.246 1.246 0 0 1-.371-.92v-1.292a12.75 12.75 0 0 1-4.553 3.81 12.75 12.75 0 0 1-5.78 1.357Z"
      fill="#000"
    />
  </Svg>
)

export default Flip