import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import TailGateHeader from '../components/TailGateHeader';
import BackgroundImage from '../assets/background.png';

export default function () {
  const renderBroadcast = (league, time, teams) => (
    <View style={styles.broadcast}>
      <View style={styles.leagueContainer}>
        <Text style={styles.league}>{league}</Text>
        <Text style={styles.matchTime}>{time}</Text>
      </View>

      <View style={styles.teamsContainer}>
        <Text style={styles.teams}>{teams}</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <TailGateHeader />

      <Text style={styles.title}>Трансляции</Text>

      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100, marginTop: 15}}>
        {renderBroadcast(
          'La Liga',
          '02.06 19:00',
          'Sevilla \n' + 'Real Sociedad',
        )}
        {renderBroadcast(
          'Bundesliga',
          '07.06 20:30',
          'RB Leipzig \n' + 'Wolfsburg',
        )}
        {renderBroadcast(
          'Volleyball Nations League',
          '12.06 18:45',
          'Brazil \n' + 'USA',
        )}
        {renderBroadcast(
          'Handball Champions League',
          '17.06 20:00',
          'Barcelona \n' + 'Paris Saint-Germain',
        )}
        {renderBroadcast(
          'Esports - CS:GO Major',
          '22.06 22:00',
          'FaZe Clan \n' + 'Natus Vincere',
        )}
        {renderBroadcast(
          'Esports - Dota 2 TI Finals',
          '27.06 23:30',
          'Team Spirit \n' + 'Gaimin Gladiators',
        )}
        {renderBroadcast(
          'MLB',
          '02.07 16:30',
          'Toronto Blue Jays \n' + 'Cleveland Guardians',
        )}
        {renderBroadcast(
          'NFL',
          '07.07 21:15',
          'Los Angeles Rams \n' + 'Denver Broncos',
        )}
        {renderBroadcast(
          'Tennis - ATP Finals',
          '12.07 18:30',
          'Stefanos Tsitsipas \n' + 'Casper Ruud',
        )}
        {renderBroadcast(
          'Cricket - T20 World Cup',
          '17.07 15:45',
          'India \n' + 'West Indies',
        )}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: COLORS.white,
  },
  broadcast: {
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 20,
    paddingLeft: 20,
    borderRadius: 12,
    borderWidth: 2,
  },
  league: {
    fontSize: 18,
    fontFamily: FONTS.black,
    color: COLORS.white,
    paddingVertical: 8,
  },
  leagueContainer: {
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  teamsContainer: {
    width: '100%',
    paddingBottom: 10,
  },
  matchTime: {
    fontSize: 20,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    width: '40%',
    marginLeft: 15,
    opacity: 0.7,
  },
  teams: {
    textAlign: 'left',
    fontFamily: FONTS.bold,
    fontSize: 16,
    color: COLORS.white,
    marginTop: 5,
    marginLeft: 5,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    paddingVertical: 5,
  },
});
