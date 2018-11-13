import React from 'react';
import { storiesOf } from '@storybook/react';
import App from './App';
import Block from '../../types/Block';

storiesOf('App', module).add('default', () => <App block={new Block('')} />);
