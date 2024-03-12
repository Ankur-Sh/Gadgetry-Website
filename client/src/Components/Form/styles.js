import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
        },
    },
    paper: {
        padding: theme.spacing(2),
    },
    form: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    fileInput: {},
    buttonSubmit: {
        marginBottom: "10px",
    },
    p2mb2: {
        padding: "2rem",
        marginBottom: "2rem",
    },
}));
