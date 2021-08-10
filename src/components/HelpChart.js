import { Bar, Pie } from "react-chartjs-2";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  useTheme,
  colors,
} from "@material-ui/core";

import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { useState } from "react";

const HelpChart = ({ hub, typeChart }) => {
  const theme = useTheme();
  console.log("hub.requestSchedule", hub);
  const [pieFilter, setPieFilter] = useState("Request");
  if (!hub.requestSchedule) return <>...loading</>;

  const barData = {
    datasets: [
      {
        backgroundColor: colors.grey[500],
        data: Object.values(hub.requestSchedule),
        label: "Request",
      },
      {
        backgroundColor: colors.grey[300],
        data: Object.values(hub.donationActual),
        label: "Donation",
      },
    ],
    labels: Object.keys(hub.donationSchedule),
  };

  const pieData = {
    datasets: [
      {
        backgroundColor: [
          colors.grey[100],
          colors.grey[200],
          colors.grey[300],
          colors.grey[400],
          colors.grey[500],
          colors.grey[600],
        ],
        data: Object.values(hub.donationSchedule).sort((a, b) => a - b),
        label: "Request",
      },
    ],
    labels: Object.keys(hub.donationSchedule),
  };

  const options = {
    cornerRadius: 20,
    layout: { padding: 0 },
    legend: { display: false },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      xAxes: [
        {
          barThickness: 12,
          maxBarThickness: 10,
          barPercentage: 0.5,
          categoryPercentage: 0.5,
          ticks: {
            fontColor: theme.palette.text.secondary,
          },
          gridLines: {
            display: false,
            drawBorder: false,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            fontColor: theme.palette.text.secondary,
            beginAtZero: true,
            min: 0,
          },
          gridLines: {
            borderDash: [2],
            borderDashOffset: [2],
            color: theme.palette.divider,
            drawBorder: false,
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2],
            zeroLineColor: theme.palette.divider,
          },
        },
      ],
    },
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: "index",
      titleFontColor: theme.palette.text.primary,
    },
  };

  return (
    <Card>
      <CardHeader
        action={
          <Button variant="outlined" size="small">
            toggle {pieFilter === "Request" ? "Donation" : "Request"}
          </Button>
        }
        title={
          typeChart === "bar"
            ? "Request / Donation"
            : `Proportion of ${pieFilter}`
        }
      />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 400,
            position: "relative",
          }}
        >
          {typeChart === "pie" ? (
            <Pie data={pieData} options={options} />
          ) : (
            <Bar data={barData} options={options} />
          )}
        </Box>
      </CardContent>
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          p: 2,
        }}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          Overview
        </Button>
      </Box>
    </Card>
  );
};

export default HelpChart;
