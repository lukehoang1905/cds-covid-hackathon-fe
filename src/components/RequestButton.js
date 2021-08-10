import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    requestButton: {
        margin: theme.spacing(1),
    },
}));

export default function RequestButton() {
    const classes = useStyles();
    const history = useHistory();
    function handleClickRequest() {
        history.push("/request");
    }

    return (
        <div>

            {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
            <Button
                variant="contained"
                color="primary"
                className={classes.requestButton}
                endIcon={<SendIcon />}
                onClick={handleClickRequest}
            >
                Bạn cần trợ giúp?
            </Button>

        </div>
    );
}
