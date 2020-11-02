import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList166911Navigator from '../features/ArticleList166911/navigator';
import Maps166898Navigator from '../features/Maps166898/navigator';
import ArticleList166889Navigator from '../features/ArticleList166889/navigator';
import Maps166876Navigator from '../features/Maps166876/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList166911: { screen: ArticleList166911Navigator },
Maps166898: { screen: Maps166898Navigator },
ArticleList166889: { screen: ArticleList166889Navigator },
Maps166876: { screen: Maps166876Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
