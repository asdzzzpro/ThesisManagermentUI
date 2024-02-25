import { View, Text, ActivityIndicator, TouchableOpacity, Image } from "react-native";
import MyStyles from "../../styles/MyStyles";
import Styles from "./Styles";
import React, { useEffect, useState } from "react";
import API, { endpoint } from "../../configs/API";

const Home = () => {
    const [committees, setCommittees] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadCommittees = async () => {
            try {
                let res = await API.get(endpoint['committees']);
                setCommittees(res.data);
            } catch (ex) {
                console.error("Error loading committees:", ex);
            } finally {
                setLoading(false);
            }
        };
        
        loadCommittees();
    }, []);

    return (
        <View style={MyStyles.container}> 
            <Text style={Styles.subject}>Home</Text>
                {loading ? (
                    <ActivityIndicator/>
                ) : (
                    committees === null ? (
                        <Text>No committees found</Text>
                    ) : (
                        <View>
                            {committees.map(c => (
                                
                                <View key={c.id}>
                                    
                                    <Image style={{width: 30, height : 30}} source={{uri: c.image}}/>

                                    <TouchableOpacity>
                                        <Text>{c.name}</Text>
                                    </TouchableOpacity>
                                    
                                </View>
                            ))}
                        </View>
                    )
                )}


            
        </View>

    );
};

export default Home;