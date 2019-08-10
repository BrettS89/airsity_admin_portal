import React from 'react';
import { Input, Button, Checkbox, Form } from 'semantic-ui-react';

export default function addSongsView({ songsAdded, submitForm }) {
  let added = null;

  if (songsAdded === null) {
    added = 0;
  } else if (songsAdded === 'error') {
    added = 'An error occured';
  } else if (typeof(songsAdded) === 'number') {
    added = songsAdded;
  } else {
    added = 'error';
  }

  return (
    <div className="screen add-songs-container">
      <form className="add-songs-form" onSubmit={submitForm}>
        <h1>Add songs</h1>
          <Form.Field>
            <Input type="text" name="playlist" placeholder="Spotify playlist ID" />
          </Form.Field>

          <div className="form-checkboxes">
            <Form.Field>
              <Checkbox label="Hip hop" name="hiphop"  />
            </Form.Field>
            <Form.Field>
              <Checkbox label="Pop" name="pop" />
            </Form.Field>
            <Form.Field>
              <Checkbox label="EDM" name="edm" />
            </Form.Field>
            <Form.Field>
              <Checkbox label="R&B" name="rnb" />
            </Form.Field>
          </div>
          
          <Button type="submit">Add</Button>
      </form>
      <div className="songs-added-text">
        Songs added: <span>{added}</span>
      </div>
      <div className="genre-warning">
        PICK THE CORRECT GENRE. IF YOU DON'T IT FUCKS OUR DATABASE
      </div>
    </div>
  );
}
