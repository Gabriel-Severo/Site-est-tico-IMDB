import React, { useState } from "react";

import Story from '../../components/Story';

import './Stories.scss';

const Stories = ({ stories, getUserHandler }) => {
  const [showStory, setShowStory] = useState(stories)
  return (
    <React.Fragment>
      <section className="stories" data-testid="stories">
        <div className="container">
        </div>
      </section>

      {showStory && (
        <Story />
        )}
    </React.Fragment>
  );
};

export default Stories;
