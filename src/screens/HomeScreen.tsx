import React from 'react';
import {View, ActivityIndicator, Dimensions} from 'react-native';
import {useMovies} from '../hooks/useMovies';
import {MoviePoster} from '../components/MoviePoster';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import {ScrollView} from 'react-native';
import {HorizontalSlider} from '../components/HorizontalSlider';

const HomeScreen = () => {
  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();
  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }
  const {width: windowWidth} = Dimensions.get('window');
  return (
    <ScrollView>
      <View style={{marginTop: top + 20}}>
        <View
          style={{
            height: 440,
          }}>
          {/* Carousel */}
          <Carousel
            data={nowPlaying}
            renderItem={({item}: any) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
            vertical={false}
          />
        </View>

        <HorizontalSlider title="Populares" movies={popular} />
        <HorizontalSlider title="Top Rated" movies={topRated} />
        <HorizontalSlider title="Upcoming" movies={upcoming} />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
