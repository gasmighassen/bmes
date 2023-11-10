import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";
import { User, UserState } from "../../redux/types/types";
import { bindActionCreators } from "redux";
import { userActionCreator } from "../../redux";

const Profile = () => {
  /*   const dispatch = useDispatch();
  const { userCurrent } = bindActionCreators(userActionCreator, dispatch);
  const currentUser = useSelector((state: any) => state.user.currentUser);
 

  useEffect(() => {
    userCurrent();

    return () => {};
  }, []);
 */
  return <div>name:</div>;
};

export default Profile;
