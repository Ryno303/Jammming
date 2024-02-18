import React from 'react';


export default function searchResults() {

    const mockSearchResults = [
        {
          title: 'Time After Time',
          artist: 'QuietDrive',
          album: 'When All That\'s left is you',
    
        },
        {
          title: 'Time',
          artist: 'Pink Floyd',
          album: 'Dark Side Of The Moon',
    
        },
        {
          title: 'The Longest Time',
          artist: 'Billy Joel',
          album: 'Greatest Hits',
    
        }
      ];

      const listSearchResults = mockSearchResults.map(song => <li>{`${song.title} by ${song.artist}`}</li>);
      
    
      return listSearchResults;
}



