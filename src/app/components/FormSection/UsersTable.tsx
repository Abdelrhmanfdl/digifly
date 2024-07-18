"use client";
import React, { useEffect, useState } from "react";
import Table from "../UI/Table";
import { useDispatch, useSelector } from "react-redux";
import {
  AppUsersDispatch,
  fetchUsers,
  RootUsersState,
} from "../../redux/usersStore";
import { THUNK_STATUS } from "../../redux";

export default function UsersTable() {
  const [users, setUsers] = useState([] as string[][]);

  const dispatch = useDispatch<AppUsersDispatch>();
  const fetchedUsers = useSelector(
    (state: RootUsersState) => state.users.users
  );
  const status = useSelector((state: RootUsersState) => state.users.status);
  const error = useSelector((state: RootUsersState) => state.users.error);

  useEffect(() => {
    if (status === THUNK_STATUS.IDLE) {
      dispatch(fetchUsers());
    }
  }, [status]);

  useEffect(() => {
    if (error != undefined) {
      alert("failed to fetch users");
    }
  }, [status]);

  useEffect(() => {
    if (!fetchedUsers || error || status !== THUNK_STATUS.SUCCEEDED) return;
    setUsers(
      fetchedUsers.map((user) => [
        user.FirstName,
        user.LastName,
        user.Phone,
        user.Email,
      ])
    );
  }, [fetchUsers, status]);

  return (
    <Table
      rows={[["First name", "Last name", "Phone number", "Email"], ...users]}
    />
  );
}
