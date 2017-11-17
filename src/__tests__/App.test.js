import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import ApplicationsPage from '../components/applications/ApplicationsPage'
import NoMatch from '../components/common/NoMatch'
import AvatarCard from '../components/common/AvatarCard'
import {BrowserRouter} from 'react-router-dom'
import {mount} from 'enzyme'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter>
                    <App />
                    </BrowserRouter>,
                    div);
});

// Stateless components
it('NoMatch', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NoMatch />,div);
});

it('ApplicationsPage', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ApplicationsPage />,div);
});

it('AvatarCard', () => {
  const props = {id: 1,
    avatar_url: 'https://avatars3.githubusercontent.com/u/12224823?v=4',
    name: 'NAME',
    notifications: 0}
  const div = document.createElement('div');
  ReactDOM.render(<AvatarCard {...props}/>,div);
});

// Functions
it('function handSelect', () => {
  const wrapper = mount(<BrowserRouter>
                          <App />
                        </BrowserRouter>)

  const app = wrapper.find('App');
  app.instance().handleSelect()

});

