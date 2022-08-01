import React from 'react';
import {Text} from 'react-native';
import Layout from '../../containers/layout/Layout';

const Profile = ({navigation}: any) => {
  return (
    <Layout navigation={navigation}>
      <Text>This is Profile page</Text>
    </Layout>
  );
};

export default Profile;
