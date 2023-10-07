import React, { useEffect, useState } from "react";
import { format, sub } from "date-fns";
import { View, StyleSheet } from "react-native"
import { PostImage } from "../../types";

import NasaApi from "../../api/fetch";
import Header from "../../components/header";
import TodaysImage from "../../components/todaysImage";
import LastFiveDaysImages from "../../components/lastFiveDaysImages";

const Home = () => {
    const [todaysImage, setTodaysImage] = useState<PostImage>();
    const [lastFiveDaysImages, setLastFiveDaysImages] = useState<PostImage[]>([]);

    
    useEffect(() => {
        const loadTodaysImage = async () => {
            try {
                const todaysImageResponse = await NasaApi();
                setTodaysImage(todaysImageResponse)
            } catch (error) {
                console.error(error);
                setTodaysImage({})
            }
        };

        const loadLast5DaysImages = async () => {
            try {
                const date = new Date();
                const todaysDay = format(date, 'yyyy-MM-dd');
                const fiveDaysAgo = format(sub(date, { days: 5 }), 'yyyy-MM-dd');
                const lastFiveDaysImagesResponse = await NasaApi(`&start_date=${fiveDaysAgo}&end_date=${todaysDay}`);
                setLastFiveDaysImages(lastFiveDaysImagesResponse)
            } catch (error) {
                console.error(error)
            }
        };

        loadTodaysImage().catch(null);
        loadLast5DaysImages().catch(null)
    }, []) //NOTE - if [] it's blank means useEffect will run once the App is started otherwise
           // it should complete the requests before run the useEffect.
        
    return (
        <View style={styles.container}>
            <Header />
            <TodaysImage {...todaysImage} />
            <LastFiveDaysImages postImages={lastFiveDaysImages}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15
    }
})

export default Home;