import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "./src/screen/home";
import ScreenComponents from "./src/screen/componnentsScreen";
import ListScreen from "./src/screen/ListScreen";
import ImageScreen from "./src/screen/ImageScreen";
import counterScreen from "./src/screen/counterScreen";
import ColorScreen from "./src/screen/colorScreen";
import SquarScreen from "./src/screen/squareScreen";
import TextScreen from "./src/screen/Textscreen";

const navigator = createStackNavigator(
  {
    paiman1:Home,
    paiman2: ScreenComponents,
    paiman3:ListScreen,
    paiman4:ImageScreen,
    paiman5: counterScreen,
    paiman6: ColorScreen,
    paiman7:SquarScreen,
    paiman8: TextScreen
    

  },
  {
    initialRouteName: "paiman1",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
