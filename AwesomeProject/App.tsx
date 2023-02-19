/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren}
from 'react';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button,
    Alert
} from 'react-native';

import {Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren < {
    title: string;
} >;

function Section({children, title} : SectionProps): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View style={styles.sectionContainer}>
            <Text
                style={[
                    styles.sectionTitle, {
                        color: isDarkMode
                            ? Colors.white
                            : Colors.black
                    }
                ]}>
                {title}
            </Text>
            <Text
                style={[
                    styles.sectionDescription, {
                        color: isDarkMode
                            ? Colors.light
                            : Colors.dark
                    }
                ]}>
                {children}
            </Text>
        </View>
    );
}

function App(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode
            ? Colors.darker
            : Colors.lighter
    };
    
    var body = ''

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode
                    ? 'light-content'
                    : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}/>
            <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
                <Header/>
                <View
                    style={{
                        backgroundColor: isDarkMode
                            ? Colors.black
                            : Colors.white
                    }}>
                    <Section title="출근 버튼 만들기">
                        <Text style={styles.highlight}>이곳에 gg 버튼을 넣어보겠습니다.</Text>
                        <Button
                            title="출근"
                            // onPress={() => fetch('http://172.17.4.16:8000/').then(response => response.json()).then(이거 => console.warn(이거))}></Button>
                            //onPress={() => fetch('http://172.17.4.16:8000/').then(response => response.json()).then((data)=>console.log(typeof(data)))}></Button>                            
                            onPress={() => fetch('http://172.17.4.16:8000/').then(response => response.json()).then((data)=>{
                              let datas = data;
                              data.map((user_id: any,idx: any)=>console.log(user_id.user_id))
                              
                              })
                              .catch((error) => console.log("error:", error))
                              }></Button>                            
                    </Section>
                    <Section title="See Your Changes">
                        <ReloadInstructions/>
                    </Section>
                    <Section title="Debug">
                        <DebugInstructions/>
                    </Section>
                    <Section title="Learn More">
                        Read the docs to discover what to do next:
                    </Section>
                    <LearnMoreLinks/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600'
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400'
    },
    highlight: {
      backgroundColor: 'yellow',
        fontWeight: '700'
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'blue',
        padding: 10
    }
});

export default App;
