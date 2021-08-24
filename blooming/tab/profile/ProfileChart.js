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
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
      strokeWidth: 2, // optional
    },
  ],
  legend: ['Rainy Days'], // optional
};

const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#08130D',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

const ProfileChart = () => {
  return (
    <View style={styles.container}>
      <View style={styles.graphView}>
        {/* <LineChart
          data={data}
          width={200}
          height={256}
          verticalLabelRotation={30}
          chartConfig={chartConfig}
          bezier
        /> */}
      </View>
      <View style={styles.stateDiagnosisView}>
        <View style={styles.stateDiagnosisHeader}>
          <Text style={styles.headerText}>7월 감정 상태 진단</Text>
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
  },
  contentView: {
    marginTop: 30,
  },
  contentText: {
    fontSize: 17,
    fontFamily: 'GmarketSansTTFMedium',
  },
});

export default ProfileChart;
