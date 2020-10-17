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
  slide4: {
    backgroundColor: "#FEA900",
  },
  slide5: {
    backgroundColor: "#FEA900",
  },
  slide6: {
    backgroundColor: "#FEA900",
  },
  slide7: {
    backgroundColor: "#FEA900",
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
    nickname: "default",
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
          <div>
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
          </div>
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide2)}>
          <div>
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
          </div>
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide3)}>
          <div>
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
                      削除するっぺ
                    </Button>
                  </ListItem>
                ))}
              </List>
            </div>
          </div>
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide4)}>
          <div>
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
                      削除するっぺ
                    </Button>
                  </ListItem>
                ))}
              </List>
            </div>
          </div>
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide5)}>
          <p style={{color:"#000"}}>allDataの確認画面</p>
          {/* map関数の処理 */}

          {allData.map((x, i) => <li key={i}>{x}</li>)}
          {/* <ul>
            {allData.map(x => (
              <li key={x.id}>{x.date}</li>
            ))}
          </ul> */}
          {/* <ul>
            {
              allData.length > 0 ? (
                "<div>no items</div>"
              ):(
                allData.map(x => <li>{x}</li>)
              )
            }
          </ul> */}
              {/* <List className={classes.root} component="ul">
                {allData.map((x) => (
                  <ListItem key={x.nickname} component="li">
                    {x.nickname}
                  </ListItem>
                ))}
              </List> */}
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide6)}>
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
        <div style={Object.assign({}, styles.slide, styles.slide7)}>
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
      <div className="btnBox">
        <ul>
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
              <Button
                variant="contained"
                color="#000"
                style={{
                  background: "#000",
                  border: "solid 1px #fff",
                  color: "#fff",
                }}
                onClick={() => {
                  setIndex(++index);
                }}
              >
                確認画面に進む
              </Button>
            )}
          </li>
          <li>
          {index !== 4 ? (
              ""
            ) : (
              <Button
                variant="contained"
                color="#eee"
                style={{
                  background: "#eee",
                  border: "solid 1px #fff",
                  color: "#fff",
                }}
                onClick={() => {
                  setIndex(++index);
                }}
              >
                allDataを登録する
              </Button>
            )}
          </li>
          <li>
          {index !== 5 ? (
              ""
            ) : (
              <Button
                variant="contained"
                color="#eee"
                style={{
                  background: "#eee",
                  border: "solid 1px #fff",
                  color: "#fff",
                }}
                onClick={() => {
                  setIndex(++index);
                }}
              >
                presentDataを登録する
              </Button>
            )}
          </li>
          <li>
          {index !== 6 ? (
              ""
            ) : (
              <Button
                variant="contained"
                color="#eee"
                style={{
                  background: "#eee",
                  border: "solid 1px #fff",
                  color: "#fff",
                }}
                onClick={() => {
                  setIndex(++index);
                }}
              >
                CostDataを登録する
              </Button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Together;



