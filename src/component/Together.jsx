import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import format from "date-fns/format";
import firebase from "../config/firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
const Question01 = (props) => {
  const classes = useStyles();
  const [namedata, setNamedata] = React.useState({
    nickname: "",
  });
  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <p>ニックネーム</p>
        <TextField
          id="outlined-basic"
          label="ニックネーム"
          variant="outlined"
          onChange={(e) =>
            props.save({
              nickname: e.target.value,
            })
          }
          KeyboardButtonProps={{
            "aria-label": "change nickname",
          }}
        />
      </form>
    </div>
  );
};

const Question02 = (props) => {
  const classes = useStyles();
  const [anniversaryData, setAnniversaryData] = React.useState(
    new Date("2014-08-18T21:11:54")
  );
  return (
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="付き合った記念日"
          format="MM/dd/yyyy"
          value={anniversaryData}
          onChange={handleDateChangeAnniversary}
          onChange={(e) => props.save(anniversaryData)}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
      </MuiPickersUtilsProvider>
    </div>
  );
};

// const Question03 = (props) => {
//   const classes = useStyles();
//   const [presentData, setpresentData] = React.useState([
//     {
//       lists: [],
//       present: "",
//       money: "",
//     },
//   ]);
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setpresentData({
//       lists: [
//         ...presentData,
//         {
//           present: presentData.present,
//           money: presentData.money,
//         },
//       ],
//       present: "",
//       money: "",
//     });
//   };
//   return (
// <div>
//   <ul>
//     <li>
//       <TextField
//         id="outlined-basic"
//         label="プレゼント内容"
//         variant="outlined"
//         value={presentData.present}
//         onChange={(e) =>
//           props.save({
//             present: e.target.value,
//           })
//         }
//         KeyboardButtonProps={{
//           "aria-label": "change present",
//         }}
//       />
//     </li>
//     <li>
//       <TextField
//         id="outlined-basic"
//         label="金額"
//         variant="outlined"
//         value={presentData.money}
//         onChange={(e) =>
//           props.save({
//             money: e.target.value,
//           })
//         }
//         KeyboardButtonProps={{
//           "aria-label": "change money",
//         }}
//       />
//     </li>
//     <li>
//       <button onClick={handleSubmit}>send</button>
//     </li>
//   </ul>
// </div>
// );
// };

const styles = {
  slide: {
    padding: 15,
    minHeight: 100,
    color: "#fff",
  },
  slide1: {
    backgroundColor: "#FEA900",
  },
  slide2: {
    backgroundColor: "#FEA900",
  },
  slide3: {
    backgroundColor: "#FEA900",
  },
};

const Together = (props) => {
  const classes = useStyles();
  const [presentData, setpresentData] = React.useState([
    {
      lists: [],
      present: "",
      money: "",
    },
  ]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setpresentData({
      lists: [
        ...presentData,
        {
          present: presentData.present,
          money: presentData.money,
        },
      ],
      present: "",
      money: "",
    });
  };

  let [index, setIndex] = useState(0);
  let [alldata, setAllData] = useState([
    { nickname: "" },
    { date: firebase.firestore.Timestamp },
  ]);

  const handleDateChangeNickname = (nickname) => {
    console.log(alldata[0]);
    alldata[0] = { ...alldata[0], ...nickname };
    setAllData([...alldata]);
  };
  const handleDateChangeAnniversary = (date) => {
    console.log(alldata[1]);
    alldata[1] = date;
    setAllData([...alldata]);
  };
  return (
    <div>
      <SwipeableViews
        enableMouseEvents
        disabled={true}
        onChangeIndex={(index) => {
          setIndex(index);
        }}
        index={index}
      >
        <div style={Object.assign({}, styles.slide, styles.slide1)}>
          <Question01 save={(e) => handleDateChangeNickname(e)} />
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide2)}>
          <Question02 save={(e) => handleDateChangeAnniversary(e)} />
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide3)}>
          <div>
            <ul>
              <li>
                <TextField
                  id="outlined-basic"
                  label="プレゼント内容"
                  variant="outlined"
                  value={presentData.present}
                  onChange={(e) =>
                    props({
                      present: e.target.value,
                    })
                  }
                  KeyboardButtonProps={{
                    "aria-label": "change present",
                  }}
                />
              </li>
              <li>
                <TextField
                  id="outlined-basic"
                  label="金額"
                  variant="outlined"
                  value={presentData.money}
                  onChange={(e) =>
                    props({
                      money: e.target.value,
                    })
                  }
                  KeyboardButtonProps={{
                    "aria-label": "change money",
                  }}
                />
              </li>
              <li>
                <button onClick={handleSubmit}>send</button>
              </li>
            </ul>
          </div>
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide3)}></div>
      </SwipeableViews>
      <div className="btnBox">
        <ul>
          <li>
            {index === 0 ? (
              ""
            ) : (
              <Button
                variant="contained"
                color="#1655B6"
                style={{
                  background: "#1655B6",
                  border: "solid 1px #fff",
                  color: "#fff",
                }}
                onClick={() => {
                  setIndex(--index);
                }}
              >
                前の質問に戻る
              </Button>
            )}
          </li>
          <li>
            {index === 4 ? (
              ""
            ) : (
              <Button
                variant="contained"
                color="#F26152"
                style={{
                  background: "#F26152",
                  border: "solid 1px #fff",
                  color: "#fff",
                }}
                onClick={() => {
                  setIndex(++index);
                }}
              >
                次の質問に進む
              </Button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Together;
