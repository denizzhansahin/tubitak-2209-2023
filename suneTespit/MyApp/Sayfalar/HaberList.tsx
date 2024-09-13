import React, { useEffect, useState } from 'react'
import { FlatList, View, Text, SafeAreaView, ScrollView, StatusBar, StyleSheet } from 'react-native'
import CardViewHaber from '../Components/Card';
import OnerilenCard from '../Components/OnerilenCard';


import firestore from "@react-native-firebase/firestore"



import { RootState, AppDispatch } from '../store'
import { useSelector, useDispatch } from 'react-redux'
import { increment, VeriGetir2 } from '../redux/veriler'
import { Button } from 'react-native-paper';




interface Item {
  ID: string;
  gorsel_adi: string;
  konum: string;
  nesne_sayi: string;
  tumBilgi: string;
  zaman : string;
}




function HaberList({ navigation = null, kategori = null, onerilen = null }) {


  const yeniDeger: string = kategori.replace(/"/g, '')

  const dispatch: AppDispatch = useDispatch()
  const { veri, status, error } = useSelector((state: RootState) => state.counter)



  /*
  const [veri1, setVeri] = useState([])

  
  const VeriGetir = async()=>{
    const veriler = await firestore().collection("haberler").get()
    //console.log("veriler geldi")
    //console.log(veriler.docs)
    setVeri(
      veriler.docs.map((deniz)=>{
        return {...deniz.data()}
      })
    )

  }
  */



  useEffect(() => {
    if (veri.length == 0) {
      dispatch(VeriGetir2())
    } else {
      console.log("Veri var")
      console.log(veri.map((doc)=>doc))

    }
  }, [])





  /*
    veri.map((alt_ver) => {
      //console.log(alt_ver["baslik"])
    }
    )
  */




  return (
    <SafeAreaView style={styles.container}>
      {
        onerilen ? (
          <SafeAreaView>
          <FlatList
          data = { veri }
          renderItem = { ({ item }) => <CardViewHaber zaman = {item.zaman } konum = {item.konum} image={item.gorsel_adi} link={item} />}
          keyExtractor={item => item.ID}
        />
        </SafeAreaView>
        ) : (
          yeniDeger == "tumHaberler" ? (
            <SafeAreaView>
              <FlatList
              data = { veri }
              renderItem = { ({ item }) => <CardViewHaber zaman = {item.zaman.toDate() } konum = {item.konum} image={item.gorsel_adi} link={item} />}
              keyExtractor={item => item.ID}
            />
            </SafeAreaView>
          ): (
            <SafeAreaView>




        <FlatList
              data = { veri }
              renderItem = { ({ item }) => <CardViewHaber zaman = {item.zaman } konum = {item.konum} image={item.gorsel_adi} link={item} />}
              keyExtractor={item => item.ID}
            />




    </SafeAreaView>
  )
        )
}
    </SafeAreaView >
  )
}

export default HaberList

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
})


/*

(
          <SafeAreaView>




            <FlatList
              data={filteredItems}
              renderItem={({ item }) => <CardViewHaber title={item.baslik} body={item.metin} image={item.kategori} link={item} />}
              keyExtractor={item => item.baslik}
            />




          </SafeAreaView>
        )
*/

/*
  return (
    <View>
      {
        onerilen ? (
          <View>
            <Text>onerilen {onerilen}</Text>
            <CardViewHaber title={"onerilen"} body={"onerilen"} image={"onerilen"} link={"onerilen"}/>
          </View>
        ) : (
          <View>
          <Text>kategori {kategori}</Text>
          <CardViewHaber title={kategori} body={kategori} image={kategori} link={kategori}/>
        </View>
        )
      }
    </View>
  )
*/