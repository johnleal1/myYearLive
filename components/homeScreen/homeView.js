import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    FlatList
  } from 'react-native';

const mockData = [
  { name: 'Page 1', data: {}, url: 'data:image/jpeg;base64,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' },
  { name: 'Page 2', data: {}, url: 'data:image/jpeg;base64,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'},
  { name: 'Page 3', data: {}, url: 'data:image/jpeg;base64,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'}
];

const styles = StyleSheet.create({
  template: {
    width: 75,
    height: 100,
    marginTop: 30,
    marginRight: 30,
    marginLeft: 30
  },
  view: {
    // flexDirection: 'row',
    flexWrap: 'wrap'
  },

  label: {
    position: 'relative',
    fontSize: 15,
    textAlign: 'center',
    color: '#008891'
  },
  new_page_button: {
    borderRadius: 10,
    height: 40,
    alignItems: "center",
    marginBottom: 10,
    justifyContent: "center",
    backgroundColor: "#008891",
    marginHorizontal: 108,
    marginTop: 10,
    width: 200
},
  new_page_button_text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: "bold",
  },
  delete_button_text: {
    position: 'relative',
    fontSize: 15,
    textAlign: 'center',
    color: '#fff',
  },
  delete_button: {
    backgroundColor: '#b20000',
    borderRadius: 10,
    marginTop: 10,
    width: 100,
    marginHorizontal: 20,
    alignItems: "center",
  }
});

export default function HomeView() {
  const numColumns = 3;
  const navigation = useNavigation();
  const [userPages, setuserPages] = React.useState([])
  const addPage = () => {
      setuserPages([...userPages, 
      {
        id: userPages.length + 1,
        url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAY1BMVEX///8AAAAGBgatra3h4eHc3NwNDQ18fHz6+vqUlJT19fW5ubkUFBRZWVkmJiYRERGnp6dSUlJMTExFRUVqampeXl4wMDC6urqxsbFUVFQsLCzZ2dlBQUGioqJ2dnaRkZF/f39xRK95AAACgElEQVR4nO2dW1PCQAxG2V4AKS1QpHJR5P//SmEYx13EcUaSNFPPeSf5Dt1ulwfS0QgAAAAAAAAAAAAAAAAAAIbGrDq2zSILwmSLpj1WMzONaieukOjsKhONfK9pcaXL1TUOr/oaF9alrsfb2MYjhPFS0+NopXFhoufxbOkRwrOWh+n1uKB0Td6sPUJQuU8OZvf5F2ONvcto301Zy3ss+/AIYSsucvM8zzZ5MZXuMS3yzc3pp5PusU3r14V0g0+KXdpJ+ty1Sqo/CVdPeEq/Mtnis8zM48Ykkz3VbxW/pO8kq0t2bcUP9Uzt/vikiK+/7OO9jSpvRCvfpY7ataKVm6iy/o+eUR61a0QrL6LK6ivrvLaidnPRyvGiFX8Ofmca35KileNtRLSwdT9EvPVDxFs/RLz1Q8Rbv38vYv05d4EQ8RYIEW+BEPEWCBFvgRDxFggRb4EQ8RYIEW+BEPEWCBFvgRDxFqg3kfAAiCCCCCKIIIIIIoj8rbD159wFQsRbIES8BULEWyBEvAVCxFsgRLwFQsRbIES8BULEWyBEvAVCxFsgdyLu+iHirR8i3voh4q0fIt76DUZkMH/MNx6VUEbtZEcl9Di8Yi9aucdxIivRyoMZ8FLF28hOtPQdkolLsiN3TIcgvce9hIcgpXOJdE0SD/GJS8naOq8uvUFh6SSv8CLdoEvrZ7XG6LYyr7VHtyVbuyHyw/RG6z48ZGdSXSmHMnCyj0mNSqehibXHScdjOGNyja/JSc/jfJ/YjZJW/rVQGu3CrfJw7zPb7vcYj9IpPAfvUN2eI2TJavHz1Y/MqknbzOVfSTDfryaGryQAAAAAAAAAAAAAAAAAAAArPgB57yJcMN9cyQAAAABJRU5ErkJggg=='
        // add other page props here
      }]);
      console.log(userPages)
  }

  const deletePage = index => {
    const newTimes = [...userPages];
    newTimes.splice(index, 1);
    for (i = 0; i < newTimes.length; i++) {
      newTimes[i].id = i + 1;
    }
    setuserPages(newTimes);
    console.log(newTimes)
  }
    return (
      <View style={styles.view}>
        <TouchableOpacity onPress={() =>
            // navigation.navigate('SelectTemplate')
            addPage()
          } style={styles.new_page_button}>
          {/* <Image style={styles.template} source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAY1BMVEX///8AAAAGBgatra3h4eHc3NwNDQ18fHz6+vqUlJT19fW5ubkUFBRZWVkmJiYRERGnp6dSUlJMTExFRUVqampeXl4wMDC6urqxsbFUVFQsLCzZ2dlBQUGioqJ2dnaRkZF/f39xRK95AAACgElEQVR4nO2dW1PCQAxG2V4AKS1QpHJR5P//SmEYx13EcUaSNFPPeSf5Dt1ulwfS0QgAAAAAAAAAAAAAAAAAAIbGrDq2zSILwmSLpj1WMzONaieukOjsKhONfK9pcaXL1TUOr/oaF9alrsfb2MYjhPFS0+NopXFhoufxbOkRwrOWh+n1uKB0Td6sPUJQuU8OZvf5F2ONvcto301Zy3ss+/AIYSsucvM8zzZ5MZXuMS3yzc3pp5PusU3r14V0g0+KXdpJ+ty1Sqo/CVdPeEq/Mtnis8zM48Ykkz3VbxW/pO8kq0t2bcUP9Uzt/vikiK+/7OO9jSpvRCvfpY7ataKVm6iy/o+eUR61a0QrL6LK6ivrvLaidnPRyvGiFX8Ofmca35KileNtRLSwdT9EvPVDxFs/RLz1Q8Rbv38vYv05d4EQ8RYIEW+BEPEWCBFvgRDxFggRb4EQ8RYIEW+BEPEWCBFvgRDxFqg3kfAAiCCCCCKIIIIIIoj8rbD159wFQsRbIES8BULEWyBEvAVCxFsgRLwFQsRbIES8BULEWyBEvAVCxFsgdyLu+iHirR8i3voh4q0fIt76DUZkMH/MNx6VUEbtZEcl9Di8Yi9aucdxIivRyoMZ8FLF28hOtPQdkolLsiN3TIcgvce9hIcgpXOJdE0SD/GJS8naOq8uvUFh6SSv8CLdoEvrZ7XG6LYyr7VHtyVbuyHyw/RG6z48ZGdSXSmHMnCyj0mNSqehibXHScdjOGNyja/JSc/jfJ/YjZJW/rVQGu3CrfJw7zPb7vcYj9IpPAfvUN2eI2TJavHz1Y/MqknbzOVfSTDfryaGryQAAAAAAAAAAAAAAAAAAAArPgB57yJcMN9cyQAAAABJRU5ErkJggg=='}} /> */}
          <Text style={styles.new_page_button_text}>Add New Page</Text>        
        </TouchableOpacity>
        {/* {
          mockData.map(template => {
            return (
              <TouchableOpacity>
                <Image 
                  source={{uri: template.url}}
                  style={styles.template}
                />
                <Text style={styles.label}>{template.name}</Text>
              </TouchableOpacity>
            )
          })
        } */}
        <FlatList
          data={userPages}
          numColumns = {numColumns}
          renderItem={({item, index}) => 
          <View>
            <TouchableOpacity onPress={() => navigation.navigate("SelectTemplate")}>
                <Image 
                  source={{uri: item.url}}
                  style={styles.template}
                />
                <Text style={styles.label}>Page {item.id}</Text>
              </TouchableOpacity>
            <TouchableOpacity onPress= {() => deletePage(index)} style={styles.delete_button}>
              <Text style = {styles.delete_button_text}>Delete</Text>
            </TouchableOpacity>
          </View>
          }
        />
      </View>
    )
}