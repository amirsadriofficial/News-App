/**
 * @format
 */

import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SavedPostData from '../../utils/saved-posts/SavedPostData';
import styles from './styles/SinglePost.style';

const SinglePost = ({route, navigation}: any) => {
  const {id} = route.params;
  const post = SavedPostData.filter(obj => obj.id === id);

  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={30} color="#1DA1F2" />
          </TouchableOpacity>
          <View style={styles.rightHeader}>
            <TouchableOpacity>
              <Octicons
                name="share-android"
                size={25}
                color="#282828"
                style={styles.shareIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome name="bookmark-o" size={30} color="#282828" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>{post[0].title}</Text>
          <View style={styles.footer}>
            <View style={styles.footerSection}>
              <Octicons name="tag" size={15} color="#999" />
              <Text style={styles.tags}>{post[0].tags}</Text>
            </View>
            <View style={styles.footerSection}>
              <MaterialIcons name="update" size={20} color="#999" />
              <Text style={styles.date}>23 Jul 2015</Text>
            </View>
          </View>
          <Image source={post[0].image} style={styles.image} />
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            possimus rem fuga veniam nemo, quia illum nesciunt natus porro ad
            voluptates sunt obcaecati ex accusamus quam sint sed sequi pariatur.
          </Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            possimus rem fuga veniam nemo, quia illum nesciunt natus porro ad
            voluptates sunt obcaecati ex accusamus quam sint sed sequi pariatur.
          </Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            possimus rem fuga veniam nemo, quia illum nesciunt natus porro ad
            voluptates sunt obcaecati ex accusamus quam sint sed sequi pariatur.
          </Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default SinglePost;
