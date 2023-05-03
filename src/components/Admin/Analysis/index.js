import React from 'react';
import { makeStyles } from '@mui/styles';
import Chart from 'react-apexcharts'

const useStyles = makeStyles(() => ({
  container: {
  },
  titleContainer: {
    height: "100px",
    padding: "39px 20px",
  },
  title: {
    color: "#03045E",
    fontSize: "1.2em",
  },
  content: {
    marginLeft: "40px",
    padding: "20px",
    border: '1px solid #00B4D8',
    borderRadius: "10px",
    width: "1200px",
    height: "600px",
  },

}));

const Analysis = () => {
  const styles = useStyles();
  const series = [{
    name: "Access",
    data: [100, 411, 354, 513, 492, 342, 669, 931, 548, 731, 412, 122]
  }];
  const options = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight',
    },
    title: {
      text: 'Truy cập trong tháng',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    }
  };


  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>PHÂN TÍCH</h3>
      </div>
      <div className={styles.content}>  
        <Chart
          options={options}
          series={series}
          type="line"
          height="100%"
          width="100%"
        />
      </div>
    </div>
  );
};

export default Analysis;