// This function will be our handler for "GET /api/v1/posts"
const getAllPosts = (req, res) => {
  const { sortBy } = req.query;

  if (sortBy === 'date') {
    console.log('Sorting posts by date...');
  }

  const posts = [
    { id: 1, title: 'Controller Post 1' },
    { id: 2, title: 'Controller Post 2' }
  ];

  res.status(200).json({
    success: true,
    data: {
      posts: posts
    }
  });
};

module.exports = {
  getAllPosts,
};
