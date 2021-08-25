import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

import axios from 'axios';

const chartConfig = {
  backgroundGradientFrom: 'white',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: 'white',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => '#4148A5',
  //strokeWidth: 3, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

let ii = 0;

const ProfileChart = ({month}) => {
  const [score, setScore] = useState([
    {
      score: 0,
    },
    {
      score: 0,
    },
    {
      score: 0,
    },
  ]);

  const [score_exp, setScore_exp] = useState([]);
  const [avg_score, setAvg_score] = useState(0);
  const [diary_count, setDiary_count] = useState(0);

  const data = {
    labels: ['월초', '', '', '', '월말'],
    // labels: [],
    datasets: [
      {
        // data: [20, 45, 28, 80, 99, 43],
        data: score.map(x => (score.length <= 0 ? 1 : x.score)).concat([0, 0]),
        color: (opacity = 1) => '#22195D', // optional
        strokeWidth: 3, // optional
      },
    ],
    legend: [], // optional
  };

  useEffect(() => {
    getStats();
    getScoreOfMonth();
    getCount();
  }, []);

  const getStats = () => {
    axios
      .get(`${axios.defaults.baseURL}/diary/stats/?month=2021-${month}`, {
        headers: {
          Authorization: `JWT ${axios.defaults.headers.common['Authorization']}`,
        },
      })
      .then(response => {
        setScore(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const getScoreOfMonth = () => {
    axios
      .get(`${axios.defaults.baseURL}/diary/score/?month=2021-${month}`, {
        headers: {
          Authorization: `JWT ${axios.defaults.headers.common['Authorization']}`,
        },
      })
      .then(response => {
        setAvg_score(response.data.mean);
        // console.log(response.data.mean);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const getCount = () => {
    axios
      .get(`${axios.defaults.baseURL}/diary/count/?month=2021-${month}`, {
        headers: {
          Authorization: `JWT ${axios.defaults.headers.common['Authorization']}`,
        },
      })
      .then(response => {
        //setAvg_score(response.data.mean);
        // console.log(response.data.count);
        setDiary_count(response.data.count);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const returnMindState = avg => {
    if (avg >= -1 && avg < 0.2) {
      return "누군가의 전문적인 도움이 필요해요 !\n\n지금 당신은 우울증 지수에서 가장 높은 단계에 \n\n속하는 '심각하게 우울한 상태'입니다. \n\n책읽기, 산책 등 일상적인 노력으로는 극복하지 \n\n못했다면 꼭 심리 상담으로 \n\n전문적인 도움을 받으시길 추천합니다.\n\n";
    } else if (avg >= 0.2 && avg < 0.4) {
      return '나쁨';
    } else if (avg >= 0.4 && avg < 0.6) {
      return '보통';
    } else if (avg >= 0.6 && avg < 0.8) {
      return '좋음';
    } else if (avg >= 0.8 && avg < 1.0) {
      return '매우 좋음';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.graphView}>
        <Text style={styles.graphText}>일기 쓴 일 수 : {diary_count}일</Text>
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
      <ScrollView style={styles.stateDiagnosisView}>
        <View style={styles.stateDiagnosisHeader}>
          <Text style={styles.headerText}>{month}월 감정 상태 진단</Text>
        </View>
        <View style={styles.contentView}>
          <Text style={styles.contentText}>
            {avg_score === undefined || null
              ? '일기가 충분하지 않습니다.'
              : returnMindState(avg_score)}
          </Text>
        </View>
      </ScrollView>
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
    marginRight: 40,
  },
  graphText: {
    alignSelf: 'center',
    fontFamily: 'GmarketSansTTFMedium',
    fontSize: 20,
    paddingTop: 20,
    marginLeft: 35,
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
