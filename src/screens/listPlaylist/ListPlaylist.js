import React, {useContext, useEffect, useState} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  RefreshControl,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AuthContext} from '../../context/authContext';
import {useHttp} from '../../hooks/http.hook';
import {styles} from './useStyles';
import {ColorsStyles} from '../../constants/ColorsStyles';
import {LoaderIn} from '../../components/loader/minLoader/LoaderIn';
import {httpServer} from '../../../const';
import {checkLanguage, checkLanguageConst} from '../../hooks/useLanguage';
import {PopapContext} from '../../context/PopapContext';
import {settingsRoutes} from '../../../Settings/routes/settingsRoutes';

function ListPlaylist({navigation}) {
  const popapRoot = useContext(PopapContext);
  const auth = useContext(AuthContext);
  const {loading, request} = useHttp();
  const [data, setData] = useState([]);
  const [Refreshing, setRefreshing] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const itemHandler = index => {
    if (index === activeIndex) setActiveIndex(-1);
    else setActiveIndex(index);
  };

  const getData = async () => {
    try {
      const data = await request(`/api/data/playlist`, 'GET', null, {
        Authorization: `${auth.token}`,
      });
      setData(data);
    } catch (e) {}
  };

  useEffect(() => {
    getData();
  }, [auth.token]);

  const backHandler = () => {
    navigation.goBack();
  };

  const DataPopap = label => (
    <View style={styles.block_dalate}>
      <Text
        style={[
          settingsRoutes[auth.theme].GlobalStyle.CustomFontRegular,
          styles.label,
        ]}>
        {checkLanguageConst(label, auth.translations)}
      </Text>

      <TouchableOpacity
        style={{
          width: '60%',
          height: 36,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: settingsRoutes[auth.theme].ColorsStyles.colorButton,
          borderRadius: 20,
        }}
        onPress={() => popapRoot.exitHandler()}>
        <Text
          style={[
            settingsRoutes[auth.theme].GlobalStyle.CustomFontRegular,
            styles.item_text,
          ]}>
          Ok
        </Text>
      </TouchableOpacity>
    </View>
  );

  const itemPlaylistHandler = data => {
    if (data.settings?.access) {
      navigation.navigate('Playlist', {
        data,
      });
    } else {
      popapRoot.dataChange(DataPopap('ActivitePlaylistInfo'));
      popapRoot.openHandler();
    }
  };

  return (
    <ImageBackground
      source={
        settingsRoutes[auth.theme].backgroundSettings.img_playlist ??
        settingsRoutes[auth.theme].backgroundSettings.img_1
      }
      style={{flex: 1, justifyContent: 'space-between', alignItems: 'center'}}>
      <ImageBackground
        style={{width: '100%', height: '100%', alignItems: 'center'}}
        imageStyle={{
          backgroundColor:
            settingsRoutes[auth.theme].backgroundSettings.backgroundColor,
        }}>
        <View
          style={{
            width: '100%',
            height: 50,
            backgroundColor: ColorsStyles.backgroundFooter,
            position: 'absolute',
            top: 0,
          }}
        />
        <SafeAreaView
          style={{width: '100%', height: '100%', alignItems: 'center'}}>
          {settingsRoutes[auth.theme].HeaderRoot({
            translations: auth.translations,
            data: {
              label: checkLanguageConst('Playlists', auth.translations),
              backHandler,
            },
          })}
          <View style={styles.block}>
            {loading ? (
              <LoaderIn />
            ) : (
              <FlatList
                style={{width: '100%'}}
                contentContainerStyle={{paddingBottom: 100}}
                showsVerticalScrollIndicator={false}
                refreshControl={
                  <RefreshControl
                    refreshing={Refreshing}
                    onRefresh={() => getData()}
                    colors={[ColorsStyles.colorTextError]}
                  />
                }
                data={data}
                renderItem={({item, index}) =>
                  settingsRoutes[auth.theme].MediaItem({
                    language: auth.language,
                    itemHandler,
                    activeIndex,
                    index,
                    httpServer,
                    itemPlaylistHandler,
                    item,
                  })
                }
              />
            )} 
          </View>
          <View style={{height: 50, width: '100%'}} />
        </SafeAreaView>
      </ImageBackground>
    </ImageBackground>
  );
}

export default ListPlaylist;
