/** @jsx jsx */
import React, { useState } from "react";
import { jsx } from "@emotion/core";
import { Icon } from "semantic-ui-react";
import { Link } from "@reach/router";
import { Route, Redirect } from "@reach/router";
import { useReset } from "../action-hook";
import Modal from "../components/Modal";

function HeaderBar({ routePath, titleBar }) {
  const headerCss = {
    display: "flex",
    flexDirection: "row",
    fontSize: 20,
    color: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    background: "rgba(245, 230, 83, 1)",
    padding: 20,
    width: "100%",
    fontWeight: "bold",
    marginBottom: "30px",
    zIndex: 4
  };

  const h1 = {
    margin: 0
  };

  const buttoncss = {
    backgroundColor: "Transparent",
    backgroundRepeat: "no-repeat",
    border: "none",
    cursor: "pointer",
    overflow: "hidden",
    color: "white"
  };

  const reset = useReset();

  function handleYes() {
    Redirect("/");
    reset();
  }

  const [show, setShow] = useState(false);

  function handleModal() {
    setShow(true);
  }

  return (
    <div css={headerCss}>
      {titleBar === "Product List" ? (
        <button css={buttoncss} onClick={handleModal}>
          <Icon name="arrow alternate circle left outline" size="large" />
        </button>
      ) : (
        <Link to={routePath} style={{ color: "white" }}>
          <Icon name="arrow alternate circle left outline" size="large" />
        </Link>
      )}
      {show ? <Modal /> : null}
      {/* <Link to={routePath} style={{ color: "white" }}>
        <Icon name="arrow alternate circle left outline" size="large" />
      </Link> */}
      <br />
      <h1 css={h1}>{titleBar}</h1>
    </div>
  );
}

export default HeaderBar;
