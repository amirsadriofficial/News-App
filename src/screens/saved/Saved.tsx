/**
 * @format
 */

import React from 'react';
import {Text} from 'react-native';
import Layout from '../../containers/layout/Layout';
import SavedPost from '../../components/saved-post/SavedPost';

const Saved = ({navigation}: any) => {
  return (
    <Layout navigation={navigation}>
      <Text>This is Saved page</Text>
      <SavedPost />
    </Layout>
  );
};

export default Saved;
