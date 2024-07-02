import db from '../firebase.mjs';

const getAllUsers = async (req, res) => {
  try {
    const snapshot = await db.collection('users').get();
    const users = snapshot.docs.map(doc => doc.data());
    res.status(200).json({ payload: users, errCode: 0, errMsg: "Users fetched successfully" });
  } catch (error) {
    res.status(500).json({ payload: [], errCode: 1, errMsg: error.message });
  }
};

export { getAllUsers };
