import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import {
  VerificationLink,
  SliderWrapar,
  SliderWraparBtnBox,
  SliderWraparBtnBox__item,
  SliderWraparBtnBox__item__list} from './StylePage';
  import DeleteIcon from '@material-ui/icons/Delete';
// import format from "date-fns/format";
// import firebase from "../config/firebase";
// import { RecoilRoot, atom, useRecoilState } from "recoil";
import {
  List,
  ListItem,
  // ListItemText,
  Checkbox,
} from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const styles = {
  slide: {
    minHeight: 90,
    color: "#fff",
  },
  slide1: {
    backgroundColor: "#e55f50",
    height:"80vh",
    padding:"0"
  },
};

// export const AllState = atom({
//   key: "AllState",
//   default: {
//     nickname: "",
//     date: new Date("2014-08-18T21:11:54"),
//     present: [],
//   },
// });

const Default = {
  presentName: "[例]時計",
  presentMoney: "[例]2500",
  doing: false,
};
const CostDefault = {
  costName: "[例]家賃",
  costMoney: "[例]25000",
  doing: false,
};

const Together = (props) => {
  const classes = useStyles();
  let [index, setIndex] = useState(0);
  // const [allData, SetAllData] = useRecoilState(AllState);
  // ニックネームと日付のstate
  const [allData, SetAllData] = useState({
    nickname: "",
    date: new Date("2020-01-01T21:11:54"),
  });
  // プレゼントのstate
  const [presentData, SetPresentData] = useState([Default]);
  const [PreData, SetPreData] = useState([
    { presentName: "", presentMoney: "" },
  ]);
  // 生活費のstate
  const [CostData, SetCostData] = useState([CostDefault]);
  const [CostsData, SetCostsData] = useState([{ costName: "", costMoney: "" }]);

// 全てのデータが集まるstate
const [allsState,SetallsState]=useState({
  data1:{
    nickname: "",
    date: new Date("2020-01-01T21:11:54")
  },
  data2:[
    {
      presentName: "", presentMoney: ""
    }
  ],
  data3:[
    {
      costName: "", costMoney: ""
    }
  ],
})

  // 名前onChange
  const onChange = (e) => {
    SetAllData({ ...allData, [e.target.name]: e.target.value });
  };
  // 付き合った日付の記述
  const handleDateChangeDate = (value) => {
    SetAllData({ ...allData, date: value });
  };

  //-----------------------------------------------------------------//
  // presentデータの記述
  //-----------------------------------------------------------------//
  const presenthandleChangeObject = (e) => {
    SetPreData({
      ...PreData,
      [e.target.name]: e.target.value,
    });
  };
  // Inputの中身を削除させる変数
  const initialState = {
    presentName: "",
    presentMoney: "",
  };
  //   Inputの中身をresetさせる;
  const resetTodo = () => {
    SetPreData({ ...initialState });
  };
  const addPresent = () => {
    SetPresentData([
      ...presentData,
      {
        presentName: PreData.presentName,
        presentMoney: PreData.presentMoney,
        doing: false,
      },
    ]);
    resetTodo();
  };
  const deleteTask = (present) => {
    SetPresentData(presentData.filter((x) => x !== present));
    //SetTodoの中のtodotext.
  };
  const handleCheckboxChanges = (present) => {
    SetPresentData(
      presentData.filter((x) => {
        if (x === present) x.doing = !x.doing;
        return x;
      })
    );
  };

  //-----------------------------------------------------------------//
  // Costデータの記述
  //-----------------------------------------------------------------//
  const CosthandleChangeObject = (e) => {
    SetCostsData({
      ...CostsData,
      [e.target.name]: e.target.value,
    });
  };
  // Inputの中身を削除させる変数
  const initialCostState = {
    costName: "",
    costMoney: "",
  };

  //   Inputの中身をresetさせる;
  const resetCost = () => {
    SetCostsData({ ...initialCostState });
  };

  const addCostData = () => {
    console.log(CostData);
    SetCostData([
      ...CostData,
      {
        costName: CostsData.costName,
        costMoney: CostsData.costMoney,
        doing: false,
      },
    ]);
    resetCost();
  };
  const deleteCost = (cost) => {
    SetCostData(CostData.filter((x) => x !== cost));
    //SetTodoの中のtodotext.
  };
  const handleCostCheckboxChanges = (cost) => {
    SetCostData(
      CostData.filter((x) => {
        if (x === cost) x.doing = !x.doing;
        return x;
      })
    );
  };

  //-----------------------------------------------------------------//
  // すべてのデータが入る場所
  //-----------------------------------------------------------------//


  const RegistrationData = () => {
    console.log(allsState);
    SetallsState([
      ...allsState,{
        data1:{
          nickname: "",
          date: new Date("2020-01-01T21:11:54")
        },
        data2:[
          {
            presentName: "", presentMoney: ""
          }
        ],
        data3:[
          {
            costName: "", costMoney: ""
          }
        ],
      }
    ])

  }

  console.log(allData);
  console.log(presentData);
  console.log(CostData);
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
          <SliderWrapar>
            <form className={classes.root} noValidate autoComplete="off">
              <p>ニックネーム</p>
              <TextField
                id="outlined-basic"
                label="ニックネーム"
                variant="outlined"
                name="nickname"
                value={allData.nickname}
                required
                onChange={onChange}
                KeyboardButtonProps={{
                  "aria-label": "change nickname",
                }}
              />
            </form>
          </SliderWrapar>
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide1)}>
          <SliderWrapar>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                name="date"
                margin="normal"
                id="date-picker-dialog"
                label="付き合った記念日"
                format="MM/dd/yyyy"
                value={allData.date}
                required
                onChange={handleDateChangeDate}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </MuiPickersUtilsProvider>
          </SliderWrapar>
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide1)}>
          <SliderWrapar>
            <ul>
              <li>
                <TextField
                  name="presentName"
                  id="outlined-basic"
                  label="プレゼント内容"
                  variant="outlined"
                  required
                  value={PreData.presentName}
                  onChange={presenthandleChangeObject}
                />
              </li>
              <li>
                <TextField
                  name="presentMoney"
                  id="outlined-basic"
                  label="金額"
                  required
                  variant="outlined"
                  value={PreData.presentMoney}
                  onChange={presenthandleChangeObject}
                />
              </li>
              <li>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={addPresent}
                >
                  登録するっぺ
                </Button>
              </li>
            </ul>
            <div className="map">
              <List className={classes.root} component="ul">
                {presentData.map((x) => (
                  <ListItem key={x.presentName} component="li">
                    <Checkbox
                      checked={presentData.doing}
                      value="primary"
                      onChange={() => handleCheckboxChanges(x)}
                    />
                    {x.presentName}
                    {x.presentMoney}
                    <Button href="" onClick={() => deleteTask(x)}>
                      <DeleteIcon />
                    </Button>
                  </ListItem>
                ))}
              </List>
            </div>
          </SliderWrapar>
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide1)}>
          <SliderWrapar>
            <ul>
              <li>
                <TextField
                  name="costName"
                  id="outlined-basic"
                  label="生活費"
                  variant="outlined"
                  required
                  value={CostsData.costName}
                  onChange={CosthandleChangeObject}
                />
              </li>
              <li>
                <TextField
                  name="costMoney"
                  id="outlined-basic"
                  label="金額"
                  required
                  variant="outlined"
                  value={CostsData.costMoney}
                  onChange={CosthandleChangeObject}
                />
              </li>
              <li>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={addCostData}
                >
                  登録するっぺ
                </Button>
              </li>
            </ul>
            <div className="map">
              <List className={classes.root} component="ul">
                {CostData.map((x) => (
                  <ListItem key={x.costName} component="li">
                    <Checkbox
                      checked={CostData.doing}
                      value="primary"
                      onChange={() => handleCostCheckboxChanges(x)}
                    />
                    {x.costName}
                    {x.costMoney}
                    <Button href="" onClick={() => deleteCost(x)}>
                      <DeleteIcon />
                    </Button>
                  </ListItem>
                ))}
              </List>
            </div>
          </SliderWrapar>
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide1)}>
          {/* <p style={{color:"#000"}}>allDataの確認画面</p> */}
          {/* map関数の処理 */}
          <ul style={{padding:"100px"}}>
            <li>{allData.nickname}</li>
            <li>{(JSON.stringify(allData.date))}</li>
          </ul>
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide1)}>
          <p style={{color:"#000"}}>presentDataの確認画面</p>
          <List className={classes.root} component="ul">
                {presentData.map((x) => (
                  <ListItem key={x.presentName} component="li">
                    {x.presentName}
                    {x.presentMoney}
                  </ListItem>
                ))}
          </List>
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide1)}>
          <p style={{color:"#000"}}>CostDataの確認画面</p>
          <List className={classes.root} component="ul">
                {CostData.map((x) => (
                  <ListItem key={x.costName} component="li">
                    {x.costName}
                    {x.costMoney}
                  </ListItem>
                ))}
          </List>
        </div>
      </SwipeableViews>
      <SliderWraparBtnBox className="btnBox">
        <SliderWraparBtnBox__item>
          <li>
            {index <= 0 ? (
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
                前のページに戻る
              </Button>
            )}
          </li>
          <li>
            {index >= 3 ? (
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
                次のページに進む
              </Button>
            )}
          </li>
          <li>
          {index !== 3 ? (
              ""
            ) : (
              <VerificationLink
                variant="contained"
                onClick={() => {
                  setIndex(++index);
                }}
              >
                確認画面に進む
              </VerificationLink>
            )}
          </li>
          <li>
          {index !== 4 ? (
              ""
            ) : (
              <VerificationLink
                variant="contained"
                // onClick={alladd}
                onClick={() => {
                  setIndex(++index);
                  // SetallsState({
                  //   ...allsState
                  // });
                }}
                // onClick={(event) => { func1(); func2();}}
              >
                allDataを登録する
              </VerificationLink>
            )}
          </li>
          <li>
          {index !== 5 ? (
              ""
            ) : (
              <VerificationLink
                variant="contained"
                onClick={() => {
                  setIndex(++index);
                  // SetallsState({
                  //   ...allsState
                  // });
                  
                }}
                // onClick={alladd}
              >
                presentDataを登録する
              </VerificationLink>
            )}
          </li>
          <li>
          {index !== 6 ? (
              ""
            ) : (
              <VerificationLink
                variant="contained"
                onClick={() => {
                  setIndex(++index);
                  // SetallsState({
                  //   ...allsState
                  // });
                }}
                // onClick={alladd}
              >
                CostDataを登録する
              </VerificationLink>
            )}
          </li>
        </SliderWraparBtnBox__item>
      </SliderWraparBtnBox>
    </div>
  );
};

export default Together;



