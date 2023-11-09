import React from "react";
import { View, Text, ScrollView } from "react-native";
import YouTubeVideo from "../components/YouTubeVideo";

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
        explanation:
            "Ambient background music enhaces focus and concentration.",
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
            "The Feynman Technique is a study method that involves explaining a topic in simple terms as if teaching it to someone else. This process helps to indentify gaps in your understanding.",
    },
];

const Study = () => {
    return (
        <View style={{ flex: 1, padding: 16 }}>
            <Text
                style={{
                    fontSize: 24,
                    fontWeight: "bold",
                    marginBottom: 16,
                    textAlign: "center",
                }}
            >
                Study Strategies
            </Text>
            <ScrollView>
                {videosList.map((video, index) => (
                    <YouTubeVideo
                        videoId={video.id}
                        strategyExplanation={video.explanation}
                        key={index}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

export default Study;

export function getRandomVideo() {
    return videosList[Math.floor(Math.random() * videosList.length)];
}
