import React, { useEffect } from 'react';
import { getTags as getTagsService } from '../service';
import { CheckboxGroup } from '../../common';
import { useDispatch, useSelector } from 'react-redux';
import { tagsLoaded } from '../../../../src/store/actions';
import { getTags } from '../../../store/selectors';

function SelectTags(props) {
  const dispatch = useDispatch();
  const tags = useSelector(getTags);

  useEffect(() => {
    if (tags.length === 0) {
      getTagsService().then(tags => { // Use the renamed service function
        dispatch(tagsLoaded(tags));
      }).catch(error => {
        console.error("Failed to load tags", error);
      });
    }
  }, [dispatch, tags.length]);

  return <CheckboxGroup options={tags} {...props} />;
}

export default SelectTags;


