import React from 'react';
import { View, TextInput, Button, FlatList, Text ,length, ActivityIndicator } from "react-native";
import Prod from '../ProdData/Prod';
import ProdItem from '../Components/ProdItem'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi.js'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


class Search extends React.Component {

  constructor(props) {
    super(props)
    // this._prods=[]
    this.searchedText= ""
  
    
    this.page = 0
    this.totalpages=0
    this.state = {
      films: [],
      isLoading: false

    }
  }
  _searchFilms() {
    this.page = 0
    this.totalPages = 0
    this.setState({
      films: [],
    }, () => { 
        console.log("Page : " + this.page + " / TotalPages : " + this.totalPages + " / Nombre de films : " + this.state.films.length)
        this._loadFilms() 
    })
}
  _displayLoading() {
    if (this.state.isLoading)
    return(
      <View style={styles.loading_container}>
      <ActivityIndicator size='large' />
    </View>
    )
}
  _loadFilms() {

    if (this.searchedText.length > 0) {
      this.setState({isLoading : true})
      getFilmsFromApiWithSearchedText(this.searchedText,this.page+1).then(data => {
       this.page = data.page
       this.totalpages = data.total_pages
        this.setState({ 
          films: [ ...this.state.films, ...data.results ],
        isLoading :false
        })
      })
    }
  }

  _searchTextInputChanged(text) {
       this.searchedText = text
  }



  render() {

     

    return (
      <View style={{ marginTop: 50, flex: 1 }}>
       
       <TextInput
  style={styles.textinput}
  placeholder='Titre du film'
  onChangeText={(text) => this._searchTextInputChanged(text)}
  onSubmitEditing={() => this._searchFilms()}
/>



<Button title='Rechercher' onPress={() => this._searchFilms()}/>

         {this._displayLoading()}
        <FlatList
      data={this.state.films}
          keyExtractor={(item) => item.id.toString()}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (this.page < this.totalPages)
            this._loadFilms()

          }}
          renderItem={({ item }) => <ProdItem navigation={ this.props.navigation } ProdP={item} />}
        />

        
      </View>
    )

  }
  
}
const styles = {
  TextInput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  },
  Item: {
    //backgroundColor: 'green',
    marginTop: 20,

    loading_container: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 50,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'


      
    }, main_container: {
      flex: 1,
      marginTop: 20
    },
    textinput: {
      marginLeft: 5,
      marginRight: 5,
      height: 50,
      borderColor: '#000000',
      borderWidth: 1,
      paddingLeft: 5
    },
    loading_container: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 100,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
    }
}
}



export default Search;
