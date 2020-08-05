import React from 'react';
import TwelfthTask from "../components/TwelfthTask/TwelfthTask";
import {Provider} from "react-redux";
import {store} from "../redux/store";

export default {
  title: 'TwelfthTask stories',
  component: TwelfthTask,
};

export const TwelfthTaskStories = () => <Provider store={store}><TwelfthTask/></Provider>;

// ToStorybook.story = {
//   name: 'to Storybook',
// };
