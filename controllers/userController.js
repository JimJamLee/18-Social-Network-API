const { User, Thought } = require('../models');

module.exports = {
  // Get all users
  getAllUsers(req, res) {
    User.find()
        .select('-__v')
        .then((users) => {
            res.json(users);
        })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  // Get a single user by id
  getSpecificUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .then((user) =>
            !user
                ? res.status(404).json({ message: 'No user with that ID' })
                : res.json(user)
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  // update an existing user
  updateUser(req,res) {
    User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
    )
        .then((user) => 
            !user
                ? res.status(404).json({ message: 'No user with that ID' })
                : res.json(user)
        )
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
          });
  },
  
  // Delete a user and remove their associated thoughts
  deleteUser(req, res) {
    User.findOneAndRemove({ _id: req.params.userId })
        .then((user) =>
            !user
                ? res.status(404).json({ message: 'No user with that ID' })
                : Thought.deleteMany(
                    { _id: { $in: user.thoughts } }
                )
        )
        .then(() => res.json({ message: 'User deleted' }))
        .catch((err) => res.status(500).json(err));
  },

  // Add a friend
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendID } },
      { new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(student)
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  // Remove a friend
  removeFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
};
