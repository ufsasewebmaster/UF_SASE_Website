import React from 'react';
import { useQuery } from 'react-query';
import fetchUserProfile from '../api/userService';

const UserProfile = ({ userId }) => {
  const { data: user, error, isLoading } = useQuery(['userProfile', userId], () => fetchUserProfile(userId));

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading user profile: {error.message}</p>;

  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  );
};

export default UserProfile;
