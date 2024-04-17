import {useEffect, useState} from "react";

const UserList = ({ role, onSelectUser }) => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        if (!role) {
            setError('Role is undefined, cannot fetch users.');
            return;
        }

        fetch(`http://localhost:8080/users?role=${encodeURIComponent(role)}`, {
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                setUsers(data);
                setError('');
            })
            .catch(err => {
                console.error('Error fetching users:', err);
                setError('Failed to fetch users');
            });
    }, [role]);

    return (
        <div>
            <h2>Select a User:</h2>
            {error && <p>{error}</p>}
            <ul>
                {users.map(user => (
                    <li key={user._id} onClick={() => onSelectUser(user)}>
                        {user.email} - {user.firstName} {user.lastName}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;