import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  Typography,
} from "@material-ui/core";
import { orange } from "@material-ui/core/colors";
import InsertChartIcon from "@material-ui/icons/InsertChartOutlined";

const Progress = ({ request, donation, filter }) => {
  let stock = 100;
  if (!request || !donation) return <>..loading</>;
  if (request[filter] !== 0) {
    stock = Math.ceil((donation[filter] / request[filter]) * 100);
    if (stock > 100) {
      stock = 100;
    }
  }

  return (
    <Card sx={{ height: "100%" }}>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="h6">
              Stock Capacity
            </Typography>
            <Typography color="textPrimary" variant="h3">
              {`${stock}%`}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: orange[600],
                height: 56,
                width: 56,
              }}
            >
              <InsertChartIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box sx={{ pt: 3 }}>
          <LinearProgress value={stock} variant="determinate" />
        </Box>
      </CardContent>
    </Card>
  );
};

export default Progress;
