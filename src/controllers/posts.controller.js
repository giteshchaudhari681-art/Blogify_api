const getAllPosts = (req, res) => {
  const { sortBy } = req.query;

  let posts = [
    { id: 1, title: "Hello World", date: "2024-01-01" },
    { id: 2, title: "Learning Express", date: "2024-01-02" }
  ];

  if (sortBy === 'date') {
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  // Refactored to match "Blogify" standards
  res.status(200).json({
    success: true, // Boolean instead of string
    message: 'All posts fetched successfully', // Added message per instructions
    results: posts.length,
    data: posts
  });
};

const getPostById = (req, res) => {
  const { postId } = req.params;
  
  const posts = [
    { id: 1, title: "Hello World", date: "2024-01-01" },
    { id: 2, title: "Learning Express", date: "2024-01-02" }
  ];

  const post = posts.find(p => p.id === parseInt(postId));

  if (!post) {
    // Nesting the error message for a cleaner structure
    return res.status(404).json({
      success: false,
      error: { 
        message: 'Post not found' 
      }
    });
  }

  res.status(200).json({
    success: true,
    data: post
  });
};

module.exports = {
  getAllPosts,
  getPostById
};