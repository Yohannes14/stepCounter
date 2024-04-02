import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Svg, { Circle, Rect } from 'react-native-svg';

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
                    cx={radius}
                    cy={radius}
                    r={innerRadius}
                    // fill={'blue'}
                    strokeWidth={strokeWidth}
                    stroke={color}
                    opacity={0.2}
                />
                {/* Foreground */}
                <Circle
                    cx={radius}
                    cy={radius}
                    originX={radius}
                    originY={radius}
                    r={innerRadius}
                    // fill={'blue'}
                    strokeWidth={strokeWidth}
                    stroke={color}
                    strokeDasharray={[circumference * progress, circumference]}
                    strokeLinecap='round'
                    rotation="-90"
                />
            </Svg>

        </View>
    )
}

export default RingProgress

const styles = StyleSheet.create({})