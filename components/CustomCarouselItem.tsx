import React from "react";
import type {
  StyleProp,
  ViewProps,
  ViewStyle,
  ImageURISource,
  ImageSourcePropType,
} from "react-native";
import { Image, StyleSheet, View } from "react-native";
import { LongPressGestureHandler } from "react-native-gesture-handler";
import type { AnimateProps } from "react-native-reanimated";
import Animated from "react-native-reanimated";

interface Props extends AnimateProps<ViewProps> {
  style?: StyleProp<ViewStyle>;
  index?: number;
  pretty?: boolean;
  img?: ImageSourcePropType;
}

export const CustomCarouselItem: React.FC<Props> = (props) => {
  const { style, index, pretty, img, ...animatedViewProps } = props;
  const source = React.useRef<ImageURISource>({
    uri: `https://picsum.photos/id/${index}/400/300`,
  }).current;

  return (
    <LongPressGestureHandler>
      <Animated.View style={{ flex: 1 }} {...animatedViewProps}>
        <View style={[styles.container, style]}>
          <Image key={index} style={styles.image} source={img ?? source} />
        </View>
      </Animated.View>
    </LongPressGestureHandler>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
});
