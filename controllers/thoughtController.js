const { User, Thought } = require('../models');

module.exports = {
  // Get all thoughts
  getAllThoughts(req, res) {
    Thought.find()
        .then((thoughts) => {
            res.json(thoughts);
        })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  // Get a single thought by id
  getSpecificThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then((thought) =>
            !thought
                ? res.status(404).json({ message: 'No thought with that ID' })
                : res.json(thought)
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  // create a new thought
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => res.json(thought))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  // update an existing thought
  updateThought(req,res) {
    Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: {thoughtText: req.body.thoughtText }},
        { runValidators: true, new: true }
    )
        .then((thought) => 
            !thought
                ? res.status(404).json({ message: 'No thought with that ID' })
                : res.json(thought)
        )
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
          });
  },
  
  // delete a thought
  deleteThought(req, res) {
    Thought.findOneAndRemove({ _id: req.params.thoughtId })
        .then((thought) =>
            !thought
                ? res.status(404).json({ message: 'No thought with that ID' })
                : res.json({ message: 'Thought deleted' })
                )
  },

  // create a new reaction to a thought
  createReaction(req, res) {
    Thought.findOneAndUpdate(
        {_id: req.params.thoughtId},
        {$push: { reactions: req.body } },
        {runValidators: true, new: true,},
        )
            .then((reaction) => 
                !reaction
                    ? res.status(404).json({ message: `No thought with that ID`})
                    : res.json(reaction)
            )
            .catch((err) => res.status(500).json(err))
  },

  // delete a reaction
  removeReaction(req, res) {
    Thought.findOneAndUpdate(
        {_id: req.params.thoughtId},
        {$pull: {reactions: { reactionId: req.params.reactionId }} },
        {runValidators: true, new: true,},
    )
        .then((reaction) => 
            !reaction
                ? res.status(404).json({ message: `No user with that ID` })
                : res.json({message: 'Reaction deleted'})
        )
  }
};
