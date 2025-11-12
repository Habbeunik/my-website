import { H3 } from "./Typography.jsx";
import BlogItem from "./BlogItem.jsx";

export default function Blog() {
  const publications = [
    {
      title: "Vector Embeddings Explained: How Machines Understand Meaning",
      description:
        "A deep dive into how vector embeddings enable machines to understand and process human language, exploring the mathematical foundations that power modern AI systems.",
      tags: [
        "Machine Learning",
        "Natural Language Processing",
        "Vector Embeddings",
      ],
      url: "https://medium.com/@Habbeyunik/vector-embeddings-explained-how-machines-understand-meaning-4ce1c887203a",
      date: "Dec 2024",
      readTime: "10 min read",
    },
    {
      title:
        "Can AI Learn Like Humans? Exploring World Models in Artificial Intelligence",
      description:
        "Examining how AI systems build understanding through world models — and what this means for the future of intelligent systems and human-AI collaboration.",
      tags: ["Artificial Intelligence", "Machine Learning", "World Models"],
      url: "https://medium.com/@Habbey unik/can-ai-learn-like-humans-exploring-world-models-in-artificial-intelligence-d9b6483d541e",
      date: "Dec 2024",
      readTime: "12 min read",
    },
    {
      title: "Writing a Custom REST API Hook",
      description:
        "A practical guide to building reusable API hooks in React. Covers patterns for error handling, loading states, and caching that make API integration cleaner and more maintainable.",
      tags: ["React", "Custom Hooks", "REST API"],
      url: "https://medium.com/@Habbeyunik/writing-a-custom-rest-api-hook-e31a3218f512",
      date: "Dec 2024",
      readTime: "8 min read",
    },
  ];

  return (
    <section
      id="blog"
      className="w-full h-full flex flex-col fade-in gap-8 md:gap-12 px-4 md:px-12 py-10 md:py-20"
    >
      <div className="text-center max-w-3xl mx-auto mb-8">
        <div className="space-y-4">
          <H3 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Blog
          </H3>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full mx-auto"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto w-full">
        <div className="flex flex-col gap-8">
          {publications.map((post, index) => (
            <BlogItem
              key={index}
              title={post.title}
              description={post.description}
              tags={post.tags}
              url={post.url}
              date={post.date}
              readTime={post.readTime}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
