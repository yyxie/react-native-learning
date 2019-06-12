import {Navigation} from "react-native-navigation";

import * as Pages from '../pages';
import pageNames from './pageName.json';

export default function () {
    Navigation.registerComponent(pageNames.Home, () => Pages.Home);
    Navigation.registerComponent(pageNames.My, () => Pages.My);
    Navigation.registerComponent(pageNames.Login, () => Pages.Login);
}

