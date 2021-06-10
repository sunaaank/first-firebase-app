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
    <div>
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
            <input type="submit" value="Update Message" />
          </form>
          <button onClick={toggleEditing}>Cancel</button>
        </>
      ) : (
        <>
          <h4>{sweetObj.content}</h4>
          {sweetObj.attachmentUrl && (
            <img
              alt="이미지"
              src={sweetObj.attachmentUrl}
              width="50px"
              height="50px"
            />
          )}
          {isOwner && (
            <>
              <button onClick={onDeleteClick}>Delete Sweet</button>
              <button onClick={toggleEditing}>Edit Sweet</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Sweet;
