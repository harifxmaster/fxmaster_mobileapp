// src/components/CustomTabBarBackground.js
import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { View, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const tabHeight = 70;
const curveWidth = 130;
const curveDepth = 42;

const CustomTabBarBackground = () => {
  const left = (width - curveWidth) / 2;

  const d = `
    M0 0 
    H${left}
    C${left + 30} 0, ${left + 20} ${curveDepth}, ${left + curveWidth / 2} ${curveDepth}
    C${left + curveWidth - 20} ${curveDepth}, ${left + curveWidth - 30} 0, ${left + curveWidth} 0
    H${width}
    V${tabHeight}
    H0
    Z
  `;

  return (
    <View style={StyleSheet.absoluteFill}>
      <Svg width={width} height={tabHeight} style={{ position: 'absolute',bottom: 0 }}>
        <Path d={d} fill="#F4F4F4"/>
      </Svg>
    </View>
  );
};

export default CustomTabBarBackground;
