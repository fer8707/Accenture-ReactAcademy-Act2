import React from 'react'
import UserRow from './UserRow'

export default function UserList({userList}) {
    return (
        <div>
            {
                userList.length > 0 ?
                    userList.map((user)=>{
                        return(
                            <div>
                                <UserRow userProp={user} />

                            </div>
                        )
                    }) 
                : null
            }
        </div>
    )
}
