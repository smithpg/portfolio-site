const fs = require('fs');
const path = require('path');

const postTitle = process.argv[2],
  folderName = formatDateAsHyphenSeperatedNumerals(new Date()),
  folderPath = path.resolve('content', 'posts', folderName),
  frontmatter = `---

title: ${postTitle}
author: Patrick Smith
date: '${new Date().toISOString()}'

---`;

fs.existsSync(folderPath) || fs.mkdirSync(folderPath);
fs.writeFileSync(path.join(folderPath, `${postTitle}.md`), frontmatter);

// Helper functions
function padNumeral(n) {
  if (n > 9) {
    return String(n);
  } else {
    return '0' + String(n);
  }
}

function formatDateAsHyphenSeperatedNumerals(date) {
  const month = padNumeral(date.getMonth() + 1),
    numeralDate = padNumeral(date.getDate()),
    year = date.getFullYear();

  return `${month}-${numeralDate}-${year}`;
}
