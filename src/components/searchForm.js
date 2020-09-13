import React, { Component } from 'react';

export class SearchForm extends Component {
  render () {
    return (
      <div class="field has-addons">
        <div class="control">
          <input class="input" type="text" placeholder="Movie to search"/>
        </div>
        <div class="control">
          <button class="button is-info">
            Search
          </button>
        </div>
      </div>
    )
  }
}
