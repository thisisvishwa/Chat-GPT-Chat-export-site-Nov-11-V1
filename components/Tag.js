import React from 'react';

const Tag = ({ tags, tagConversations }) => {
  return (
    <div id="tagList">
      {tags.map((tag, index) => (
        <button key={index} onClick={() => tagConversations(tag)}>
          {tag}
        </button>
      ))}
    </div>
  );
};

export default Tag;