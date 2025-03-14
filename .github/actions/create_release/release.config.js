const config = {
    branches: ["main","hml","dev"],
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        ["@semantic-release/git", {
            "assets": ["dist/*.js", "dist/*.js.map"],
            "message": "chore(release): ${nextRelease.version}"
        }],
        "@semantic-release/github"
    ]
};

MediaSourceHandle.exports = config;