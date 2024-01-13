import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import type { ICarouselInstance } from "react-native-reanimated-carousel";
import { useSharedValue } from "react-native-reanimated";

import { window } from "../constants";
import { SBItem } from "./SBItem";

const PAGE_WIDTH = window.width;

type CarouselItemProps = {
  source: any;
};

// Individual item component for the carousel
const CarouselItem: React.FC<CarouselItemProps> = ({ source }) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={source} style={styles.image} resizeMode="contain" />
    </View>
  );
};

type CustomCarouselProps = {
  images: any[];
};

const CustomCarousel: React.FC<CustomCarouselProps> = ({ images }) => {
  const windowWidth = useWindowDimensions().width;
  const scrollOffsetValue = useSharedValue<number>(0);
  const [isVertical, setIsVertical] = React.useState(false);
  const ref = React.useRef<ICarouselInstance>(null);

  const baseOptions = isVertical
    ? ({
        vertical: true,
        width: windowWidth,
        height: PAGE_WIDTH / 2,
      } as const)
    : ({
        vertical: false,
        width: windowWidth,
        height: PAGE_WIDTH / 2,
      } as const);

  return (
    <Carousel
      {...baseOptions}
      loop={true}
      ref={ref}
      defaultScrollOffsetValue={scrollOffsetValue}
      data={images}
      renderItem={({ index }) => <SBItem key={index} index={index} />}
      autoPlay={false}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: PAGE_WIDTH,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default CustomCarousel;
