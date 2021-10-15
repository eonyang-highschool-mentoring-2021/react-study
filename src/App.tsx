import React from "react";
import "./App.css";
import CalcRoot from "./components/CalcRoot";

import useAxios, { configure } from "axios-hooks";
import axios from "./utils/axios";
import { Button } from "@material-ui/core";

function App() {
  /**
   * @name useAxios
   * axios (state) -> http 요청 객체를 다루는 데이터
   * axios hook(state 를 변경할 수 있는 함수)
   *
   * GET => CRUD, R, Read 데이터를 가져온다.
   */
  const [{ data: getData }, excuteGet] = useAxios(
    {
      url: "http://localhost:5000/app/names",
      method: "GET",
    },
    { manual: true }
  );

  const [{ data: postData }, excutePost] = useAxios(
    {
      url: "http://localhost:5000/app/new-one",
      method: "POST",
    },
    { manual: true }
  );

  /**
   * @name Delete요청보내기
   */
  const [{ data: deleteData }, excuteDelete] = useAxios(
    {
      url: "",
      method: "GET",
    },
    { manual: true }
  );

  return (
    <div
      style={{
        display: "flex",
        width: window.innerWidth,
        height: window.innerHeight,
        justifyContent: "center",
        alignItems: "center",
        border: "5px solid black",
        flexDirection: "column",
      }}
    >
      <CalcRoot />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          style={{
            height: 100,
            width: 200,
            backgroundColor: "tomato",
          }}
          onClick={() => {
            excuteGet().then((res) => {
              console.log(res); // http response 응답, 요청 구조는 동일
            }); // setState('hello, world!');

            // setState 를 할 새로운 데이터는 서버로부터 받아온다.
          }}
        >
          Get
        </Button>

        <Button
          style={{
            height: 100,
            width: 200,
            backgroundColor: "green",
          }}
          onClick={() => {
            excutePost({
              /**
               * 저장하고 싶은 데이터를 어디에 넣어서 요청을 해야하는가?
               * body
               */
              data: { name: "새로운 데이터 이름", class: "axios" },
            });
          }}
        >
          POST
        </Button>

        <Button
          style={{
            height: 100,
            width: 200,
            backgroundColor: "blue",
          }}
        >
          PUT
        </Button>

        <Button
          style={{
            height: 100,
            width: 200,
            backgroundColor: "coral",
          }}
        >
          DELETE
        </Button>
      </div>
    </div>
  );
}

export default App;
