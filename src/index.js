import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const youtubeApiKey = process.env.REACT_APP_API_KEY;

YTSearch({key: youtubeApiKey, term: 'surfboards'}, function(data) {
  console.log(data);
});

// Create a new component. This component should produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML and put it on the page(in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
