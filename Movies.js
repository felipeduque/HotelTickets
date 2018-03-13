import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View
} from 'react-native';
import MoviePoster from './MoviePoster';
import { movies } from './data';

export default class Movies extends Component {
  render() {
    return (
      <View>
        <ScrollView>
          {movies.map((movie, index) => <MoviePoster
  	  movie={movie}
	  onOpen={this.openMovie}
	  key={index}
	/>)}
        </ScrollView>
      </View>
    );
  }
}
