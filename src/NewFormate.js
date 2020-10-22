import React, { useState, useMemo } from "react";
import css from "./format.module.css";

const WhiteSpace = (() => {
  const style = { borderLeft: "1px dashed white" };
  const innerStyle = {
    display: "inline-block",
    fontSize: "1px",
    width: "35px",
  };
  return (
    <span style={style}>
      <span style={innerStyle}> · · · · · </span>
    </span>
  );
})();

export default function NFormate(props) {
  const style = {
    textAlign: "left",
    whiteSpace: "pre",
    background: "black",
    color: "white",
    padding: "10px 0",
  };
  FormateData.ESPLE = props.esple || WhiteSpace;
  return (
    <div style={style}>
      <FormateData tkey="" data={props.data} esple={""} />
    </div>
  );
}

function SymbolBtn(props) {
  const { toggle, handleToggle } = props;
  const preEspleStyle = {
    width: "20px",
    display: "inline-block",
    marginRight: "5px",
    marginLeft: "5px",
  };
  if (!handleToggle) return <span style={preEspleStyle}></span>;
  return (
    <span>
      <button style={preEspleStyle} onClick={handleToggle}>
        {toggle ? "+" : "-"}
      </button>
    </span>
  );
}

function FormateData(props) {
  const { tkey, data, esple } = props;

  const [toggle, setToggle] = useState(false);
  const t = data instanceof Array ? ["[", "]"] : ["{", "}"];

  function handleToggle() {
    setToggle(!toggle);
  }

  const keypart = (
    <>
      {esple}
      {tkey}
      {!tkey ? "" : " :  "}
    </>
  );
  if (toggle) {
    return (
      <div className={css.row}>
        <SymbolBtn toggle={toggle} handleToggle={handleToggle} />
        {keypart}
        {`${t[0]}...${t[1]}`}
      </div>
    );
  }
  if (data instanceof Array || typeof data == "object") {
    return (
      <>
        <div className={css.row}>
          <SymbolBtn toggle={toggle} handleToggle={handleToggle} />
          {keypart}
          {`${t[0]}`}
        </div>
        <div>
          {data instanceof Array
            ? data.map((item) => {
                return (
                  <FormateData
                    tkey=""
                    data={item}
                    esple={
                      <>
                        {FormateData.ESPLE}
                        {esple}
                      </>
                    }
                  />
                );
              })
            : Object.keys(data).map((key) => {
                return (
                  <FormateData
                    tkey={key}
                    key={key}
                    data={data[key]}
                    esple={
                      <>
                        {FormateData.ESPLE}
                        {esple}
                      </>
                    }
                  />
                );
              })}
        </div>
        <div className={css.row}>
          <SymbolBtn toggle={toggle} handleToggle={handleToggle} />
          {esple}
          {`${t[1]}，`}
        </div>
      </>
    );
  } else
    return (
      <div className={css.row}>
        <SymbolBtn />
        {keypart}
        {`${data}，`}
      </div>
    );
}
