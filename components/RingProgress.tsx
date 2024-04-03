import { StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import Svg, { Circle, CircleProps } from 'react-native-svg';
import Animated, {
    useAnimatedProps,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';
import { AntDesign } from '@expo/vector-icons';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

type RingProgrssProps = {
    radius?: number,
    strokeWidth?: number,
    progress: number
}

const color = "#EE0F55";

const RingProgress = ({
    radius = 100,
    strokeWidth = 35,
    progress
}: RingProgrssProps) => {

    const innerRadius = radius - strokeWidth / 2;
    const circumference = 2 * Math.PI * innerRadius;
    const fill = useSharedValue(0);

    useEffect(() => {
        fill.value = withTiming(progress, { duration: 1500 });

    }, [progress])

    const animatedProps = useAnimatedProps(() => ({
        strokeDasharray: [circumference * fill.value, circumference],

    }));

    const circleDefaultProps: CircleProps = {
        cx: radius,
        cy: radius,
        originX: radius,
        originY: radius,
        r: innerRadius,
        strokeWidth: strokeWidth,
        stroke: color,
        strokeLinecap: 'round',
    }



    return (
        <View style={{
            width: radius * 2,
            height: radius * 2,
            alignSelf: 'center',
            //backgroundColor:'green',
        }}>
            <Svg>
                {/* Backround */}
                <Circle
                    {...circleDefaultProps}
                    opacity={0.2}
                />
                {/* Foreground */}
                <AnimatedCircle
                    animatedProps={animatedProps}
                    {...circleDefaultProps}
                    rotation="-90"
                />
            </Svg>
            <AntDesign
                name='arrowright'
                size={strokeWidth * 0.8}
                color={'black'}
                style={{
                    position: 'absolute',
                    alignSelf: 'center',
                    top: strokeWidth * 0.1
                }}
            />

        </View>
    )
}

export default RingProgress

const styles = StyleSheet.create({})