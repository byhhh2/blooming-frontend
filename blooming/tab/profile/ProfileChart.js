import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

const data = {
  labels: ['J', 'F', 'M', 'A', 'M', 'J'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: (opacity = 1) => '#22195D', // optional
      strokeWidth: 2, // optional
    },
  ],
  legend: [], // optional
};

//rgba(134, 65, 244, ${opacity})

const chartConfig = {
  backgroundGradientFrom: 'white',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: 'white',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => '#4148A5',
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

const ProfileChart = ({month}) => {
  return (
    <View style={styles.container}>
      <View style={styles.graphView}>
        <Text style={styles.graphText}>일기 쓴 일 수 : 51일</Text>
        <LineChart
          data={data}
          width={350}
          height={256}
          verticalLabelRotation={30}
          chartConfig={chartConfig}
          withInnerLines={false}
          withOuterLines={false}
          withHorizontalLabels={false}
          bezier
        />
      </View>
      <View style={styles.stateDiagnosisView}>
        <View style={styles.stateDiagnosisHeader}>
          <Text style={styles.headerText}>{month}월 감정 상태 진단</Text>
        </View>
        <View style={styles.contentView}>
          <Text style={styles.contentText}>감정 진단 내용</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  graphView: {
    flex: 1.5,
    alignSelf: 'center',
    justifyContent: 'center',
    //backgroundColor: 'red',
  },
  graphText: {
    alignSelf: 'center',
    fontFamily: 'GmarketSansTTFMedium',
    fontSize: 20,
    paddingTop: 20,
  },
  stateDiagnosisView: {
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderWidth: 1,
    elevation: 4,
    borderColor: 'white',
    paddingLeft: 20,
  },
  stateDiagnosisHeader: {
    borderBottomWidth: 1,
    width: '90%',
    alignItems: 'center',
    borderColor: 'gray',
    padding: 10,
    paddingTop: 50,
  },
  headerText: {
    fontSize: 25,
    fontFamily: 'GmarketSansTTFMedium',
    color: '#0F143A',
  },
  contentView: {
    marginTop: 30,
  },
  contentText: {
    fontSize: 17,
    fontFamily: 'GmarketSansTTFMedium',
    color: '#0F143A',
  },
});

export default ProfileChart;
