import React, {useEffect} from "react";
import {observer} from "mobx-react";
import {toJS} from "mobx";

function Child ({ auth: {
    isAuthenticated,
    user,
    logIn,
    reassign,
    reassignSame,
    logOut,
    changeName
} }) {
    useEffect(() => {
        console.log("user useEffect", toJS(user), typeof user);
    }, [user]);
    useEffect(() => {
        console.log(
            "user useEffect via isAuthenticated",
            toJS(isAuthenticated),
            typeof isAuthenticated
        );
    }, [isAuthenticated]);

    return (<div>
      <pre>
        {JSON.stringify(
            { user, isAuthenticated },
            null,
            2
        )}
      </pre>
        <button onClick={logIn}>login</button>
        <button onClick={reassign}>reassign</button>
        <button onClick={changeName}>change name</button>
        <button onClick={reassignSame}>reassign same</button>
        <button onClick={logOut}>logout</button>
    </div>);
};

export default observer(Child);
