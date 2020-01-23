import React from 'react';

const UserCard = (props) => {

    const genData = props.data.gitHubData;

    return (
        <div className="userCard">
            <h2>{genData.login}</h2>
            <img src={genData.avatar_url} alt="Profile" />
            <h3>{genData.bio}</h3>
            <h4>{genData.location}</h4>
        </div>
    )
}

export default UserCard;