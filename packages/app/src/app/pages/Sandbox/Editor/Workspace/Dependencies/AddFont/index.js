import React, { useState } from 'react';
import FontPicker from 'font-picker-react';
import { Button } from '@codesandbox/common/lib/components/Button';
import { Container, FontPickerStyles } from './elements';

const AddVersion = ({ addResource }) => {
  const [activeFontFamily, setActiveFontFamily] = useState('Roboto');

  const addFont = async () => {
    if (activeFontFamily) {
      const font = activeFontFamily.trim().replace(/ /g, '+');
      const link = `https://fonts.googleapis.com/css?family=${font}&display=swap`;
      await addResource(link);
    }
  };

  return (
    <>
      <FontPickerStyles />
      <Container>
        <FontPicker
          apiKey="AIzaSyDQ9HOzvLFchvhfDG9MR0UeLpF8ScJshxU"
          activeFontFamily={activeFontFamily}
          sort={'popularity'}
          onChange={nextFont => setActiveFontFamily(nextFont.family)}
          limit={300}
        />
      </Container>
      <Container>
        <Button disabled={!activeFontFamily} block small onClick={addFont}>
          Add Font
        </Button>
      </Container>
    </>
  );
};

export default AddVersion;
