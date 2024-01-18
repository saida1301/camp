import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, PressableAndroidRippleConfig, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { TabView, SceneMap, TabBar, NavigationState, Route, SceneRendererProps, TabBarIndicatorProps, TabBarItemProps } from 'react-native-tab-view';

import CampsScreen from '../components/CampsScreen';
import DailyToursScreen from '../components/DailyToursScreen';
import SearchHeader from '../components/SearchHeader';
import { Scene, Event } from 'react-native-tab-view/lib/typescript/src/types';

const initialLayout = { width: Dimensions.get('window').width };

const renderTabBar = (props: React.JSX.IntrinsicAttributes & SceneRendererProps & {
    navigationState: NavigationState<Route>; scrollEnabled?: boolean | undefined; bounces?: boolean | undefined; activeColor?: string | undefined; inactiveColor?: string | undefined; pressColor?: string | undefined; pressOpacity?: number | undefined; getLabelText?: ((scene: Scene<Route>) => string | undefined) | undefined; getAccessible?: ((scene: Scene<Route>) => boolean | undefined) | undefined; getAccessibilityLabel?: ((scene: Scene<Route>) => string | undefined) | undefined; getTestID?: ((scene: Scene<Route>) => string | undefined) | undefined; renderLabel?: ((scene: Scene<Route> & { focused: boolean; color: string; }) => React.ReactNode) | undefined; renderIcon?: ((scene: Scene<Route> & { focused: boolean; color: string; }) => React.ReactNode) | undefined; renderBadge?: ((scene: Scene<Route>) => React.ReactNode) | undefined; renderIndicator?: ((props: TabBarIndicatorProps<Route>) => React.ReactNode) | undefined; renderTabBarItem?: ((props: TabBarItemProps<Route> & { key: string; }) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) | undefined; onTabPress?: ((scene: Scene<Route> & Event) => void) | undefined; onTabLongPress?: ((scene: Scene<Route>) => void) | undefined; tabStyle?: StyleProp<ViewStyle>; indicatorStyle?: StyleProp<ViewStyle>; indicatorContainerStyle?: StyleProp<ViewStyle>; labelStyle?: StyleProp<TextStyle>; contentContainerStyle // Add any additional styles for your HomeScreen component
      ?: StyleProp<ViewStyle>; style?: StyleProp<ViewStyle>; gap?: number | undefined; testID?: string | undefined; android_ripple?: PressableAndroidRippleConfig | undefined;
  }) => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: 'blue' }}
    style={{ backgroundColor: 'white' }}
    labelStyle={{ color: 'black' }}
    tabStyle={{ width: 130 }} 
    scrollEnabled 
  />
);

const HomeScreen = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'camps', title: 'Camps' },
    { key: 'dailyTours', title: 'Daily Tours' },
  ]);

  const renderScene = SceneMap({
    camps: CampsScreen,
    dailyTours: DailyToursScreen,
  });

  return (
    <View style={{ flex: 1 }}>
            <SearchHeader navigation={undefined}/>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={renderTabBar}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({

});
