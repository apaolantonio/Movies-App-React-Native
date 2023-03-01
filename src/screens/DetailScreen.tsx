import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import {RootStackParams} from '../navigation/Navigation';
import {useMoviesDetails} from '../hooks/useMoviesDetails';
import {ActivityIndicator} from 'react-native';
import {MovieDetails} from '../components/MovieDetails';
import {TouchableOpacity} from 'react-native-gesture-handler';
const screenHeight = Dimensions.get('screen').height;
interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}
export const DetailScreen = ({route, navigation}: Props) => {
  const movie = route.params;

  const {isLoading, cast, movieFull} = useMoviesDetails(movie.id);

  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image source={{uri}} style={styles.image} />
        </View>
      </View>

      <View style={styles.marginContainer}>
        <Text style={styles.subtitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>

      <View>
        {isLoading ? (
          <ActivityIndicator size={35} color="grey" style={{marginTop: 20}} />
        ) : (
          <MovieDetails movieFull={movieFull!} cast={cast} />
        )}
      </View>

      <View style={styles.backButton}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Icon name="arrow-back-outline" color="white" size={60} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: screenHeight * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  image: {
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subtitle: {fontSize: 16, opacity: 0.8},
  title: {fontSize: 20, fontWeight: 'bold'},
  backButton: {
    position: 'absolute',
    zIndex: 999,
    elevation: 10,
    top: 30,
    left: 5,
  },
});
