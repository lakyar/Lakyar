import React, { useState, useEffect, useRef } from "react";
import {
  FaGithub,
  FaStar,
  FaCodeBranch,
  FaUsers,
  FaSearch,
  FaSortAmountDown,
  FaSortAmountUp,
  FaCopy,
  FaExternalLinkAlt,
} from "react-icons/fa";

const GitHubLeaderboard = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("followers"); // 'followers' or 'contributions'
  const [sortOrder, setSortOrder] = useState("desc");
  const sectionRef = useRef(null);

  // Fetch users from Myanmar
  useEffect(() => {
    const fetchMyanmarUsers = async () => {
      try {
        setLoading(true);

        // GitHub API search for users in Myanmar
        const response = await fetch(
          "https://api.github.com/search/users?q=location:myanmar&per_page=100",
        );

        if (!response.ok) throw new Error("Failed to fetch users");

        const data = await response.json();
        const basicUsers = data.items || [];

        // Fetch detailed info for each user
        const detailedUsers = await Promise.all(
          basicUsers.slice(0, 100).map(async (user) => {
            try {
              const userRes = await fetch(
                `https://api.github.com/users/${user.login}`,
              );
              if (!userRes.ok) return user;

              const userData = await userRes.json();

              // Get contributions (simplified - using public repos as proxy)
              const contributions = userData.public_repos || 0;

              return {
                ...user,
                ...userData,
                contributions: contributions * 10, // Rough estimate
              };
            } catch (err) {
              return user;
            }
          }),
        );

        // Process the data according to your pipeline
        const processed = detailedUsers
          .filter((user) => user.location?.toLowerCase().includes("myanmar"))
          .sort((a, b) => (b.followers || 0) - (a.followers || 0))
          .slice(0, 100)
          .sort((a, b) => (b.contributions || 0) - (a.contributions || 0))
          .slice(0, 100);

        setUsers(processed);
        setFilteredUsers(processed);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMyanmarUsers();
  }, []);

  // Handle search
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredUsers(users);
    } else {
      const filtered = users.filter(
        (user) =>
          user.login?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.name?.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      setFilteredUsers(filtered);
    }
  }, [searchQuery, users]);

  // Handle sort
  const handleSort = (type) => {
    if (sortBy === type) {
      setSortOrder(sortOrder === "desc" ? "asc" : "desc");
    } else {
      setSortBy(type);
      setSortOrder("desc");
    }

    const sorted = [...filteredUsers].sort((a, b) => {
      const aVal = a[type] || 0;
      const bVal = b[type] || 0;
      return sortOrder === "desc" ? bVal - aVal : aVal - bVal;
    });

    setFilteredUsers(sorted);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  if (loading) {
    return (
      <div className="flex w-full items-center justify-center py-20">
        <div className="text-center">
          <div className="border-primary mx-auto h-12 w-12 animate-spin rounded-full border-b-2"></div>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400">
            Fetching top GitHub users from Myanmar...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex w-full items-center justify-center py-20">
        <div className="text-center">
          <p className="mb-4 text-red-500">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-primary hover:bg-primary/80 rounded-md px-6 py-2 text-black transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <section ref={sectionRef} className="w-full px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h2 className="flex items-center gap-3 text-2xl font-bold text-neutral-900 md:text-3xl lg:text-4xl dark:text-white">
            <FaGithub className="text-primary" />
            GitHub Myanmar <span className="text-primary">Leaderboard</span>
          </h2>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            Top {filteredUsers.length} developers from Myanmar
          </p>
        </div>

        {/* Search and Sort Bar */}
        <div className="mb-6 flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <FaSearch className="text-primary absolute top-1/2 left-3 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by username or name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border-primary/30 focus:border-primary w-full rounded-md border bg-white py-2 pr-4 pl-10 text-sm text-neutral-900 focus:outline-none dark:bg-neutral-900 dark:text-white"
            />
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => handleSort("followers")}
              className={`flex items-center gap-2 rounded-md border px-4 py-2 text-sm transition-colors ${
                sortBy === "followers"
                  ? "bg-primary border-primary text-black"
                  : "border-primary/30 hover:border-primary bg-white dark:bg-neutral-900"
              }`}
            >
              <FaUsers />
              Followers
              {sortBy === "followers" &&
                (sortOrder === "desc" ? (
                  <FaSortAmountDown />
                ) : (
                  <FaSortAmountUp />
                ))}
            </button>

            <button
              onClick={() => handleSort("contributions")}
              className={`flex items-center gap-2 rounded-md border px-4 py-2 text-sm transition-colors ${
                sortBy === "contributions"
                  ? "bg-primary border-primary text-black"
                  : "border-primary/30 hover:border-primary bg-white dark:bg-neutral-900"
              }`}
            >
              <FaStar />
              Contributions
              {sortBy === "contributions" &&
                (sortOrder === "desc" ? (
                  <FaSortAmountDown />
                ) : (
                  <FaSortAmountUp />
                ))}
            </button>
          </div>
        </div>

        {/* Leaderboard Grid */}
        <div className="grid grid-cols-1 gap-4">
          {filteredUsers.map((user, index) => (
            <div
              key={user.id}
              className="group border-primary/30 rounded-md border bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:bg-neutral-900"
            >
              <div className="flex items-center gap-4">
                {/* Rank */}
                <div className="w-12 text-center">
                  <span
                    className={`text-2xl font-bold ${
                      index < 3 ? "text-primary" : "text-neutral-500"
                    }`}
                  >
                    #{index + 1}
                  </span>
                </div>

                {/* Avatar */}
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="border-primary h-16 w-16 rounded-full border-2"
                />

                {/* Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-neutral-900 dark:text-white">
                      {user.name || user.login}
                    </h3>
                    {index < 3 && <span className="text-xl">🏆</span>}
                  </div>

                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    @{user.login}
                  </p>

                  <div className="mt-2 flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1">
                      <FaUsers className="text-primary" />
                      {user.followers?.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaStar className="text-primary" />
                      {user.contributions || 0}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaCodeBranch className="text-primary" />
                      {user.public_repos || 0}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button
                    onClick={() => copyToClipboard(user.login)}
                    className="hover:text-primary p-2 text-neutral-600 transition-colors"
                    title="Copy username"
                  >
                    <FaCopy />
                  </button>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary p-2 text-neutral-600 transition-colors"
                    title="View profile"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>

              {/* Bio (if available) */}
              {user.bio && (
                <p className="border-primary/20 mt-3 border-t pt-3 pl-16 text-sm text-neutral-600 dark:text-neutral-400">
                  {user.bio}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredUsers.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-neutral-600 dark:text-neutral-400">
              No users found matching "{searchQuery}"
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default GitHubLeaderboard;
