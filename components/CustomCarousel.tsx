import * as React from "react";
import { useWindowDimensions } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";

import { window } from "../constants";
import { CustomCarouselItem } from "./CustomCarouselItem";

const PAGE_HEIGHT = window.height;
const PAGE_WIDTH = window.width;

type CustomCarouselProps = {
  images: any[];
};

const CustomCarousel: React.FC<CustomCarouselProps> = ({ images }) => {
  const windowWidth = useWindowDimensions().width;
  const scrollOffsetValue = useSharedValue<number>(0);
  const [isVertical, setIsVertical] = React.useState(false);

  const baseOptions = isVertical
    ? ({
        vertical: true,
        width: windowWidth,
        height: PAGE_WIDTH * 0.5,
      } as const)
    : ({
        vertical: false,
        width: windowWidth,
        height: PAGE_HEIGHT * 0.7,
      } as const);

  return (
    <Carousel
      {...baseOptions}
      loop={false}
      defaultScrollOffsetValue={scrollOffsetValue}
      data={images}
      renderItem={({ index, item }) => (
        <CustomCarouselItem index={index} img={item} />
      )}
    />
  );
};

export default CustomCarousel;
