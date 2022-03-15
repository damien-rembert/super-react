//@ts-check
import React from "react";

export const Login = ({
    handler,
    nameSetter,
    emailSetter,
    passSetter,
    boolSetter,
    bool,
  }) => {
    return (
      <>
        <form onSubmit={handler}>
          <input
            onChange={(e) => nameSetter(e.target.value)}
            placeholder="Username"
          />
          {!bool && (
            <input
              onChange={(e) => emailSetter(e.target.value)}
              placeholder="Email"
            />
          )}
          <input
            onChange={(e) => passSetter(e.target.value)}
            placeholder="Password"
          />
          <button type="submit">Submit</button>
        </form>
        <button onClick={() => boolSetter(!bool)}>Log-in or Sign-up</button>
    </>
    );
  };
  