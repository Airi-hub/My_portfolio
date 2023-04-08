const UserProfile = require("../models/userProfile");
const Project = require("../models/project");
const SocialLink = require("../models/socialLink");
const Skill = require("../models/skill");
const Like = require("../models/like");
const Comment = require("../models/comment");

// UserProfile
exports.getUserProfile = async (req, res) => {
  try {
    const userProfile = await UserProfile.find();
    res.status(200).json(userProfile);
  } catch (error) {
    res.status(404).json({ message: "Error retrieving user profile" });
  }
};

exports.createUserProfile = async (req, res) => {
  const newProfile = new UserProfile(req.body);

  try {
    const savedProfile = await newProfile.save();
    res.status(200).json(savedProfile);
  } catch (error) {
    res.status(404).json({ message: "Error creating user profile" });
  }
};

exports.updateUserProfile = async (req, res) => {
  try {
    const updatedProfile = await UserProfile.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedProfile);
  } catch (error) {
    res.status(404).json({ message: "Error updating user profile" });
  }
};

// Project
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(404).json({ message: "Error retrieving projects" });
  }
};

exports.createProject = async (req, res) => {
    const newProject = new Project(req.body);
  
    try {
      const savedProject = await newProject.save();
      res.status(200).json(savedProject);
    } catch (error) {
      console.error("Error:", error);
      res.status(404).json({ message: "Error creating project", error }); // エラーをJSON応答に含める
    }
  };
  
  

exports.updateProject = async (req, res) => {
  try {
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedProject);
  } catch (error) {
    res.status(500).json({ message: "Error updating project" });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Project deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: "Error deleting project" });
  }
};

// SocialLink
exports.getSocialLinks = async (req, res) => {
  try {
    const socialLinks = await SocialLink.find();
    res.status(200).json(socialLinks);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving social links" });
  }
};

exports.createSocialLink = async (req, res) => {
  const newSocialLink = new SocialLink(req.body);

  try {
    const savedSocialLink = await newSocialLink.save();
    res.status(201).json(savedSocialLink);
  } catch (error) {
    res.status(500).json({ message: "Error creating social link" });
  }
};

exports.updateSocialLink = async (req, res) => {
  try {
    const updatedSocialLink = await SocialLink.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedSocialLink);
  } catch (error) {
    res.status(500).json({ message: "Error updating social link" });
  }
};

exports.deleteSocialLink = async (req, res) => {
  try {
    await SocialLink.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Social link deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting social link" });
  }
};

// Skill
exports.getSkills = async (req, res) => {
  try {
    const skills = await Skill.find();
    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving skills" });
  }
};

exports.createSkill = async (req, res) => {
  const newSkill = new Skill(req.body);

  try {
    const savedSkill = await newSkill.save();
    res.status(201).json(savedSkill);
  } catch (error) {
    res.status(500).json({ message: "Error creating skill" });
  }
};

exports.updateSkill = async (req, res) => {
  try {
    const updatedSkill = await Skill.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedSkill);
  } catch (error) {
    res.status(500).json({ message: "Error updating skill" });
  }
};

exports.deleteSkill = async (req, res) => {
  try {
    await Skill.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Skill deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting skill" });
  }
};

// Like
exports.getLikes = async (req, res) => {
  try {
    const likes = await Like.find();
    res.status(200).json(likes);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving likes" });
  }
};

exports.createLike = async (req, res) => {
  const newLike = new Like(req.body);

  try {
    const savedLike = await newLike.save();
    res.status(201).json(savedLike);
  } catch (error) {
    res.status(500).json({ message: "Error creating like" });
  }
};

exports.deleteLike = async (req, res) => {
  try {
    await Like.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Like deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting like" });
  }
};

// Comment
exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.status(200).json(comments);
  } catch (error) {
    res.status(404).json({ message: "Error retrieving comments" });
  }
};

exports.createComment = async (req, res) => {
  const newComment = new Comment(req.body);

  try {
    const savedComment = await newComment.save();
    res.status(200).json(savedComment);
  } catch (error) {
    res.status(404).json({ message: "Error creating comment" });
  }
};

exports.updateComment = async (req, res) => {
  try {
    const updatedComment = await Comment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedComment);
  } catch (error) {
    res.status(404).json({ message: "Error updating comment" });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    await Comment.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: "Error deleting comment" });
  }
};
