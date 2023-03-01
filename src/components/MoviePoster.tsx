import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Movie} from '../interfaces/movieInterfaces';

interface MovieProps {
  movie: Movie;
  height?: number;
  width?: number;
}
export const MoviePoster = ({movie, height = 420, width = 300}: MovieProps) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const {navigate} = useNavigation<any>();
  return (
    <TouchableOpacity
      onPress={() => navigate('DetailScreen', movie)}
      activeOpacity={0.8}
      style={{
        width,
        height,
        marginHorizontal: 2,
        paddingBottom: 20,
        paddingHorizontal: 5,
      }}>
      <View style={styles.imageContainer}>
        <Image source={{uri}} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  imageContainer: {
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
