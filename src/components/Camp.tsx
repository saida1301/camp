import * as React from "react";
import {Image, StyleSheet, Text, View, Pressable} from "react-native";
import LoginButton from "./LoginButton";

const Camp = () => {
  	
  	return (
    		<Pressable style={styles.campInfo} onPress={()=>{}}>
      			<Image style={styles.photos1Icon} resizeMode="cover" source={require("CampGlobe/src/assets/images/card.png")} />
      			<View style={styles.campinfo}>
        				<Text style={[styles.terkaliCamp, styles.text4Typo]}>Qaranohur Camp</Text>
        				<View style={styles.campsizeParent}>
          				
                              <LoginButton total={20} filled={15} />
        				</View>
        				<View style={[styles.frameParent, styles.wrapperFlexBox]}>
          					<View style={styles.wrapperFlexBox}>
            						<Text style={styles.text6Typo}>90</Text>
          					</View>
          					<Text style={[styles.aznPerAdult, styles.text6Typo]}> Azn per-adult</Text>
        				</View>
        				<View style={styles.group}>
          					<Text style={styles.text7}>15-16</Text>
          					<Text style={[styles.october, styles.octoberTypo]} numberOfLines={1}>October</Text>
        				</View>
        				<Text style={[styles.vitaTour, styles.octoberTypo]} numberOfLines={1}>Vita tour</Text>
      			</View>
    		</Pressable>);
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
