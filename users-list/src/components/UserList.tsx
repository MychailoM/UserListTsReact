import type { User } from "../types/User";
import './UserList.css'

type UserListProps= {
  users:User[];
  onUserClick: (user:User) =>void;
};

function UsersList ({users, onUserClick}: UserListProps){
    return(
        <ul>
            {users.map(user => (
                <li key={user.id} onClick={() => onUserClick(user)}>
                    <h2>{user.name}: {user.age}</h2>                    
                </li>
            ))}
        </ul>
    )
}

export default UsersList