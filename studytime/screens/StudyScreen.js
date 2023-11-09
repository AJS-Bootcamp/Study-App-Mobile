import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native'; // Import ActivityIndicator
import YouTubeVideo from '../components/YouTubeVideo';
import Loading from '../components/LoadingComponent';
import { LinearGradient } from "expo-linear-gradient";

const videosList = [
    {
        id: "7NJIhcQ9AwQ",
        title: "Study With Me - 8 Hour Study Session",
        explanation:
            "Lofi Music offers calming and therapeutic effects that can be beneficial for studying.",
    },
    {
        id: "4kiWb0eyNo4",
        title: "Pomodoro Technique",
        explanation:
            "The Pomodoro Technique is a study strategy that involves 25-minute focused study sessions followed by 5-minute breaks. This can be customized to suit your preferences.",
    },
    {
        id: "NJuSStkIZBg",
        title: "Ambient Study Music",
        explanation: "Ambient background music enhances focus and concentration.",
    },
    {
        id: "nX-xshA_0m8",
        title: "Cornell Note-Taking System",
        explanation:
            "The Cornell Note-Taking System is an effective method for taking organized notes during lectures and readings.",
    },
    {
        id: "w3HCPVMtd8M",
        title: "Classical Music for Studying",
        explanation:
            "Listening to classical music helps to reduce stress and stimulates happiness which helps students better concentrate on the task at hand.",
    },
    {
        id: "tkm0TNFzIeg",
        title: "Feynman Technique",
        explanation:
            "The Feynman Technique is a study method that involves explaining a topic in simple terms as if teaching it to someone else. This process helps to identify gaps in your understanding.",
    },
];

const Study = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Simulate loading data (You should replace this with actual data fetching logic)
        setTimeout(() => {
            setIsLoading(false);
            // If there is an error, set it here
            // setError('An error occurred while loading data');
        }, 5000);
    }, []);

    return (
        <LinearGradient
            colors={["#06466B", "#010114"]}
            style={{ flex: 1 }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            <View style={{ flex: 1, padding: 16 }}>
                <Text style={styles.heading}>Study Strategies</Text>
                {isLoading ?
                    <Loading />
                    : error ? (
                        <Text>{error}</Text>
                    ) : (
                        <ScrollView>
                            {videosList.map((video, index) => (
                                <YouTubeVideo
                                    videoId={video.id}
                                    strategyExplanation={video.explanation}
                                    key={index}
                                />
                            ))}
                        </ScrollView>
                    )}
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    heading: {
        fontSize: 30,
        color: "white",
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: "center"
    },
});


export default Study;

