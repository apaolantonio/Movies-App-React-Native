import React from 'react';
import {Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Movie} from '../interfaces/movieInterfaces';
import {MoviePoster} from './MoviePoster';

interface Props {
  title: string;
  movies: Movie[];
}
export const HorizontalSlider = ({title, movies}: Props) => {
  return (
    <View style={{height: 260}}>
      <Text style={{fontSize: 30, fontWeight: 'bold'}}>{title}</Text>
      <FlatList
        data={movies}
        renderItem={({item}) => (
          <MoviePoster movie={item} height={200} width={140} />
        )}
        keyExtractor={item => `${item.id}`}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
