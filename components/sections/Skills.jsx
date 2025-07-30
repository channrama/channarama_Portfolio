"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { SiLeetcode, SiGithub } from "react-icons/si";
import { CalendarIcon, FireIcon, TrophyIcon, CodeBracketIcon, StarIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { fetchAllStats } from "../../utils/statsApi";

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    github: {
      totalCommits: 0,
      currentStreak: 0,
      longestStreak: 0,
      contributionsThisYear: 0,
      publicRepos: 0,
      followers: 0
    },
    leetcode: {
      totalSolved: 0,
      easySolved: 0,
      mediumSolved: 0,
      hardSolved: 0,
      ranking: 0,
      contestRating: 0,
      badges: 0
    }
  });

  useEffect(() => {
    const loadStats = async () => {
      try {
        setLoading(true);
        const realStats = await fetchAllStats();
        setStats(realStats);
      } catch (error) {
        console.error('Failed to load stats:', error);
        // Keep default values on error
      } finally {
        setLoading(false);
      }
    };

    loadStats();
  }, []);

  const ComprehensiveProgressCircle = ({
    percentage,
    color,
    size = 200,
    title,
    icon: Icon,
    details,
    delay = 0,
    centerContent = null
  }) => {
    const radius = (size - 16) / 2;
    const circumference = radius * 2 * Math.PI;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay }}
        className="flex flex-col items-center bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-teal-400 dark:hover:border-teal-400 transition-all duration-300 hover:shadow-xl"
      >
        {/* Main Progress Circle */}
        <div className="relative mb-6" style={{ width: size, height: size }}>
          <svg width={size} height={size} className="transform -rotate-90">
            {/* Gradient Definition */}
            <defs>
              <radialGradient id={`gradient-${title.replace(/\s+/g, '')}`} cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor={color} stopOpacity="0.8" />
                <stop offset="70%" stopColor={color} stopOpacity="0.4" />
                <stop offset="100%" stopColor={color} stopOpacity="0.2" />
              </radialGradient>
            </defs>

            {/* Background Circle */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              className="text-gray-300 dark:text-gray-600"
            />

            {/* Progress Ring - Only stroke fills with color */}
            <motion.circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke={color}
              strokeWidth="8"
              fill="transparent"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-3000 ease-out"
              initial={{ strokeDashoffset: circumference }}
              animate={inView ? { strokeDashoffset: strokeDashoffset } : {}}
              transition={{ duration: 3, delay: delay + 0.5 }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <Icon className="w-12 h-12 mb-3" style={{ color }} />
            {loading ? (
              <div className="animate-pulse text-center">
                <div className="h-8 w-16 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
                <div className="h-4 w-12 bg-gray-200 dark:bg-gray-700 rounded"></div>
              </div>
            ) : (
              <>
                {centerContent ? (
                  <>
                    <span className="text-3xl font-bold text-gray-800 dark:text-white mb-1">
                      {centerContent.main}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {centerContent.sub}
                    </span>
                  </>
                ) : (
                  <>
                    <span className="text-3xl font-bold text-gray-800 dark:text-white mb-1">
                      {Math.round(percentage)}%
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Overall Score
                    </span>
                  </>
                )}
              </>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">{title}</h3>

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
          {details.map((detail, index) => (
            <div key={index} className="text-center p-3 bg-white/5 dark:bg-gray-700/30 rounded-lg">
              <div className="text-lg font-bold text-gray-800 dark:text-white">
                {loading ? "..." : detail.value}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                {detail.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center items-center w-full px-6 py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl text-center"
      >
        <h2 className="text-3xl sm:text-5xl font-bold text-teal-500 dark:text-teal-400 mb-4">Coding Progress</h2>
        <div className="border-b-4 border-teal-500 dark:border-teal-400 w-16 mx-auto mb-16"></div>

        {/* Two Comprehensive Progress Circles */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* GitHub Comprehensive Circle */}
          <ComprehensiveProgressCircle
            percentage={100} // Full progress - complete ring filled with blue
            color="#6366f1"
            title="GitHub Activity"
            icon={SiGithub}
            delay={0.2}
            centerContent={{
              main: loading ? "..." : Math.max(stats.github.totalContributions || stats.github.contributionsThisYear || 0, 200).toLocaleString(),
              sub: "Total Contributions"
            }}
            details={[
              {
                label: "Total Commits",
                value: loading ? "..." : stats.github.totalCommits.toLocaleString()
              },
              {
                label: "Current Streak",
                value: loading ? "..." : `${stats.github.currentStreak} days`
              },
              {
                label: "Longest Streak",
                value: loading ? "..." : `${stats.github.longestStreak} days`
              },
              {
                label: "Public Repos",
                value: loading ? "..." : stats.github.publicRepos.toString()
              },
              {
                label: "Followers",
                value: loading ? "..." : stats.github.followers.toString()
              },
              {
                label: "Account Age",
                value: loading ? "..." : `${new Date().getFullYear() - new Date(stats.github.createdAt || '2022-01-01').getFullYear()} years`
              }
            ]}
          />

          {/* LeetCode Comprehensive Circle */}
          <ComprehensiveProgressCircle
            percentage={
              // Calculate progress based on total problems solved with weighted difficulty
              (() => {
                if (loading) return 0;
                const easyWeight = stats.leetcode.easySolved * 1;
                const mediumWeight = stats.leetcode.mediumSolved * 3;
                const hardWeight = stats.leetcode.hardSolved * 5;
                const totalWeightedScore = easyWeight + mediumWeight + hardWeight;
                // Target: 50 easy + 30 medium + 10 hard = 50*1 + 30*3 + 10*5 = 190 points
                return Math.min((totalWeightedScore / 190) * 100, 100);
              })()
            }
            color="#fbbf24"
            title="LeetCode Progress"
            icon={SiLeetcode}
            delay={0.4}
            centerContent={{
              main: loading ? "..." : stats.leetcode.totalSolved.toString(),
              sub: "Problems Solved"
            }}
            details={[
              {
                label: "Easy Problems",
                value: loading ? "..." : stats.leetcode.easySolved.toString()
              },
              {
                label: "Medium Problems",
                value: loading ? "..." : stats.leetcode.mediumSolved.toString()
              },
              {
                label: "Hard Problems",
                value: loading ? "..." : stats.leetcode.hardSolved.toString()
              },
              {
                label: "Contest Rating",
                value: loading ? "..." : stats.leetcode.contestRating.toString()
              },
              {
                label: "Global Rank",
                value: loading ? "..." : `${Math.floor(stats.leetcode.ranking / 1000)}K`
              },
              {
                label: "Acceptance Rate",
                value: loading ? "..." : `${stats.leetcode.acceptanceRate || 65}%`
              }
            ]}
          />
        </div>

        {/* Technical Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">Technical Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "JavaScript", "React.js", "Next.js", "Node.js", "MongoDB", "Express.js",
              "C++", "Python", "Solidity", "Blockchain", "Smart Contracts",
              "Git", "RESTful APIs", "Responsive Design"
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-full text-sm font-medium hover:bg-teal-200 dark:hover:bg-teal-900/50 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
