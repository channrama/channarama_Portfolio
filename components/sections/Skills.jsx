"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { SiLeetcode, SiGithub } from "react-icons/si";
import { CalendarIcon, FireIcon, TrophyIcon, CodeBracketIcon, StarIcon, UserGroupIcon } from "@heroicons/react/24/outline";

// Import your updated statsApi
import { fetchAllStats } from "../../utils/statsApi";

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [stats, setStats] = useState({
    github: {
      totalCommits: 0,
      currentStreak: 0,
      longestStreak: 0,
      contributionsThisYear: 0,
      totalContributions: 0,
      publicRepos: 0,
      followers: 0,
      accountAgeYears: 0
    },
    leetcode: {
      totalSolved: 0,
      easySolved: 0,
      mediumSolved: 0,
      hardSolved: 0,
      ranking: 0,
      contestRating: 0,
      badges: 0,
      acceptanceRate: 0
    }
  });

  useEffect(() => {
    const loadStats = async () => {
      try {
        setLoading(true);
        setError(null);
        console.log('Starting to fetch real-time stats...');
        
        const realStats = await fetchAllStats();
        console.log('Received stats:', realStats);
        
        setStats(realStats);
        setLastUpdated(new Date());
        
        // Show success message in console
        console.log('✅ Successfully loaded real-time stats!', {
          githubCommits: realStats.github.totalCommits,
          githubRepos: realStats.github.publicRepos,
          leetcodeSolved: realStats.leetcode.totalSolved
        });
        
      } catch (error) {
        console.error('❌ Failed to load stats:', error);
        setError(error.message);
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

            {/* Progress Ring */}
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
            ) : error ? (
              <div className="text-center">
                <span className="text-red-400 text-sm">Error</span>
                <div className="text-xs text-gray-500">Check console</div>
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
                      Progress
                    </span>
                  </>
                )}
              </>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-6">{title}</h3>

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
          {details.map((detail, index) => (
            <div key={index} className="text-center p-3 bg-gray-700/30 rounded-lg">
              <div className="text-lg font-bold text-white">
                {loading ? (
                  <div className="animate-pulse h-6 bg-gray-500 rounded"></div>
                ) : error ? (
                  <span className="text-red-400">--</span>
                ) : (
                  detail.value
                )}
              </div>
              <div className="text-xs text-gray-400">
                {detail.label}
              </div>
            </div>
          ))}
        </div>
        
       
      </motion.div>
    );
  };

  // Calculate GitHub progress based on activity level
  const calculateGitHubProgress = () => {
    if (loading || error) return 0;
    
    const {
      totalCommits,
      publicRepos,
      contributionsThisYear,
      accountAgeYears
    } = stats.github;
    
    // Create a weighted score based on various factors
    const commitScore = Math.min((totalCommits / 500) * 40, 40); // Max 40 points for commits
    const repoScore = Math.min((publicRepos / 20) * 30, 30); // Max 30 points for repos
    const activityScore = Math.min((contributionsThisYear / 200) * 20, 20); // Max 20 points for yearly activity
    const consistencyScore = accountAgeYears > 0 ? Math.min((totalCommits / accountAgeYears / 50) * 10, 10) : 0; // Max 10 points for consistency
    
    return Math.min(commitScore + repoScore + activityScore + consistencyScore, 100);
  };

  // Calculate LeetCode progress
  const calculateLeetCodeProgress = () => {
    if (loading || error) return 0;
    
    const { easySolved, mediumSolved, hardSolved } = stats.leetcode;
    
    // Weighted scoring system for LeetCode
    const easyWeight = easySolved * 1;
    const mediumWeight = mediumSolved * 3;
    const hardWeight = hardSolved * 5;
    const totalWeightedScore = easyWeight + mediumWeight + hardWeight;
    
    // Target: 50 easy + 30 medium + 10 hard = 50*1 + 30*3 + 10*5 = 190 points
    return Math.min((totalWeightedScore / 190) * 100, 100);
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
        <h2 className="text-3xl sm:text-5xl font-bold text-teal-400 mb-4">Coding Progress</h2>
        <div className="border-b-4 border-teal-400 w-16 mx-auto mb-8"></div>

      
        {/* Two Comprehensive Progress Circles */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* GitHub Comprehensive Circle */}
          <ComprehensiveProgressCircle
            percentage={100} // Always show full circle like LeetCode
            color="#6366f1"
            title="GitHub Activity"
            icon={SiGithub}
            delay={0.2}
            centerContent={{
              main: loading ? "..." : error ? "Error" : stats.github.totalContributions?.toLocaleString() || "0",
              sub: "Total Contributions"
            }}
            details={[
              {
                label: "Total Commits",
                value: loading ? "..." : error ? "--" : stats.github.totalCommits?.toLocaleString() || "0"
              },
              {
                label: "Current Streak",
                value: loading ? "..." : error ? "--" : `${stats.github.currentStreak || 4} days`
              },
              {
                label: "Longest Streak",
                value: loading ? "..." : error ? "--" : `${stats.github.longestStreak || 0} days`
              },
              {
                label: "Public Repos",
                value: loading ? "..." : error ? "--" : (stats.github.publicRepos || 0).toString()
              },
              {
                label: "Followers",
                value: loading ? "..." : error ? "--" : (stats.github.followers || 0).toString()
              },
              {
                label: "Account Age",
                value: loading ? "..." : error ? "--" : `${stats.github.accountAgeYears || 0} years`
              }
            ]}
          />

          {/* LeetCode Comprehensive Circle */}
          <ComprehensiveProgressCircle
            percentage={calculateLeetCodeProgress()}
            color="#fbbf24"
            title="LeetCode Progress"
            icon={SiLeetcode}
            delay={0.4}
            centerContent={{
              main: loading ? "..." : error ? "Error" : (stats.leetcode.totalSolved || 0).toString(),
              sub: "Problems Solved"
            }}
            details={[
              {
                label: "Easy Problems",
                value: loading ? "..." : error ? "--" : (stats.leetcode.easySolved || 0).toString()
              },
              {
                label: "Medium Problems",
                value: loading ? "..." : error ? "--" : (stats.leetcode.mediumSolved || 0).toString()
              },
              {
                label: "Hard Problems",
                value: loading ? "..." : error ? "--" : (stats.leetcode.hardSolved || 0).toString()
              },
              {
                label: "Contest Rating",
                value: loading ? "..." : error ? "--" : (stats.leetcode.contestRating || 0).toString()
              },
              {
                label: "Global Rank",
                value: loading ? "..." : error ? "--" : stats.leetcode.ranking ? `${Math.floor(stats.leetcode.ranking / 1000)}K` : "N/A"
              },
              {
                label: "Acceptance Rate",
                value: loading ? "..." : error ? "--" : `${stats.leetcode.acceptanceRate || 0}%`
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
          <h3 className="text-xl font-semibold text-white mb-6">Technical Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "JavaScript", "React.js", "Next.js", "Node.js", "MongoDB", "Express.js",
              "C++", "Python", "Solidity", "Blockchain", "Smart Contracts",
              "Git", "RESTful APIs", "Responsive Design"
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-teal-900/30 text-teal-300 rounded-full text-sm font-medium hover:bg-teal-900/50 transition-colors"
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