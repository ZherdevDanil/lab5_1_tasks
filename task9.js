function countTags(tweets) {
    const tagCounts = {};

    for (let i = 0; i < tweets.length; i++) {
        const tags = tweets[i].tags;
        for (let j = 0; j < tags.length; j++) {
            const tag = tags[j];
            if (tagCounts[tag]) {
                tagCounts[tag] += 1;
            } else {
                tagCounts[tag] = 1;
            }
        }
    }

    return tagCounts;
}

const tweets = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const tagCounts = countTags(tweets);
console.log(tagCounts);
