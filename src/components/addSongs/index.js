import React from 'react';
import './index.css';
import AddSongsView from './view';

class AddSongs extends React.Component {
  componentDidMount() {
    this.props.actions.setScreen('addsongs');
  }

  submitForm = e => {
    e.preventDefault();
    const genres = [
      { checked: e.target.hiphop.checked, name: 'hiphop' },
      { checked: e.target.pop.checked, name: 'pop' },
      { checked: e.target.edm.checked, name: 'edm' },
      { checked: e.target.rnb.checked, name: 'rnb' },
    ];
    const genre = genres.find(g => g.checked).name;
    const playlist = e.target.playlist.value;
    e.target.playlist.value = '';
    this.props.actions.addSongs({ playlist, genre });
  };

  render () {
    return (
      <AddSongsView
        songsAdded={this.props.state.songsAdded}
        submitForm={this.submitForm}
      />
    )
  }
}

export default AddSongs;
