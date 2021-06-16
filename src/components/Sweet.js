import React, { useState } from 'react';
import { dbService, storageService } from 'fbase';

const Sweet = ({ sweetObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newSweet, setNewSweet] = useState(sweetObj.content);
  const onDeleteClick = async () => {
    const ok = window.confirm('정말 이 메세지를 삭제하시겠습니까?');
    if (ok) {
      await dbService.doc(`Sweets/${sweetObj.id}`).delete();
      await storageService.refFromURL(sweetObj.attachmentUrl).delete();
    }
  };

  const toggleEditing = () => setEditing(prev => !prev);

  const onSubmit = async e => {
    e.preventDefault();
    await dbService.doc(`Sweets/${sweetObj.id}`).update({
      content: newSweet,
    });
    setEditing(false);
  };

  const onChangeMessage = e => {
    const { value } = e.target;
    setNewSweet(value);
  };

  return (
    <div className="card-panel grey lighten-5 z-depth-1">
      {editing ? (
        <>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Edit your message"
              value={newSweet}
              required
              onChange={onChangeMessage}
            />
            <button onClick={toggleEditing}>Cancel</button>
            <input type="submit" value="Update Message" />
          </form>
        </>
      ) : (
        <div className="row valign-wrapper">
          <div className="col s10">
            <h5>{sweetObj.content}</h5>
          </div>
          <div className="col s2">
            {sweetObj.attachmentUrl && (
              <img
                alt="이미지"
                src={sweetObj.attachmentUrl}
                className="circle"
                width="100px"
                height="100px"
              />
            )}
          </div>
          {isOwner && (
            <>
              <button onClick={onDeleteClick}>Delete Sweet</button>
              <button onClick={toggleEditing}>Edit Sweet</button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Sweet;
