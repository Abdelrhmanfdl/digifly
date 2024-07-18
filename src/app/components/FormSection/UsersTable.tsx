"use client";
import React, { useEffect, useState } from "react";
import Table from "../UI/Table";
import { fetchUsers, RootState } from "../../redux/store";
import { THUNK_STATUS } from "../../redux";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

export default function UsersTable() {
  const [users, setUsers] = useState([] as string[][]);

  const dispatch = useAppDispatch();
  const fetchedUsers = useAppSelector((state: RootState) => state.users.users);
  const status = useAppSelector((state: RootState) => state.users.status);
  const error = useAppSelector((state: RootState) => state.users.error);

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
