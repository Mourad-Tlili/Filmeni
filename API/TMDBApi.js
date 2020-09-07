const API_TOKEN = "9fcfee6f4797649e2b34ce58c44dccc4"

export function getFilmsFromApiWithSearchedText (text , page) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + "&page"
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error(error))
  }

  export function getImageFromApi(name){
      return 'https://image.tmdb.org/t/p/w300' + name

  }