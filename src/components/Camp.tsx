import * as React from "react";
import {Image, StyleSheet, Text, View, Pressable} from "react-native";
import LoginButton from "./LoginButton";
import { useNavigation } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Camp = ({data}:any) => {
	const navigation = useNavigation();

	const handlePress = () => {
		navigation.navigate('campInner', {
		  campData: {
			name: data.name || "Default Camp", 
			price: data.price || 90,
			date: data.date || "15-16 October",
			tour: data.tour || "Vita tour",
			
			 total: data.total, 
			 filled: data.filled 
		  },
		});
	  };
	  
	  
	  const handleHeartPress = (event: any) => {
		event.stopPropagation();
		console.log("slam");
		
	  };
  
return (
    <Pressable style={styles.campInfo} onPress={handlePress}>
	     <FontAwesome
        name="heart"
        size={24}
        color="#FF0000"
        style={styles.heartIcon}
        onPress={handleHeartPress}
      />
      <View style={styles.campinfo}>
        <Text style={[styles.terkaliCamp, styles.text4Typo]}>
          {data.name || "Default Camp"}
        </Text>
        <View style={styles.campsizeParent}>
          <LoginButton total={data.total} filled={data.filled} />
        </View>
        <View style={[styles.frameParent, styles.wrapperFlexBox]}>
          <View style={styles.wrapperFlexBox}>
            <Text style={styles.text6Typo}>{data.total}</Text>
          </View>
          <Text style={[styles.aznPerAdult, styles.text6Typo]}>
            Azn per-adult
          </Text>
        </View>
        <View style={styles.group}>
          <Text style={styles.text7}>{data.date || "15-16"}</Text>
          <Text style={[styles.october, styles.octoberTypo]} numberOfLines={1}>
            {data.date ? data.date.split(" ")[1] : "October"}
          </Text>
        </View>
        <Text style={[styles.vitaTour, styles.octoberTypo]} numberOfLines={1}>
          {data.tour || "Vita tour"}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  	text4Typo: {
    		textAlign: "left",
    		color: "#000",
    		fontFamily: "Lato-Light",
    		fontWeight: "500"
  	},
  	wrapperFlexBox: {
    		height: 22,
    		alignItems: "center",
    		flexDirection: "row"
  	},
  	text6Typo: {
    		lineHeight: 22,
    		fontSize: 16,
    		textAlign: "left",
    		color: "#000",
    		fontFamily: "Lato-Light",
    		fontWeight: "500"
  	},
	  heartIcon: {
		position: "absolute",
		top: 10,
		right: 10,
		zIndex: 1, 
	  },
  	octoberTypo: {
    		height: 20,
    		fontFamily: "Lato-Regular",
    		lineHeight: 20,
    		fontSize: 14,
    		textAlign: "left",
    		color: "#000",
    		overflow: "hidden"
  	},
  	photos1Icon: {
    		borderRadius: 8,
    		height: 204,
    		overflow: "hidden",
    		width: 156
  	},
  	terkaliCamp: {
    		fontSize: 18,
    		lineHeight: 25,
    		height: 25,
    		overflow: "hidden",
    		width: 156
  	},
  	campsizeChild: {
    		backgroundColor: "#000",
    		width: 77,
    		height: 12,
    		overflow: "hidden"
  	},
  	campsize: {
    		borderRadius: 4,
    		borderStyle: "solid",
    		borderColor: "#000",
    		borderWidth: 1,
    		width: 91,
    		paddingHorizontal: 0,
    		paddingVertical: 1,
    		overflow: "hidden"
  	},
  	text4: {
    		fontSize: 12,
    		lineHeight: 17
  	},
  	parent: {
    		marginLeft: 4,
    		flexDirection: "row"
  	},
  	campsizeParent: {
    		marginTop: 2,
    		alignItems: "center",
    		flexDirection: "row"
  	},
  	aznPerAdult: {
    		marginLeft: 2,
    		alignSelf: "stretch",
    		overflow: "hidden",
    		flex: 1
  	},
  	frameParent: {
    		alignSelf: "stretch",
    		marginTop: 2
  	},
  	text7: {
    		fontFamily: "Lato-Regular",
    		lineHeight: 20,
    		fontSize: 14,
    		textAlign: "left",
    		color: "#000"
  	},
  	october: {
    		width: 112,
    		marginLeft: 6
  	},
  	group: {
    		marginTop: 2,
    		flexDirection: "row",
    		width: 156
  	},
  	vitaTour: {
    		marginTop: 2,
    		width: 156
  	},
  	campinfo: {
    		height: 117,
    		marginTop: 12,
    		width: 156
  	},
  	campInfo: {
    		width: "100%",
    		height: 333,
    		flex: 1
  	}
});

export default Camp;
