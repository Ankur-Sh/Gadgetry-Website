import React from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import Nav from "../Navbar/Nav";
import useFormFunctions from "./formFunctions";
const Form = () => {
    //new thing
    const {
        authUser,
        storedUser,
        setGadgetData,
        classes,
        gadgetData,
        handleImageChange,
        handleSubmit,
    } = useFormFunctions();

    return (
        <div>
            <Nav />
            {authUser ? (
                <Paper className={(classes.paper, classes.p2mb2)} elevation={6}>
                    <form
                        autoComplete="off"
                        noValidate
                        className={`${classes.root} ${classes.form}`}
                        onSubmit={handleSubmit}
                    >
                        <Typography variant="h3">
                            {"Creating a Gadget"}
                        </Typography>

                        <TextField
                            name="title"
                            variant="outlined"
                            label="Title"
                            fullWidth
                            value={gadgetData.title}
                            onChange={(e) =>
                                setGadgetData({
                                    ...gadgetData,
                                    title: e.target.value,
                                })
                            }
                        />
                        <TextField
                            name="price"
                            variant="outlined"
                            label="Price"
                            fullWidth
                            value={gadgetData.price}
                            onChange={(e) =>
                                setGadgetData({
                                    ...gadgetData,
                                    price: e.target.value,
                                })
                            }
                        />
                        <TextField
                            name="message"
                            variant="outlined"
                            label="Message"
                            fullWidth
                            multiline
                            rows={5}
                            value={gadgetData.message}
                            onChange={(e) =>
                                setGadgetData({
                                    ...gadgetData,
                                    message: e.target.value,
                                })
                            }
                        />
                        <div className="file_input">
                            <br />
                            <br />
                            <input
                                type="file"
                                className={classes.fileInput}
                                onChange={handleImageChange}
                            />
                            <br />
                            <br />
                            <br />
                        </div>

                        <Button
                            className={classes.buttonSubmit}
                            variant="contained"
                            color="primary"
                            size="large"
                            type="submit"
                            fullWidth
                            disabled={
                                gadgetData.title === "" ||
                                gadgetData.message === "" ||
                                gadgetData.tags === [] ||
                                gadgetData.selectedFile === ""
                            }
                            onClick={(e) =>
                                setGadgetData({
                                    ...gadgetData,
                                    creator: authUser.email,
                                })
                            }
                        >
                            Submit
                        </Button>
                    </form>
                </Paper>
            ) : (
                <h1>Login To Access It</h1>
            )}
        </div>
    );
};

export default Form;
