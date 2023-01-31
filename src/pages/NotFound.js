import React from "react";
import { useLocation } from "react-router-dom";

function NotFound() {
  let location = useLocation();
  return (
    <div>
      <div>
        No match for <code>{location.pathname}</code>
      </div>
    </div>
  );
}

export default NotFound;
