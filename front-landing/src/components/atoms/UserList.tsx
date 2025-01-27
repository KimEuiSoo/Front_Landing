import React from "react";
import {Box} from "@mui/material";
import User from "./User";

interface UserListProps{
    data:any;
}

const UserList = ({data}:UserListProps) => {
    return (
        <Box>
            {data.getPeople.map((user:{id:string, name:string, phone:string})=>{
               return (
                   <User key={user.id} name={user.name} phone={user.phone}/>
               )
            })}
        </Box>
    );
}

export default UserList;