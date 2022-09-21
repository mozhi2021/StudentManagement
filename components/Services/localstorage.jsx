import React, { useState, useEffect } from "react";

export default function LocalStorage() {
  useEffect(() => {
    localStorage.setItem("dob", "test.age");
  }, []);

  return <></>;
}
