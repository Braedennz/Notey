import React from 'react';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'

import NoteList from './NoteList';
import Editor from './Editor';

function App() {
  return (
    <div class="d-flex">
      <div id="sidebar" class="d-none">
        <div class="p-3">
          <b>Notey.io</b>
        </div>
      </div>
      <div id="app-container">
        <div class="d-flex">
          <div class="col-4 left-column">
            <div id="left-column">
              <NoteList />
            </div>
          </div>

          <div class="col-8">
            <div class="p-3">
              <div class="d-flex align-items-center justify-content-between">
                <div>
                  <small class="text-muted">Tuesday, Nov 10, 8:00 pm - 8:30 pm</small>
                  <h4>Test One</h4>
                </div>
                <FontAwesomeIcon class="text-secondary" icon={faEllipsisV} style={{height: '12px'}} />
              </div>

              <div class="card mt-3">
                <div class="card-body">
                  <Editor />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
