const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Top 5 Trends in Home Construction (2024)",
      excerpt:
        "Explore the latest materials and designs dominating the industry.",
      date: "May 15, 2024",
    },
    {
      id: 2,
      title: "How to Choose the Right Contractor",
      excerpt: "Key questions to ask before hiring a construction firm.",
      date: "April 28, 2024",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <span className="text-sm text-gray-500">{post.date}</span>
              <h3 className="text-xl font-bold mt-2 mb-3">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <button className="text-primary font-medium hover:underline">
                Read More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
