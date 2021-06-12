import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { dbService, storageService } from '../../fbase';

const Form = ({ userObj }) => {
  const [sweet, setSweet] = useState('');
  const [attachment, setAttachment] = useState('');

  const onSubmit = async e => {
    e.preventDefault();
    let attachmentUrl = '';
    if (!!attachment) {
      const fileRef = storageService.ref().child(`${userObj.uid}/${uuidv4()}`);
      const response = await fileRef.putString(attachment, 'data_url');
      attachmentUrl = await response.ref.getDownloadURL();
    }
    const sweetObj = {
      content: sweet,
      createdAt: Date.now(),
      creatorId: userObj.uid,
      attachmentUrl,
    };

    await dbService
      .collection('Sweets')
      .add(sweetObj)
      .catch(error => {
        console.error('Error adding document: ', error);
      });
    setSweet('');
    setAttachment(null);
  };

  const hasContent = () => {
    const isBlankStarting = /^\s+/g;
    if (!sweet || !!isBlankStarting.test(sweet)) {
      return false;
    } else {
      return true;
    }
  };

  const onChange = event => {
    const {
      target: { value },
    } = event;
    setSweet(value);
  };

  const onFileChange = e => {
    const { files } = e.target;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = finishedEvent => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result);
    };
    reader.readAsDataURL(theFile);
  };

  const onClearPhotoClick = () => {
    setAttachment(null);
  };
  return (
    <form className="white" onSubmit={onSubmit}>
      <div className="input-field">
        <input
          value={sweet}
          onChange={onChange}
          type="text"
          placeholder="What's on your mind?"
          maxLength={120}
        />
      </div>
      <input type="file" accept="image/*" onChange={onFileChange} />
      <input
        type="submit"
        value="Sweet"
        disabled={!hasContent()}
        className="btn pink lighten-1 z-depth-0"
      />
      {attachment && (
        <>
          <img alt="업로드이미지" src={attachment} width="50px" height="50px" />

          <button onClick={onClearPhotoClick}>Clear</button>
        </>
      )}
    </form>
  );
};

export default Form;
