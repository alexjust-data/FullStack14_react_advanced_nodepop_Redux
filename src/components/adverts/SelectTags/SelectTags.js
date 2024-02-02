

import React, { useEffect } from 'react';
import { getTags } from '../service';
import { CheckboxGroup } from '../../common';
import { useDispatch, useSelector } from 'react-redux';
import { tagsLoaded } from '../../../../src/store/actions';


function SelectTags(props) {
  const dispatch = useDispatch();
  const tags = useSelector(state => state.tags);

  useEffect(() => {
    if (tags.length === 0) {
      getTags().then(tags => {
        dispatch(tagsLoaded(tags));
      }).catch(error => {
        console.error("Failed to load tags", error);
      });
    }
  }, [dispatch, tags.length]);

  return <CheckboxGroup options={tags} {...props} />;
}

export default SelectTags;

